<template>
  <canvas
    ref="canvasEl"
    :style="{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
    }"
  />
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import * as THREE from 'three';

const props = defineProps({
  mouse: {
    type: Object,
    required: true,
  },
});

const canvasEl = ref(null);

let renderer;
let scene;
let camera;
let animId;
let onResize;

onMounted(() => {
  const canvas = canvasEl.value;
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.z = 14;

  const ambient = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambient);
  const key = new THREE.DirectionalLight(0xffffff, 1.25);
  key.position.set(6, 10, 8);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xe6c200, 0.8);
  rim.position.set(-10, 4, -6);
  scene.add(rim);

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(60, 60),
    new THREE.MeshStandardMaterial({ color: 0x0d1117, transparent: true, opacity: 0.25, roughness: 1 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -5.5;
  scene.add(ground);

  const palette = [0xe6c200, 0xe84393, 0x00d67e, 0x00a8cc, 0xe17055, 0xa29bfe];

  const bubbles = [];
  for (let i = 0; i < 28; i++) {
    const size = 0.25 + Math.random() * 1.1;
    const geo = new THREE.IcosahedronGeometry(size, 5);
    const color = palette[Math.floor(Math.random() * palette.length)];
    const wire = true;
    const mat = new THREE.MeshBasicMaterial({
      color,
      wireframe: wire,
      transparent: true,
      reflectivity: 1,
      opacity: wire ? 0.35 : 0.18,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set((Math.random() - 0.5) * 26, (Math.random() - 0.5) * 16, (Math.random() - 0.5) * 8 - 2);
    mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    scene.add(mesh);
    bubbles.push({
      mesh,
      bobOffset: Math.random() * Math.PI * 2,
      bobSpeed: 0.3 + Math.random() * 0.5,
      bobAmt: 0.5 + Math.random() * 1.2,
      rotX: (Math.random() - 0.5) * 0.012,
      rotY: (Math.random() - 0.5) * 0.016,
      baseY: mesh.position.y,
    });
  }

  const cGeo = new THREE.IcosahedronGeometry(3.5, 2);
  const cMat = new THREE.MeshBasicMaterial({ color: 0xe6c200, wireframe: true, transparent: true, opacity: 0.03 });
  const cMesh = new THREE.Mesh(cGeo, cMat);
  scene.add(cMesh);

  const N = 700;
  const pp = new Float32Array(N * 3);
  const pc = new Float32Array(N * 3);
  const rgb = [
    [0.9, 0.76, 0],
    [0.91, 0.26, 0.58],
    [0, 0.84, 0.49],
    [0, 0.66, 0.8],
    [0.88, 0.44, 0.33],
    [0.64, 0.61, 1],
  ];
  for (let i = 0; i < N; i++) {
    pp[i * 3] = (Math.random() - 0.5) * 40;
    pp[i * 3 + 1] = (Math.random() - 0.5) * 25;
    pp[i * 3 + 2] = (Math.random() - 0.5) * 12 - 4;
    const c = rgb[Math.floor(Math.random() * rgb.length)];
    pc[i * 3] = c[0];
    pc[i * 3 + 1] = c[1];
    pc[i * 3 + 2] = c[2];
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pp, 3));
  pGeo.setAttribute('color', new THREE.BufferAttribute(pc, 3));
  scene.add(
    new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({ size: 0.06, vertexColors: true, transparent: true, opacity: 0.4 })
    )
  );

  const lines = [];
  for (let i = 0; i < 12; i++) {
    const a = bubbles[Math.floor(Math.random() * bubbles.length)];
    const b = bubbles[Math.floor(Math.random() * bubbles.length)];
    if (a === b) continue;
    const geo = new THREE.BufferGeometry().setFromPoints([a.mesh.position.clone(), b.mesh.position.clone()]);
    const mat = new THREE.LineBasicMaterial({ color: 0xe6c200, transparent: true, opacity: 0.04 });
    const line = new THREE.Line(geo, mat);
    scene.add(line);
    lines.push({ line, a, b });
  }

  let t = 0;
  const lerp = { x: 0, y: 0 };

  const animate = () => {
    animId = requestAnimationFrame(animate);
    t += 0.008;

    lerp.x += ((props.mouse?.x || 0) - lerp.x) * 0.04;
    lerp.y += ((props.mouse?.y || 0) - lerp.y) * 0.04;

    bubbles.forEach((b) => {
      b.mesh.position.y = b.baseY + Math.sin(t * b.bobSpeed + b.bobOffset) * b.bobAmt;
      b.mesh.rotation.x += b.rotX;
      b.mesh.rotation.y += b.rotY;
    });

    cMesh.rotation.y = t * 0.07;
    cMesh.rotation.x = t * 0.04;

    lines.forEach(({ line, a, b }) => {
      const p = line.geometry.attributes.position.array;
      p[0] = a.mesh.position.x;
      p[1] = a.mesh.position.y;
      p[2] = a.mesh.position.z;
      p[3] = b.mesh.position.x;
      p[4] = b.mesh.position.y;
      p[5] = b.mesh.position.z;
      line.geometry.attributes.position.needsUpdate = true;
    });

    camera.position.x += (lerp.x * 1.5 - camera.position.x) * 0.03;
    camera.position.y += (lerp.y * 0.8 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  };
  animate();

  onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
  if (animId) cancelAnimationFrame(animId);
  if (onResize) window.removeEventListener('resize', onResize);
  if (renderer) renderer.dispose();
});
</script>
