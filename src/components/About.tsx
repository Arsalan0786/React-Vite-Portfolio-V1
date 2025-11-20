import { motion } from 'motion/react';
import { Code2, Dumbbell, GraduationCap, Briefcase, ExternalLink, Instagram, Database, Server, GitBranch, Palette, Container, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SkillPill } from './SkillPill';
import { ProjectCard } from './ProjectCard';
import { ExperienceTimeline } from './ExperienceTimeline';
import { FitnessCarousel } from './FitnessCarousel';
import { ProjectModal } from './ProjectModal';
import { BlogModal } from './BlogModal';
import { Achievements } from './Achievements';
import { useState } from 'react';

interface AboutProps {
  theme: 'light' | 'dark';
  onNavigateToFitness?: () => void;
}

export function About({ theme, onNavigateToFitness }: AboutProps) {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedBlog, setSelectedBlog] = useState<any>(null);

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
      title: 'EduNinja  Dashboard',
      description: 'EduNinja is an innovative educational platform designed to enhance learning experiences for middle-school students through interactive quizzes and educational games.',
      tags: ['HTML', 'CSS', 'JS'],
      github: 'https://github.com/Arsalan0786/Edu-Ninja',
      image: 'https://images.unsplash.com/photo-1699347914988-c61ec13c99c5?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      detailedDescription: 'EduNinja is an innovative educational platform designed to enhance learning experiences for middle-school students through interactive quizzes and educational games. Aimed at making learning both engaging and effective, EduNinja focuses on core subjects like maths and science, providing a fun and interactive way for students',
      features: [
        'Enhance learning experiences',
        'Interactive quizzes and educational games',
      ],
      liveUrl: 'https://arsalan0786.github.io/Edu-Ninja/',
      date: 'November 2024',
      githubUrl: 'https://github.com/Arsalan0786/Edu-Ninja'
    },
    
    {
      title: 'Smart Fitness Tracke (Under Production)',
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
      title: 'Floods in India',
      description: 'Website design to know the history of Floods in India.',
      tags: ['HTML', 'CSS'],
      github: 'https://github.com/Arsalan0786/FloodinIndia',
      image: 'https://images.unsplash.com/photo-1485617359743-4dc5d2e53c89?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      detailedDescription: 'A website designed in such a way to make the history of floods in India easy to access to everyone',
      features: [
        'Real-time News related floods',
      ],
      liveUrl: 'https://arsalan0786.github.io/FloodinIndia/',
      date: 'December, 2024',
      githubUrl: 'https://github.com/Arsalan0786/FloodinIndia'
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

  const blogs = [
    {
      title: 'AI and Machine Learning: A Beginner\'s Guide',
      description: 'Understanding the fundamentals of AI and how to get started.',
      preview: 'Artificial Intelligence and Machine Learning are transforming the world as we know it. In this beginner-friendly guide, I break down complex concepts into digestible pieces, explain the difference between AI and ML, and provide practical steps to start your journey in this exciting field. Perfect for developers and enthusiasts alike.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc2MjQwOTA3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: 'October 2024',
      category: 'Technology',
      mediumUrl: 'https://medium.com/@sheikharsalan8146/ai-machine-learning-a-beginners-guide-in-simple-human-non-techy-terms-c6cdc07affbf'
    },
    {
      title: 'Building Modern Web Applications with React',
      description: 'Exploring the latest trends and best practices in React development.',
      preview: 'In this comprehensive guide, I dive deep into modern React development practices, covering everything from hooks and context to performance optimization and state management. Learn how to build scalable applications that stand the test of time.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGNvZGUlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjI0MDkwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: 'December 2024',
      category: 'Web Development',
      mediumUrl: 'https://medium.com/@sheikharsalan8146'
    },
    {
      title: 'The Journey from Zero to Fitness Hero',
      description: 'My personal transformation story and lessons learned along the way.',
      preview: 'Join me as I share my incredible fitness journey from being completely out of shape to achieving peak physical condition. This story covers the mental challenges, the physical transformations, and the key principles that made it all possible. Discover how discipline, consistency, and the right mindset can change your life.',
      image: 'https://images.unsplash.com/photo-1750698544932-c7471990f1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bXxlbnwxfHx8fDE3NjIzNjE1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: 'November 2024',
      category: 'Fitness & Lifestyle',
      mediumUrl: 'https://medium.com/@sheikharsalan8146'
    },
    // {
    //   title: 'AI and Machine Learning: A Beginner\'s Guide',
    //   description: 'Understanding the fundamentals of AI and how to get started.',
    //   preview: 'Artificial Intelligence and Machine Learning are transforming the world as we know it. In this beginner-friendly guide, I break down complex concepts into digestible pieces, explain the difference between AI and ML, and provide practical steps to start your journey in this exciting field. Perfect for developers and enthusiasts alike.',
    //   image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc2MjQwOTA3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    //   date: 'October 2024',
    //   category: 'Technology',
    //   mediumUrl: 'https://medium.com/@sheikharsalan8146'
    // }
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

        {/* Achievements Section (moved here under Featured Projects) */}
        <Achievements theme={theme} />

        {/* Blog Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} size={28} />
            <h3 className="text-3xl">Latest Blog Posts</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group cursor-pointer rounded-xl overflow-hidden transition-all ${
                  theme === 'dark'
                    ? 'bg-zinc-800 border border-zinc-700 hover:border-zinc-600'
                    : 'bg-white border border-zinc-200 hover:border-zinc-300'
                } hover:shadow-lg`}
                onClick={() => setSelectedBlog(blog)}
              >
                {/* Blog Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${
                    theme === 'dark'
                      ? 'bg-blue-500/20 text-blue-400 backdrop-blur-sm'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {blog.category}
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs ${
                      theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                    }`}>
                      {blog.date}
                    </span>
                  </div>
                  <h4 className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-zinc-900'
                  }`}>
                    {blog.title}
                  </h4>
                  <p className={`text-sm mb-4 line-clamp-2 ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    {blog.description}
                  </p>
                  <button
                    className={`text-sm font-medium transition-colors ${
                      theme === 'dark'
                        ? 'text-blue-400 hover:text-blue-300'
                        : 'text-blue-600 hover:text-blue-700'
                    }`}
                  >
                    Read More →
                  </button>
                </div>
              </motion.div>
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
              <div className="space-y-3">
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
                <button
                  onClick={() => onNavigateToFitness?.()}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold transition-all border ${
                    theme === 'dark'
                      ? 'text-blue-300 border-blue-400 hover:bg-blue-500/10'
                      : 'text-blue-600 border-blue-500 hover:bg-blue-50'
                  }`}
                >
                  <Dumbbell size={20} />
                  View Coaching Details
                  <ExternalLink size={16} />
                </button>
              </div>
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
      {selectedBlog && (
        <BlogModal
          blog={selectedBlog}
          isOpen={selectedBlog !== null}
          theme={theme}
          onClose={() => setSelectedBlog(null)}
        />
      )}
    </section>
  );
}
