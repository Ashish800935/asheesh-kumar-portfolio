import { personal } from '../data/portfolio.js';
import SocialLinks from './SocialLinks.jsx';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-lg font-bold text-white">{personal.name}</p>
          <p className="mt-1 text-sm text-slate-400">{personal.footerTagline}</p>
        </div>
        <SocialLinks showLabels />
      </div>
      <p className="pb-8 text-center text-xs text-slate-500">
        © 2026 {personal.name}
      </p>
    </footer>
  );
}
