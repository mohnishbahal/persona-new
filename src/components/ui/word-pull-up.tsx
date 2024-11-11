import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface WordPullUpProps {
  words: string;
  className?: string;
}

export function WordPullUp({ words, className }: WordPullUpProps) {
  const wordsArray = words.split(' ');

  return (
    <div className={cn('flex flex-wrap justify-center gap-x-3', className)}>
      {wordsArray.map((word, idx) => (
        <div key={idx} className="overflow-hidden">
          <motion.span
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: idx * 0.1,
              ease: [0.33, 1, 0.68, 1]
            }}
            className="block"
          >
            {word}
          </motion.span>
        </div>
      ))}
    </div>
  );
}