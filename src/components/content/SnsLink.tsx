import { FaInstagram } from 'react-icons/fa6';

interface SnsLinkProps {
  /** InstagramのURL */
  instagramUrl?: string;
  /** テーマカラー */
  color?: 'purple' | 'lime' | 'blue' | 'gray';
  /** サイズ */
  size?: 'md' | 'lg';
  /** 中央揃え */
  centered?: boolean;
}

const colorClasses = {
  purple: 'text-purple-600 hover:text-purple-800',
  lime: 'text-lime-600 hover:text-lime-800',
  blue: 'text-blue-600 hover:text-blue-800',
  gray: 'text-gray-700 hover:text-gray-900',
};

const sizeClasses = {
  md: 'text-2xl',
  lg: 'text-3xl',
};

const SnsLink = ({
  instagramUrl = 'https://instagram.com',
  color = 'gray',
  size = 'md',
  centered = false,
}: SnsLinkProps) => {
  return (
    <div className={`flex gap-4 ${centered ? 'justify-center' : ''} mb-4`}>
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${colorClasses[color]} transition ${sizeClasses[size]}`}
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default SnsLink;
