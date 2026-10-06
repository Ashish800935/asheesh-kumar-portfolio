import { motion } from 'framer-motion';
import {
  Sparkles,
  BarChart3,
  Brain,
  Database,
  Server,
  Cpu,
  Search,
  Bot,
  MessageSquareText,
} from 'lucide-react';

// Shared icon lookup so data files can reference icons by plain string.
export const iconMap = {
  sparkles: Sparkles,
  chart: BarChart3,
  brain: Brain,
  database: Database,
  server: Server,
  cpu: Cpu,
  search: Search,
  bot: Bot,
  message: MessageSquareText,
};

export default function SkillCard({ category, index = 0 }) {
  const Icon = iconMap[category.icon] || Sparkles;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -4 }}
      className="card p-6 transition-colors hover:border-cyan-400/30"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-300">
          <Icon size={20} />
        </span>
        <h3 className="text-lg font-semibold text-white">{category.title}</h3>
      </div>
      <ul className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <li key={skill} className="badge transition-colors hover:border-cyan-400/40 hover:text-white">
            {skill}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
