import { motion } from 'framer-motion';

interface ContactSectionProps {
  bgColor: string;
  titleColor: string;
  phone: string;
  phoneLink: string;
  website: string;
  websiteLink: string;
  linkColor: string;
  linkHoverColor: string;
}

const ContactSection = ({
  bgColor,
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
      transition={{ delay: 0.8 }}
      className={`mt-16 text-center ${bgColor} rounded-2xl p-8 shadow-md`}
    >
      <h2 className={`text-3xl font-bold ${titleColor} mb-6`}>お問い合わせ</h2>
      <div className="space-y-4 text-gray-700">
        <p className="text-lg">
          <span className="font-semibold">電話:</span>{' '}
          <a href={phoneLink} className={`${linkHoverColor} transition`}>
            {phone}
          </a>
        </p>
        <p className="text-lg">
          <span className="font-semibold">ウェブサイト:</span>{' '}
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
