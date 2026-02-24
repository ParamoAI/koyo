import FadeIn from './components/FadeIn';
import WaitlistForm from './components/WaitlistForm';
import Counter from './components/Counter';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-zinc-950/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-amber-400 flex items-center justify-center font-bold text-sm">K</div>
            <span className="text-xl font-bold tracking-tight">Koyo</span>
          </div>
          <a href="#waitlist" className="text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors">
            Join Waitlist →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/50 via-zinc-950 to-indigo-950/30 animate-gradient" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/20 px-4 py-2 text-sm text-violet-300 mb-8">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              Now accepting early access signups
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              AI that meets every student{' '}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                where they are.
              </span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              From AI literacy curriculum to intelligent IEP tools — Koyo gives teachers 
              superpowers and every K-12 student a personalized path to thrive.
            </p>
          </FadeIn>
          
          <FadeIn delay={300}>
            <div className="flex justify-center">
              <WaitlistForm variant="hero" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Problem */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-violet-400 font-semibold text-sm tracking-wider uppercase mb-4">The Problem</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              7 million students with IEPs<br />
              <span className="text-zinc-500">deserve better tools.</span>
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <FadeIn delay={0}>
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8 hover:bg-white/[0.05] transition-colors">
                <div className="text-4xl font-bold text-amber-400 mb-3">8+ hrs</div>
                <p className="text-zinc-400 leading-relaxed">
                  Average time to write a single IEP. Teachers spend more time on paperwork than teaching.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8 hover:bg-white/[0.05] transition-colors">
                <div className="text-4xl font-bold text-amber-400 mb-3">73%</div>
                <p className="text-zinc-400 leading-relaxed">
                  of special ed teachers report burnout. The tools they use were designed in the 90s.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8 hover:bg-white/[0.05] transition-colors">
                <div className="text-4xl font-bold text-amber-400 mb-3">89%</div>
                <p className="text-zinc-400 leading-relaxed">
                  of parents say they can&apos;t understand their child&apos;s IEP. The jargon is impenetrable.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn>
            <p className="text-violet-400 font-semibold text-sm tracking-wider uppercase mb-4">Two Products, One Mission</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-16">
              Built for how schools<br />
              <span className="text-zinc-500">actually work.</span>
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0}>
              <div className="group rounded-2xl bg-white/[0.03] border border-white/[0.06] p-10 hover:bg-white/[0.05] hover:border-violet-500/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                  📚
                </div>
                <h3 className="text-2xl font-bold mb-3">Koyo Classroom</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  AI literacy curriculum for K-8. Hands-on modules that teach students <em>about</em> AI — 
                  from Teachable Machine experiments in 4th grade to AI ethics debates in 8th.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Standards-aligned', 'Grade-specific', 'Hands-on projects', 'Teacher guides'].map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={150}>
              <div className="group rounded-2xl bg-white/[0.03] border border-white/[0.06] p-10 hover:bg-white/[0.05] hover:border-amber-500/20 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-medium">
                  Coming Soon
                </div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                  🧠
                </div>
                <h3 className="text-2xl font-bold mb-3">Koyo IEP</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  AI-powered IEP writing that turns assessment data into compliant goals in minutes. 
                  Progress monitoring. Parent portal that translates jargon into plain language.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['IDEA compliant', 'Auto-generate goals', 'Parent portal', 'Progress tracking'].map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-violet-400 font-semibold text-sm tracking-wider uppercase mb-4">How It Works</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-16">
              Three steps to{' '}
              <span className="text-zinc-500">transforming your classroom.</span>
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: '01', icon: '✉️', title: 'Sign up', desc: 'Join the waitlist and get early access. No credit card required.' },
              { step: '02', icon: '🎯', title: 'Choose your modules', desc: 'Pick grade-specific AI curriculum or IEP tools tailored to your needs.' },
              { step: '03', icon: '🚀', title: 'Watch students thrive', desc: 'See engagement soar and paperwork shrink. Real results, real fast.' },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 150}>
                <div className="relative">
                  <div className="text-7xl font-black text-white/[0.03] absolute -top-6 -left-2">{item.step}</div>
                  <div className="relative z-10">
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="rounded-2xl bg-gradient-to-br from-violet-500/10 to-amber-500/10 border border-white/[0.06] p-12 animate-pulse-glow">
              <div className="text-6xl sm:text-7xl font-black mb-4">
                <Counter target={500} suffix="+" />
              </div>
              <p className="text-xl text-zinc-300 mb-2">teachers on the waitlist</p>
              <p className="text-zinc-500">and growing every day</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section id="waitlist" className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-t from-violet-950/20 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Ready to bring AI<br />
              <span className="bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">
                into your classroom?
              </span>
            </h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
              Join hundreds of educators already on the waitlist. 
              Be first to access Koyo when we launch.
            </p>
            <div className="flex justify-center">
              <WaitlistForm variant="cta" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-amber-400 flex items-center justify-center font-bold text-[10px]">K</div>
            <span className="font-semibold">Koyo</span>
          </div>
          <p className="text-sm text-zinc-600">
            © 2026 Koyo Education. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
