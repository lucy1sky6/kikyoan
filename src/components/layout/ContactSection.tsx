import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';

interface ContactSectionProps {
  titleColor: string;
  phone: string;
  phoneLink: string;
  linkColor: string;
  linkHoverColor: string;
}

const ContactSection = ({
  titleColor,
  phone,
  phoneLink,
  linkColor,
  linkHoverColor,
}: ContactSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="mt-32 mb-16 text-center"
    >
      <h2 className={`text-4xl font-serif font-bold ${titleColor} mb-8`}>お問い合わせ</h2>
      <div className="text-gray-700">
        <p className="text-lg flex items-center justify-center gap-2">
          <FaPhoneAlt className={linkColor} />
          <a href={phoneLink} className={`${linkColor} ${linkHoverColor} transition`}>
            {phone}
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default ContactSection;
