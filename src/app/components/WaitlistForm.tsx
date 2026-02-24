'use client';

import { useState, FormEvent } from 'react';

export default function WaitlistForm({ variant = 'hero' }: { variant?: 'hero' | 'cta' }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }
    const existing = JSON.parse(localStorage.getItem('koyo_waitlist') || '[]');
    if (!existing.includes(email)) {
      existing.push(email);
      localStorage.setItem('koyo_waitlist', JSON.stringify(existing));
    }
    setSubmitted(true);
    setError('');
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 px-6 py-4">
        <span className="text-2xl">✨</span>
        <div>
          <p className="font-semibold text-emerald-400">You&apos;re on the list!</p>
          <p className="text-sm text-zinc-400">We&apos;ll be in touch soon.</p>
        </div>
      </div>
    );
  }

  const isHero = variant === 'hero';

  return (
    <form onSubmit={handleSubmit} className={`flex ${isHero ? 'flex-col sm:flex-row' : 'flex-col sm:flex-row'} gap-3 w-full max-w-lg`}>
      <input
        type="email"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setError(''); }}
        placeholder="Enter your school email"
        className="flex-1 rounded-xl bg-white/10 border border-white/20 px-5 py-3.5 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent backdrop-blur-sm"
      />
      <button
        type="submit"
        className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 whitespace-nowrap cursor-pointer"
      >
        Get Early Access
      </button>
      {error && <p className="text-red-400 text-sm mt-1 sm:absolute sm:bottom-[-24px]">{error}</p>}
    </form>
  );
}
