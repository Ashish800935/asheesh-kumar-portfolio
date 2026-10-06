import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, projectFilters } from '../data/portfolio.js';
import ProjectCard from '../components/ProjectCard.jsx';

export default function Projects() {
  const [active, setActive] = useState('All');

  const visible = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.categories.includes(active))),
    [active]
  );

  return (
    <div className="mx-auto max-w-6xl px-5 pt-12 sm:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <p className="eyebrow">Projects</p>
        <h1 className="section-title">
          Things I&apos;ve <span className="gradient-text">Built</span>
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          End-to-end AI and NLP projects, from modelling to deployment.
        </p>
      </motion.div>

      <div role="tablist" aria-label="Filter projects" className="mt-8 flex flex-wrap gap-2">
        {projectFilters.map((f) => {
          const isActive = f === active;
          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'border-cyan-400/50 bg-cyan-400/10 text-white'
                  : 'border-white/10 text-slate-400 hover:border-white/30 hover:text-white'
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-8 grid gap-6 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
