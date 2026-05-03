<template>
  <div ref="rootEl" class="home">
    <section class="home-hero">
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

          <aside class="hero-dashboard" aria-label="Momentum Habit Tracker project preview">
            <div class="dash-card dash-card--main">
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

            <div class="dash-card dash-card--metric">
              <span class="dash-label">Role</span>
              <strong>Builder</strong>
              <span>Product + engineering</span>
            </div>

            <div class="dash-card dash-card--metric">
              <span class="dash-label">Stack</span>
              <strong>React</strong>
              <span>Vite + Tailwind</span>
            </div>

            <a href="https://momentum.prabath.in" class="dash-card dash-card--cta">
              <span>Open live app</span>
              <strong>Launch Momentum</strong>
            </a>
          </aside>
        </div>
      </div>
    </section>

    <section id="about" class="home-section">
      <div class="home-inner split-section">
        <div>
          <div class="section-chip">Profile</div>
          <h2 class="section-title">Developer craft, product judgment.</h2>
        </div>
        <div class="section-copy">
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

    <section class="home-section home-projects">
      <div class="home-inner">
        <div class="section-row section-row--project">
          <div>
            <div class="section-chip">Featured Project</div>
            <h2 class="section-title">Momentum Habit Tracker</h2>
          </div>
          <RouterLink to="/projects" class="section-action">View case study</RouterLink>
        </div>

        <article class="feature-project-card">
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
              <a href="https://momentum.prabath.in">Live demo ↗</a>
              <a href="https://github.com/prabath-23">GitHub ↗</a>
            </div>
          </div>
          <div class="feature-project-media">
            <img src="/assets/habit-tracker-dashboard.png" alt="Momentum Habit Tracker dashboard preview" />
          </div>
        </article>
      </div>
    </section>

    <section class="home-section">
      <div class="home-inner">
        <div class="section-row">
          <div>
            <div class="section-chip">Skills / Tech Stack</div>
            <h2 class="section-title">Tools used to ship practical products.</h2>
          </div>
        </div>

        <div class="stack-grid">
          <div
            v-for="group in STACK_GROUPS"
            :key="group.title"
            class="stack-card"
            :style="{ '--stack-color': group.color }"
          >
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

    <section class="home-section">
      <div class="home-inner">
        <div class="section-row">
          <div>
            <div class="section-chip">Work Highlights</div>
            <h2 class="section-title">How Prabath creates value.</h2>
          </div>
        </div>

        <div class="highlights-grid">
          <div v-for="item in WORK_HIGHLIGHTS" :key="item.title" class="highlight-card">
            <span>{{ item.kicker }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.copy }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="home-section home-contact">
      <div class="home-inner">
        <div class="reveal glass contact-card visible" data-id="contact">
          <div>
            <div class="section-chip">Contact</div>
            <h2 class="contact-title">Have a product, role, or idea worth building?</h2>
            <p class="contact-copy">
              Reach out for frontend, Java backend, full-stack product work, or engineering
              conversations. I’m especially interested in teams that care about craft and momentum.
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
import FloatBadge from '../components/FloatBadge.vue';
import Icon from '../components/Icon.vue';

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

.home-section {
  padding: 108px 52px;
  border-top: 1px solid rgba(255,255,255,0.08);
  scroll-margin-top: 96px;
}

.home-section + .home-section {
  padding-top: 116px;
}

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
    linear-gradient(90deg, rgba(6,10,16,0.93) 0%, rgba(6,10,16,0.72) 46%, rgba(6,10,16,0.40) 100%),
    linear-gradient(180deg, rgba(6,10,16,0.22) 0%, rgba(6,10,16,0.82) 100%);
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
    rgba(6,10,16,0) 0%,
    rgba(6,10,16,0.58) 58%,
    rgba(6,10,16,0.98) 100%
  );
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
}

.hero-kicker {
  font-family: var(--mono);
  color: var(--yellow);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: var(--text-xs);
  margin-bottom: 16px;
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
}

.hero-lede {
  max-width: 620px;
  margin-bottom: 30px;
  font-size: clamp(15px, 1vw, 18px);
  line-height: 1.72;
  color: rgba(232,239,250,0.92);
  font-weight: 400;
}

.hero-dashboard {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-auto-rows: 108px;
  gap: 12px;
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
  padding: 26px;
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
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 12px;
  background: rgba(238,247,255,0.96);
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
  border-color: rgba(230,194,0,0.55);
}

.dash-card--cta span,
.dash-card--cta strong {
  color: #080a0f;
}

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
  border: 1px solid rgba(0,214,126,0.28);
  border-radius: 8px;
  background: rgba(0,214,126,0.08);
  color: var(--lime);
  font-family: var(--mono);
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: transform .2s, border-color .2s, background .2s;
}

.section-action:hover {
  transform: translateY(-2px);
  border-color: rgba(0,214,126,0.48);
  background: rgba(0,214,126,0.13);
}

.section-copy {
  color: rgba(214,225,241,0.88);
  font-size: var(--text-base);
  line-height: 1.72;
  width: min(720px, 100%);
  margin-left: auto;
  padding: 26px;
  border: 1px solid rgba(255,255,255,0.10);
  border-radius: 12px;
  background:
    linear-gradient(180deg, rgba(10,15,22,0.88), rgba(7,10,15,0.78));
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
  border-top: 1px solid rgba(255,255,255,0.10);
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

.proof-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 24px;
}

.proof-card,
.stack-card,
.highlight-card,
.feature-project-card {
  background: linear-gradient(180deg, rgba(20,26,34,0.74), rgba(8,12,18,0.78));
  border: 1px solid rgba(255,255,255,0.10);
  border-radius: 12px;
}

.proof-card {
  padding: 18px;
}

.proof-card strong {
  display: block;
  font-family: var(--display);
  color: var(--text);
  font-size: var(--text-xl);
  margin-bottom: 8px;
}

.proof-card span {
  color: var(--text-muted);
  line-height: 1.55;
}

.feature-project-card {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(360px, 1fr);
  gap: 28px;
  padding: 28px;
  border-color: rgba(0,212,170,0.22);
}

.feature-project-copy h3 {
  margin: 20px 0 14px;
  font-family: var(--display);
  font-size: clamp(28px, 3vw, 44px);
  line-height: 1.05;
}

.feature-project-copy p {
  color: rgba(214,225,241,0.88);
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

.feature-project-media {
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 10px;
  overflow: hidden;
  background: rgba(238,247,255,0.96);
}

.feature-project-media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: top center;
}

.stack-grid,
.highlights-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.stack-card,
.highlight-card {
  padding: 26px;
}

.stack-card {
  position: relative;
  overflow: hidden;
  border-color: color-mix(in srgb, var(--stack-color) 28%, rgba(255,255,255,0.12));
  background:
    radial-gradient(260px circle at 18% 0%, color-mix(in srgb, var(--stack-color) 18%, transparent), transparent 68%),
    linear-gradient(180deg, rgba(20,26,34,0.78), rgba(8,12,18,0.82));
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
}

.highlight-card span {
  font-family: var(--mono);
  color: var(--yellow);
  letter-spacing: 0.14em;
}

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

@media (max-width: 900px) {
  .hero-grid,
  .split-section,
  .feature-project-card,
  .stack-grid,
  .highlights-grid {
    grid-template-columns: 1fr;
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

  .proof-grid {
    grid-template-columns: 1fr;
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

  .feature-project-media {
    min-height: 240px;
  }
}
</style>
