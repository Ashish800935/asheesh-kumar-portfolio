import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/portfolio.js';

export default function Education() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-12 sm:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow">Education</p>
        <h1 className="section-title">
          Academic <span className="gradient-text">Journey</span>
        </h1>
      </motion.div>

      <ol className="relative mt-12 border-l border-white/15 pl-8">
        {education.map((item, i) => (
          <motion.li
            key={item.period}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative mb-10 last:mb-0"
          >
            <span className="absolute -left-[46px] top-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/40 bg-ink-900 text-cyan-300">
              <GraduationCap size={16} />
            </span>
            <div className="card p-6 transition-colors hover:border-cyan-400/30">
              <p className="font-mono text-sm text-cyan-300/80">{item.period}</p>
              <h2 className="mt-1 text-xl font-bold text-white">{item.school}</h2>
              <p className="mt-1 text-slate-300">{item.degree}</p>
              <p className="mt-2 text-sm font-medium text-slate-400">{item.score}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
