import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  return (
    <div className="py-12 text-center">
      <h3 className="text-3xl font-bold mb-8">お問い合わせ</h3>

      <div className="flex justify-center gap-8 mb-6">
        <div className="border-2 border-gray-400 px-6 py-3 text-sm text-gray-600">
          ロゴ予定地A
        </div>
        <div className="border-2 border-gray-400 px-6 py-3 text-sm text-gray-600">
          ロゴ予定地B
        </div>
      </div>

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
