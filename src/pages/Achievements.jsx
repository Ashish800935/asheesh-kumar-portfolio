import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { achievements, socials } from '../data/portfolio.js';

export default function Achievements() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-12 sm:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <p className="eyebrow">Achievements</p>
        <h1 className="section-title">
          Problem Solving <span className="gradient-text">Track Record</span>
        </h1>
      </motion.div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {achievements.stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            whileHover={{ y: -4 }}
            className="card p-8 text-center transition-colors hover:border-cyan-400/30"
          >
            <p className="gradient-text text-6xl font-extrabold tracking-tight sm:text-7xl">{s.value}</p>
            <p className="mt-3 text-slate-400">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-lg text-slate-300">
        {achievements.statement}
      </p>

      <div className="mt-8 flex justify-center">
        <a href={socials.leetcode} target="_blank" rel="noopener noreferrer" className="btn-primary">
          View LeetCode Profile <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}
