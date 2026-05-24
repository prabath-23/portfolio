<template>
  <div ref="rootEl" class="home">

    <!-- ── HERO ──────────────────────────────────────────────────── -->
    <section class="home-hero" ref="heroEl">
      <!-- Parallax depth layers -->
      <div class="hero-parallax-layer hero-parallax-layer--far" ref="parallaxFar" />
      <div class="hero-parallax-layer hero-parallax-layer--mid" ref="parallaxMid" />

      <div class="home-hero-inner">
        <div class="hero-grid">
          <div class="hero-copy">
            <div class="hero-badges">
              <FloatBadge icon="code" label="Full-stack developer" color="var(--lime)" />
              <FloatBadge icon="briefcase" label="Product-minded builder" color="var(--yellow)" />
            </div>

            <p class="hero-kicker">Prabath Sai</p>
            <h1 class="hero-title">
              Building polished product experiences for the web.
            </h1>

            <p class="hero-lede">
              Full-stack developer working across React, Vue, Java, and Spring Boot. I focus on
              clear interfaces, dependable systems, and product details that make software easier
              to use and maintain.
            </p>

            <div class="hero-actions">
              <RouterLink to="/projects" class="btn-yellow">View Projects</RouterLink>
              <a class="btn-outline" href="/Prabath-Sai-Resume.txt" download>Download Resume</a>
              <RouterLink :to="{ path: '/', hash: '#contact' }" class="btn-ghost">Contact Me</RouterLink>
            </div>
          </div>

          <aside class="hero-dashboard" aria-label="Featured projects preview">
            <!-- Momentum card -->
            <div class="dash-card dash-card--main tilt-card" ref="tiltCard1" @mousemove="onTilt($event, 'tilt1')" @mouseleave="resetTilt('tilt1')">
              <div class="dash-card-glow dash-card-glow--teal" />
              <div class="dash-eyebrow">
                <span>Featured build</span>
                <span class="dash-live">Live</span>
              </div>
              <h2>Momentum Habit Tracker</h2>
              <p>
                A focused habit dashboard for daily check-ins, targets, and progress heatmaps
                across week, month, and year views.
              </p>
              <div class="dash-screenshot">
                <img src="/assets/habit-tracker-dashboard.png" alt="Momentum Habit Tracker dashboard preview" />
              </div>
            </div>

            <div class="dash-card dash-card--metric tilt-card" @mousemove="onTilt($event, 'tilt2')" @mouseleave="resetTilt('tilt2')">
              <span class="dash-label">Role</span>
              <strong>Builder</strong>
              <span>Product + engineering</span>
            </div>

            <div class="dash-card dash-card--metric tilt-card" @mousemove="onTilt($event, 'tilt3')" @mouseleave="resetTilt('tilt3')">
              <span class="dash-label">Stack</span>
              <strong>React</strong>
              <span>Vite + Tailwind</span>
            </div>

            <a href="https://momentum.prabath.in" class="dash-card dash-card--cta tilt-card" @mousemove="onTilt($event, 'tilt4')" @mouseleave="resetTilt('tilt4')">
              <span>Open live app</span>
              <strong>Launch Momentum ↗</strong>
            </a>
          </aside>
        </div>
      </div>
    </section>

    <!-- ── ABOUT ────────────────────────────────────────────────── -->
    <section id="about" class="home-section reveal-section">
      <div class="home-inner split-section">
        <div class="reveal-child">
          <div class="section-chip">Profile</div>
          <h2 class="section-title">Developer craft, product judgment.</h2>
        </div>
        <div class="section-copy reveal-child" style="--reveal-delay: 0.15s">
          <p>
            Prabath Sai builds web products that feel clear, fast, and maintainable. He connects
            UI polish with practical backend thinking so product ideas can move from concept to
            usable software.
          </p>
          <ul class="profile-list">
            <li v-for="item in PROOF_POINTS" :key="item.value">
              <strong>{{ item.value }}</strong>
              <span>{{ item.label }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ── FEATURED: MOMENTUM ──────────────────────────────────── -->
    <section class="home-section home-projects reveal-section">
      <div class="home-inner">
        <div class="section-row section-row--project reveal-child">
          <div>
            <div class="section-chip">Featured Project</div>
            <h2 class="section-title">Momentum Habit Tracker</h2>
          </div>
          <RouterLink to="/projects" class="section-action">View all projects</RouterLink>
        </div>

        <article class="feature-project-card reveal-child tilt-card" style="--reveal-delay: 0.1s"
          @mousemove="onTilt($event, 'feat1')" @mouseleave="resetTilt('feat1')">
          <div class="feature-project-copy">
            <span class="pill lime">Productivity · React</span>
            <h3>Helping users keep daily progress visible and actionable.</h3>
            <p>
              Momentum turns habits and tasks into a compact dashboard with daily marking,
              target tracking, and heatmaps that make consistency easy to scan.
            </p>
            <div class="feature-list">
              <span v-for="feature in MOMENTUM_FEATURES" :key="feature">{{ feature }}</span>
            </div>
            <div class="project-links">
              <a href="https://momentum.prabath.in" target="_blank" rel="noopener">Live demo ↗</a>
              <a href="https://github.com/prabath-23" target="_blank" rel="noopener">GitHub ↗</a>
            </div>
          </div>
          <div class="feature-project-media">
            <img src="/assets/habit-tracker-dashboard.png" alt="Momentum Habit Tracker dashboard preview" />
          </div>
        </article>
      </div>
    </section>

    <!-- ── FEATURED: NEXPERF ──────────────────────────────────── -->
    <section class="home-section home-projects reveal-section">
      <div class="home-inner">
        <div class="section-row section-row--project reveal-child">
          <div>
            <div class="section-chip section-chip--orange">Latest Product</div>
            <h2 class="section-title">NexPerf</h2>
          </div>
          <span class="badge-new">New ✦</span>
        </div>

        <article class="feature-project-card feature-project-card--nexperf reveal-child tilt-card"
          style="--reveal-delay: 0.1s"
          @mousemove="onTilt($event, 'feat2')" @mouseleave="resetTilt('feat2')">
          <div class="feature-project-copy">
            <span class="pill orange">DevTools · Spring Boot</span>
            <h3>API performance intelligence for modern engineering teams.</h3>
            <p>
              NexPerf is a full-stack observability platform that tracks real-time API latency,
              throughput, error rates, and Core Web Vitals — giving engineers instant visibility
              into performance regressions before they reach users.
            </p>
            <div class="feature-list feature-list--orange">
              <span v-for="feature in NEXPERF_FEATURES" :key="feature">{{ feature }}</span>
            </div>
            <div class="nexperf-tech-row">
              <span v-for="t in NEXPERF_TECH" :key="t" class="tag tag--orange">{{ t }}</span>
            </div>
            <div class="project-links project-links--orange">
              <a href="https://github.com/prabath-23" target="_blank" rel="noopener">GitHub ↗</a>
            </div>
          </div>
          <div class="feature-project-nexperf-visual">
            <div class="nexperf-dashboard">
              <div class="nexperf-topbar">
                <span class="nexperf-brand">NexPerf</span>
                <div class="nexperf-status"><span class="nexperf-dot" />Live</div>
              </div>
              <div class="nexperf-metrics-grid">
                <div v-for="m in NEXPERF_METRICS" :key="m.label" class="nexperf-metric">
                  <span class="nexperf-metric-label">{{ m.label }}</span>
                  <strong class="nexperf-metric-value" :style="{ color: m.color }">{{ m.value }}</strong>
                  <span class="nexperf-metric-delta" :class="m.up ? 'up' : 'down'">
                    {{ m.up ? '↑' : '↓' }} {{ m.delta }}
                  </span>
                </div>
              </div>
              <div class="nexperf-chart">
                <div class="nexperf-chart-label">API Latency p95 — last 24h</div>
                <div class="nexperf-bars">
                  <div
                    v-for="(bar, i) in NEXPERF_BARS"
                    :key="i"
                    class="nexperf-bar"
                    :style="{ height: bar + '%', '--bar-color': bar > 75 ? 'var(--orange)' : 'var(--lime)' }"
                  />
                </div>
              </div>
              <div class="nexperf-endpoints">
                <div class="nexperf-ep-label">Top endpoints</div>
                <div v-for="ep in NEXPERF_ENDPOINTS" :key="ep.path" class="nexperf-endpoint">
                  <span class="nexperf-ep-method" :style="{ color: ep.color }">{{ ep.method }}</span>
                  <span class="nexperf-ep-path">{{ ep.path }}</span>
                  <span class="nexperf-ep-ms">{{ ep.ms }}ms</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- ── TECH STACK ─────────────────────────────────────────── -->
    <section class="home-section reveal-section">
      <div class="home-inner">
        <div class="section-row reveal-child">
          <div>
            <div class="section-chip">Skills / Tech Stack</div>
            <h2 class="section-title">Tools used to ship practical products.</h2>
          </div>
        </div>

        <div class="stack-grid">
          <div
            v-for="(group, i) in STACK_GROUPS"
            :key="group.title"
            class="stack-card tilt-card reveal-child"
            :style="{ '--stack-color': group.color, '--reveal-delay': `${i * 0.1}s` }"
            @mousemove="onTilt($event, `stack${i}`)"
            @mouseleave="resetTilt(`stack${i}`)"
          >
            <div class="stack-card-glow" />
            <Icon :name="group.icon" :size="26" :color="group.color" />
            <h3>{{ group.title }}</h3>
            <p>{{ group.copy }}</p>
            <div class="u-flex u-wrap u-gap-1">
              <span v-for="tech in group.tech" :key="tech" class="tag">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── WORK HIGHLIGHTS ────────────────────────────────────── -->
    <section class="home-section reveal-section">
      <div class="home-inner">
        <div class="section-row reveal-child">
          <div>
            <div class="section-chip">Work Highlights</div>
            <h2 class="section-title">How Prabath creates value.</h2>
          </div>
        </div>

        <div class="highlights-grid">
          <div
            v-for="(item, i) in WORK_HIGHLIGHTS"
            :key="item.title"
            class="highlight-card tilt-card reveal-child"
            :style="{ '--reveal-delay': `${i * 0.12}s` }"
            @mousemove="onTilt($event, `hl${i}`)"
            @mouseleave="resetTilt(`hl${i}`)"
          >
            <span>{{ item.kicker }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.copy }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CONTACT ─────────────────────────────────────────────── -->
    <section id="contact" class="home-section home-contact reveal-section">
      <div class="home-inner">
        <div class="reveal glass contact-card reveal-child visible" data-id="contact">
          <div>
            <div class="section-chip">Contact</div>
            <h2 class="contact-title">Have a product, role, or idea worth building?</h2>
            <p class="contact-copy">
              Reach out for frontend, Java backend, full-stack product work, or engineering
              conversations. I'm especially interested in teams that care about craft and momentum.
            </p>
            <a href="mailto:hello@prabath.dev" class="btn-yellow">Contact Me</a>
          </div>

          <div class="contact-socials">
            <a
              v-for="s in social"
              :key="s.label"
              :href="s.url"
              class="contact-social-link"
              :aria-label="`Open ${s.label}`"
            >
              <div class="contact-social-name">
                <Icon :name="s.icon" :size="18" :color="s.color" />
                <span>{{ s.label }}</span>
              </div>
              <span class="contact-social-handle">{{ s.handle }} ↗</span>
            </a>
          </div>
        </div>

        <div class="site-footer">
          <span>© 2026 Prabath Sai</span>
          <div>
            <span class="pill lime">Open to collaborate</span>
            <span class="pill sky">Remote friendly</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import FloatBadge from '../components/FloatBadge.vue';
import Icon from '../components/Icon.vue';

// ── Data ────────────────────────────────────────────────────────

const PROOF_POINTS = [
  { value: 'Full-stack', label: 'Frontend polish plus backend reliability.' },
  { value: 'Product-first', label: 'Features shaped around clarity and user intent.' },
  { value: 'Ship-ready', label: 'Responsive, deployable, maintainable builds.' },
];

const MOMENTUM_FEATURES = [
  'Daily habit check-ins',
  'Target tracking',
  'Week, month, and year heatmaps',
  'Responsive dashboard UI',
];

const NEXPERF_FEATURES = [
  'Real-time API latency with p50 / p95 / p99 percentiles',
  'Throughput and error rate monitoring dashboards',
  'Core Web Vitals integration for frontend observability',
  'Performance regression alerts with baseline comparison',
];

const NEXPERF_TECH = ['React', 'Java', 'Spring Boot', 'WebSockets', 'PostgreSQL', 'Redis'];

const NEXPERF_METRICS = [
  { label: 'Avg Latency', value: '42ms', delta: '8%', up: false, color: 'var(--lime)' },
  { label: 'p95 Latency', value: '118ms', delta: '3%', up: false, color: 'var(--sky)' },
  { label: 'Error Rate', value: '0.12%', delta: '0.04%', up: false, color: 'var(--lime)' },
  { label: 'Req / sec', value: '2.4k', delta: '12%', up: true, color: 'var(--yellow)' },
];

const NEXPERF_BARS = [28, 35, 32, 48, 40, 55, 38, 62, 45, 72, 58, 80, 65, 48, 55, 42, 38, 50, 44, 36, 52, 46, 40, 34];

const NEXPERF_ENDPOINTS = [
  { method: 'GET', path: '/api/users', ms: 12, color: 'var(--lime)' },
  { method: 'POST', path: '/api/events', ms: 38, color: 'var(--sky)' },
  { method: 'GET', path: '/api/metrics', ms: 64, color: 'var(--yellow)' },
  { method: 'DELETE', path: '/api/cache', ms: 98, color: 'var(--orange)' },
];

const STACK_GROUPS = [
  {
    title: 'Frontend',
    icon: 'code',
    color: 'var(--sky)',
    copy: 'Interfaces that are responsive, fast, and easy to scan.',
    tech: ['React', 'Vue.js', 'Vite', 'Tailwind CSS', 'Three.js'],
  },
  {
    title: 'Backend',
    icon: 'briefcase',
    color: 'var(--lime)',
    copy: 'Services built around dependable APIs and maintainable structure.',
    tech: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'Delivery',
    icon: 'check',
    color: 'var(--yellow)',
    copy: 'Practical tooling for iteration, deployment, and collaboration.',
    tech: ['Git', 'GitHub Pages', 'Vercel-style workflows', 'Responsive QA'],
  },
];

const WORK_HIGHLIGHTS = [
  {
    kicker: '01',
    title: 'Product flow',
    copy: 'Turns rough ideas into clear screens, states, and actions.',
  },
  {
    kicker: '02',
    title: 'UI craft',
    copy: 'Keeps interfaces polished, responsive, and maintainable.',
  },
  {
    kicker: '03',
    title: 'Full-stack delivery',
    copy: 'Connects frontend behavior with dependable backend APIs.',
  },
];

const social = [
  { label: 'GitHub', url: 'https://github.com/prabath-23', handle: 'github.com/prabath-23', icon: 'github', color: 'var(--text-mid)' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/prabath-sai/', handle: 'linkedin.com/in/prabath-sai', icon: 'linkedin', color: 'var(--sky)' },
  { label: 'Instagram', url: 'https://instagram.com/prabath.chowdary', handle: '@prabath.chowdary', icon: 'instagram', color: 'var(--pink)' },
];

// ── Refs ──────────────────────────────────────────────────────

const rootEl = ref(null);
const heroEl = ref(null);
const parallaxFar = ref(null);
const parallaxMid = ref(null);

// ── 3D Card Tilt ─────────────────────────────────────────────

const tiltMap = {};

function onTilt(e, key) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const dx = (e.clientX - cx) / (rect.width / 2);
  const dy = (e.clientY - cy) / (rect.height / 2);
  const rotX = -dy * 8;
  const rotY = dx * 8;
  card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(6px)`;
  card.style.transition = 'transform 0.08s ease';
  tiltMap[key] = card;
}

function resetTilt(key) {
  const card = tiltMap[key];
  if (!card) return;
  card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  card.style.transition = 'transform 0.45s cubic-bezier(0.16,1,0.3,1)';
}

// ── Parallax Scroll ───────────────────────────────────────────

let rafId = null;
let lastScrollY = 0;

function updateParallax() {
  const sy = lastScrollY;
  if (parallaxFar.value) {
    parallaxFar.value.style.transform = `translateY(${sy * 0.28}px)`;
  }
  if (parallaxMid.value) {
    parallaxMid.value.style.transform = `translateY(${sy * 0.14}px)`;
  }
  rafId = null;
}

function onScroll() {
  lastScrollY = window.scrollY;
  if (!rafId) {
    rafId = requestAnimationFrame(updateParallax);
  }
}

// ── Scroll Reveal ─────────────────────────────────────────────

let revealObserver = null;

function setupReveal() {
  const sections = document.querySelectorAll('.reveal-section');
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const children = entry.target.querySelectorAll('.reveal-child');
        children.forEach((child, i) => {
          const delay = child.style.getPropertyValue('--reveal-delay') || `${i * 0.1}s`;
          child.style.transitionDelay = delay;
          child.classList.add('revealed');
        });
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -60px 0px' },
  );
  sections.forEach((s) => revealObserver.observe(s));
}

// ── Lifecycle ─────────────────────────────────────────────────

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  setupReveal();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
  if (rafId) cancelAnimationFrame(rafId);
  if (revealObserver) revealObserver.disconnect();
});
</script>

<style scoped>
.home {
  position: relative;
  z-index: 10;
  max-width: 100%;
  overflow-x: clip;
}

.home-inner {
  max-width: 1120px;
  margin: 0 auto;
}

/* ── Reveal Animations ─────────────────────────────────────── */

.reveal-child {
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-child.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* ── Section Layout ────────────────────────────────────────── */

.home-section {
  padding: 108px 52px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  scroll-margin-top: 96px;
}

.home-section + .home-section {
  padding-top: 116px;
}

/* ── Hero ──────────────────────────────────────────────────── */

.home-hero {
  min-height: 92vh;
  display: flex;
  align-items: center;
  padding: 116px 52px 72px;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  margin-bottom: -1px;
}

.home-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    linear-gradient(90deg, rgba(6, 10, 16, 0.94) 0%, rgba(6, 10, 16, 0.74) 46%, rgba(6, 10, 16, 0.42) 100%),
    linear-gradient(180deg, rgba(6, 10, 16, 0.22) 0%, rgba(6, 10, 16, 0.84) 100%);
}

.home-hero::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 220px;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(6, 10, 16, 0) 0%,
    rgba(6, 10, 16, 0.58) 58%,
    rgba(6, 10, 16, 0.98) 100%
  );
}

/* Parallax depth layers */
.hero-parallax-layer {
  position: absolute;
  inset: -30%;
  pointer-events: none;
  z-index: 0;
  will-change: transform;
}

.hero-parallax-layer--far {
  background:
    radial-gradient(ellipse 60% 50% at 70% 40%, rgba(0, 168, 204, 0.06) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 20% 70%, rgba(230, 194, 0, 0.04) 0%, transparent 70%);
}

.hero-parallax-layer--mid {
  background:
    radial-gradient(ellipse 40% 40% at 80% 20%, rgba(162, 155, 254, 0.05) 0%, transparent 60%),
    radial-gradient(ellipse 35% 45% at 15% 85%, rgba(0, 214, 126, 0.04) 0%, transparent 60%);
}

.home-hero-inner {
  width: min(1180px, 100%);
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(380px, 0.74fr);
  gap: clamp(46px, 6vw, 88px);
  align-items: center;
}

.hero-copy {
  max-width: 660px;
}

.hero-badges,
.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.hero-badges {
  margin-bottom: 24px;
  animation: floatUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
}

.hero-kicker {
  font-family: var(--mono);
  color: var(--yellow);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: var(--text-xs);
  margin-bottom: 16px;
  animation: floatUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
}

.hero-title {
  font-family: var(--display);
  font-size: clamp(40px, 4.65vw, 62px);
  font-weight: 800;
  line-height: 1.02;
  color: var(--text);
  letter-spacing: 0;
  margin-bottom: 20px;
  max-width: 680px;
  animation: floatUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
}

.hero-lede {
  max-width: 620px;
  margin-bottom: 30px;
  font-size: clamp(15px, 1vw, 18px);
  line-height: 1.72;
  color: rgba(232, 239, 250, 0.92);
  font-weight: 400;
  animation: floatUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
}

.hero-actions {
  animation: floatUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
}

/* ── Dashboard Cards ───────────────────────────────────────── */

.hero-dashboard {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-auto-rows: 108px;
  gap: 12px;
  animation: floatUp 1.0s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both;
}

.tilt-card {
  transform-style: preserve-3d;
  will-change: transform;
}

.dash-card {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(18, 24, 32, 0.78), rgba(7, 10, 15, 0.72));
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.dash-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(255, 255, 255, 0.042) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.032) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.72), transparent 90%);
  pointer-events: none;
}

.dash-card > * {
  position: relative;
  z-index: 1;
}

.dash-card-glow {
  position: absolute;
  inset: -40%;
  pointer-events: none;
  border-radius: 50%;
  opacity: 0.06;
  filter: blur(50px);
}

.dash-card-glow--teal {
  background: var(--teal);
  top: -60%;
  right: -20%;
  inset: unset;
  width: 200%;
  height: 200%;
}

.dash-card--main {
  grid-column: span 6;
  grid-row: span 4;
  padding: 26px;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s;
}

.dash-card--main:hover {
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.38), 0 0 0 1px rgba(0, 184, 148, 0.2);
}

.dash-eyebrow {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-family: var(--mono);
  font-size: var(--text-xs);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: auto;
}

.dash-live {
  color: var(--lime);
}

.dash-card--main h2 {
  max-width: 380px;
  font-family: var(--display);
  font-size: clamp(32px, 3.8vw, 48px);
  font-weight: 800;
  line-height: 1.02;
  margin: 0 0 14px;
}

.dash-card--main p {
  max-width: 430px;
  color: var(--text-mid);
  line-height: 1.65;
  font-weight: 300;
  margin: 0 0 18px;
}

.dash-screenshot {
  display: block;
  margin-top: auto;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 12px;
  background: rgba(238, 247, 255, 0.96);
  overflow: hidden;
  aspect-ratio: 16 / 9;
}

.dash-screenshot img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  object-position: top center;
}

.dash-card--metric,
.dash-card--cta {
  grid-column: span 2;
  min-width: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.dash-label,
.dash-card--cta span {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.dash-card--metric strong,
.dash-card--cta strong {
  font-family: var(--display);
  font-size: var(--text-xl);
  line-height: 1;
  color: var(--text);
}

.dash-card--metric > span:last-child {
  color: var(--text-muted);
  font-size: var(--text-sm);
  line-height: 1.35;
}

.dash-card--cta {
  color: var(--bg);
  background: linear-gradient(180deg, #ffe95c, var(--yellow));
  border-color: rgba(230, 194, 0, 0.55);
}

.dash-card--cta span,
.dash-card--cta strong {
  color: #080a0f;
}

/* ── Section Layout Helpers ────────────────────────────────── */

.split-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  align-items: start;
}

.section-row {
  display: block;
  margin-bottom: 34px;
}

.section-row--project {
  display: flex;
  justify-content: space-between;
  gap: 28px;
  align-items: flex-end;
}

.section-row--project .section-title {
  max-width: none;
}

.section-action {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid rgba(0, 214, 126, 0.28);
  border-radius: 8px;
  background: rgba(0, 214, 126, 0.08);
  color: var(--lime);
  font-family: var(--mono);
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: transform 0.2s, border-color 0.2s, background 0.2s;
}

.section-action:hover {
  transform: translateY(-2px);
  border-color: rgba(0, 214, 126, 0.48);
  background: rgba(0, 214, 126, 0.13);
}

.section-copy {
  color: rgba(214, 225, 241, 0.88);
  font-size: var(--text-base);
  line-height: 1.72;
  width: min(720px, 100%);
  margin-left: auto;
  padding: 26px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 12px;
  background:
    linear-gradient(180deg, rgba(10, 15, 22, 0.88), rgba(7, 10, 15, 0.78));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.profile-list {
  display: grid;
  gap: 14px;
  margin: 24px 0 0;
  list-style: none;
}

.profile-list li {
  display: grid;
  grid-template-columns: 130px minmax(0, 1fr);
  gap: 16px;
  padding: 12px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.10);
}

.profile-list strong {
  color: var(--text);
  font-family: var(--display);
  font-size: var(--text-lg);
}

.profile-list span {
  color: var(--text-muted);
  line-height: 1.55;
}

/* ── Feature Project Cards ─────────────────────────────────── */

.proof-card,
.stack-card,
.highlight-card,
.feature-project-card {
  background: linear-gradient(180deg, rgba(20, 26, 34, 0.74), rgba(8, 12, 18, 0.78));
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 12px;
}

.feature-project-card {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(360px, 1fr);
  gap: 28px;
  padding: 28px;
  border-color: rgba(0, 212, 170, 0.22);
  transition: box-shadow 0.3s, border-color 0.3s;
}

.feature-project-card:hover {
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(0, 212, 170, 0.3);
}

.feature-project-card--nexperf {
  border-color: rgba(225, 112, 85, 0.22);
}

.feature-project-card--nexperf:hover {
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(225, 112, 85, 0.3);
}

.feature-project-copy h3 {
  margin: 20px 0 14px;
  font-family: var(--display);
  font-size: clamp(28px, 3vw, 44px);
  line-height: 1.05;
}

.feature-project-copy p {
  color: rgba(214, 225, 241, 0.88);
  line-height: 1.8;
  margin-bottom: 20px;
}

.feature-list {
  display: grid;
  gap: 8px;
  margin-bottom: 24px;
}

.feature-list span {
  color: var(--text-mid);
  padding-left: 18px;
  position: relative;
}

.feature-list span::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--teal);
  position: absolute;
  left: 0;
  top: 0.72em;
}

.feature-list--orange span::before {
  background: var(--orange);
}

.feature-project-media {
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  overflow: hidden;
  background: rgba(238, 247, 255, 0.96);
}

.feature-project-media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: top center;
}

/* ── NexPerf Section ───────────────────────────────────────── */

.section-chip--orange {
  color: var(--orange);
  border-color: rgba(225, 112, 85, 0.28);
  background: rgba(225, 112, 85, 0.06);
}

.badge-new {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--mono);
  font-size: var(--text-xs);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--orange);
  padding: 8px 16px;
  border: 1px solid rgba(225, 112, 85, 0.35);
  border-radius: var(--radius-pill);
  background: rgba(225, 112, 85, 0.08);
  animation: glow-pulse-orange 2.5s ease-in-out infinite;
}

@keyframes glow-pulse-orange {
  0%, 100% { box-shadow: 0 0 0 0 rgba(225, 112, 85, 0); }
  50% { box-shadow: 0 0 0 6px rgba(225, 112, 85, 0.12); }
}

.nexperf-tech-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tag--orange {
  background: rgba(225, 112, 85, 0.10);
  border-color: rgba(225, 112, 85, 0.28);
  color: var(--orange);
}

.project-links--orange a {
  color: var(--orange);
}

.project-links--orange a:hover {
  color: #f5856a;
}

/* ── NexPerf Dashboard Visual ──────────────────────────────── */

.feature-project-nexperf-visual {
  display: flex;
  align-items: stretch;
}

.nexperf-dashboard {
  flex: 1;
  background: linear-gradient(180deg, rgba(14, 18, 26, 0.96), rgba(8, 10, 16, 0.98));
  border: 1px solid rgba(225, 112, 85, 0.2);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.nexperf-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(225, 112, 85, 0.06);
}

.nexperf-brand {
  font-family: var(--mono);
  font-size: var(--text-xs);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--orange);
  font-weight: 500;
}

.nexperf-status {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--lime);
}

.nexperf-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--lime);
  animation: pulse-ring 1.5s ease-out infinite;
}

.nexperf-metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(255, 255, 255, 0.04);
}

.nexperf-metric {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px 12px;
  background: linear-gradient(180deg, rgba(14, 18, 26, 0.96), rgba(10, 12, 18, 0.98));
}

.nexperf-metric-label {
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.nexperf-metric-value {
  font-family: var(--display);
  font-size: var(--text-xl);
  font-weight: 800;
  line-height: 1;
}

.nexperf-metric-delta {
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: 0.08em;
}

.nexperf-metric-delta.down { color: var(--lime); }
.nexperf-metric-delta.up { color: var(--sky); }

.nexperf-chart {
  padding: 14px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.nexperf-chart-label {
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 10px;
}

.nexperf-bars {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 56px;
}

.nexperf-bar {
  flex: 1;
  border-radius: 2px 2px 0 0;
  background: var(--bar-color, var(--lime));
  opacity: 0.75;
  min-height: 4px;
  transition: opacity 0.2s;
}

.nexperf-bar:hover {
  opacity: 1;
}

.nexperf-endpoints {
  padding: 14px 18px;
  flex: 1;
}

.nexperf-ep-label {
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 10px;
}

.nexperf-endpoint {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.nexperf-endpoint:last-child {
  border-bottom: none;
}

.nexperf-ep-method {
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: 0.08em;
  font-weight: 500;
  min-width: 40px;
}

.nexperf-ep-path {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--text-mid);
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.nexperf-ep-ms {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--text-muted);
  min-width: 36px;
  text-align: right;
}

/* ── Stack Grid ────────────────────────────────────────────── */

.stack-grid,
.highlights-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.stack-card,
.highlight-card {
  padding: 26px;
  transition: box-shadow 0.3s, border-color 0.3s;
}

.stack-card {
  position: relative;
  overflow: hidden;
  border-color: color-mix(in srgb, var(--stack-color) 28%, rgba(255, 255, 255, 0.12));
  background:
    radial-gradient(260px circle at 18% 0%, color-mix(in srgb, var(--stack-color) 18%, transparent), transparent 68%),
    linear-gradient(180deg, rgba(20, 26, 34, 0.78), rgba(8, 12, 18, 0.82));
}

.stack-card::before {
  content: '';
  position: absolute;
  left: 26px;
  right: 26px;
  top: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--stack-color), transparent);
  opacity: 0.75;
}

.stack-card:hover {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
  border-color: color-mix(in srgb, var(--stack-color) 48%, rgba(255, 255, 255, 0.16));
}

.stack-card-glow {
  position: absolute;
  top: -40px;
  left: -40px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: var(--stack-color);
  opacity: 0.04;
  filter: blur(30px);
  pointer-events: none;
  transition: opacity 0.3s;
}

.stack-card:hover .stack-card-glow {
  opacity: 0.10;
}

.stack-card h3,
.highlight-card h3 {
  font-family: var(--display);
  color: var(--text);
  font-size: var(--text-2xl);
  line-height: 1.1;
  margin: 16px 0 12px;
}

.stack-card p,
.highlight-card p {
  color: var(--text-mid);
  line-height: 1.6;
  margin-bottom: 0;
}

.highlight-card {
  min-height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow 0.3s, border-color 0.3s;
}

.highlight-card:hover {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
  border-color: rgba(255, 255, 255, 0.18);
}

.highlight-card span {
  font-family: var(--mono);
  color: var(--yellow);
  letter-spacing: 0.14em;
}

/* ── Contact ───────────────────────────────────────────────── */

.contact-title {
  font-family: var(--display);
  font-weight: 800;
  font-size: clamp(34px, 4vw, 54px);
  line-height: 1.05;
  margin-bottom: 18px;
}

.contact-copy {
  color: var(--text-mid);
  font-size: var(--text-lg);
  line-height: 1.75;
  margin-bottom: 30px;
}

.contact-social-name {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.contact-social-name span {
  font-family: var(--display);
  font-weight: 700;
  font-size: var(--text-lg);
}

.site-footer {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  color: var(--text-muted);
  font-family: var(--mono);
  font-size: var(--text-xs);
  letter-spacing: 0.1em;
}

.site-footer > div {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

/* ── Responsive ────────────────────────────────────────────── */

@media (max-width: 900px) {
  .hero-grid,
  .split-section,
  .feature-project-card,
  .stack-grid,
  .highlights-grid {
    grid-template-columns: 1fr;
  }

  .nexperf-metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .section-row {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .section-row--project {
    display: grid;
    grid-template-columns: 1fr;
    align-items: start;
  }

  .hero-dashboard {
    grid-auto-rows: 96px;
  }

  .dash-card--main {
    grid-column: span 6;
  }

  .profile-list li {
    grid-template-columns: 1fr;
    gap: 6px;
  }
}

@media (max-width: 768px) {
  .home-hero {
    min-height: auto;
    padding: 112px 24px 58px;
  }

  .hero-title {
    font-size: clamp(38px, 11vw, 56px);
  }

  .hero-actions > * {
    flex: 1 1 180px;
  }

  .dash-card--metric,
  .dash-card--cta {
    grid-column: span 3;
  }

  .home-section {
    padding: 72px 24px;
  }

  .feature-project-card {
    padding: 20px;
  }

  .nexperf-metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .nexperf-bars {
    height: 44px;
  }
}
</style>
