import LocationNode from './LocationNode';
import FacilityBanner from './FacilityBanner';
import LocationMap from './LocationMap';
import TransportCard from './TransportCard';
import SimpleNode from './SimpleNode';
import FlowArrow from './FlowArrow';
import ExternalLink from './ExternalLink';

const Access = () => {
  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold text-center mb-8">所在地</h2>

      <div className="max-w-6xl mx-auto">
        {/* マップ2カラム */}
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

        {/* 交通手段 */}
        <div className="mt-12">
          <h3 className="text-4xl font-bold mb-8 text-center">アクセス</h3>

          {/* 詳細情報（概要） */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* 飛行機 */}
            <TransportCard icon="✈️" title="飛行機">
              <p className="text-sm text-gray-700">
                のと里山空港から <strong>北陸鉄道 特急バス</strong> で約1時間
                <ExternalLink
                  href="https://www.hokutetsu.co.jp/highway-bus/noto/"
                  label="時刻表・料金"
                />
              </p>
              <p className="text-sm text-gray-700">
                のと里山空港から <strong>ふるさとタクシー</strong> で約1時間
                <ExternalLink
                  href="https://www.noto-airport.jp/access/furutaku.html"
                  label="詳細・予約"
                />
              </p>
            </TransportCard>

            {/* 車 */}
            <TransportCard icon="🚗" title="お車">
              <p className="text-sm text-gray-700">
                金沢から <strong>のと里山海道</strong> 経由で約2.5時間
                <ExternalLink
                  href="https://www.pref.ishikawa.lg.jp/nakanotopublic/notosatoyama/syokai.html"
                  label="道路情報"
                />
              </p>
            </TransportCard>

            {/* バス */}
            <TransportCard icon="🚌" title="バス">
              <p className="text-sm text-gray-700">
                金沢駅西口から <strong>北陸鉄道 特急バス</strong> で <strong>小木港</strong> へ 約2.5時間
                <ExternalLink
                  href="https://www.hokutetsu.co.jp/highway-bus/noto/"
                  label="時刻表・料金"
                />
              </p>
            </TransportCard>
          </div>

          {/* フローチャート（詳細） */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl mb-8">
            <div className="max-w-5xl mx-auto">
              {/* 中央縦並びルート */}
              <div className="text-center mb-8">
                {/* 全国各地（電車ルート用） */}
                <SimpleNode name="全国各地" bgColor="bg-yellow-100" className="mb-3 inline-block" />

                {/* 電車 */}
                <FlowArrow
                  direction="down"
                  description="🚅 北陸新幹線 / 🚄 サンダーバード"
                />

                {/* 金沢 */}
                <LocationNode
                  name="金沢駅"
                  bgColor="bg-gray-200"
                  photoAreaColor="bg-gray-300"
                  className="mb-3 shadow-md"
                  photoSrc="/images/access/kanazawa-station.webp"
                />

                {/* お車/バス */}
                <FlowArrow
                  direction="down"
                  description="🚗🚌 のと里山海道 約 1.5時間"
                />

                {/* 能登空港IC */}
                <SimpleNode name="能登空港IC" className="mb-3" />

                {/* お車/バス */}
                <FlowArrow direction="down" description="🚗🚌" />

                {/* のと里山空港（左から飛行機ルート合流） */}
                <div className="mb-3 text-center">
                  <div className="inline-block relative">
                    {/* 中央：のと里山空港 */}
                    <LocationNode
                      name="のと里山空港"
                      bgColor="bg-gray-200"
                      photoAreaColor="bg-gray-300"
                      className="shadow-md"
                      photoSrc="/images/access/noto-airport.webp"
                    />

                    {/* 左：飛行機ルート（空港のすぐ左に配置） */}
                    <div className="absolute right-full top-1/2 -translate-y-1/2 flex items-center gap-3 mr-3 whitespace-nowrap">
                      <SimpleNode name="全国各地" bgColor="bg-yellow-100" />
                      <FlowArrow direction="right" description="✈️ 飛行機" />
                    </div>
                  </div>
                </div>

                {/* お車/バス */}
                <FlowArrow
                  direction="down"
                  description="🚗🚌 珠洲道路・宇出津経由 約1時間"
                />
              </div>

              {/* 小木エリア（大きなコンテナ） */}
              <div className="relative border-4 border-orange-300 rounded-2xl pt-3 pb-8 px-8 bg-orange-50">
                {/* 小木入口（エリアの上部に重なる） */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
                  <LocationNode
                    name="小木入口"
                    bgColor="bg-orange-200"
                    textColor="text-orange-900"
                    photoAreaColor="bg-orange-300"
                    borderColor="border-orange-500"
                    className="shadow-lg border-2 border-orange-400"
                    photoSrc="/images/access/ogi-entrance.webp"
                  />
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-orange-900">小木エリア</h4>
                </div>

                {/* 施設分岐 */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                  {/* 桔梗庵 */}
                  <div className="flex-1 text-center">
                    <FlowArrow
                      direction="down"
                      description={
                        <>
                          🚶 徒歩15分
                          <br />
                          石川県漁協小木支所方向
                        </>
                      }
                    />
                    <LocationNode
                      name="桔梗庵"
                      bgColor="bg-purple-200"
                      textColor="text-purple-900"
                      photoAreaColor="bg-purple-300"
                      borderColor="border-purple-400"
                      className="shadow-lg"
                      photoSrc="/images/access/kikyoan.webp"
                    />
                  </div>

                  {/* 双方向矢印 */}
                  <FlowArrow
                    direction="bidirectional"
                    description={
                      <>
                        🚶 徒歩数分
                        <br />
                        数100m
                      </>
                    }
                  />

                  {/* greengrass */}
                  <div className="flex-1 text-center">
                    <FlowArrow
                      direction="down"
                      description={
                        <>
                          🚶 徒歩15分
                          <br />
                          能登町役場小木支所方向
                        </>
                      }
                    />
                    <LocationNode
                      name="greengrass"
                      bgColor="bg-lime-200"
                      textColor="text-lime-900"
                      photoAreaColor="bg-lime-300"
                      borderColor="border-lime-400"
                      className="shadow-lg"
                      photoSrc="/images/access/greengrass.webp"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 近くの施設 */}
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
              photoSrc="/images/facilities/ogi-port.webp"
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
              photoSrc="/images/facilities/ika-no-eki.webp"
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
              photoSrc="/images/facilities/marine-center.webp"
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
              photoSrc="/images/facilities/mawaki-ruins.webp"
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
              photoSrc="/images/facilities/yanagida-park.webp"
            />
        </div>
      </div>
    </div>
  );
};

export default Access;
