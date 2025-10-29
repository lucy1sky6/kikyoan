import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  return (
    <div className="py-12 text-center">
      {/* QRコード予定地 */}
      <div className="flex justify-center mb-8">
        <div className="w-48 h-48 bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center shadow-md">
          <span className="text-sm text-gray-600 font-semibold">QRコード予定地</span>
        </div>
      </div>

      {/* SNSアイコン */}
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
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-700 hover:text-gray-900 transition"
          aria-label="X (Twitter)"
        >
          <FaXTwitter />
        </a>
      </div>
    </div>
  );
};

export default Contact;
