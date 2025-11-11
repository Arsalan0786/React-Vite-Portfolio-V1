import { motion } from 'motion/react';
import { Code2, Dumbbell, GraduationCap, Briefcase, ExternalLink, Instagram, Database, Server, GitBranch, Palette, Container } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SkillPill } from './SkillPill';
import { ProjectCard } from './ProjectCard';
import { ExperienceTimeline } from './ExperienceTimeline';
import { FitnessCarousel } from './FitnessCarousel';
import { ProjectModal } from './ProjectModal';
import { useState } from 'react';

interface AboutProps {
  theme: 'light' | 'dark';
}

export function About({ theme }: AboutProps) {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const allSkills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'HTML/CSS',
    'Tailwind CSS',
    'MongoDB',
    'PostgreSQL',
    'Git',
    'Docker',
    'Swift',
    'UI/UX Design',
    'Figma',
    'Photoshop',
    'Story Telling',
    'DaVinci Resolve'
  ];

  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Machine learning platform for real-time data analysis and predictive insights.',
      tags: ['Python', 'TensorFlow', 'React'],
      github: 'https://github.com',
      image: 'https://images.unsplash.com/photo-1759322945173-76b604965b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2RpbmclMjBzZXR1cHxlbnwxfHx8fDE3NjI0MDkwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      detailedDescription: 'A comprehensive machine learning platform that provides real-time data analysis and predictive insights for businesses. The platform uses advanced AI algorithms to process large datasets and generate actionable insights.',
      features: [
        'Real-time data processing with Apache Kafka',
        'Machine learning models built with TensorFlow',
        'Interactive dashboards with React and D3.js',
        'Scalable backend with microservices architecture',
        'RESTful API for third-party integrations'
      ],
      liveUrl: 'https://demo.example.com',
      date: 'October 2024',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Smart Fitness Tracker',
      description: 'iOS app for personalized workout tracking and progress visualization.',
      tags: ['Swift', 'HealthKit', 'Firebase'],
      github: 'https://github.com',
      image: 'https://images.unsplash.com/photo-1750698544932-c7471990f1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bXxlbnwxfHx8fDE3NjIzNjE1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      detailedDescription: 'An intuitive iOS application that helps users track their workouts, monitor progress, and achieve their fitness goals. Integrates with Apple HealthKit for comprehensive health data tracking.',
      features: [
        'Custom workout plans with video demonstrations',
        'Integration with Apple HealthKit and Apple Watch',
        'Progress tracking with detailed analytics',
        'Social features to share achievements',
        'AI-powered workout recommendations'
      ],
      liveUrl: 'https://apps.apple.com/app',
      date: 'September 2024',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Web3 Portfolio Dashboard',
      description: 'Decentralized application for tracking crypto portfolios with live market data.',
      tags: ['React', 'Web3.js', 'Node.js'],
      github: 'https://github.com',
      image: 'https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMzA5NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      detailedDescription: 'A decentralized application (dApp) that allows users to track their cryptocurrency portfolios with real-time market data. Built on blockchain technology for security and transparency.',
      features: [
        'Real-time cryptocurrency price tracking',
        'Portfolio analytics and performance metrics',
        'MetaMask wallet integration',
        'Support for multiple blockchain networks',
        'Secure transaction history'
      ],
      liveUrl: 'https://web3-portfolio.example.com',
      date: 'August 2024',
      githubUrl: 'https://github.com'
    },
  ];

  const experiences = [
    {
      title: 'Bachelor of Technology in Computer Science',
      company: 'Lovely Professional University',
      period: '2024 - 2028',
      description: 'Specialized in Artificial Intelligence, Machine Learning and Software Engineering.'
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Freelance',
      period: '2023-2024',
      description: 'Built responsive web applications using React and Node.js.'
    },
    {
      title: 'Education',
      company: 'Burn Hall School',
      period: '2012 - 2024',
      description: 'Completed my education from elementary to high school at Burn Hall School, Srinagar, J&K.'
    }
  ];

  return (
    <section id="about" className={`min-h-screen py-20 px-6 ${
      theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-50'
    }`}>
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Profile Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-3">
            <Code2 className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} size={32} />
            <h2 className="text-4xl md:text-5xl">About Me</h2>
          </div>
          <p className={`text-lg max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
          }`}>
            I'm a Computer Science Engineer passionate about building intelligent systems that solve real-world problems. 
            With expertise in AI, web development, and mobile apps, I create innovative solutions that make a difference.
            Beyond code, I'm dedicated to fitness and helping others achieve their health goals through personalized coaching.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} size={28} />
            <h3 className="text-3xl">Experience</h3>
          </div>
          <ExperienceTimeline experiences={experiences} theme={theme} />
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <GraduationCap className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} size={28} />
            <h3 className="text-3xl">Skills & Languages</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {allSkills.map((skill, index) => (
              <SkillPill key={index} name={skill} theme={theme} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Code2 className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} size={28} />
            <h3 className="text-3xl">Featured Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} theme={theme} onClick={() => setSelectedProject(project)} />
            ))}
          </div>
        </motion.div>

        {/* Fitness & Coaching Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`rounded-2xl p-8 md:p-12 ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-blue-950/50 to-purple-950/50 border border-zinc-800'
              : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-zinc-200'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Dumbbell className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} size={32} />
                <h3 className="text-3xl">Fitness & Coaching</h3>
              </div>
              <p className={theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}>
                My journey from 0 to 100 in fitness has taught me discipline, consistency, and the power of transformation. 
                Now, I help others achieve their fitness goals through personalized coaching programs tailored to their lifestyle and objectives.
              </p>
              <ul className={`space-y-2 ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>
                <li className="flex items-center gap-2">
                  <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>✓</span>
                  Personalized workout plans
                </li>
                <li className="flex items-center gap-2">
                  <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>✓</span>
                  Nutrition guidance
                </li>
                <li className="flex items-center gap-2">
                  <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>✓</span>
                  Progress tracking & accountability
                </li>
                <li className="flex items-center gap-2">
                  <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>✓</span>
                  One-on-one coaching support
                </li>
              </ul>
              <a
                href="https://instagram.com/sheikharsalan8146"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white'
                    : 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white'
                }`}
              >
                <Instagram size={20} />
                Follow My Fitness Journey
                <ExternalLink size={16} />
              </a>
            </div>
            <div className="relative">
              <FitnessCarousel theme={theme} />
            </div>
          </div>
        </motion.div>
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={selectedProject !== null}
          theme={theme}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}