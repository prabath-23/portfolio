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
  renderer.toneMappingExposure = 1.3;

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x000000, 0.016);

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.z = 16;

  // Lighting
  const ambient = new THREE.AmbientLight(0x111133, 2.0);
  scene.add(ambient);

  const key = new THREE.DirectionalLight(0xffeedd, 2.2);
  key.position.set(8, 14, 10);
  scene.add(key);

  const rim = new THREE.DirectionalLight(0xe6c200, 1.4);
  rim.position.set(-12, 5, -8);
  scene.add(rim);

  const fill = new THREE.DirectionalLight(0x00a8cc, 0.8);
  fill.position.set(0, -8, 6);
  scene.add(fill);

  const palette = [0xe6c200, 0xe84393, 0x00d67e, 0x00a8cc, 0xe17055, 0xa29bfe];

  // Dynamic point lights that orbit the scene
  const pointLights = palette.slice(0, 4).map((color, i) => {
    const light = new THREE.PointLight(color, 4.0, 22);
    light.position.set(
      Math.cos(i * Math.PI * 0.5) * 9,
      Math.sin(i * 1.3) * 5,
      Math.sin(i * Math.PI * 0.5) * 7 - 2,
    );
    scene.add(light);
    return { light, baseAngle: i * Math.PI * 0.5 };
  });

  // Central torus knot — focal 3D object
  const torusKnotGeo = new THREE.TorusKnotGeometry(1.9, 0.5, 160, 18);
  const torusKnotMat = new THREE.MeshPhongMaterial({
    color: 0xe6c200,
    emissive: 0x4a3a00,
    specular: 0xffffff,
    shininess: 60,
    wireframe: true,
    transparent: true,
    opacity: 0.16,
  });
  const torusKnot = new THREE.Mesh(torusKnotGeo, torusKnotMat);
  torusKnot.position.set(0, 0, -2);
  scene.add(torusKnot);

  // Large outer ring
  const outerRingGeo = new THREE.TorusGeometry(4.5, 0.06, 8, 80);
  const outerRingMat = new THREE.MeshBasicMaterial({
    color: 0x00a8cc,
    transparent: true,
    opacity: 0.10,
  });
  const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
  outerRing.rotation.x = Math.PI * 0.3;
  scene.add(outerRing);

  // Floating geometric objects
  const objects = [];

  const geoFactories = [
    (s) => new THREE.IcosahedronGeometry(s, 1),
    (s) => new THREE.OctahedronGeometry(s),
    (s) => new THREE.DodecahedronGeometry(s),
    (s) => new THREE.TetrahedronGeometry(s * 1.1),
  ];

  for (let i = 0; i < 36; i++) {
    const sz = 0.25 + Math.random() * 0.9;
    const factory = geoFactories[Math.floor(Math.random() * geoFactories.length)];
    const geo = factory(sz);
    const color = palette[Math.floor(Math.random() * palette.length)];
    const isWire = Math.random() > 0.4;

    const mat = new THREE.MeshPhongMaterial({
      color,
      emissive: color,
      emissiveIntensity: isWire ? 0.0 : 0.06,
      specular: 0xffffff,
      shininess: isWire ? 0 : 100,
      wireframe: isWire,
      transparent: true,
      opacity: isWire ? 0.30 : 0.13,
    });

    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 12 - 2,
    );
    mesh.rotation.set(
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
    );
    scene.add(mesh);
    objects.push({
      mesh,
      bobOffset: Math.random() * Math.PI * 2,
      bobSpeed: 0.2 + Math.random() * 0.5,
      bobAmt: 0.4 + Math.random() * 1.1,
      rotX: (Math.random() - 0.5) * 0.011,
      rotY: (Math.random() - 0.5) * 0.015,
      rotZ: (Math.random() - 0.5) * 0.007,
      baseY: mesh.position.y,
    });
  }

  // Floating glowing rings
  for (let i = 0; i < 8; i++) {
    const color = palette[Math.floor(Math.random() * palette.length)];
    const ringGeo = new THREE.TorusGeometry(0.5 + Math.random() * 1.0, 0.035, 8, 40);
    const ringMat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.22 + Math.random() * 0.15,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.set(
      (Math.random() - 0.5) * 24,
      (Math.random() - 0.5) * 16,
      (Math.random() - 0.5) * 10 - 3,
    );
    ring.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    scene.add(ring);
    objects.push({
      mesh: ring,
      bobOffset: Math.random() * Math.PI * 2,
      bobSpeed: 0.12 + Math.random() * 0.28,
      bobAmt: 0.3 + Math.random() * 0.9,
      rotX: (Math.random() - 0.5) * 0.009,
      rotY: (Math.random() - 0.5) * 0.013,
      rotZ: (Math.random() - 0.5) * 0.006,
      baseY: ring.position.y,
    });
  }

  // Enhanced particle system with drift
  const N = 1200;
  const pp = new Float32Array(N * 3);
  const pc = new Float32Array(N * 3);
  const pv = new Float32Array(N * 3);
  const rgb = [
    [0.9, 0.76, 0],
    [0.91, 0.26, 0.58],
    [0, 0.84, 0.49],
    [0, 0.66, 0.8],
    [0.88, 0.44, 0.33],
    [0.64, 0.61, 1],
  ];
  for (let i = 0; i < N; i++) {
    pp[i * 3] = (Math.random() - 0.5) * 52;
    pp[i * 3 + 1] = (Math.random() - 0.5) * 32;
    pp[i * 3 + 2] = (Math.random() - 0.5) * 18 - 4;
    const c = rgb[Math.floor(Math.random() * rgb.length)];
    pc[i * 3] = c[0];
    pc[i * 3 + 1] = c[1];
    pc[i * 3 + 2] = c[2];
    pv[i * 3] = (Math.random() - 0.5) * 0.0018;
    pv[i * 3 + 1] = (Math.random() - 0.5) * 0.0018 + 0.0004;
    pv[i * 3 + 2] = (Math.random() - 0.5) * 0.001;
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pp, 3));
  pGeo.setAttribute('color', new THREE.BufferAttribute(pc, 3));
  const particleMesh = new THREE.Points(
    pGeo,
    new THREE.PointsMaterial({ size: 0.058, vertexColors: true, transparent: true, opacity: 0.42 }),
  );
  scene.add(particleMesh);

  // Dynamic connection lines between objects
  const lines = [];
  for (let i = 0; i < 22; i++) {
    const a = objects[Math.floor(Math.random() * objects.length)];
    const b = objects[Math.floor(Math.random() * objects.length)];
    if (a === b) continue;
    const color = palette[Math.floor(Math.random() * palette.length)];
    const geo = new THREE.BufferGeometry().setFromPoints([
      a.mesh.position.clone(),
      b.mesh.position.clone(),
    ]);
    const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.055 });
    const line = new THREE.Line(geo, mat);
    scene.add(line);
    lines.push({ line, a, b });
  }

  let t = 0;
  const lerp = { x: 0, y: 0 };

  const animate = () => {
    animId = requestAnimationFrame(animate);
    t += 0.007;

    lerp.x += ((props.mouse?.x || 0) - lerp.x) * 0.032;
    lerp.y += ((props.mouse?.y || 0) - lerp.y) * 0.032;

    // Animate all objects
    objects.forEach((b) => {
      b.mesh.position.y = b.baseY + Math.sin(t * b.bobSpeed + b.bobOffset) * b.bobAmt;
      b.mesh.rotation.x += b.rotX;
      b.mesh.rotation.y += b.rotY;
      b.mesh.rotation.z += b.rotZ;
    });

    // Rotate central torus knot
    torusKnot.rotation.x = t * 0.055;
    torusKnot.rotation.y = t * 0.085;
    torusKnot.rotation.z = t * 0.038;

    // Rotate outer ring
    outerRing.rotation.z = t * 0.025;
    outerRing.rotation.y = t * 0.015;

    // Orbit point lights
    pointLights.forEach(({ light, baseAngle }, i) => {
      const angle = baseAngle + t * (0.16 + i * 0.04);
      const r = 10 + Math.sin(t * 0.28 + i) * 3.5;
      light.position.x = Math.cos(angle) * r;
      light.position.z = Math.sin(angle) * r * 0.6 - 2;
      light.position.y = Math.sin(t * 0.38 + i * 1.9) * 6;
    });

    // Drift particles
    const positions = pGeo.attributes.position.array;
    for (let i = 0; i < N; i++) {
      positions[i * 3] += pv[i * 3];
      positions[i * 3 + 1] += pv[i * 3 + 1];
      positions[i * 3 + 2] += pv[i * 3 + 2];
      if (positions[i * 3] > 26) positions[i * 3] = -26;
      if (positions[i * 3] < -26) positions[i * 3] = 26;
      if (positions[i * 3 + 1] > 16) positions[i * 3 + 1] = -16;
      if (positions[i * 3 + 1] < -16) positions[i * 3 + 1] = 16;
    }
    pGeo.attributes.position.needsUpdate = true;

    // Update dynamic lines
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

    // Camera: mouse parallax + slow auto-orbit
    const camX = lerp.x * 1.9 + Math.sin(t * 0.10) * 0.55;
    const camY = lerp.y * 1.1 + Math.cos(t * 0.08) * 0.35;
    camera.position.x += (camX - camera.position.x) * 0.022;
    camera.position.y += (camY - camera.position.y) * 0.022;
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
