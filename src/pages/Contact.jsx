import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';
import { personal, socials } from '../data/portfolio.js';

const cards = [
  { label: 'Email', value: personal.email, href: `mailto:${personal.email}`, Icon: Mail },
  { label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}`, Icon: Phone },
  { label: 'GitHub', value: 'github.com/Ashish800935', href: socials.github, Icon: Github, external: true },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/asheesh-kumar-b24284239',
    href: socials.linkedin,
    Icon: Linkedin,
    external: true,
  },
];

const fieldClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400/60 focus:bg-white/[0.06]';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  // No backend: opens the visitor's own email client with the message pre-filled.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio message from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="mx-auto max-w-6xl px-5 pt-12 sm:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <p className="eyebrow">Contact</p>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Let&apos;s Build Something <span className="gradient-text">Intelligent.</span>
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          I&apos;m interested in opportunities involving AI, Machine Learning, NLP, Generative AI,
          and intelligent applications.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {cards.map(({ label, value, href, Icon, external }, i) => (
            <motion.a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              whileHover={{ y: -3 }}
              className="card flex items-center gap-4 p-5 transition-colors hover:border-cyan-400/30"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-300">
                <Icon size={20} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-widest text-slate-500">{label}</span>
                <span className="block break-words text-sm font-medium text-white">{value}</span>
              </span>
            </motion.a>
          ))}
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card space-y-4 p-6"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={update('name')}
              placeholder="Your name"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={update('email')}
              placeholder="you@example.com"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={update('message')}
              placeholder="How can I help?"
              className={`${fieldClass} resize-none`}
            />
          </div>
          <motion.button whileTap={{ scale: 0.98 }} type="submit" className="btn-primary w-full">
            <Send size={16} /> Send Message
          </motion.button>
          <p className="text-center text-xs text-slate-500">
            This opens your email app with the message pre-filled. Nothing is sent to a server.
          </p>
        </motion.form>
      </div>
    </div>
  );
}
