import React from 'react';
import { motion } from 'framer-motion';

export function RetroGrid() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full dark:bg-black bg-white">
      <div className="absolute h-full w-full">
        {/* Grid */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#6C47FF15_1px,transparent_1px),linear-gradient(to_bottom,#6C47FF15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        />
        
        {/* Glow Effect */}
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#6C47FF] opacity-20 blur-[100px]" />

        {/* Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_400px,#6C47FF15,transparent)]" />

        {/* Animated Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-[#6C47FF]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}