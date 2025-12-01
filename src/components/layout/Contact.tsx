import QRCodePlaceholder from '../content/QRCodePlaceholder';
import SnsLink from '../content/SnsLink';

const Contact = () => {
  return (
    <div className="py-12 text-center">
      {/* QRコード予定地 */}
      <QRCodePlaceholder />

      {/* SNSアイコン */}
      <SnsLink size="lg" centered />
    </div>
  );
};

export default Contact;
