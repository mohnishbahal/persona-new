import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star } from 'lucide-react';
import { images } from './images';

const testimonials = [
  {
    quote: "Persona Path has transformed how we understand and serve our customers. The insights are invaluable.",
    author: "Sarah Chen",
    role: "Head of CX at Acme Corp",
    avatar: images.testimonials[0]
  },
  {
    quote: "The AI recommendations have helped us identify and fix customer pain points we didn't even know existed.",
    author: "Michael Torres",
    role: "Product Manager at TechCo",
    avatar: images.testimonials[1]
  }
];

const benefits = [
  'Completely free',
  'No credit card required',
  'All features included',
  'Premium support',
  'Regular updates'
];

export function CTASection() {
  return (
    <div className="bg-primary-50 dark:bg-primary-900/20 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#6C47FF] text-[#6C47FF]" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to transform your customer experience?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Join over 10,000 companies using Persona Path to create exceptional customer experiences.
            </p>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 font-medium text-white bg-[#6C47FF] hover:bg-[#5A3CD7] rounded-full transition-colors"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center justify-center h-14 px-8 bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-white font-medium rounded-full border border-gray-200 dark:border-gray-700 transition-colors"
                >
                  Watch Demo
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {benefits.map((benefit) => (
                  <div 
                    key={benefit}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <Check className="w-4 h-4 text-[#6C47FF]" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}