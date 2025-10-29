import { type ReactNode } from 'react';

interface FlowArrowProps {
  direction: 'down' | 'right' | 'bidirectional';
  description?: ReactNode;
  className?: string;
}

const FlowArrow = ({ direction, description, className = '' }: FlowArrowProps) => {
  const arrowMap = {
    down: '↓',
    right: '→',
    bidirectional: '⇄',
  };

  const sizeClass = direction === 'bidirectional' ? 'text-3xl' : 'text-2xl';

  if (direction === 'right') {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <div className={`${sizeClass} leading-none`}>{arrowMap[direction]}</div>
        {description && (
          <div className="text-xs text-gray-800 mt-1 inline-flex items-center">
            {description}
          </div>
        )}
      </div>
    );
  }

  if (direction === 'bidirectional') {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <div className={`${sizeClass} font-bold text-gray-600 leading-none`}>
          {arrowMap[direction]}
        </div>
        {description && (
          <div className="text-xs text-gray-700 mt-2 text-center inline-flex items-center flex-col">
            {description}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center gap-2 mb-2 ${className}`}>
      <span className={`${sizeClass} leading-none`}>{arrowMap[direction]}</span>
      {description && (
        <span className="text-xs text-gray-800 inline-flex items-center">
          {description}
        </span>
      )}
    </div>
  );
};

export default FlowArrow;
