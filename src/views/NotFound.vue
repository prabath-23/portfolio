<template>
  <div
    :style="{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '24px',
      textAlign: 'center',
      padding: '0 24px',
      position: 'relative',
      zIndex: 10,
    }"
  >
    <div :style="{ fontSize: 'var(--text-7xl)' }">🤔</div>
    <div class="section-chip">404 — Not found</div>
    <h1
      :style="{
        fontFamily: 'var(--display)',
        fontSize: 'var(--text-5xl)',
        fontWeight: 800,
        letterSpacing: '-0.03em',
      }"
    >
      Lost in <span class="grad-yellow">cyberspace</span>
    </h1>
    <RouterLink to="/" class="btn-yellow">Take me home 🏠</RouterLink>
  </div>
</template>
