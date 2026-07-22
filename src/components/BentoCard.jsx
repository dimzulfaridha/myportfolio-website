import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function BentoCard({ children, className, innerClassName, delay = 0 }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0, filter: 'blur(10px)' }}
      whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.32, 0.72, 0, 1]
      }}
      className={twMerge(clsx("double-bezel", className))}
    >
      <div className={twMerge(clsx("double-bezel-inner", innerClassName))}>
        {children}
      </div>
    </motion.div>
  );
}
