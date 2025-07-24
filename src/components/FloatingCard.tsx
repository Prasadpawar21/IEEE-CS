import React from 'react';
import { motion } from 'framer-motion';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const FloatingCard: React.FC<FloatingCardProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/20 rounded-2xl backdrop-blur-sm"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 },
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default FloatingCard;