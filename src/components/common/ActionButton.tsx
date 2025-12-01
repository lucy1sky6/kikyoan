import type { ReactNode, MouseEvent } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ActionButtonProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  icon?: ReactNode;
  /** テーマカラー: purple, lime, blue など */
  color?: 'purple' | 'lime' | 'blue' | 'gray';
  variant?: ButtonVariant;
  className?: string;
  /** stopPropagationを自動で呼ぶか */
  stopPropagation?: boolean;
}

const colorClasses = {
  purple: {
    primary: 'bg-purple-600 hover:bg-purple-700 text-white',
    secondary: 'bg-purple-100 hover:bg-purple-200 text-purple-800',
    outline: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50',
  },
  lime: {
    primary: 'bg-lime-600 hover:bg-lime-700 text-white',
    secondary: 'bg-lime-100 hover:bg-lime-200 text-lime-800',
    outline: 'border-2 border-lime-600 text-lime-600 hover:bg-lime-50',
  },
  blue: {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-blue-100 hover:bg-blue-200 text-blue-800',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
  },
  gray: {
    primary: 'bg-gray-800 hover:bg-gray-700 text-white',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
    outline: 'border-2 border-gray-600 text-gray-600 hover:bg-gray-50',
  },
};

const ActionButton = ({
  onClick,
  children,
  icon,
  color = 'purple',
  variant = 'primary',
  className = '',
  stopPropagation = false,
}: ActionButtonProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (stopPropagation) {
      e.stopPropagation();
    }
    onClick(e);
  };

  const baseClasses =
    'inline-flex items-center gap-2 px-6 py-2 rounded-full transition-colors shadow-md font-sans';
  const colorClass = colorClasses[color][variant];

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${colorClass} ${className}`}
    >
      {icon}
      {children}
    </button>
  );
};

export default ActionButton;
