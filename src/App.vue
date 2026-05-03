<template>
  <div :style="rootStyle">
    <div ref="cursorDotEl" class="cursor-dot" :class="{ hovering }" />
    <div ref="cursorRingEl" class="cursor-ring" :class="{ hovering }" />

    <!-- Back to Top Button -->
    <button 
      class="back-to-top" 
      :class="{ visible: showBackToTop }"
      @click="scrollToTop"
      aria-label="Back to top"
    >
      ↑
    </button>

    <ThreeScene v-if="showScene" :mouse="mouse" />

    <div
      v-if="showScene"
      :style="{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(8,12,20,0.85) 100%)',
      }"
    />

    <div
      v-else
      :style="{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        background: 'var(--bg)',
        backgroundImage: `
          radial-gradient(ellipse at 15% 25%, rgba(255,229,0,0.04) 0%, transparent 55%),
          radial-gradient(ellipse at 85% 75%, rgba(255,45,120,0.04) 0%, transparent 55%)
        `,
      }"
    />

    <Nav />

    <main :style="{ position: 'relative', zIndex: showScene ? 10 : 5 }">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

import Nav from './components/Nav.vue';
import ThreeScene from './components/ThreeScene.vue';

const mouse = reactive({ x: 0, y: 0 });
const cursorDotEl = ref(null);
const cursorRingEl = ref(null);
const hovering = ref(false);
const showBackToTop = ref(false);

const route = useRoute();
const showScene = computed(() => route.path === '/');

const rootStyle = {
  background: '#000000',
  color: 'var(--text)',
  minHeight: '100vh',
  cursor: 'none',
};

let cursorRaf;
let cursorTargetX = 0;
let cursorTargetY = 0;
let lastHoverCheckAt = 0;

const scheduleCursorUpdate = () => {
  if (cursorRaf) return;
  cursorRaf = requestAnimationFrame(() => {
    cursorRaf = null;

    const dot = cursorDotEl.value;
    const ring = cursorRingEl.value;
    if (dot) {
      dot.style.setProperty('--cursor-x', `${cursorTargetX}px`);
      dot.style.setProperty('--cursor-y', `${cursorTargetY}px`);
    }
    if (ring) {
      ring.style.setProperty('--cursor-x', `${cursorTargetX}px`);
      ring.style.setProperty('--cursor-y', `${cursorTargetY}px`);
    }

    // Throttle hover detection to keep cursor movement snappy.
    const now = performance.now();
    if (now - lastHoverCheckAt > 80) {
      lastHoverCheckAt = now;
      try {
        const el = document.elementFromPoint(cursorTargetX, cursorTargetY);
        hovering.value = !!el?.closest?.('a,button,input,textarea,select,label,[role="link"],.chip,.card');
      } catch {
        hovering.value = false;
      }
    }
  });
};

function onPointerMove(e) {
  if (e.pointerType && e.pointerType !== 'mouse') return;

  cursorTargetX = e.clientX;
  cursorTargetY = e.clientY;

  mouse.x = (cursorTargetX / window.innerWidth - 0.5) * 2;
  mouse.y = -(cursorTargetY / window.innerHeight - 0.5) * 2;

  scheduleCursorUpdate();
}

function onScroll() {
  showBackToTop.value = window.scrollY > 500;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('scroll', onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', onPointerMove);
  window.removeEventListener('scroll', onScroll);
  if (cursorRaf) cancelAnimationFrame(cursorRaf);
});
</script>
