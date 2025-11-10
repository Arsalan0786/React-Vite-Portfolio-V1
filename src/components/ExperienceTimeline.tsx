import { motion } from 'motion/react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface ExperienceTimelineProps {
  experiences: Experience[];
  theme: 'light' | 'dark';
}

export function ExperienceTimeline({ experiences, theme }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 ${
        theme === 'dark' ? 'bg-zinc-700' : 'bg-zinc-300'
      }`} />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline dot */}
            <div className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full ${
              theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'
            } border-4 ${
              theme === 'dark' ? 'border-zinc-900' : 'border-zinc-50'
            } transform -translate-x-1.5 md:-translate-x-2`} />

            {/* Content */}
            <div className={`w-full md:w-1/2 ${
              index % 2 === 0 ? 'md:pr-12 pl-8' : 'md:pl-12 pl-8'
            }`}>
              <div className={`p-6 rounded-xl ${
                theme === 'dark'
                  ? 'bg-zinc-800 border border-zinc-700'
                  : 'bg-white border border-zinc-200'
              }`}>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {exp.period}
                </p>
                <h4 className="text-xl mt-2">{exp.title}</h4>
                <p className={`${
                  theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                } mt-1`}>
                  {exp.company}
                </p>
                <p className={`${
                  theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                } mt-3`}>
                  {exp.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
