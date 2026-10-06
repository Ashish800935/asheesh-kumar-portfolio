import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolio.js';
import SkillCard from '../components/SkillCard.jsx';

export default function Skills() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-12 sm:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <p className="eyebrow">Skills</p>
        <h1 className="section-title">
          Tools &amp; <span className="gradient-text">Technologies</span>
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          The stack I use to build, evaluate, and deploy AI applications.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => (
          <SkillCard key={category.title} category={category} index={i} />
        ))}
      </div>
    </div>
  );
}
