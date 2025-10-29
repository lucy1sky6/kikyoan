import LocationMap from './LocationMap';

const AccessMaps = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      {/* 桔梗庵 */}
      <LocationMap
        title="桔梗庵"
        mapSrc="https://maps.google.com/maps?q=石川県鳳珠郡能登町小木10-28&t=&z=15&ie=UTF8&iwloc=&output=embed"
        address="〒927-0553 石川県鳳珠郡能登町小木10-28"
      />

      {/* greengrass */}
      <LocationMap
        title="greengrass"
        mapSrc="https://maps.google.com/maps?q=37.3001348,137.223473&t=&z=15&ie=UTF8&iwloc=&output=embed"
        address="〒927-0553 石川県鳳珠郡能登町小木"
      />
    </div>
  );
};

export default AccessMaps;
