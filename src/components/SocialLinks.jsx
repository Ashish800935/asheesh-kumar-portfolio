import { Github, Linkedin } from 'lucide-react';
import { socials } from '../data/portfolio.js';

// lucide has no LeetCode logo, so a small inline SVG is used.
function LeetCodeIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 3 6.5 12.5a2.5 2.5 0 0 0 0 3.5L11 20.5a2.5 2.5 0 0 0 3.5 0L17 18" />
      <path d="M11 12h9" />
    </svg>
  );
}

const items = [
  { label: 'GitHub', href: socials.github, Icon: Github },
  { label: 'LinkedIn', href: socials.linkedin, Icon: Linkedin },
  { label: 'LeetCode', href: socials.leetcode, Icon: LeetCodeIcon },
];

export default function SocialLinks({ showLabels = false, className = '' }) {
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {items.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-white"
          >
            <Icon size={18} />
            {showLabels && <span>{label}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
