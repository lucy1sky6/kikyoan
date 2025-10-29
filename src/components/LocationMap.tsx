interface LocationMapProps {
  title: string;
  mapSrc: string;
  address: string;
}

const LocationMap = ({ title, mapSrc, address }: LocationMapProps) => {
  return (
    <div>
      <p className="text-xl text-center font-semibold mb-4">{title}</p>
      <div className="relative w-full" style={{ paddingBottom: '75%' }}>
        <iframe
          src={mapSrc}
          className="absolute top-0 left-0 w-full h-full border-0 rounded-lg shadow-lg"
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
          title={`${title}の地図`}
        ></iframe>
      </div>
      <p className="text-center text-gray-700 mt-3 text-sm">{address}</p>
    </div>
  );
};

export default LocationMap;
