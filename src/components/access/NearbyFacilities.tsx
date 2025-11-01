import FacilityBanner from './FacilityBanner';
import { getImagePath } from '../../utils/getImagePath';

const NearbyFacilities = () => {
  return (
    <div className="mt-12 -mx-4">
      <h3 className="text-4xl font-bold mb-8 text-center px-4">近くの施設</h3>

      <div className="space-y-0">
        {/* 小木漁港 */}
        <FacilityBanner
          title="小木漁港"
          link="https://notocho.jp/%E7%89%B9%E7%94%A3%E5%93%81/3929/"
          gradientFrom="from-blue-100"
          gradientTo="to-blue-50"
          carIconColor="text-blue-600"
          distance="桔梗庵から車で2分"
          description="人気の釣り場です。"
          mapSrc="https://maps.google.com/maps?q=小木漁港,石川県鳳珠郡能登町&t=&z=15&ie=UTF8&iwloc=&output=embed"
          mapTitle="小木漁港の地図"
          zIndex={14}
          photoSrc={getImagePath('/images/facilities/ogi-port.webp')}
          customGradientColor="rgb(70,130,180)"
        />

        {/* イカの駅 つくモール */}
        <FacilityBanner
          title="イカの駅 つくモール"
          link="https://ikanoeki.com/"
          gradientFrom="from-orange-100"
          gradientTo="to-orange-50"
          carIconColor="text-orange-600"
          distance="桔梗庵から車で7分"
          description="お土産やグルメが楽しめる道の駅。"
          mapSrc="https://maps.google.com/maps?q=イカの駅つくモール,石川県鳳珠郡能登町&t=&z=15&ie=UTF8&iwloc=&output=embed"
          mapTitle="イカの駅 つくモールの地図"
          zIndex={13}
          photoSrc={getImagePath('/images/facilities/ika-no-eki.webp')}
          customGradientColor="rgb(252,137,0)"
        />

        {/* のと海洋ふれあいセンター */}
        <FacilityBanner
          title="のと海洋ふれあいセンター"
          link="http://notomarine.jp/"
          gradientFrom="from-teal-100"
          gradientTo="to-teal-50"
          carIconColor="text-teal-600"
          distance="桔梗庵から車で10分"
          description="海の生き物と触れ合える体験施設。"
          mapSrc="https://maps.google.com/maps?q=のと海洋ふれあいセンター,石川県鳳珠郡能登町&t=&z=15&ie=UTF8&iwloc=&output=embed"
          mapTitle="のと海洋ふれあいセンターの地図"
          zIndex={12}
          photoSrc={getImagePath('/images/facilities/marine-center.webp')}
          customGradientColor="rgb(29,179,167)"
        />

        {/* 縄文真脇遺跡 */}
        <FacilityBanner
          title="縄文真脇遺跡"
          link="http://www.mawakiiseki.jp/"
          gradientFrom="from-amber-100"
          gradientTo="to-amber-50"
          carIconColor="text-amber-600"
          distance="桔梗庵から車で15分"
          description="約4000年前の縄文時代の遺跡。"
          mapSrc="https://maps.google.com/maps?q=縄文真脇遺跡,石川県鳳珠郡能登町&t=&z=15&ie=UTF8&iwloc=&output=embed"
          mapTitle="縄文真脇遺跡の地図"
          zIndex={11}
          photoSrc={getImagePath('/images/facilities/mawaki-ruins.webp')}
          customGradientColor="rgb(215,164,42)"
        />

        {/* 柳田植物公園 */}
        <FacilityBanner
          title="柳田植物公園"
          link="https://yanagida-flower.jp/"
          gradientFrom="from-green-100"
          gradientTo="to-green-50"
          carIconColor="text-green-600"
          distance="桔梗庵から車で20分"
          description="四季折々の花々が楽しめる植物公園。"
          mapSrc="https://maps.google.com/maps?q=柳田植物公園,石川県鳳珠郡能登町&t=&z=15&ie=UTF8&iwloc=&output=embed"
          mapTitle="柳田植物公園の地図"
          zIndex={10}
          photoSrc={getImagePath('/images/facilities/yanagida-park.webp')}
          customGradientColor="rgb(38,139,34)"
        />
      </div>
    </div>
  );
};

export default NearbyFacilities;
