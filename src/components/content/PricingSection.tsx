import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PricingSectionProps {
  /** セクションタイトル */
  title: string;
  /** テーマカラー */
  color: 'purple' | 'lime' | 'blue';
  /** カード（通常2つ） */
  children: ReactNode;
  /** アニメーション遅延 */
  delay?: number;
}

const colorClasses = {
  purple: 'text-purple-900',
  lime: 'text-lime-900',
  blue: 'text-blue-900',
};

const PricingSection = ({ title, color, children, delay = 0.7 }: PricingSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="mb-16"
    >
      <h2 className={`text-4xl font-serif font-bold ${colorClasses[color]} mb-8 text-center`}>
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{children}</div>
    </motion.div>
  );
};

export default PricingSection;
