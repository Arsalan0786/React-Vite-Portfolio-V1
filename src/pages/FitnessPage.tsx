import { useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Dumbbell,
  Flame,
  HeartPulse,
  Trophy,
  Sparkles,
  Timer
} from 'lucide-react';

interface FitnessPageProps {
  theme: 'light' | 'dark';
  onNavigateHome?: () => void;
}

const focusAreas = [
  {
    title: 'Strength & Conditioning',
    description:
      'Progressive overload programs, mobility drills, and form coaching tailored to your body type.'
  },
  {
    title: 'Nutrition Blueprint',
    description:
      'Macro-balanced meal plans, supplement guidance, and sustainable habits that match your lifestyle.'
  },
  {
    title: 'Mindset & Accountability',
    description:
      'Weekly check-ins, habit tracking, and performance reviews to keep you consistent and motivated.'
  }
];

const milestones = [
  { icon: Dumbbell, label: '100+ Personalized Programs' },
  { icon: HeartPulse, label: 'Holistic Health Focus' },
  { icon: Flame, label: 'Metabolic Conditioning' },
  { icon: Trophy, label: 'Transformation Milestones' }
];

const phases = [
  {
    title: 'Phase 1 · Reset & Foundation',
    detail:
      'Movement screening, breath work, nervous system reset, and daily habit stacking.'
  },
  {
    title: 'Phase 2 · Build & Sculpt',
    detail:
      'Hybrid strength splits, progressive overload tracking, mobility supersets, and metabolic circuits.'
  },
  {
    title: 'Phase 3 · Peak & Sustain',
    detail:
      'Performance metrics, lifestyle guardrails, nutrition cycling, and long-term accountability.'
  }
];

const statBlocks = [
  { label: 'Avg. Response Time', value: '< 4h', accent: 'text-green-400' },
  { label: 'Weekly Check-ins', value: '2 x', accent: 'text-blue-400' },
  { label: 'Client Retention', value: '93%', accent: 'text-pink-400' }
];

export function FitnessPage({ theme, onNavigateHome }: FitnessPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-zinc-900 text-white'
          : 'bg-gradient-to-b from-zinc-50 via-white to-zinc-100 text-zinc-900'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        {/* Top Bar */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <button
            onClick={() => onNavigateHome?.()}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold ${
              theme === 'dark'
                ? 'border-white/20 text-white hover:bg-white/10'
                : 'border-zinc-200 text-zinc-900 hover:bg-zinc-100'
            }`}
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </button>

          <div className="flex gap-3">
            {statBlocks.map((stat) => (
              <div
                key={stat.label}
                className={`flex flex-col items-start gap-1 px-5 py-3 rounded-2xl border text-left ${
                  theme === 'dark'
                    ? 'border-white/15 bg-white/5 text-white'
                    : 'border-zinc-200 bg-white text-zinc-900'
                }`}
              >
                <p className={`text-2xl font-semibold ${stat.accent}`}>
                  {stat.value}
                </p>
                <p className="text-[11px] uppercase tracking-[0.3em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`rounded-[32px] border p-8 space-y-10 ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-zinc-900 via-zinc-900/70 to-zinc-950 border-zinc-800'
              : 'bg-gradient-to-br from-white via-zinc-50 to-white border-zinc-200'
          }`}
        >
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-10 items-center">
            <div className="space-y-6">
              <p
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold tracking-wide ${
                  theme === 'dark'
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'bg-zinc-900 text-white border border-zinc-800'
                }`}
              >
                <Sparkles size={16} />
                Signature Hybrid Coaching
              </p>

              <h1 className="text-4xl leading-tight font-semibold">
                Full-body transformation engineered through precision training,
                metabolic flow, and deep accountability.
              </h1>

              <p
                className={`text-lg ${
                  theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'
                }`}
              >
                This immersive coaching container blends performance science
                with lifestyle design to help you move, eat, and think like an
                athlete—no matter your starting point.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  'Custom dashboards',
                  'Nutrition intelligence',
                  'Mindset rewiring',
                  'Recovery rituals'
                ].map((pill) => (
                  <span
                    key={pill}
                    className={`px-4 py-2 rounded-full text-sm ${
                      theme === 'dark'
                        ? 'bg-zinc-950 border border-zinc-800 text-zinc-200'
                        : 'bg-zinc-50 border border-zinc-200 text-zinc-600'
                    }`}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-[320px] rounded-[30px] overflow-hidden shadow-2xl">
              <motion.div
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div
                className={`absolute inset-0 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-zinc-950 via-zinc-900/70 to-transparent'
                    : 'bg-gradient-to-r from-white via-white/70 to-transparent'
                }`}
              />
            </div>
          </div>
        </motion.section>

        {/* Weekly Ritual Section */}
        <section className="grid lg:grid-cols-2 gap-8">
          <div
            className={`rounded-[32px] p-8 border ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-zinc-900 via-zinc-900/60 to-zinc-900 border-zinc-800'
                : 'bg-gradient-to-br from-zinc-50 via-white to-zinc-100 border-zinc-200'
            } space-y-4`}
          >
            <div className="flex items-center gap-3">
              <Timer
                className={theme === 'dark' ? 'text-pink-300' : 'text-pink-600'}
              />
              <p className="text-lg font-semibold">Interactive Weekly Ritual</p>
            </div>

            <ul
              className={`space-y-3 text-base ${
                theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'
              }`}
            >
              <li>• Sunday blueprint call with macro + training adjustments.</li>
              <li>• Mid-week video form review with cues & corrections.</li>
              <li>
                • Live breathwork + recovery protocols for nervous system
                reset.
              </li>
            </ul>
          </div>

          <div
            className={`rounded-[32px] p-8 border ${
              theme === 'dark'
                ? 'bg-zinc-900/70 border-zinc-800'
                : 'bg-white border-zinc-200'
            } space-y-6`}
          >
            <h2 className="text-3xl font-semibold">
              Coaching that feels alive.
            </h2>

            <p className={theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}>
              I design the entire cadence so you never train alone: cinematic
              dashboards, motion cues, nutrition audits, and mindset frameworks
              keep you anchored, focused, and inspired throughout each phase.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {['Form Labs', 'Nutrition Sync', 'Mindset Therapy'].map(
                (item) => (
                  <div
                    key={item}
                    className={`rounded-2xl px-4 py-5 text-center text-sm font-medium ${
                      theme === 'dark'
                        ? 'bg-white/5 border border-white/10'
                        : 'bg-zinc-50 border border-zinc-200'
                    }`}
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section
          className={`rounded-[32px] p-8 border space-y-6 ${
            theme === 'dark'
              ? 'bg-zinc-900/70 border-zinc-800'
              : 'bg-white border-zinc-200'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`h-10 w-10 rounded-2xl flex items-center justify-center ${
                theme === 'dark' ? 'bg-white/10' : 'bg-zinc-900 text-white'
              }`}
            >
              <Dumbbell size={20} />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Framework
              </p>
              <h3 className="text-3xl font-semibold">Three Pillar Engine</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-3xl p-6 border ${
                  theme === 'dark'
                    ? 'bg-zinc-900/60 border-zinc-800 hover:border-pink-400/40'
                    : 'bg-white border-zinc-200 hover:border-pink-500/40'
                } space-y-3`}
              >
                <p
                  className={`text-xs uppercase tracking-[0.2em] ${
                    theme === 'dark' ? 'text-pink-300' : 'text-pink-600'
                  }`}
                >
                  Step {index + 1}
                </p>
                <h4 className="text-xl font-semibold">{area.title}</h4>
                <p
                  className={
                    theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                  }
                >
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section
          className={`rounded-[32px] p-8 border space-y-6 ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 border-zinc-800'
              : 'bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 border-zinc-200'
          }`}
        >
          <h3 className="text-3xl font-semibold">Program Highlights</h3>

          <div className="grid md:grid-cols-2 gap-5 text-lg">
            <p>
              • Cinematic dashboards that visualize your strength, mobility, and
              recovery progress weekly.
            </p>
            <p>
              • Layered meal design with macro cycling, micro support, and
              lifestyle-friendly rituals.
            </p>
            <p>
              • Deep nervous system support: mobility labs, breath ladders, cold
              exposure primers.
            </p>
            <p>
              • Mindset recalibration through journaling frameworks and weekly
              pattern audits.
            </p>
          </div>
        </section>

        {/* Phases & Milestones */}
        <section className="grid gap-6 md:grid-cols-[2fr,1fr]">
          <div
            className={`rounded-3xl p-6 border space-y-4 ${
              theme === 'dark'
                ? 'border-zinc-800 bg-zinc-900/70'
                : 'border-zinc-200 bg-white'
            }`}
          >
            <h3 className="text-2xl font-semibold">Phase Blueprint</h3>

            <div className="grid md:grid-cols-3 gap-4">
              {phases.map((phase, idx) => (
                <div key={phase.title} className="space-y-2">
                  <p
                    className={`text-xs uppercase tracking-wide ${
                      theme === 'dark' ? 'text-pink-300' : 'text-pink-600'
                    }`}
                  >
                    Phase {idx + 1}
                  </p>
                  <h4 className="text-lg font-semibold">{phase.title}</h4>
                  <p
                    className={`text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                    }`}
                  >
                    {phase.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`rounded-3xl p-6 border space-y-4 ${
              theme === 'dark'
                ? 'border-zinc-800 bg-zinc-900/70'
                : 'border-zinc-200 bg-white'
            }`}
          >
            <h3 className="text-2xl font-semibold">Milestones</h3>

            <div className="grid grid-cols-2 gap-3">
              {milestones.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 rounded-2xl px-3 py-2 border ${
                    theme === 'dark'
                      ? 'border-zinc-800 bg-zinc-950/60'
                      : 'border-zinc-200 bg-zinc-50'
                  }`}
                >
                  <item.icon
                    size={20}
                    className={
                      theme === 'dark' ? 'text-pink-300' : 'text-pink-600'
                    }
                  />
                  <p className="text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center space-y-4">
          <p
            className={`text-lg ${
              theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
            }`}
          >
            Ready to begin? Let’s tailor a phase-wise plan that honors your
            lifestyle, energizes your mindset, and delivers undeniable results.
          </p>

          {/* <button
            onClick={scrollToContact}
            className={`px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-colors shadow-lg ${
              theme === 'dark'
                ? 'bg-white text-zinc-900 hover:bg-zinc-200'
                : 'bg-zinc-900 text-white hover:bg-black'
            }`}
          >
            Contact me!
          </button> */}
        </section>
      </div>
    </div>
  );
}
