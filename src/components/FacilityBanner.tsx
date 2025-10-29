import { FaCar } from 'react-icons/fa';

interface FacilityBannerProps {
  title: string;
  titleLink?: string;
  gradientFrom: string;
  gradientTo: string;
  carIconColor: string;
  distance: string;
  description: string;
  mapSrc: string;
  mapTitle: string;
}

const FacilityBanner = ({
  title,
  titleLink,
  gradientFrom,
  gradientTo,
  carIconColor,
  distance,
  description,
  mapSrc,
  mapTitle,
}: FacilityBannerProps) => {
  return (
    <div
      className={`relative h-48 bg-gradient-to-r ${gradientFrom} ${gradientTo} shadow-lg overflow-hidden flex items-center`}
    >
      {/* 背景画像用（将来的に追加） */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* テキスト情報 */}
      <div className="relative z-10 flex-1 px-8">
        <h4 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
          {titleLink ? (
            <a
              href={titleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h4>
        <div className="inline-flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full mb-3 shadow-md">
          <FaCar className={carIconColor} />
          <span className="text-sm font-semibold text-gray-800">{distance}</span>
        </div>
        <p className="text-base text-white drop-shadow-md">{description}</p>
      </div>

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
