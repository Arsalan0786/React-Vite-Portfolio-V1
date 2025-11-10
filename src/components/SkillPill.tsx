import { motion } from 'motion/react';

interface SkillPillProps {
  name: string;
  theme: 'light' | 'dark';
  index: number;
}

export function SkillPill({ name, theme, index }: SkillPillProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2 }
      }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      viewport={{ once: true }}
      className={`cursor-pointer px-4 py-2 rounded-full transition-all ${
        theme === 'dark'
          ? 'bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600'
          : 'bg-zinc-200 border border-zinc-300 hover:bg-zinc-300 hover:border-zinc-400'
      }`}
    >
      <p className={`text-sm whitespace-nowrap transition-colors ${
        theme === 'dark' ? 'text-zinc-200 hover:text-white' : 'text-zinc-700 hover:text-zinc-900'
      }`}>
        {name}
      </p>
    </motion.div>
  );
}
