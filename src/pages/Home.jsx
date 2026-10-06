import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Download } from 'lucide-react';
import { personal, techStrip } from '../data/portfolio.js';
import SocialLinks from '../components/SocialLinks.jsx';

function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80">
      {/* soft glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 to-violet-500/30 blur-3xl" />

      {/* slow orbiting ring */}
      <div className="absolute -inset-4 animate-orbit">
        <div className="h-full w-full rounded-full border border-dashed border-cyan-300/25" />
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
      </div>

      {/* gradient border */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300 via-sky-500 to-violet-500 p-[3px]">
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-ink-900">
          {failed ? (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-ink-800 to-ink-700 text-slate-400">
              <User size={72} strokeWidth={1.25} />
              <span className="font-mono text-xs tracking-widest">AK</span>
            </div>
          ) : (
            <img
              src={personal.photo}
              alt={personal.name}
              width="320"
              height="320"
              onError={() => setFailed(true)}
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const strip = [...techStrip, ...techStrip];

  return (
    <>
      <section className="relative overflow-hidden">
        {/* animated gradient orbs */}
        <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 animate-float rounded-full bg-violet-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-40 h-72 w-72 animate-float rounded-full bg-cyan-500/15 blur-3xl [animation-delay:-6s]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 md:grid-cols-[1.15fr_1fr] md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 text-center md:order-1 md:text-left"
          >
            <span className="badge gap-2 border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Open to Opportunities
            </span>

            <p className="mt-6 text-lg text-slate-400">Hi, I&apos;m {personal.name}</p>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="gradient-text">AI/ML</span> &amp; Generative AI Developer
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg md:mx-0">
              {personal.tagline}
            </p>

            <div className="mt-8 flex flex-col flex-wrap justify-center gap-3 sm:flex-row md:justify-start">
              <Link to="/projects" className="btn-primary">
                View My Projects
              </Link>
              <Link to="/contact" className="btn-ghost">
                Let&apos;s Connect
              </Link>
              <a
                href={personal.resume}
                download="Asheesh_Kumar_Resume.pdf"
                className="btn-ghost"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>

            <SocialLinks className="mt-8 justify-center md:justify-start" showLabels />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <ProfilePhoto />
          </motion.div>
        </div>
      </section>

      {/* technology strip */}
      <section aria-label="Core technologies" className="border-y border-white/10 bg-white/[0.02] py-5">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
            {strip.map((item, i) => (
              <span key={`${item}-${i}`} className="flex items-center gap-10 font-mono text-sm text-slate-400">
                {item}
                <span className="text-cyan-300/60">•</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
