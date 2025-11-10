import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Testimonial {
  image: string;
  quote: string;
  author: string;
  result: string;
}

interface FitnessCarouselProps {
  theme: 'light' | 'dark';
}

export function FitnessCarousel({ theme }: FitnessCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      image: 'https://images.unsplash.com/photo-1750698544932-c7471990f1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bXxlbnwxfHx8fDE3NjIzNjE1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quote: "Arsalan's coaching transformed my life. Down 20lbs in 3 months!",
      author: "Sarah M.",
      result: "-20 lbs in 3 months"
    },
    {
      image: 'https://images.unsplash.com/photo-1761619187897-a38e2fb9b230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhbnNmb3JtYXRpb24lMjB3b3Jrb3V0fGVufDF8fHx8MTc2MjQwOTYzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quote: "Best investment in myself. The personalized plans really work!",
      author: "Mike T.",
      result: "Gained 15 lbs muscle"
    },
    {
      image: 'https://images.unsplash.com/photo-1620188500179-32ac33c60848?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB0cmFpbmluZyUyMGF0aGxldGV8ZW58MXx8fHwxNzYyNDA5NjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quote: "Finally found a coach who understands my goals. Results speak for themselves!",
      author: "Jessica L.",
      result: "Improved strength by 40%"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative">
      <div className="rounded-xl overflow-hidden aspect-[4/5] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={testimonials[currentIndex].image}
              alt={`Fitness Client ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${
              theme === 'dark'
                ? 'bg-gradient-to-t from-zinc-900 via-transparent'
                : 'bg-gradient-to-t from-white via-transparent'
            }`} />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all z-10 ${
            theme === 'dark'
              ? 'bg-zinc-800/80 hover:bg-zinc-700 text-white'
              : 'bg-white/80 hover:bg-white text-zinc-900'
          } backdrop-blur-sm`}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all z-10 ${
            theme === 'dark'
              ? 'bg-zinc-800/80 hover:bg-zinc-700 text-white'
              : 'bg-white/80 hover:bg-white text-zinc-900'
          } backdrop-blur-sm`}
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? theme === 'dark'
                    ? 'bg-blue-400 w-6'
                    : 'bg-blue-600 w-6'
                  : theme === 'dark'
                    ? 'bg-zinc-600'
                    : 'bg-zinc-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Testimonial Badge */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={`mt-6 p-6 rounded-xl ${
            theme === 'dark'
              ? 'bg-zinc-800 border border-zinc-700'
              : 'bg-white border border-zinc-200'
          } shadow-xl`}
        >
          <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>
            "{testimonials[currentIndex].quote}"
          </p>
          <div className="flex items-center justify-between">
            <p className={`${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>
              {testimonials[currentIndex].author}
            </p>
            <p className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
              {testimonials[currentIndex].result}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
