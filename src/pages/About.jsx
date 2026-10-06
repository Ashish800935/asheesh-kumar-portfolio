import { motion } from 'framer-motion';
import { about } from '../data/portfolio.js';
import { iconMap } from '../components/SkillCard.jsx';

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-12 sm:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <p className="eyebrow">About</p>
        <h1 className="section-title">
          About <span className="gradient-text">Me</span>
        </h1>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-400">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </motion.div>

      <div className="mt-16">
        <p className="eyebrow">Focus</p>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">What I Build</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {about.whatIBuild.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                whileHover={{ y: -4 }}
                className="card flex items-center gap-4 p-5 transition-colors hover:border-cyan-400/30"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-300">
                  <Icon size={22} />
                </span>
                <span className="font-semibold text-white">{item.title}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
