import { FaExternalLinkAlt } from 'react-icons/fa';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  /** テーマカラー */
  color?: 'purple' | 'lime' | 'blue';
  /** アイコンを表示するか */
  showIcon?: boolean;
  className?: string;
}

const colorClasses = {
  purple: 'text-purple-700 hover:text-purple-900',
  lime: 'text-lime-700 hover:text-lime-900',
  blue: 'text-blue-600 hover:text-blue-800',
};

const ExternalLink = ({
  href,
  children,
  color = 'blue',
  showIcon = false,
  className = '',
}: ExternalLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${colorClasses[color]} underline font-semibold inline-flex items-center gap-1 transition ${className}`}
    >
      {showIcon && <FaExternalLinkAlt className="text-xs" />}
      {children}
    </a>
  );
};

export default ExternalLink;
