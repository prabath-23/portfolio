<template>
  <div class="page">
    <div class="page-header">
      <div class="page-inner">
        <div :style="{ width: '44px', height: '1px', background: 'var(--teal)', marginBottom: '16px' }" />
        <p class="section-label">Portfolio</p>
        <div class="page-title-row">
          <div>
            <h1 class="section-title">Projects</h1>
            <p class="page-subtitle">A small set of things I’ve built across realtime systems, product interfaces, and interactive UI.</p>
          </div>
        </div>

        <div class="page-tools">
          <input v-model.trim="query" class="input" placeholder="Search projects…" :style="{ maxWidth: '320px' }" />
          <div class="chips">
            <button
              v-for="cat in categories"
              :key="cat"
              class="chip"
              :class="{ active: filter === cat }"
              @click="filter = cat"
            >
              {{ cat }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="page-body">
      <div class="page-inner">
      <div
        v-if="loading"
        :style="{
          textAlign: 'center',
          padding: '80px 0',
          fontFamily: 'var(--mono)',
          fontSize: 'var(--text-xs)',
          color: 'var(--text-muted)',
          letterSpacing: '0.15em',
        }"
      >
        Loading projects...
      </div>
      <div
        v-else-if="filtered.length === 0"
        :style="{
          textAlign: 'center',
          padding: '80px 0',
          fontFamily: 'var(--mono)',
          fontSize: 'var(--text-sm)',
          color: 'var(--text-muted)',
        }"
      >
        No projects in "{{ filter }}" yet.
      </div>
      <div
        v-else
        class="cards-grid"
      >
        <article
          v-for="(p, i) in filtered"
          :key="p.id || p.title"
          class="card project-card"
          :class="{ 'project-card--spotlight': p.id === 'momentum-habit-tracker' }"
          :style="{
            '--accent': p.color,
            animation: `riseUp 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s both`,
          }"
        >
          <div class="project-kicker">
            <div class="project-badges">
              <span class="badge" :style="{ borderColor: 'rgba(255,255,255,0.10)', color: p.color }">{{ p.category }}</span>
              <span v-if="p.featured" class="badge featured">Featured</span>
              <span v-if="p.id === 'momentum-habit-tracker'" class="badge live">Live</span>
            </div>
            <span :style="{ fontFamily: 'var(--mono)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', letterSpacing: '0.12em' }">
              {{ p.year }}
            </span>
          </div>

          <h2
            class="project-title"
            :style="{ marginBottom: '14px', color: 'var(--text)' }"
          >
            {{ p.title }}
          </h2>

          <p
            class="project-desc"
            :style="{ marginBottom: '22px' }"
          >
            {{ p.description }}
          </p>

          <div class="u-flex u-wrap u-gap-1 u-mb-7">
            <span v-for="t in p.tech" :key="t" class="tag">{{ t }}</span>
          </div>

          <div class="project-links">
            <a
              v-if="p.githubUrl && p.githubUrl !== '#'"
              :href="p.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              v-if="p.liveUrl && p.liveUrl !== '#'"
              :href="p.liveUrl"
              :target="p.liveTarget || '_blank'"
              rel="noopener noreferrer"
            >
              Live Demo ↗
            </a>
          </div>
        </article>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const FALLBACK_PROJECTS = [
  {
    id: 1,
    title: 'Spring Commerce',
    category: 'Full Stack · Java',
    description:
      'A production-grade e-commerce platform built on Spring Boot with JPA, JWT auth, and a React storefront. Handles 10k+ daily transactions.',
    tech: ['Spring Boot', 'React', 'PostgreSQL', 'Docker', 'Redis'],
    year: '2026',
    featured: true,
    githubUrl: '#',
    liveUrl: '#',
    color: '#00d4aa',
  },
  {
    id: 2,
    title: 'DevTrack',
    category: 'SaaS · Realtime',
    description:
      'Real-time project management SaaS with WebSocket-powered task boards, team dashboards, and Slack/Jira integrations.',
    tech: ['Java', 'WebSockets', 'TypeScript', 'PostgreSQL', 'AWS'],
    year: '2026',
    featured: true,
    githubUrl: '#',
    liveUrl: '#',
    color: '#ff6b35',
  },
  {
    id: 3,
    title: 'Neural Notes',
    category: 'AI · Full Stack',
    description:
      'An AI-enhanced note-taking app with semantic search, auto-tagging, and a mind-map view. Spring Boot + React + OpenAI.',
    tech: ['Spring AI', 'React', 'Three.js', 'OpenAI', 'MongoDB'],
    year: '2026',
    featured: true,
    githubUrl: '#',
    liveUrl: '#',
    color: '#8b7aff',
  },
];

const HABIT_TRACKER_PROJECT = {
  id: 'momentum-habit-tracker',
  title: 'Momentum Habit Tracker',
  category: 'Productivity · React',
  description:
    'A polished habit and task tracker with daily marking, targets, and week, month, and year progress heatmaps.',
  tech: ['React', 'Vite', 'Tailwind CSS'],
  year: '2026',
  featured: true,
  githubUrl: '#',
  liveUrl: import.meta.env.VITE_HABIT_TRACKER_URL || 'http://localhost:5173',
  liveTarget: '_self',
  color: '#00d4aa',
};

const projects = ref([HABIT_TRACKER_PROJECT, ...FALLBACK_PROJECTS]);
const loading = ref(false);
const filter = ref('all');
const query = ref('');

const categories = computed(() => {
  const cats = projects.value.map((p) => (p.category || '').split(' · ')[0].toLowerCase()).filter(Boolean);
  return ['all', ...Array.from(new Set(cats))];
});

const filtered = computed(() => {
  const q = (query.value || '').toLowerCase().trim();
  const byCat = filter.value === 'all'
    ? projects.value
    : projects.value.filter((p) => (p.category || '').toLowerCase().includes(filter.value));

  if (!q) return byCat;
  return byCat.filter((p) => {
    const hay = [
      p.title,
      p.category,
      p.description,
      Array.isArray(p.tech) ? p.tech.join(' ') : '',
      p.year,
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    return hay.includes(q);
  });
});

// Link styling moved to global.css (.project-links a)
</script>
