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
}: FacilityBannerProps) => {
  return (
    <div
      className={`relative h-48 bg-gradient-to-r ${gradientFrom} ${gradientTo} flex items-center`}
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 30px 100%, 0 calc(100% - 30px))',
        zIndex,
        marginBottom: '-1px',
        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      }}
    >
      {/* 背景画像用（将来的に追加） */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* テキスト情報（リンク） */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 flex-1 px-8 hover:opacity-90 transition-opacity"
      >
        <h4 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
          {title}
        </h4>
        <p className="text-base text-white drop-shadow-md mb-3">{description}</p>
        <div className="inline-flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full shadow-md">
          <FaCar className={carIconColor} />
          <span className="text-sm font-semibold text-gray-800">{distance}</span>
        </div>
      </a>

      {/* Google Map */}
      <div className="relative z-10 w-80 h-full">
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
