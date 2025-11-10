import { motion, AnimatePresence } from 'motion/react';
import { X, Award, Calendar, Building } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Achievement {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: 'certificate' | 'medal' | 'award' | 'achievement';
  description: string;
  image?: string;
  detailedDescription?: string;
  skills?: string[];
}

interface AchievementModalProps {
  achievement: Achievement | null;
  isOpen: boolean;
  onClose: () => void;
  theme: 'light' | 'dark';
}

export function AchievementModal({ achievement, isOpen, onClose, theme }: AchievementModalProps) {
  if (!achievement) return null;

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

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={onClose}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden ${
                theme === 'dark'
                  ? 'bg-zinc-900 border border-zinc-800'
                  : 'bg-white border border-zinc-200'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors ${
                  theme === 'dark'
                    ? 'bg-zinc-800 hover:bg-zinc-700 text-white'
                    : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900'
                }`}
              >
                <X size={24} />
              </button>

              {/* Achievement Image */}
              <div className={`w-full h-64 md:h-80 ${
                theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-100'
              }`}>
                {achievement.image ? (
                  <ImageWithFallback
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-contain p-8"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Award
                      size={120}
                      className={theme === 'dark' ? 'text-zinc-700' : 'text-zinc-300'}
                    />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Category Badge */}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs uppercase tracking-wide mb-4 ${
                    theme === 'dark'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-blue-100 text-blue-600'
                  }`}
                >
                  {achievement.category}
                </span>

                {/* Title */}
                <h2 className="text-3xl mb-4">{achievement.title}</h2>

                {/* Issuer and Date */}
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Building
                      size={20}
                      className={theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}
                    />
                    <span className={theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}>
                      {achievement.issuer}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar
                      size={20}
                      className={theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}
                    />
                    <span className={theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}>
                      {achievement.date}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-xl mb-3">Description</h3>
                  <p className={theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}>
                    {achievement.detailedDescription || achievement.description}
                  </p>
                </div>

                {/* Skills (if available) */}
                {achievement.skills && achievement.skills.length > 0 && (
                  <div>
                    <h3 className="text-xl mb-3">Related Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {achievement.skills.map((skill, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-sm ${
                            theme === 'dark'
                              ? 'bg-zinc-800 text-zinc-300'
                              : 'bg-zinc-100 text-zinc-700'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
