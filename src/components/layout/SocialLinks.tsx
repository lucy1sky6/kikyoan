import { FaInstagram } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-6">
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-gray-700 hover:text-gray-900 transition"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialLinks;
