<template>
  <div ref="rootEl" class="home">
    <section class="home-hero">
      <div class="home-hero-inner parallax-item" data-parallax data-scroll="0.10" data-mouse="0.40">
        <div class="hero-grid">
          <div class="hero-copy">
            <div class="hero-badges">
              <FloatBadge icon="code" label="Product engineering" color="var(--lime)" />
              <FloatBadge icon="globe" label="India" color="var(--sky)" />
              <FloatBadge icon="check" label="Available" color="var(--yellow)" />
            </div>

            <h1 class="hero-title">
              <span class="hero-name" data-text="Prabath">Prabath</span>
              <span class="hero-role">
                <Typewriter />
              </span>
            </h1>

            <p class="hero-lede">
              <span class="hero-lede-strong">I build full-stack products that feel clear, fast, and dependable.</span>
              I care about the details users notice and the engineering choices teams maintain.
              <span class="hero-lede-muted">Frontend with Vue and React, backend with Java and Spring Boot, shaped by product thinking and practical delivery.</span>
            </p>

            <div class="hero-actions">
              <RouterLink to="/projects" class="btn-yellow">View Projects</RouterLink>
              <RouterLink :to="{ path: '/', hash: '#contact' }" class="btn-outline">Get in Touch</RouterLink>
            </div>
          </div>

          <aside class="hero-dashboard" aria-label="Portfolio dashboard preview">
            <div class="dash-card dash-card--main">
              <div class="dash-eyebrow">
                <span>Featured build</span>
                <span class="dash-live">Live</span>
              </div>
              <h2>Momentum Habit Tracker</h2>
              <p>A focused habit dashboard for daily check-ins, targets, and year-level progress heatmaps.</p>
              <div class="dash-screenshot">
                <img
                  src="/assets/habit-tracker-dashboard.png"
                  alt="Momentum Habit Tracker dashboard preview"
                />
              </div>
            </div>

            <div class="dash-card dash-card--metric">
              <span class="dash-label">Stack</span>
              <strong>React</strong>
              <span>Vite + Tailwind</span>
            </div>

            <div class="dash-card dash-card--metric">
              <span class="dash-label">Focus</span>
              <strong>Habits</strong>
              <span>Daily momentum</span>
            </div>

            <RouterLink to="/projects" class="dash-card dash-card--cta">
              <span>Open projects</span>
              <strong>View work →</strong>
            </RouterLink>
          </aside>
        </div>
      </div>

      <div
        class="parallax-item"
        data-parallax
        data-scroll="0.12"
        data-mouse="0.25"
        data-base-transform="translateX(-50%)"
        :style="{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          animation: 'fadeIn 1.5s ease 1.5s both',
        }"
      >
        <span
          :style="{
            fontFamily: 'var(--mono)',
            fontSize: 'var(--text-xs)',
            letterSpacing: '0.2em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
          }"
        >
          scroll
        </span>
        <div :style="{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, var(--yellow), transparent)' }" />
      </div>
    </section>

    <div class="home-marquee">
      <div class="home-marquee-fade home-marquee-fade--left" />
      <div class="home-marquee-fade home-marquee-fade--right" />
      <div class="marquee-track">
        <span v-for="(s, i) in [...SKILLS_MARQUEE, ...SKILLS_MARQUEE]" :key="i" class="pill" :class="s.color" :style="{ flexShrink: 0 }">
          {{ s.label }}
        </span>
      </div>
    </div>

    <section id="about" class="home-section home-about">
      <div class="home-inner">
        <div
          class="reveal"
          data-id="about"
          :class="{ visible: !!visible.about }"
          :style="{ marginBottom: '48px' }"
        >
          <div class="section-chip">About Me</div>
          <h2 class="section-title">
            Who's <span class="grad-yellow">Prabath?</span>
          </h2>
        </div>

        <div
          ref="bentoGridEl"
          class="reveal reveal-delay-1 bento-grid"
          data-id="bento"
          :class="{ visible: !!visible.bento }"
        >

        <BentoCard size="sm" :accent="'var(--lime)'" class="glass-strong u-flex u-col u-justify-center u-items-center u-text-center u-p-5">
          <div class="u-font-display u-fw-800 u-lh-1 text-7xl text-glow glow-lime" :style="{ color: 'var(--lime)' }">{{ yearsCoding }}+</div>
          <div class="u-font-mono text-xs u-text-muted u-uppercase u-mt-2" :style="{ letterSpacing: '0.12em' }">
            Years Coding
          </div>
        </BentoCard>

        <BentoCard size="md" :accent="'var(--sky)'" class="glass-strong u-flex u-items-center u-gap-18 u-p-5">
          <Icon name="globe" :size="48" color="var(--text-mid)" />
          <div>
            <div class="u-font-display u-fw-700 text-lg u-mb-1">India</div>
            <div class="u-font-mono text-xs u-text-muted" :style="{ letterSpacing: '0.08em' }">Remote friendly <Icon name="check" :size="12" color="var(--lime)" /></div>
          </div>
        </BentoCard>

        <BentoCard size="lg" :accent="'var(--yellow)'" class="glass-strong u-p-5 about-profile-card">
          <p class="text-base u-fw-300 u-mb-6" :style="{ lineHeight: 1.75, color: '#b8cce0' }">
            I build polished product interfaces and reliable Java services with the same bias:
            make the path clear, keep the system fast, and give every interaction a reason.
          </p>
          <div class="u-flex u-wrap u-gap-2">
            <span v-for="s in ['Java', 'Spring Boot', 'React', 'Three.js', 'PostgreSQL']" :key="s" class="pill yellow">{{ s }}</span>
          </div>
        </BentoCard>

        <BentoCard size="sm" :accent="'var(--orange)'" class="glass-strong u-flex u-col u-justify-center u-items-center u-text-center u-p-5">
          <div class="u-font-display u-fw-800 u-lh-1 text-7xl text-glow glow-orange" :style="{ color: 'var(--orange)' }">{{ projectsCount }}+</div>
          <div class="u-font-mono text-xs u-text-muted u-uppercase u-mt-2" :style="{ letterSpacing: '0.12em' }">Projects</div>
        </BentoCard>

        <BentoCard size="md" :accent="'var(--lavender)'" class="glass-strong u-flex u-col u-gap-3 u-p-5">
          <div class="u-font-display u-fw-700 text-lg">3D Web</div>
          <div class="text-sm u-text-muted u-lh-16">
            Building immersive experiences with Three.js.
          </div>
        </BentoCard>

        <BentoCard size="sm" :accent="'var(--teal)'" class="glass-strong u-flex u-col u-justify-center u-items-center u-text-center u-p-5">
          <div class="u-font-display u-fw-800 u-lh-1 text-5xl text-glow glow-yellow" :style="{ color: 'var(--teal)' }">⚡</div>
          <div class="u-font-mono text-xs u-text-muted u-uppercase u-mt-2" :style="{ letterSpacing: '0.12em' }">
            Fast<br />Shipping
          </div>
        </BentoCard>

        <BentoCard size="md" :accent="'var(--sky)'" class="glass-strong u-flex u-col u-gap-2 u-p-5">
          <div class="u-font-display u-fw-700 text-lg">What I care about</div>
          <ul class="text-sm u-text-mid u-lh-17" :style="{ marginLeft: '18px' }">
            <li>UX that feels effortless</li>
            <li>Performance & reliability</li>
            <li>Clean architecture</li>
          </ul>
        </BentoCard>

        <BentoCard size="sm" :accent="'var(--lavender)'" class="glass-strong u-flex u-col u-justify-center u-items-center u-text-center u-p-5">
          <div class="u-font-display u-fw-800 u-lh-1 text-5xl text-glow glow-lav" :style="{ color: 'var(--lavender)' }">★</div>
          <div class="u-font-mono text-xs u-text-muted u-uppercase u-mt-2" :style="{ letterSpacing: '0.12em' }">
            Detail<br />Oriented
          </div>
        </BentoCard>

        <BentoCard size="md" :accent="'var(--lime)'" class="glass-strong u-flex u-col u-gap-3 u-p-5">
          <div class="u-font-display u-fw-700 text-lg">Currently building</div>
          <div class="text-sm u-text-mid u-lh-17">
            A cleaner frontend-only portfolio with project routing, responsive cards, and a live habit tracker showcase.
          </div>
          <div class="u-flex u-wrap u-gap-2 u-mt-2">
            <span class="pill lime">Vue</span>
            <span class="pill yellow">Three.js</span>
            <span class="pill sky">Spring</span>
          </div>
        </BentoCard>

        <BentoCard size="sm" :accent="'var(--pink)'" class="glass-strong u-flex u-col u-justify-center u-items-center u-text-center u-p-5">
          <div class="u-font-display u-fw-800 u-lh-1 text-5xl text-glow glow-pink" :style="{ color: 'var(--pink)' }">✦</div>
          <div class="u-font-mono text-xs u-text-muted u-uppercase u-mt-2" :style="{ letterSpacing: '0.12em' }">
            UI<br />Polish
          </div>
        </BentoCard>

        <BentoCard size="sm" :accent="'var(--sky)'" class="glass-strong u-flex u-col u-justify-center u-items-center u-text-center u-p-5">
          <div class="u-font-display u-fw-800 u-lh-1 text-5xl text-glow glow-sky" :style="{ color: 'var(--sky)' }">◎</div>
          <div class="u-font-mono text-xs u-text-muted u-uppercase u-mt-2" :style="{ letterSpacing: '0.12em' }">
            Pixel<br />Perfect
          </div>
        </BentoCard>
        
      </div>
      </div>
    </section>

    <section class="home-section home-projects">
      <div class="home-inner">
      <div
        class="reveal u-flex u-justify-between u-items-end u-wrap u-gap-5 u-mb-9"
        data-id="projects-title"
        :class="{ visible: !!visible['projects-title'] }"
      >
        <div>
          <div class="section-chip">Featured Work</div>
          <h2 class="section-title">Things I've <span class="grad-pink">Built</span></h2>
        </div>
        <RouterLink to="/projects" class="home-all-projects-link">All projects →</RouterLink>
      </div>

      <div class="grid-3">
        <div
          v-for="(p, i) in FEATURED"
          :key="p.title"
          class="proj-card reveal"
          :class="[`reveal-delay-${i + 1}`, { visible: !!visible[`proj-${i}`] }]"
          :data-id="`proj-${i}`"
          :style="{ '--card-accent': p.color }"
        >
          <Icon :name="p.icon" :size="40" :color="p.color" :style="{ marginBottom: '16px' }" />
          <div :style="{ marginBottom: '10px' }">
            <span class="pill" :class="p.pill" :style="{ marginBottom: '10px', display: 'inline-block' }">{{ p.cat }}</span>
          </div>
          <h3 :style="{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 'var(--text-2xl)', marginBottom: '10px', color: 'var(--text)' }">
            {{ p.title }}
          </h3>
          <p :style="{ fontSize: 'var(--text-base)', lineHeight: 1.7, color: 'var(--text-mid)', marginBottom: '24px', fontWeight: 300 }">
            {{ p.desc }}
          </p>
          <RouterLink to="/projects" class="home-project-link" :style="{ color: p.color }">
            View project ↗
          </RouterLink>
        </div>
      </div>
      </div>
    </section>

    <section id="contact" class="home-section home-contact">
      <div class="home-inner">
      <div
        class="reveal glass contact-card"
        data-id="contact"
        :class="{ visible: !!visible.contact }"
        :style="{
          borderTop: '3px solid var(--yellow)',
          position: 'relative',
          overflow: 'hidden',
        }"
      >
        <div :style="{ position: 'absolute', top: '-20%', right: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255,229,0,0.03) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }" />

        <div :style="{ position: 'relative' }">
          <div class="section-chip" :style="{ marginBottom: '20px' }">Contact</div>
          <h2
            :style="{
              fontFamily: 'var(--display)',
              fontWeight: 800,
              fontSize: 'clamp(36px,4.5vw,58px)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              marginBottom: '20px',
            }"
          >
            Got a cool<br />project? <span class="grad-yellow">Let's talk.</span>
          </h2>
          <p :style="{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '36px', fontWeight: 300 }">
            Happy to connect about collaborations, product work, and engineering conversations.
          </p>
          <a href="mailto:hello@prabath.dev" class="btn-yellow">Say Hello</a>
        </div>

        <div class="contact-socials">
          <a
            v-for="s in social"
            :key="s.label"
            :href="s.url"
            class="contact-social-link"
            :aria-label="`Open ${s.label}`"
          >
            <div :style="{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }">
              <Icon :name="s.icon" :size="18" :color="s.color" />
              <span :style="{ fontFamily: 'var(--display)', fontWeight: 600, fontSize: 'var(--text-lg)', whiteSpace: 'nowrap' }">{{ s.label }}</span>
            </div>
            <span class="contact-social-handle" :style="{ fontFamily: 'var(--mono)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', letterSpacing: '0.08em' }">
              {{ s.handle }} ↗
            </span>
          </a>
        </div>
      </div>

      <div
        :style="{
          marginTop: '60px',
          paddingTop: '28px',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }"
      >
        <span :style="{ fontFamily: 'var(--mono)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', letterSpacing: '0.1em' }">
          © 2026 Prabath
        </span>
        <div :style="{ display: 'flex', gap: '8px' }">
          <span class="pill lime">Open to collaborate</span>
          <span class="pill sky">Remote friendly</span>
        </div>
      </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import { animateNumber, prefersReducedMotion } from '../util';

import BentoCard from '../components/BentoCard.vue';
import FloatBadge from '../components/FloatBadge.vue';
import Typewriter from '../components/Typewriter.vue';
import Icon from '../components/Icon.vue';

const rootEl = ref(null);
const bentoGridEl = ref(null);
const visible = reactive({});
const yearsCoding = ref(0);
const projectsCount = ref(0);
let countersStarted = false;
let cancelYears;
let cancelProjects;

const SKILLS_MARQUEE = [
  { label: 'Java', color: 'orange' },
  { label: 'Spring Boot', color: 'lime' },
  { label: 'React', color: 'sky' },
  { label: 'Three.js', color: 'pink' },
  { label: 'TypeScript', color: 'sky' },
  { label: 'PostgreSQL', color: 'lav' },
  { label: 'MySQL', color: 'orange' },
  { label: 'Docker', color: 'sky' },
  { label: 'AWS', color: 'yellow' },
  { label: 'Git', color: 'orange' },
  { label: 'REST APIs', color: 'lime' },
  { label: 'WebSockets', color: 'pink' },
  { label: 'Figma', color: 'lav' },
  { label: 'Vite', color: 'yellow' },
  { label: 'Node.js', color: 'lime' },
];

const FEATURED = [
  { title: 'Momentum Habit Tracker', cat: 'Productivity', icon: 'check', color: 'var(--teal)', pill: 'lime', desc: 'Habit and task tracking with daily targets and progress heatmaps' },
];

const social = [
  { label: 'GitHub', url: 'https://github.com/prabath-23', handle: 'github.com/prabath-23', icon: 'github', color: 'var(--text-mid)' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/prabath-sai/', handle: 'linkedin.com/in/prabath-sai', icon: 'linkedin', color: 'var(--sky)' },
  { label: 'Instagram', url: 'https://instagram.com/prabath.chowdary', handle: '@prabath.chowdary', icon: 'instagram', color: 'var(--pink)' },
];

let obs;
let parallaxRaf;
let parallaxEls = [];
let parallaxOnScroll;
let parallaxOnPointerMove;
let parallaxOnResize;
let targetScrollY = 0;
let currentScrollY = 0;
let targetMouseX = 0;
let targetMouseY = 0;
let currentMouseX = 0;
let currentMouseY = 0;
let bentoResizeObs;
let bentoRaf;

const initBentoStagger = async () => {
  await nextTick();
  const grid = bentoGridEl.value;
  if (!grid) return;
  const children = Array.from(grid.children || []);
  children.forEach((el, i) => {
    el.style.setProperty('--reveal-i', String(i));
  });
};

const startBentoCounters = () => {
  if (countersStarted) return;
  countersStarted = true;

  if (prefersReducedMotion()) {
    yearsCoding.value = 4;
    projectsCount.value = 5;
    return;
  }

  cancelYears = animateNumber({
    from: 0,
    to: 4,
    durationMs: 900,
    onUpdate: (v) => (yearsCoding.value = Math.round(v)),
  });
  cancelProjects = animateNumber({
    from: 0,
    to: 5,
    durationMs: 900,
    onUpdate: (v) => (projectsCount.value = Math.round(v)),
  });
};

const updateBentoCell = () => {
  const grid = bentoGridEl.value;
  if (!grid) return;

  const styles = window.getComputedStyle(grid);
  const cols = Number(styles.getPropertyValue('--bento-cols')) || 6;
  const gap = Number.parseFloat(styles.getPropertyValue('--bento-gap')) || 12;
  const width = grid.clientWidth || 0;
  if (!width) return;

  const cell = (width - (cols - 1) * gap) / cols;
  grid.style.setProperty('--bento-cell', `${Math.max(1, cell).toFixed(2)}px`);
};

const scheduleBentoCellUpdate = () => {
  if (bentoRaf) return;
  bentoRaf = requestAnimationFrame(() => {
    bentoRaf = null;
    updateBentoCell();
  });
};

const initParallax = (root) => {
  if (!root) return;
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return;

  parallaxEls = Array.from(root.querySelectorAll('[data-parallax]'));
  if (!parallaxEls.length) return;

  const schedule = () => {
    if (parallaxRaf) return;
    parallaxRaf = requestAnimationFrame(() => {
      parallaxRaf = null;

      currentScrollY += (targetScrollY - currentScrollY) * 0.08;
      currentMouseX += (targetMouseX - currentMouseX) * 0.10;
      currentMouseY += (targetMouseY - currentMouseY) * 0.10;

      for (const el of parallaxEls) {
        const scrollSpeed = Number(el.dataset.scroll || 0);
        const mouseStrength = Number(el.dataset.mouse || 0);
        const rotateDeg = Number(el.dataset.rotate || 0);
        const scaleAmt = Number(el.dataset.scale || 0);
        const base = el.dataset.baseTransform || '';

        const tx = currentMouseX * mouseStrength * 28;
        const ty = -currentScrollY * scrollSpeed + currentMouseY * mouseStrength * 18;
        const rot = currentMouseX * rotateDeg;
        const s = 1 + (Math.abs(currentMouseX) + Math.abs(currentMouseY)) * 0.35 * scaleAmt;

        el.style.transform = `${base} translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) rotate(${rot.toFixed(2)}deg) scale(${s.toFixed(4)})`;
      }

      if (
        Math.abs(targetScrollY - currentScrollY) > 0.5 ||
        Math.abs(targetMouseX - currentMouseX) > 0.002 ||
        Math.abs(targetMouseY - currentMouseY) > 0.002
      ) {
        schedule();
      }
    });
  };

  parallaxOnScroll = () => {
    targetScrollY = window.scrollY || 0;
    schedule();
  };

  parallaxOnPointerMove = (e) => {
    if (window.matchMedia?.('(hover: none)')?.matches) return;
    const w = window.innerWidth || 1;
    const h = window.innerHeight || 1;
    targetMouseX = (e.clientX / w - 0.5) * 2;
    targetMouseY = (e.clientY / h - 0.5) * 2;
    schedule();
  };

  parallaxOnResize = () => schedule();

  window.addEventListener('scroll', parallaxOnScroll, { passive: true });
  window.addEventListener('pointermove', parallaxOnPointerMove, { passive: true });
  window.addEventListener('resize', parallaxOnResize, { passive: true });

  targetScrollY = window.scrollY || 0;
  schedule();
};

onMounted(() => {
  const root = rootEl.value;
  if (!root) return;

  initParallax(root);
  initBentoStagger();
  scheduleBentoCellUpdate();

  if (bentoGridEl.value && 'ResizeObserver' in window) {
    bentoResizeObs = new ResizeObserver(() => scheduleBentoCellUpdate());
    bentoResizeObs.observe(bentoGridEl.value);
  } else {
    window.addEventListener('resize', scheduleBentoCellUpdate, { passive: true });
  }

  obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const id = e.target.dataset.id;
        if (id) visible[id] = true;
        if (id === 'bento') startBentoCounters();
      });
    },
    { threshold: 0.1 }
  );

  root.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
});

onBeforeUnmount(() => {
  if (obs) obs.disconnect();
  cancelYears?.();
  cancelProjects?.();
  if (bentoResizeObs) bentoResizeObs.disconnect();
  else window.removeEventListener('resize', scheduleBentoCellUpdate);
  if (bentoRaf) cancelAnimationFrame(bentoRaf);
  if (parallaxRaf) cancelAnimationFrame(parallaxRaf);
  if (parallaxOnScroll) window.removeEventListener('scroll', parallaxOnScroll);
  if (parallaxOnPointerMove) window.removeEventListener('pointermove', parallaxOnPointerMove);
  if (parallaxOnResize) window.removeEventListener('resize', parallaxOnResize);
  parallaxEls.forEach((el) => {
    if (el?.style) el.style.transform = '';
  });
  parallaxEls = [];
});
</script>

<style scoped>
.home {
  position: relative;
  z-index: 10;
}

.home-inner {
  max-width: 1120px;
  margin: 0 auto;
}

.home-hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 52px 80px;
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

.home-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    linear-gradient(90deg, rgba(6,10,16,0.90) 0%, rgba(6,10,16,0.72) 44%, rgba(6,10,16,0.36) 100%),
    linear-gradient(180deg, rgba(6,10,16,0.28) 0%, rgba(6,10,16,0.78) 100%);
}

.home-hero::after {
  content: '';
  position: absolute;
  left: 52px;
  right: 52px;
  bottom: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.20), transparent);
  pointer-events: none;
}

.home-hero-inner {
  width: min(1180px, 100%);
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.96fr) minmax(420px, 0.74fr);
  gap: clamp(34px, 5vw, 78px);
  align-items: center;
}

.hero-copy {
  max-width: 760px;
}

.hero-badges,
.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.hero-badges {
  margin-bottom: 30px;
  animation: floatUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both;
}

.hero-actions {
  animation: floatUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.44s both;
}

.hero-dashboard {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-auto-rows: 112px;
  gap: 12px;
  animation: floatUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.55s both;
}

.dash-card {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(18,24,32,0.78), rgba(7,10,15,0.72));
  box-shadow: 0 22px 70px rgba(0,0,0,0.24);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.dash-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(255,255,255,0.042) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.032) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: linear-gradient(180deg, rgba(0,0,0,0.72), transparent 90%);
  pointer-events: none;
}

.dash-card > * {
  position: relative;
  z-index: 1;
}

.dash-card--main {
  grid-column: span 6;
  grid-row: span 4;
  padding: 28px;
  display: flex;
  flex-direction: column;
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
  max-width: 420px;
  font-family: var(--display);
  font-size: clamp(36px, 4.4vw, 58px);
  font-weight: 800;
  line-height: 0.96;
  letter-spacing: 0;
  margin-bottom: 18px;
}

.dash-card--main p {
  max-width: 440px;
  color: var(--text-mid);
  line-height: 1.75;
  font-weight: 300;
  margin-bottom: 22px;
}

.dash-screenshot {
  margin-top: auto;
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 12px;
  background: rgba(238,247,255,0.96);
  overflow: hidden;
  aspect-ratio: 4 / 3;
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
  padding: 18px;
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
  font-size: var(--text-2xl);
  line-height: 1;
  color: var(--text);
}

.dash-card--metric > span:last-child {
  color: var(--text-muted);
  font-size: var(--text-sm);
}

.dash-card--cta {
  color: var(--bg);
  background: linear-gradient(180deg, #ffe95c, var(--yellow));
  border-color: rgba(230,194,0,0.55);
}

.dash-card--cta span,
.dash-card--cta strong {
  color: #080a0f;
}

.home-marquee {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 20px 0;
  overflow: hidden;
  position: relative;
}

.home-marquee-fade {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 60px;
  z-index: 2;
  pointer-events: none;
}
.home-marquee-fade--left {
  left: 0;
  background: linear-gradient(to right, var(--bg), transparent);
}
.home-marquee-fade--right {
  right: 0;
  background: linear-gradient(to left, var(--bg), transparent);
}

.home-section {
  padding: 100px 52px 80px;
}

.home-projects {
  padding: 80px 52px;
  border-top: 1px solid var(--border);
}

.home-contact {
  border-top: 1px solid var(--border);
}

.home-all-projects-link,
.home-project-link {
  font-family: var(--mono);
  font-size: var(--text-xs);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: color 0.25s, transform 0.2s, gap 0.2s;
  cursor: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.home-all-projects-link {
  color: var(--text-muted);
}
.home-all-projects-link:hover,
.home-all-projects-link:focus-visible {
  color: var(--yellow);
}

.home-project-link:hover,
.home-project-link:focus-visible {
  transform: translateY(-1px);
}

#about,
#contact {
  scroll-margin-top: 96px;
}

@media (max-width: 768px) {
  .home-hero {
    min-height: auto;
    padding: 116px 24px 64px;
  }
  .home-hero::before {
    background:
      linear-gradient(180deg, rgba(6,10,16,0.90) 0%, rgba(6,10,16,0.70) 45%, rgba(6,10,16,0.94) 100%);
  }
  .home-hero::after {
    left: 24px;
    right: 24px;
  }
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .hero-badges {
    gap: 8px;
    margin-bottom: 24px;
  }
  .hero-title {
    font-size: clamp(54px, 15vw, 72px);
    margin-bottom: 22px;
  }
  .hero-role {
    font-size: clamp(22px, 7vw, 30px);
    margin-top: 10px;
  }
  .hero-lede {
    font-size: var(--text-lg);
    line-height: 1.75;
    margin-bottom: 28px;
  }
  .hero-actions > * {
    flex: 1 1 160px;
  }
  .hero-dashboard {
    grid-auto-rows: 96px;
    gap: 10px;
  }
  .dash-card--main {
    padding: 22px;
    grid-row: span 4;
  }
  .dash-card--main h2 {
    font-size: 34px;
  }
  .dash-card--metric,
  .dash-card--cta {
    grid-column: span 3;
    padding: 16px;
  }
  .dash-card--metric strong,
  .dash-card--cta strong {
    font-size: var(--text-xl);
  }
  .home-section {
    padding: 56px 24px;
  }
  .home-projects {
    padding: 56px 24px;
  }
}
</style>
