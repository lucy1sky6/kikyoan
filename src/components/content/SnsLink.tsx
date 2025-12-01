import { FaInstagram } from 'react-icons/fa6';

interface SnsLinkProps {
  /** InstagramのURL */
  instagramUrl?: string;
  /** テーマカラー */
  color: 'purple' | 'lime' | 'blue';
}

const colorClasses = {
  purple: 'text-purple-600 hover:text-purple-800',
  lime: 'text-lime-600 hover:text-lime-800',
  blue: 'text-blue-600 hover:text-blue-800',
};

const SnsLink = ({ instagramUrl = 'https://instagram.com', color }: SnsLinkProps) => {
  return (
    <div className="flex gap-4 mb-4">
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${colorClasses[color]} transition text-2xl`}
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default SnsLink;
