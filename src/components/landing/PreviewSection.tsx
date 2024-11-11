import React from 'react';
import { motion } from 'framer-motion';
import { Users, Map, LineChart } from 'lucide-react';

const features = [
  {
    title: "Customer Personas",
    description: "Build detailed customer profiles with rich insights and behaviors",
    icon: Users,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2340",
    color: "from-blue-500/20 to-transparent"
  },
  {
    title: "Journey Mapping",
    description: "Map and optimize every touchpoint in your customer journey",
    icon: Map,
    image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&q=80&w=2340",
    color: "from-purple-500/20 to-transparent"
  },
  {
    title: "Analytics & Insights",
    description: "Transform data into actionable insights that drive growth",
    icon: LineChart,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2340",
    color: "from-emerald-500/20 to-transparent"
  }
];

export function PreviewSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#6C47FF10_1px,transparent_1px),linear-gradient(to_bottom,#6C47FF10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/90 to-white dark:from-gray-900/0 dark:via-gray-900/90 dark:to-gray-900" />
        </div>

        <div className="relative space-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-center gap-12"
            >
              {/* Image - Always first on mobile */}
              <div className={`flex-1 w-full md:w-auto ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-radial ${feature.color} -z-10`} />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/5 to-transparent" />
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className={`flex-1 text-center md:text-left ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-[#6C47FF]">
                  <feature.icon className="w-5 h-5" />
                  <span>{feature.title}</span>
                </div>
                
                <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white mt-4">
                  {feature.description}
                </h3>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
                  Experience seamless collaboration and real-time updates as you build and refine your customer journey maps.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}