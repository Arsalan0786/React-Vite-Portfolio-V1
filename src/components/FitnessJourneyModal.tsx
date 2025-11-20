import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Dumbbell, HeartPulse } from 'lucide-react';

interface FitnessJourneyModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'light' | 'dark';
}

export function FitnessJourneyModal({ isOpen, onClose, theme }: FitnessJourneyModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal / Sub-page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={onClose}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-5xl rounded-3xl my-8 shadow-2xl border ${
                theme === 'dark'
                  ? 'bg-zinc-950/90 border-zinc-800'
                  : 'bg-white/95 border-zinc-200'
              }`}
            >
              {/* Back Arrow */}
              <button
                onClick={onClose}
                className={`absolute top-4 left-4 z-10 p-2 rounded-full transition-colors ${
                  theme === 'dark'
                    ? 'bg-zinc-900 hover:bg-zinc-800 text-white'
                    : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900'
                }`}
                aria-label="Go back"
              >
                <ArrowLeft size={22} />
              </button>

              <div className="px-6 sm:px-10 pt-14 pb-10 space-y-10">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
                      theme === 'dark'
                        ? 'bg-blue-500/10 text-blue-400'
                        : 'bg-blue-50 text-blue-600'
                    }`}
                  >
                    <Dumbbell size={22} />
                  </div>
                  <div>
                    <p
                      className={`text-xs uppercase tracking-[0.2em] ${
                        theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'
                      }`}
                    >
                      My Fitness Journey
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                      From Zero to Consistent, One Rep at a Time
                    </h2>
                  </div>
                </div>

                {/* Content Layout */}
                <div className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] items-start">
                  {/* Timeline / Story */}
                  <div className="space-y-6">
                    <p
                      className={`text-sm sm:text-base leading-relaxed ${
                        theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                      }`}
                    >
                      I didn’t start as an athlete. I started as someone who was tired of feeling
                      low on energy, unfocused, and inconsistent. Fitness became my way of
                      rebuilding discipline — not just for my body, but for my mind and my work as
                      well.
                    </p>

                    <div className="space-y-4">
                      <JourneyCard
                        theme={theme}
                        title="Phase 1 — Showing Up"
                        period="Month 0–3"
                        points={[
                          'Learning basic movements and focusing on form over ego',
                          'Building the habit of training 3–4x per week',
                          'Shifting mindset from \"all or nothing\" to \"always something\"',
                        ]}
                      />
                      <JourneyCard
                        theme={theme}
                        title="Phase 2 — Getting Stronger"
                        period="Month 4–9"
                        points={[
                          'Structured training split with progressive overload',
                          'Dialing in nutrition, sleep, and recovery',
                          'Tracking progress with photos, numbers, and how I feel daily',
                        ]}
                      />
                      <JourneyCard
                        theme={theme}
                        title="Phase 3 — Coaching & Impact"
                        period="Month 10+"
                        points={[
                          'Turning my personal results into a system others can follow',
                          'Designing realistic programs that fit busy lifestyles',
                          'Helping people build confidence through sustainable change',
                        ]}
                      />
                    </div>
                  </div>

                  {/* Minimalist Side Panel */}
                  <div
                    className={`rounded-2xl p-6 space-y-6 border ${
                      theme === 'dark'
                        ? 'border-zinc-800 bg-zinc-900/60'
                        : 'border-zinc-200 bg-zinc-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-full ${
                          theme === 'dark'
                            ? 'bg-emerald-500/10 text-emerald-400'
                            : 'bg-emerald-50 text-emerald-600'
                        }`}
                      >
                        <HeartPulse size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Training Philosophy</p>
                        <p
                          className={`text-xs ${
                            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                          }`}
                        >
                          Simple, consistent, and sustainable.
                        </p>
                      </div>
                    </div>

                    <ul
                      className={`space-y-3 text-sm ${
                        theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                      }`}
                    >
                      <li>• Focus on foundations before fancy exercises.</li>
                      <li>• Nutrition that fits real life, not perfection.</li>
                      <li>• Tracking progress beyond just the scale.</li>
                      <li>• Programming that respects recovery and mental health.</li>
                    </ul>

                    <div
                      className={`rounded-xl p-4 text-sm ${
                        theme === 'dark'
                          ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-zinc-200'
                          : 'bg-gradient-to-r from-blue-50 to-purple-50 text-zinc-800'
                      }`}
                    >
                      <p className="font-medium mb-1">Where you come in</p>
                      <p>
                        Whether you&apos;re starting from zero or restarting again, my goal is to
                        make fitness feel achievable, structured, and aligned with your lifestyle —
                        not against it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

interface JourneyCardProps {
  theme: 'light' | 'dark';
  title: string;
  period: string;
  points: string[];
}

function JourneyCard({ theme, title, period, points }: JourneyCardProps) {
  return (
    <div
      className={`rounded-2xl border p-5 sm:p-6 ${
        theme === 'dark'
          ? 'border-zinc-800 bg-zinc-900/60'
          : 'border-zinc-200 bg-white'
      }`}
    >
      <div className="flex items-center justify-between gap-3 mb-3">
        <p className="text-sm font-medium">{title}</p>
        <span
          className={`text-xs px-2.5 py-1 rounded-full ${
            theme === 'dark'
              ? 'bg-zinc-900 text-zinc-300 border border-zinc-700'
              : 'bg-zinc-50 text-zinc-700 border border-zinc-200'
          }`}
        >
          {period}
        </span>
      </div>
      <ul
        className={`space-y-1.5 text-sm ${
          theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
        }`}
      >
        {points.map((point, idx) => (
          <li key={idx}>• {point}</li>
        ))}
      </ul>
    </div>
  );
}


