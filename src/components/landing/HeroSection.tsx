import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { RetroGrid } from '../ui/retro-grid';
import { WordPullUp } from '../ui/word-pull-up';
import { images } from './images';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-28">
      <RetroGrid />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-[#6C47FF]/10 text-[#6C47FF] dark:text-[#8165FF] rounded-full text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            New: AI-Powered Journey Analytics
          </motion.div>
          
          <div className="mb-8">
            <WordPullUp
              words="Elevate Your Customer Experiences with Powerful, Intuitive Tools"
              className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-gray-900 dark:text-white tracking-tight text-center"
            />
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-center"
          >
            Empower your team with data-driven personas, seamless journey mapping, and 
            actionable insights to create experiences your customers will love.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-12"
          >
            <Link
              to="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-14 px-8 font-medium text-white bg-[#6C47FF] hover:bg-[#5A3CD7] rounded-full transition-colors"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-white font-medium rounded-full border border-gray-200 dark:border-gray-700 transition-colors"
            >
              Watch Demo
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
          >
            <div className="flex -space-x-2">
              {images.heroTestimonials.map((avatar, i) => (
                <img
                  key={i}
                  src={avatar}
                  alt="Customer"
                  className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                />
              ))}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Trusted by <span className="font-semibold text-gray-900 dark:text-white">10,000+</span> businesses
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
              <span className="font-semibold text-[#6C47FF]">100% Free</span> - No credit card required
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}