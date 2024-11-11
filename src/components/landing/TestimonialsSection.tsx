import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { images } from './images';

const testimonials = [
  {
    quote: "Persona Path has completely transformed how we understand and serve our customers. The insights we've gained are invaluable.",
    author: "Sarah Chen",
    role: "Head of CX at Acme Corp",
    avatar: images.testimonials[0],
    rating: 5
  },
  {
    quote: "The AI recommendations have helped us identify and fix customer pain points we didn't even know existed. Game changer!",
    author: "Michael Torres",
    role: "Product Manager at TechCo",
    avatar: images.testimonials[1],
    rating: 5
  },
  {
    quote: "Finally, a tool that makes journey mapping intuitive and actionable. Our team's productivity has increased significantly.",
    author: "Emily Rodriguez",
    role: "Customer Success Lead at StartupX",
    avatar: images.testimonials[2],
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
          >
            Customer Stories
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Loved by teams worldwide
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            See how leading companies are using Persona Path to transform their customer experience
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#6C47FF] text-[#6C47FF]" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}