import { FaExternalLinkAlt } from 'react-icons/fa';

interface ExternalLinkProps {
  href: string;
  label: string;
  className?: string;
}

const ExternalLink = ({ href, label, className = '' }: ExternalLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-blue-600 hover:underline inline-flex items-center gap-1 ml-2 font-sans ${className}`}
    >
      <FaExternalLinkAlt className="text-xs" />
      {label}
    </a>
  );
};

export default ExternalLink;
