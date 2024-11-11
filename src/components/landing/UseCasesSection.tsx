import React from 'react';
import { motion } from 'framer-motion';
import { Users, LineChart, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const useCases = [
  {
    icon: Users,
    title: 'For CX Teams',
    description: 'Understand your customers better and design journeys that deliver exceptional experiences at every touchpoint.',
    benefits: [
      'Create detailed customer personas',
      'Map and optimize customer journeys',
      'Track satisfaction metrics'
    ]
  },
  {
    icon: LineChart,
    title: 'For Product Managers',
    description: 'Identify bottlenecks and streamline user experiences with data-driven insights and actionable recommendations.',
    benefits: [
      'Analyze user behavior patterns',
      'Optimize product workflows',
      'Measure feature adoption'
    ]
  },
  {
    icon: Briefcase,
    title: 'For Business Leaders',
    description: 'Turn customer insights into growth strategies and make informed decisions backed by real data.',
    benefits: [
      'Track key business metrics',
      'Identify growth opportunities',
      'Improve customer retention'
    ]
  }
];

export function UseCasesSection() {
  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Who is Persona Path For?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Empower your entire organization with customer insights and journey optimization tools
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <useCase.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {useCase.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {useCase.description}
              </p>

              <ul className="space-y-3 mb-6">
                {useCase.benefits.map((benefit, i) => (
                  <li 
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <Link
                to="/signup"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}