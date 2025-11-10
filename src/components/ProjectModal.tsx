import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, Calendar, Code } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  detailedDescription?: string;
  features?: string[];
  date?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  theme: 'light' | 'dark';
}

export function ProjectModal({ project, isOpen, onClose, theme }: ProjectModalProps) {
  if (!project) return null;

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
              className={`relative w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden my-8 ${
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

              {/* Project Image */}
              <div className={`w-full h-64 md:h-96 ${
                theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-100'
              }`}>
                {project.image ? (
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Code
                      size={120}
                      className={theme === 'dark' ? 'text-zinc-700' : 'text-zinc-300'}
                    />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title */}
                <h2 className="text-3xl mb-4">{project.title}</h2>

                {/* Date */}
                {project.date && (
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar
                      size={20}
                      className={theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}
                    />
                    <span className={theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}>
                      {project.date}
                    </span>
                  </div>
                )}

                {/* Description */}
                <div className="mb-6">
                  <p className={`text-lg ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>
                    {project.detailedDescription || project.description}
                  </p>
                </div>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xl mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li
                          key={index}
                          className={`flex items-start gap-2 ${
                            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                          }`}
                        >
                          <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>
                            •
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-xl mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm ${
                          theme === 'dark'
                            ? 'bg-zinc-800 text-zinc-300'
                            : 'bg-zinc-100 text-zinc-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                        theme === 'dark'
                          ? 'bg-zinc-800 hover:bg-zinc-700 text-white'
                          : 'bg-zinc-900 hover:bg-zinc-800 text-white'
                      }`}
                    >
                      <Github size={20} />
                      View Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                        theme === 'dark'
                          ? 'bg-blue-500 hover:bg-blue-600 text-white'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
