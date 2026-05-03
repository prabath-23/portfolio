<template>
  <div class="page">
    <div class="page-header">
      <div class="page-inner">
        <div :style="{ width: '44px', height: '1px', background: 'var(--teal)', marginBottom: '16px' }" />
        <p class="section-label">Portfolio</p>
        <div class="page-title-row">
          <div>
            <h1 class="section-title">Projects</h1>
            <p class="page-subtitle">Selected product work from Prabath Sai, focused on clear user flows, practical engineering, and polished delivery.</p>
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

          <div class="project-detail-grid">
            <div>
              <span>Problem solved</span>
              <p>{{ p.problem }}</p>
            </div>
            <div>
              <span>Key features</span>
              <ul>
                <li v-for="feature in p.features" :key="feature">{{ feature }}</li>
              </ul>
            </div>
          </div>

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

const HABIT_TRACKER_PROJECT = {
  id: 'momentum-habit-tracker',
  title: 'Momentum Habit Tracker',
  category: 'Productivity · React',
  description:
    'A habit and task dashboard designed to make daily consistency visible, measurable, and easy to maintain.',
  problem:
    'Habit tools often hide progress behind too many screens. Momentum keeps today’s action, target progress, and long-term consistency in one fast dashboard.',
  features: [
    'Daily habit and task check-ins',
    'Target tracking for measurable routines',
    'Week, month, and year progress heatmaps',
    'Responsive interface built for quick scanning',
  ],
  tech: ['React', 'Vite', 'Tailwind CSS'],
  year: '2026',
  featured: true,
  githubUrl: 'https://github.com/prabath-23',
  liveUrl: import.meta.env.VITE_HABIT_TRACKER_URL || 'https://momentum.prabath.in',
  liveTarget: '_self',
  color: '#00d4aa',
};

const projects = ref([HABIT_TRACKER_PROJECT]);
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
