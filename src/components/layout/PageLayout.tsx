import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { BackButton } from '../common';

interface PageLayoutProps {
  /** 子要素 */
  children: ReactNode;
  /** テーマカラー */
  color: 'purple' | 'lime' | 'blue';
}

const colorClasses = {
  purple: 'from-purple-50',
  lime: 'from-lime-50',
  blue: 'from-blue-50',
};

const PageLayout = ({ children, color }: PageLayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
      className={`min-h-screen bg-gradient-to-b ${colorClasses[color]} to-white py-16 px-4 relative`}
    >
      <BackButton color={color} />
      <div className="max-w-5xl mx-auto px-4">{children}</div>
    </motion.div>
  );
};

export default PageLayout;
