import { motion } from 'motion/react';
import { Award, Medal, Trophy, GraduationCap, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AchievementModal } from './AchievementModal';
import { useState } from 'react';

interface AchievementProps {
  theme: 'light' | 'dark';
}

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

const achievements: Achievement[] = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'December 2024',
    category: 'certificate',
    description: 'Professional certification in cloud architecture and AWS services',
    detailedDescription: 'This comprehensive certification validates expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS. It demonstrates proficiency in defining a solution using architectural design principles based on customer requirements and providing implementation guidance based on best practices.',
    skills: ['AWS', 'Cloud Architecture', 'EC2', 'S3', 'Lambda', 'VPC'],
  },
  {
    id: 2,
    title: 'React Advanced Certification',
    issuer: 'Meta',
    date: 'November 2024',
    category: 'certificate',
    description: 'Advanced certification in React development and best practices',
    detailedDescription: 'Advanced professional certification covering complex React patterns, performance optimization, state management, and modern React ecosystem. Includes expertise in hooks, context API, and advanced component patterns.',
    skills: ['React', 'JavaScript', 'TypeScript', 'Redux', 'React Hooks'],
  },
  {
    id: 3,
    title: 'Hackathon Winner',
    issuer: 'TechFest 2024',
    date: 'October 2024',
    category: 'award',
    description: 'First place in national hackathon for innovative AI solution',
    detailedDescription: 'Won first place among 200+ teams for developing an innovative AI-powered solution that addresses real-world problems. The project showcased cutting-edge machine learning techniques and practical application development.',
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'API Development'],
  },
  {
    id: 4,
    title: 'Certified Personal Trainer',
    issuer: 'NASM',
    date: 'September 2024',
    category: 'certificate',
    description: 'National Academy of Sports Medicine certification',
    detailedDescription: 'Comprehensive certification in fitness training, exercise science, and program design. Includes expertise in corrective exercise, performance enhancement, and client assessment.',
    skills: ['Fitness Training', 'Nutrition', 'Exercise Science', 'Program Design'],
  },
  {
    id: 5,
    title: 'Marathon Finisher Medal',
    issuer: 'City Marathon',
    date: 'August 2024',
    category: 'medal',
    description: 'Completed full marathon in under 4 hours',
    detailedDescription: 'Successfully completed a full 42.195km marathon race with a finishing time of 3:48:23. This achievement demonstrates dedication, endurance, and the ability to set and achieve challenging physical goals.',
    skills: ['Endurance', 'Discipline', 'Goal Setting'],
  },
  {
    id: 6,
    title: 'Best Innovation Award',
    issuer: 'University Tech Symposium',
    date: 'July 2024',
    category: 'award',
    description: 'Awarded for outstanding innovation in software development',
    detailedDescription: 'Recognized for developing an innovative software solution that pushes the boundaries of current technology. The project demonstrated creative problem-solving and technical excellence.',
    skills: ['Innovation', 'Software Development', 'Problem Solving'],
  },
];

const categoryConfig = {
  certificate: { icon: GraduationCap, color: 'blue' },
  medal: { icon: Medal, color: 'yellow' },
  award: { icon: Trophy, color: 'purple' },
  achievement: { icon: Star, color: 'green' },
};

export function Achievements({ theme }: AchievementProps) {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  return (
    <section
      id="achievements"
      className={`min-h-screen py-20 px-6 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-zinc-950' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award
              className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}
              size={40}
            />
            <h2 className="text-4xl md:text-5xl">Achievements</h2>
          </div>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            A collection of certifications, awards, and milestones that mark my journey
            in technology and fitness
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const CategoryIcon = categoryConfig[achievement.category].icon;
            const categoryColor = categoryConfig[achievement.category].color;

            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 transition-all hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-zinc-900 border border-zinc-800 hover:border-zinc-700'
                    : 'bg-zinc-50 border border-zinc-200 hover:border-zinc-300'
                }`}
              >
                {/* Achievement Image Placeholder */}
                {achievement.image ? (
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className={`w-full h-40 mb-4 rounded-lg flex items-center justify-center ${
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-zinc-800 to-zinc-900'
                        : 'bg-gradient-to-br from-zinc-100 to-zinc-200'
                    }`}
                  >
                    <CategoryIcon
                      size={64}
                      className={
                        categoryColor === 'blue'
                          ? theme === 'dark'
                            ? 'text-blue-400'
                            : 'text-blue-600'
                          : categoryColor === 'yellow'
                          ? theme === 'dark'
                            ? 'text-yellow-400'
                            : 'text-yellow-600'
                          : categoryColor === 'purple'
                          ? theme === 'dark'
                            ? 'text-purple-400'
                            : 'text-purple-600'
                          : theme === 'dark'
                          ? 'text-green-400'
                          : 'text-green-600'
                      }
                    />
                  </div>
                )}

                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <CategoryIcon size={18} className={
                    categoryColor === 'blue'
                      ? theme === 'dark'
                        ? 'text-blue-400'
                        : 'text-blue-600'
                      : categoryColor === 'yellow'
                      ? theme === 'dark'
                        ? 'text-yellow-400'
                        : 'text-yellow-600'
                      : categoryColor === 'purple'
                      ? theme === 'dark'
                        ? 'text-purple-400'
                        : 'text-purple-600'
                      : theme === 'dark'
                      ? 'text-green-400'
                      : 'text-green-600'
                  } />
                  <span
                    className={`text-xs uppercase tracking-wide ${
                      categoryColor === 'blue'
                        ? theme === 'dark'
                          ? 'text-blue-400'
                          : 'text-blue-600'
                        : categoryColor === 'yellow'
                        ? theme === 'dark'
                          ? 'text-yellow-400'
                          : 'text-yellow-600'
                        : categoryColor === 'purple'
                        ? theme === 'dark'
                          ? 'text-purple-400'
                          : 'text-purple-600'
                        : theme === 'dark'
                        ? 'text-green-400'
                        : 'text-green-600'
                    }`}
                  >
                    {achievement.category}
                  </span>
                </div>

                {/* Achievement Details */}
                <h3 className="text-xl mb-2">{achievement.title}</h3>
                <p
                  className={`text-sm mb-2 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  {achievement.issuer}
                </p>
                <p
                  className={`text-sm mb-3 ${
                    theme === 'dark' ? 'text-zinc-500' : 'text-zinc-500'
                  }`}
                >
                  {achievement.date}
                </p>
                <p
                  className={`text-sm ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}
                >
                  {achievement.description}
                </p>

                {/* View Details Button */}
                <button
                  className={`text-sm font-semibold ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`}
                  onClick={() => setSelectedAchievement(achievement)}
                >
                  View Details
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div
            className={`rounded-2xl p-6 text-center ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-blue-950/50 to-blue-900/30 border border-zinc-800'
                : 'bg-gradient-to-br from-blue-50 to-blue-100 border border-zinc-200'
            }`}
          >
            <GraduationCap
              className={`mx-auto mb-2 ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}
              size={32}
            />
            <p className="text-3xl mb-1">
              {achievements.filter((a) => a.category === 'certificate').length}
            </p>
            <p
              className={`text-sm ${
                theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              Certificates
            </p>
          </div>

          <div
            className={`rounded-2xl p-6 text-center ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-purple-950/50 to-purple-900/30 border border-zinc-800'
                : 'bg-gradient-to-br from-purple-50 to-purple-100 border border-zinc-200'
            }`}
          >
            <Trophy
              className={`mx-auto mb-2 ${
                theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
              }`}
              size={32}
            />
            <p className="text-3xl mb-1">
              {achievements.filter((a) => a.category === 'award').length}
            </p>
            <p
              className={`text-sm ${
                theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              Awards
            </p>
          </div>

          <div
            className={`rounded-2xl p-6 text-center ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-yellow-950/50 to-yellow-900/30 border border-zinc-800'
                : 'bg-gradient-to-br from-yellow-50 to-yellow-100 border border-zinc-200'
            }`}
          >
            <Medal
              className={`mx-auto mb-2 ${
                theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
              }`}
              size={32}
            />
            <p className="text-3xl mb-1">
              {achievements.filter((a) => a.category === 'medal').length}
            </p>
            <p
              className={`text-sm ${
                theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              Medals
            </p>
          </div>

          <div
            className={`rounded-2xl p-6 text-center ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-green-950/50 to-green-900/30 border border-zinc-800'
                : 'bg-gradient-to-br from-green-50 to-green-100 border border-zinc-200'
            }`}
          >
            <Star
              className={`mx-auto mb-2 ${
                theme === 'dark' ? 'text-green-400' : 'text-green-600'
              }`}
              size={32}
            />
            <p className="text-3xl mb-1">{achievements.length}</p>
            <p
              className={`text-sm ${
                theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              Total Achievements
            </p>
          </div>
        </motion.div>
      </div>

      {/* Achievement Modal */}
      {selectedAchievement && (
        <AchievementModal
          achievement={selectedAchievement}
          isOpen={selectedAchievement !== null}
          onClose={() => setSelectedAchievement(null)}
          theme={theme}
        />
      )}
    </section>
  );
}