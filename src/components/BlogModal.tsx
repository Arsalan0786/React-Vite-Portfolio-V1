import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ExternalLink, Calendar, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Blog {
  title: string;
  description: string;
  image?: string;
  preview: string;
  date?: string;
  mediumUrl: string;
  category?: string;
}

interface BlogModalProps {
  blog: Blog | null;
  isOpen: boolean;
  onClose: () => void;
  theme: 'light' | 'dark';
}

export function BlogModal({ blog, isOpen, onClose, theme }: BlogModalProps) {
  if (!blog) return null;

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
              {/* Back Arrow Button - Top Left */}
              <button
                onClick={onClose}
                className={`absolute top-4 left-4 z-10 p-2 rounded-full transition-colors ${
                  theme === 'dark'
                    ? 'bg-zinc-800 hover:bg-zinc-700 text-white'
                    : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900'
                }`}
                aria-label="Go back"
              >
                <ArrowLeft size={24} />
              </button>

              {/* Blog Image */}
              <div className={`w-full h-64 md:h-96 ${
                theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-100'
              }`}>
                {blog.image ? (
                  <ImageWithFallback
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <BookOpen
                      size={120}
                      className={theme === 'dark' ? 'text-zinc-700' : 'text-zinc-300'}
                    />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Category */}
                {blog.category && (
                  <span className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${
                    theme === 'dark'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {blog.category}
                  </span>
                )}

                {/* Title */}
                <h2 className="text-3xl mb-4">{blog.title}</h2>

                {/* Date */}
                {blog.date && (
                  <div className="flex items-center gap-2 mb-6">
                    <Calendar
                      size={20}
                      className={theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}
                    />
                    <span className={theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}>
                      {blog.date}
                    </span>
                  </div>
                )}

                {/* Preview Description */}
                <div className="mb-8">
                  <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>
                    {blog.preview}
                  </p>
                </div>

                {/* Learn More Button */}
                <div className="flex justify-center">
                  <a
                    href={blog.mediumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors font-medium ${
                      theme === 'dark'
                        ? 'bg-black hover:bg-zinc-800 text-white border border-zinc-700'
                        : 'bg-black hover:bg-zinc-900 text-white'
                    }`}
                  >
                    <ExternalLink size={20} />
                    Learn More on Medium
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

