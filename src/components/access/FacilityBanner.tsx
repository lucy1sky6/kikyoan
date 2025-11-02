import { FaCar } from 'react-icons/fa';

interface FacilityBannerProps {
  title: string;
  link: string;
  gradientFrom: string;
  gradientTo: string;
  carIconColor: string;
  distance: string;
  description: string;
  mapSrc: string;
  mapTitle: string;
  zIndex?: number;
  photoSrc?: string;
  customGradientColor?: string; // カスタムグラデーション色（RGB）
}

const FacilityBanner = ({
  title,
  link,
  gradientFrom,
  gradientTo,
  carIconColor,
  distance,
  description,
  mapSrc,
  mapTitle,
  zIndex = 10,
  photoSrc,
  customGradientColor,
}: FacilityBannerProps) => {
  return (
    <div
      className={`relative h-48 ${!customGradientColor ? `bg-gradient-to-r ${gradientFrom} ${gradientTo}` : ''} flex items-center`}
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 30px 100%, 0 calc(100% - 30px))',
        zIndex,
        marginBottom: '-1px',
        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        ...(customGradientColor && {
          background: customGradientColor,
        }),
      }}
    >
      {/* 背景画像（マップの左側部分のみ）- 左側を透明に、右側を不透明に */}
      {photoSrc && (
        <>
          <div
            className="absolute top-0 left-0 bottom-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${photoSrc})`,
              right: 'max(128px, min(320px, 20%))', // マップの幅に合わせて調整
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 45%)',
              maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 45%)',
            }}
          />
          {/* 写真を見やすくするための暗いオーバーレイ */}
          <div className="absolute inset-0 bg-black/40"></div>
        </>
      )}

      {/* テキスト情報（リンク） */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 flex-1 px-3 sm:px-6 md:px-8 hover:opacity-90 transition-opacity"
      >
        <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 drop-shadow-lg">
          {title}
        </h4>
        <p className="text-sm sm:text-base text-white drop-shadow-md mb-2 sm:mb-3">{description}</p>
        <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/45 px-2 sm:px-4 py-1 sm:py-2 rounded-full shadow-md backdrop-blur-sm">
          <FaCar className={`${carIconColor} text-xs sm:text-base drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]`} />
          <span className="text-xs sm:text-sm font-semibold text-gray-800">{distance}</span>
        </div>
      </a>

      {/* Google Map */}
      <div className="relative z-10 w-32 sm:w-48 md:w-64 lg:w-80 h-full flex-shrink-0">
        <iframe
          src={mapSrc}
          className="w-full h-full border-0"
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
          title={mapTitle}
        ></iframe>
      </div>
    </div>
  );
};

export default FacilityBanner;
