import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedListProps {
  children: ReactNode[];
  delay?: number;
}

const AnimatedList: React.FC<AnimatedListProps> = ({ children, delay = 0.1 }) => {
  return (
    <div className="space-y-3">
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * delay, duration: 0.4 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedList;
