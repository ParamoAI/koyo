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
      <div className="flex items-center gap-3 rounded-2xl bg-koyo-600/10 border border-koyo-500/30 px-6 py-4">
        <span className="text-2xl">✨</span>
        <div>
          <p className="font-semibold text-koyo-300">You&apos;re on the list!</p>
          <p className="text-sm text-koyo-400">We&apos;ll be in touch soon.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
      <input
        type="email"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setError(''); }}
        placeholder="Enter your school email"
        className="flex-1 rounded-xl bg-koyo-800/60 border border-koyo-700/40 px-5 py-3.5 text-koyo-50 placeholder:text-koyo-500 focus:outline-none focus:ring-2 focus:ring-koyo-500 focus:border-transparent backdrop-blur-sm"
      />
      <button
        type="submit"
        className="rounded-xl bg-koyo-600 hover:bg-koyo-500 px-8 py-3.5 font-semibold text-koyo-50 shadow-lg shadow-koyo-600/20 hover:shadow-koyo-500/30 transition-all duration-300 whitespace-nowrap cursor-pointer"
      >
        Get Early Access
      </button>
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </form>
  );
}
