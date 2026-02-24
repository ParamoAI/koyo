import FadeIn from './components/FadeIn';
import WaitlistForm from './components/WaitlistForm';
import Counter from './components/Counter';

export default function Home() {
  return (
    <main className="min-h-screen bg-koyo-900 text-koyo-50 overflow-hidden">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-koyo-900/90 border-b border-koyo-700/30">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-koyo-600 flex items-center justify-center font-serif font-bold text-lg text-koyo-50">K</div>
            <span className="text-xl font-serif font-semibold tracking-tight">Koyo</span>
          </div>
          <a href="#waitlist" className="text-sm font-medium text-koyo-300 hover:text-koyo-100 transition-colors">
            Join Waitlist →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-koyo-800/80 via-koyo-900 to-koyo-900" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-koyo-700/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/5 w-[400px] h-[400px] bg-warm-500/8 rounded-full blur-[100px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-koyo-700/40 border border-koyo-600/30 px-5 py-2 text-sm text-koyo-300 mb-10">
              <span className="w-2 h-2 rounded-full bg-koyo-400 animate-pulse" />
              Now accepting early access signups
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              AI that meets every student{' '}
              <span className="text-koyo-400">
                where they are.
              </span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="text-lg sm:text-xl text-koyo-300 max-w-2xl mx-auto mb-12 leading-relaxed">
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

      {/* Stats Banner — à la CESO */}
      <section className="relative border-y border-koyo-700/30 bg-koyo-800/50">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '7M+', label: 'Students with IEPs' },
            { value: '8+', label: 'Hours per IEP' },
            { value: '73%', label: 'Teacher Burnout' },
            { value: '89%', label: 'Parents Confused by Jargon' },
          ].map((stat) => (
            <FadeIn key={stat.label}>
              <div>
                <div className="font-mono text-3xl sm:text-4xl font-medium text-warm-400 mb-2">{stat.value}</div>
                <div className="text-sm text-koyo-300 uppercase tracking-wider">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="font-mono text-koyo-400 text-sm tracking-wider uppercase mb-4">The Problem</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight mb-6 max-w-3xl">
              7 million students with IEPs{' '}
              <span className="text-koyo-600">deserve better tools.</span>
            </h2>
            <p className="text-lg text-koyo-300 max-w-2xl leading-relaxed">
              Special education teachers spend more time on paperwork than teaching. 
              Parents receive documents they can&apos;t understand. The tools were designed in the 90s. It&apos;s time for something better.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Products */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-koyo-800/30 to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn>
            <p className="font-mono text-koyo-400 text-sm tracking-wider uppercase mb-4">Two Products, One Mission</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight mb-16 max-w-3xl">
              Built for how schools{' '}
              <span className="text-koyo-600">actually work.</span>
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0}>
              <div className="group rounded-2xl bg-koyo-800/40 border border-koyo-700/30 p-10 hover:bg-koyo-800/60 hover:border-koyo-600/30 transition-all duration-300">
                <div className="font-mono text-sm text-koyo-400 mb-6">01</div>
                <h3 className="font-serif text-2xl font-bold mb-4">Koyo Classroom</h3>
                <p className="text-koyo-300 leading-relaxed mb-8">
                  AI literacy curriculum for K-8. Hands-on modules that teach students <em>about</em> AI — 
                  from Teachable Machine experiments in 4th grade to AI ethics debates in 8th.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Standards-aligned', 'Grade-specific', 'Hands-on projects', 'Teacher guides'].map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-koyo-700/40 text-koyo-300 border border-koyo-600/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={150}>
              <div className="group rounded-2xl bg-koyo-800/40 border border-koyo-700/30 p-10 hover:bg-koyo-800/60 hover:border-warm-500/20 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-6 right-6 text-xs px-3 py-1.5 rounded-full bg-warm-500/15 text-warm-400 border border-warm-500/25 font-mono">
                  Coming Soon
                </div>
                <div className="font-mono text-sm text-koyo-400 mb-6">02</div>
                <h3 className="font-serif text-2xl font-bold mb-4">Koyo IEP</h3>
                <p className="text-koyo-300 leading-relaxed mb-8">
                  AI-powered IEP writing that turns assessment data into compliant goals in minutes. 
                  Progress monitoring. Parent portal that translates jargon into plain language.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['IDEA compliant', 'Auto-generate goals', 'Parent portal', 'Progress tracking'].map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-warm-500/10 text-warm-300 border border-warm-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How it works — numbered steps like CESO */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="font-mono text-koyo-400 text-sm tracking-wider uppercase mb-4">How It Works</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight mb-20 max-w-3xl">
              Three steps to{' '}
              <span className="text-koyo-600">transforming your classroom.</span>
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { step: '01', title: 'Discovery', desc: 'Join the waitlist and tell us about your school. We learn your challenges, grade levels, and goals so we can tailor the experience.' },
              { step: '02', title: 'Choose Your Path', desc: 'Pick grade-specific AI literacy modules or IEP tools — configured to your state standards and student needs.' },
              { step: '03', title: 'Watch Students Thrive', desc: 'See engagement soar, paperwork shrink, and parents finally understand their child\'s learning plan.' },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 150}>
                <div>
                  <div className="font-mono text-6xl font-medium text-koyo-700/50 mb-6">{item.step}</div>
                  <h3 className="font-serif text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-koyo-300 leading-relaxed">{item.desc}</p>
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
            <div className="rounded-2xl bg-koyo-800/40 border border-koyo-700/30 p-16">
              <div className="font-serif text-6xl sm:text-7xl font-bold mb-4 text-koyo-100">
                <Counter target={500} suffix="+" />
              </div>
              <p className="text-xl text-koyo-300 mb-2">teachers on the waitlist</p>
              <p className="text-koyo-500 font-mono text-sm uppercase tracking-wider">and growing every day</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Impact stories placeholder */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="font-mono text-koyo-400 text-sm tracking-wider uppercase mb-4">Impact Stories</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight mb-6 max-w-3xl">
              Built alongside{' '}
              <span className="text-koyo-600">the educators who need it most.</span>
            </h2>
            <p className="text-lg text-koyo-300 max-w-2xl leading-relaxed mb-16">
              We&apos;re partnering with teachers and districts across the country to build tools that actually work in real classrooms.
            </p>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Special Ed Coordinators', desc: 'Reducing IEP writing time from 8 hours to under 45 minutes — so you can focus on students, not paperwork.' },
              { title: 'Classroom Teachers', desc: 'Grade-level AI curriculum that\'s ready to teach on Monday morning. No prep headaches.' },
              { title: 'Parents & Families', desc: 'Finally understand your child\'s learning plan in plain language, in your language.' },
            ].map((story, i) => (
              <FadeIn key={story.title} delay={i * 100}>
                <div className="rounded-2xl bg-koyo-800/40 border border-koyo-700/30 p-8">
                  <h3 className="font-serif text-lg font-bold mb-3">{story.title}</h3>
                  <p className="text-koyo-300 leading-relaxed text-sm">{story.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="waitlist" className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-t from-koyo-800/30 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <p className="font-mono text-koyo-400 text-sm tracking-wider uppercase mb-6">Get Started</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Ready to bring AI{' '}
              <span className="text-koyo-400">
                into your classroom?
              </span>
            </h2>
            <p className="text-lg text-koyo-300 mb-12 max-w-xl mx-auto leading-relaxed">
              Join hundreds of educators already on the waitlist. 
              Be first to access Koyo when we launch.
            </p>
            <div className="flex justify-center">
              <WaitlistForm variant="cta" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Rethink tagline — subtle nod */}
      <section className="py-20 px-6 text-center">
        <FadeIn>
          <p className="font-serif text-3xl sm:text-4xl font-bold text-koyo-700/60 tracking-tight">
            Rethink what&apos;s possible.
          </p>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="border-t border-koyo-700/30 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-koyo-600 flex items-center justify-center font-serif font-bold text-xs text-koyo-50">K</div>
            <span className="font-serif font-semibold">Koyo</span>
          </div>
          <p className="text-sm text-koyo-600">
            © 2026 Koyo Education. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-koyo-500">
            <a href="#" className="hover:text-koyo-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-koyo-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-koyo-300 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
