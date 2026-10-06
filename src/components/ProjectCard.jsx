import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';

// Abstract, clearly-illustrative preview shown when no real screenshot exists.
// These are NOT screenshots of the apps.
function AbstractVisual({ type }) {
  const bar = 'rounded-full bg-white/15';
  if (type === 'rag') {
    return (
      <div className="flex h-full w-full items-center justify-center gap-3 px-6">
        <div className="space-y-2">
          <div className={`h-2 w-16 ${bar}`} />
          <div className={`h-2 w-10 ${bar}`} />
        </div>
        <div className="h-px w-8 bg-white/30" />
        <div className="grid grid-cols-3 gap-1.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className={`h-3 w-3 rounded-full ${i % 4 === 0 ? 'bg-cyan-300/80' : 'bg-white/20'}`}
            />
          ))}
        </div>
        <div className="h-px w-8 bg-white/30" />
        <div className="space-y-2 rounded-lg border border-white/15 bg-white/[0.05] p-3">
          <div className={`h-2 w-20 ${bar}`} />
          <div className={`h-2 w-14 ${bar}`} />
          <div className="h-2 w-16 rounded-full bg-violet-300/60" />
        </div>
      </div>
    );
  }
  if (type === 'pairs') {
    return (
      <div className="flex h-full w-full items-center justify-center gap-4 px-6">
        <div className="w-28 space-y-2 rounded-lg border border-white/15 bg-white/[0.05] p-3">
          <div className={`h-2 w-full ${bar}`} />
          <div className={`h-2 w-3/4 ${bar}`} />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-cyan-300/80" />
          <span className="h-6 w-px bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-violet-300/80" />
        </div>
        <div className="w-28 space-y-2 rounded-lg border border-white/15 bg-white/[0.05] p-3">
          <div className={`h-2 w-full ${bar}`} />
          <div className={`h-2 w-2/3 ${bar}`} />
        </div>
      </div>
    );
  }
  return (
    <div className="flex h-full w-full items-end justify-center gap-2 px-8 pb-6">
      {[40, 70, 30, 55, 85, 45].map((h, i) => (
        <div
          key={i}
          style={{ height: `${h}%` }}
          className={`w-6 rounded-t-md ${i === 4 ? 'bg-cyan-300/70' : 'bg-white/20'}`}
        />
      ))}
    </div>
  );
}

function Preview({ project }) {
  const [failed, setFailed] = useState(false);
  const showImage = project.image && !failed;

  return (
    <div
      className={`relative h-48 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${project.gradient}`}
    >
      {showImage ? (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
          <AbstractVisual type={project.visual} />
        </div>
      )}
    </div>
  );
}

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.45, delay: Math.min(index, 2) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group card flex flex-col gap-5 p-5 transition-colors hover:border-cyan-400/40 hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.35)] sm:p-6"
    >
      <Preview project={project} />

      <div>
        <div className="mb-2 flex flex-wrap gap-2">
          {project.categories.map((c) => (
            <span key={c} className="font-mono text-[11px] uppercase tracking-widest text-cyan-300/80">
              {c}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {project.metrics.map((m) => (
          <div key={m.label} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2">
            <p className="gradient-text text-lg font-bold leading-tight">{m.value}</p>
            <p className="text-xs text-slate-400">{m.label}</p>
          </div>
        ))}
      </div>

      <ul className="grid grid-cols-1 gap-x-4 gap-y-1.5 sm:grid-cols-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm text-slate-300">
            <Check size={15} className="mt-0.5 shrink-0 text-cyan-300" />
            {h}
          </li>
        ))}
      </ul>

      <ul className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li key={t} className="badge">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-3 pt-1">
        <motion.a
          whileTap={{ scale: 0.97 }}
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex-1 sm:flex-none"
        >
          Live Demo <ArrowUpRight size={16} />
        </motion.a>
        <motion.a
          whileTap={{ scale: 0.97 }}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost flex-1 sm:flex-none"
        >
          GitHub <ArrowUpRight size={16} />
        </motion.a>
      </div>
    </motion.article>
  );
}
