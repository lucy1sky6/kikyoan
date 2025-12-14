interface ProfileCardProps {
  /** プロフィール文 */
  text: string;
  /** 画像パス（オプション） */
  imageSrc?: string;
  /** 画像のalt */
  imageAlt?: string;
  /** テーマカラー */
  color: 'purple' | 'lime' | 'blue';
}

const colorClasses = {
  purple: {
    bg: 'from-white to-purple-50',
  },
  lime: {
    bg: 'from-white to-lime-50',
  },
  blue: {
    bg: 'from-white to-blue-50',
  },
};

const ProfileCard = ({ text, imageSrc, imageAlt, color }: ProfileCardProps) => {
  const colors = colorClasses[color];

  return (
    <div
      className={`bg-gradient-to-b ${colors.bg} p-8 max-w-2xl mx-auto`}
      style={{ boxShadow: '0 20px 25px -8px rgb(0 0 0 / 0.25)' }}
    >
      <p className="text-gray-700 leading-relaxed mb-6">{text}</p>
      {imageSrc ? (
        <div className="flex justify-center">
          <img
            src={imageSrc}
            alt={imageAlt || ''}
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      ) : (
        <div className="bg-gray-200 h-48 flex items-center justify-center rounded-lg">
          <span className="text-gray-500">写真</span>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
