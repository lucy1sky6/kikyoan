import { motion } from 'framer-motion';

interface ContactSectionProps {
  titleColor: string;
  phone: string;
  phoneLink: string;
  website: string;
  websiteLink: string;
  linkColor: string;
  linkHoverColor: string;
}

const ContactSection = ({
  titleColor,
  phone,
  phoneLink,
  website,
  websiteLink,
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
      <div className="space-y-3 text-gray-700">
        <p className="text-lg">
          <span className="mr-2">📞</span>
          <a href={phoneLink} className={`${linkColor} ${linkHoverColor} transition`}>
            {phone}
          </a>
        </p>
        <p className="text-lg">
          <span className="mr-2">🌐</span>
          <a
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkColor} ${linkHoverColor} underline transition`}
          >
            {website}
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default ContactSection;
