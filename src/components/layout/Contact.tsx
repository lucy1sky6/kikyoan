import QRCodePlaceholder from '../content/QRCodePlaceholder';
import SocialLinks from './SocialLinks';

const Contact = () => {
  return (
    <div className="py-12 text-center">
      {/* QRコード予定地 */}
      <QRCodePlaceholder />

      {/* SNSアイコン */}
      <SocialLinks />
    </div>
  );
};

export default Contact;
