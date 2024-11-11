import React from 'react';
import { motion } from 'framer-motion';
import { Users, Map, LineChart, Shield, Zap, Sparkles, FileText } from 'lucide-react';
import { images } from './images';

const features = [
  {
    icon: Users,
    title: 'Persona Creation',
    description: 'Understand your customers like never before with detailed personas tailored to their unique needs and behaviors.',
    benefit: 'Increase customer satisfaction by up to 45%',
    image: images.features.personaCreation
  },
  {
    icon: Map,
    title: 'Journey Mapping',
    description: 'Map and optimize every touchpoint in your customer journey with our intuitive drag-and-drop interface.',
    benefit: 'Reduce customer churn by 32%',
    image: images.features.journeyMapping
  },
  {
    icon: LineChart,
    title: 'Analytics & Insights',
    description: 'Transform data into actionable insights to boost customer satisfaction and retention rates.',
    benefit: 'Make data-driven decisions 3x faster',
    image: images.features.analytics
  },
  {
    icon: Sparkles,
    title: 'AI Recommendations',
    description: 'Get personalized suggestions to optimize touchpoints and improve customer experiences automatically.',
    benefit: 'Save 15+ hours per week on analysis',
    comingSoon: true
  },
  {
    icon: Zap,
    title: 'Real-Time Collaboration',
    description: 'Work seamlessly across teams to build, refine, and optimize customer journeys—ensuring alignment and faster results.',
    benefit: 'Improve team productivity by 40%',
    image: images.features.realTimeCollaboration
  },
  {
    icon: FileText,
    title: 'Customizable Templates',
    description: 'Get started quickly with ready-to-use templates for journey maps and personas, fully customizable to fit your unique needs.',
    benefit: 'Launch projects 5x faster',
    image: images.features.customizableTemplates
  }
];

export function FeatureSection() {
  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-1.5 bg-[#6C47FF]/10 text-[#6C47FF] dark:text-[#8165FF] rounded-full text-sm font-medium"
          >
            Powerful Features
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Everything you need to deliver
            <br />
            exceptional customer experiences
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Built for teams who want to understand, optimize, and scale their customer experience
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-[#6C47FF]/50 dark:hover:border-[#8165FF]/50 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              {feature.image && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-[#6C47FF]/10 text-[#6C47FF] dark:text-[#8165FF]">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    {feature.comingSoon && (
                      <span className="inline-block text-xs font-medium text-[#6C47FF] dark:text-[#8165FF] bg-[#6C47FF]/10 dark:bg-[#8165FF]/20 px-2 py-0.5 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {feature.description}
                </p>
                <div className="text-sm font-medium text-[#6C47FF] dark:text-[#8165FF]">
                  {feature.benefit}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}