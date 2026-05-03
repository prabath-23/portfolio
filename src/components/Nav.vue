<template>
  <nav :style="navStyle">
    <RouterLink to="/" :style="logoWrapStyle">
      <img
        src="/logo.svg"
        alt="Logo"
        :style="logoImgStyle"
        @mouseenter="onLogoEnter"
        @mouseleave="onLogoLeave"
      />
      <span :style="logoTextStyle">Prabath</span>
    </RouterLink>

    <!-- Desktop Nav -->
    <div class="nav-links hide-mobile u-flex u-gap-36">
      <RouterLink
        v-for="l in links"
        :key="l.label"
        :to="l.to"
        class="nav-link"
        :class="{ active: isActive(l) }"
      >
        {{ l.label }}
      </RouterLink>
    </div>

    <!-- Mobile Menu Toggle -->
    <button 
      class="mobile-menu-btn hide-desktop" 
      @click="mobileOpen = !mobileOpen"
      :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
      :aria-expanded="mobileOpen.toString()"
    >
      <span :style="hamburgerStyle(mobileOpen)" />
    </button>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div v-if="mobileOpen" class="mobile-menu" :style="mobileMenuStyle">
        <RouterLink
          v-for="l in links"
          :key="l.label"
          :to="l.to"
          class="mobile-nav-link"
          @click="mobileOpen = false"
        >
          {{ l.label }}
        </RouterLink>
        <div :style="badgeWrapStyle" style="margin-top:24px">
          <div :style="dotStyle" />
          <span :style="badgeTextStyle">Online</span>
        </div>
      </div>
    </Transition>

    <div class="hide-mobile" :style="badgeWrapStyle">
      <div :style="dotStyle" />
      <span :style="badgeTextStyle">Online</span>
    </div>
  </nav>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const scrolled = ref(false);
const mobileOpen = ref(false);

const links = [
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: { path: '/', hash: '#about' } },
  { label: 'Contact', to: { path: '/', hash: '#contact' } },
];

function onScroll() {
  scrolled.value = window.scrollY > 50;
}

function isActive(l) {
  if (typeof l.to === 'string') return route.path === l.to;
  if (l.to?.hash) return route.path === (l.to.path || '/') && route.hash === l.to.hash;
  return false;
}

function onLogoEnter(e) {
  e.currentTarget.style.transform = 'rotate(-8deg) scale(1.1)';
}

function onLogoLeave(e) {
  e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
}

onMounted(() => {
  onScroll();
  window.addEventListener('scroll', onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
});

const navStyle = computed(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 200,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 52px',
  background: scrolled.value ? 'rgba(10,14,20,0.85)' : 'transparent',
  backdropFilter: scrolled.value ? 'blur(20px)' : 'none',
  borderBottom: scrolled.value ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
  transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
}));

const logoWrapStyle = { display: 'flex', alignItems: 'center', gap: '10px', cursor: 'none' };
const logoImgStyle = {
  width: '36px',
  height: '36px',
  borderRadius: '10px',
  // boxShadow: '0 4px 0 #b3a100',
  transition: 'transform 0.2s',
};
const logoTextStyle = {
  fontFamily: 'var(--display)',
  fontWeight: 700,
  fontSize: 'var(--text-lg)',
  color: 'var(--text)',
  letterSpacing: '-0.02em',
};

const badgeWrapStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '8px 18px',
  borderRadius: 'var(--radius-pill)',
  background: 'rgba(74,255,145,0.1)',
  border: '1px solid rgba(74,255,145,0.25)',
};
const dotStyle = {
  width: '7px',
  height: '7px',
  borderRadius: '50%',
  background: 'var(--lime)',
  opacity: 0.9,
};
const badgeTextStyle = {
  fontFamily: 'var(--mono)',
  fontSize: 'var(--text-xs)',
  letterSpacing: '0.1em',
  color: 'var(--lime)',
  textTransform: 'uppercase',
};

const mobileMenuStyle = {
  position: 'fixed',
  top: '76px',
  left: 0,
  right: 0,
  bottom: 0,
  background: 'var(--bg)',
  padding: '32px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  zIndex: 199,
};

function hamburgerStyle(open) {
  const s = { width: '24px', height: '2px', background: 'var(--text)', position: 'relative', transition: 'all 0.3s' };
  if (!open) return s;
  return { ...s, background: 'transparent' };
}
</script>

<style scoped>
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
}
.mobile-menu-btn::before,
.mobile-menu-btn::after {
  content: '';
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  margin: 6px 0;
  transition: all 0.3s;
}
.mobile-menu-btn[aria-expanded="true"]::before {
  transform: translateY(8px) rotate(45deg);
}
.mobile-menu-btn[aria-expanded="true"]::after {
  transform: translateY(-8px) rotate(-45deg);
}
.mobile-nav-link {
  font-family: var(--display);
  font-size: 28px;
  font-weight: 700;
  color: var(--text);
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
}
.hide-desktop { display: none; }

@media (max-width: 900px) {
  .hide-mobile { display: none !important; }
  .hide-desktop { display: block !important; }
  .mobile-menu-btn { display: block; cursor: none; }
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
