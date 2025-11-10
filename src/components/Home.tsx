import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Twitter, FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomeProps {
  theme: 'light' | 'dark';
  scrollToSection: (sectionId: string) => void;
}

export function Home({ theme, scrollToSection }: HomeProps) {
  const handleResumeClick = () => {
    // Replace this URL with your actual resume PDF URL
    window.open('/Updated CV.pdf', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient with breathing animation */}
      <motion.div 
        className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/20' 
            : 'bg-gradient-to-br from-blue-50 via-transparent to-purple-50'
        }`}
        animate={{
          background: theme === 'dark'
            ? [
                'linear-gradient(to bottom right, rgba(23, 37, 84, 0.2), transparent, rgba(88, 28, 135, 0.2))',
                'linear-gradient(to bottom right, rgba(88, 28, 135, 0.2), transparent, rgba(23, 37, 84, 0.2))',
                'linear-gradient(to bottom right, rgba(23, 37, 84, 0.2), transparent, rgba(88, 28, 135, 0.2))',
              ]
            : [
                'linear-gradient(to bottom right, rgba(239, 246, 255, 1), transparent, rgba(250, 245, 255, 1))',
                'linear-gradient(to bottom right, rgba(250, 245, 255, 1), transparent, rgba(239, 246, 255, 1))',
                'linear-gradient(to bottom right, rgba(239, 246, 255, 1), transparent, rgba(250, 245, 255, 1))',
              ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 sm:space-y-6 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-2"
          >
            <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
              Sheikh Arsalan
            </h1>
            <p className={`text-lg sm:text-xl md:text-2xl ${
              theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              Developer, Innovator & Creator
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`text-base sm:text-lg ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}
          >
            Building Smart Systems, One Line of Code at a Time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start"
          >
            <button
              onClick={() => scrollToSection('about')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 transition-all text-sm sm:text-base ${
                theme === 'dark'
                  ? 'bg-blue-500 hover:bg-blue-600 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              About Me
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all text-sm sm:text-base ${
                theme === 'dark'
                  ? 'border border-zinc-700 hover:bg-zinc-800'
                  : 'border border-zinc-300 hover:bg-zinc-100'
              }`}
            >
              Get in Touch
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-3 sm:gap-4 pt-4 justify-center md:justify-start"
          >
            <a
              href="https://github.com/Arsalan0786"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 sm:p-3 rounded-lg transition-all ${
                theme === 'dark'
                  ? 'hover:bg-zinc-800'
                  : 'hover:bg-zinc-100'
              }`}
              aria-label="GitHub"
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://linkedin.com/in/sheikharsalan8146"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 sm:p-3 rounded-lg transition-all ${
                theme === 'dark'
                  ? 'hover:bg-zinc-800'
                  : 'hover:bg-zinc-100'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://twitter.com/sheikharsalann"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 sm:p-3 rounded-lg transition-all ${
                theme === 'dark'
                  ? 'hover:bg-zinc-800'
                  : 'hover:bg-zinc-100'
              }`}
              aria-label="Twitter"
            >
              <Twitter size={20} className="sm:w-6 sm:h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Avatar/Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative order-first md:order-last"
        >
          <div className={`relative rounded-2xl overflow-hidden aspect-square ${
            theme === 'dark' ? 'shadow-2xl shadow-blue-500/10' : 'shadow-2xl shadow-blue-500/20'
          }`}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287"
              alt="Arsalan - Developer"
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${
              theme === 'dark'
                ? 'bg-gradient-to-t from-zinc-950 via-transparent'
                : 'bg-gradient-to-t from-white via-transparent'
            }`} />
          </div>

          {/* Floating Resume Badge */}
          <motion.button
            onClick={handleResumeClick}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 1, duration: 0.5 }}
            className={`absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 px-4 sm:px-6 py-3 sm:py-4 rounded-xl cursor-pointer group ${
              theme === 'dark'
                ? 'bg-zinc-800 border border-zinc-700 hover:border-blue-500'
                : 'bg-white border border-zinc-200 hover:border-blue-500'
            } shadow-xl transition-all`}
          >
            <div className="flex items-center gap-2 mb-1">
              <FileText size={18} className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
              <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Review My
              </p>
            </div>
            <p className={`font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} group-hover:underline`}>
              Resume
            </p>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
