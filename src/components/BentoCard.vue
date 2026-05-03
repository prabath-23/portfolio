<template>
  <div
    ref="cardEl"
    class="bento glass"
    :class="sizeClass"
    :style="[baseStyle, style]"
    tabindex="0"
    @pointermove="onPointerMove"
    @pointerleave="onPointerLeave"
  >
    <div class="bento-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  accent: { type: String, default: 'var(--yellow)' },
  size: {
    type: String,
    default: 'sm',
    validator: (v) => ['sm', 'md', 'lg', 'xl'].includes(v),
  },
  style: { type: Object, default: () => ({}) },
});

const baseStyle = computed(() => ({
  '--bento-accent': props.accent || 'var(--yellow)',
}));

const sizeClass = computed(() => `bento--${props.size}`);

const cardEl = ref(null);
let raf = 0;
let pendingX = 0;
let pendingY = 0;

function apply() {
  raf = 0;
  const el = cardEl.value;
  if (!el) return;
  el.style.setProperty('--mx', `${pendingX.toFixed(2)}px`);
  el.style.setProperty('--my', `${pendingY.toFixed(2)}px`);
}

function onPointerMove(e) {
  if (e.pointerType && e.pointerType !== 'mouse') return;
  const el = cardEl.value;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  pendingX = e.clientX - rect.left;
  pendingY = e.clientY - rect.top;
  if (raf) return;
  raf = requestAnimationFrame(apply);
}

function onPointerLeave() {
  const el = cardEl.value;
  if (!el) return;
  el.style.removeProperty('--mx');
  el.style.removeProperty('--my');
}
</script>

<style scoped>
.bento:focus-visible {
  outline: 2px solid var(--yellow);
  outline-offset: 2px;
}
</style>
