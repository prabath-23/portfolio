<template>
  <div :style="[baseStyle, style]">
    <span v-if="emoji" :style="{ fontSize: 'var(--text-base)' }">{{ emoji }}</span>
    <Icon v-else-if="icon" :name="icon" :size="14" :color="color" />
    {{ label }}
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Icon from './Icon.vue';

const props = defineProps({
  emoji: { type: String, default: '' },
  icon: { type: String, default: '' },
  label: { type: String, required: true },
  color: { type: String, required: true },
  style: { type: Object, default: () => ({}) },
});

const baseStyle = computed(() => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '8px 14px',
  borderRadius: 'var(--radius-sm)',
  background: `color-mix(in srgb, ${props.color} 8%, transparent)`,
  border: `1px solid color-mix(in srgb, ${props.color} 20%, transparent)`,
  fontFamily: 'var(--mono)',
  fontSize: 'var(--text-xs)',
  letterSpacing: '0.06em',
  color: props.color,
  whiteSpace: 'nowrap',
}));
</script>

