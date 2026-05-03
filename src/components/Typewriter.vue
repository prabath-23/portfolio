<template>
  <span class="typewriter">
    {{ displayed }}
    <span class="typewriter-cursor" aria-hidden="true">|</span>
  </span>
</template>

<script setup>
import { onBeforeUnmount, ref, watchEffect } from 'vue';

const ROLES = [
  'Full Stack Developer',
  'Java Engineer',
  'Backend Specialist',
  'UI Developer',
];

const roleIdx = ref(0);
const displayed = ref('');
const deleting = ref(false);
const pause = ref(false);

let timer;
function clearTimer() {
  if (timer) clearTimeout(timer);
  timer = undefined;
}

watchEffect(() => {
  clearTimer();

  if (pause.value) {
    timer = setTimeout(() => {
      pause.value = false;
    }, 2000);
    return;
  }

  const full = ROLES[roleIdx.value];

  if (!deleting.value && displayed.value === full) {
    pause.value = true;
    deleting.value = true;
    return;
  }

  if (deleting.value && displayed.value === '') {
    deleting.value = false;
    roleIdx.value = (roleIdx.value + 1) % ROLES.length;
    return;
  }

  const speed = deleting.value ? 40 : 70;
  timer = setTimeout(() => {
    displayed.value = deleting.value
      ? displayed.value.slice(0, -1)
      : full.slice(0, displayed.value.length + 1);
  }, speed);
});

onBeforeUnmount(() => clearTimer());
</script>
