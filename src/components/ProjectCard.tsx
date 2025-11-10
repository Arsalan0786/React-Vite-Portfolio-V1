import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    github: string;
    image: string;
    detailedDescription?: string;
    features?: string[];
    liveUrl?: string;
    date?: string;
  };
  theme: 'light' | 'dark';
  onClick: () => void;
}

export function ProjectCard({ project, theme, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`rounded-xl overflow-hidden cursor-pointer ${
        theme === 'dark'
          ? 'bg-zinc-800 border border-zinc-700 hover:border-zinc-600'
          : 'bg-white border border-zinc-200 hover:border-zinc-300'
      } transition-all group`}
      onClick={onClick}
    >
      <div className="relative overflow-hidden aspect-video">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-gradient-to-t from-zinc-800 via-transparent'
            : 'bg-gradient-to-t from-white via-transparent'
        } opacity-60`} />
      </div>
      <div className="p-6 space-y-4">
        <h4 className="text-xl">{project.title}</h4>
        <p className={theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm ${
                theme === 'dark'
                  ? 'bg-zinc-700 text-zinc-300'
                  : 'bg-zinc-100 text-zinc-700'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.github, '_blank');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              theme === 'dark'
                ? 'bg-zinc-700 hover:bg-zinc-600'
                : 'bg-zinc-100 hover:bg-zinc-200'
            }`}
          >
            <Github size={18} />
            Code
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (project.liveUrl) {
                window.open(project.liveUrl, '_blank');
              }
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              theme === 'dark'
                ? 'bg-blue-500 hover:bg-blue-600 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            <ExternalLink size={18} />
            Demo
          </button>
        </div>
        <button
          className={`text-sm font-semibold w-full text-center pt-2 ${
            theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
          }`}
        >
          View Full Details
        </button>
      </div>
    </motion.div>
  );
}
