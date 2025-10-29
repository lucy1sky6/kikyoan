import { FaExternalLinkAlt } from 'react-icons/fa';
import LocationNode from './LocationNode';
import FacilityBanner from './FacilityBanner';
import LocationMap from './LocationMap';
import TransportCard from './TransportCard';

const Access = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">所在地</h2>

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
          <h3 className="text-3xl font-bold mb-8 text-center">アクセス</h3>

          {/* 詳細情報（概要） */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* 飛行機 */}
            <TransportCard icon="✈️" title="飛行機">
              <p className="text-sm text-gray-700">
                のと里山空港から <strong>北陸鉄道 特急バス</strong> で約1時間
                <a
                  href="https://www.hokutetsu.co.jp/highway-bus/noto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1 ml-2"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  時刻表・料金
                </a>
              </p>
              <p className="text-sm text-gray-700">
                のと里山空港から <strong>ふるさとタクシー</strong> で約1時間
                <a
                  href="https://www.noto-airport.jp/access/furutaku.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1 ml-2"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  詳細・予約
                </a>
              </p>
            </TransportCard>

            {/* 車 */}
            <TransportCard icon="🚗" title="お車">
              <p className="text-sm text-gray-700">
                金沢から <strong>のと里山海道</strong> 経由で約2.5時間
                <a
                  href="https://www.pref.ishikawa.lg.jp/nakanotopublic/notosatoyama/syokai.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1 ml-2"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  道路情報
                </a>
              </p>
            </TransportCard>

            {/* バス */}
            <TransportCard icon="🚌" title="バス">
              <p className="text-sm text-gray-700">
                金沢駅西口から <strong>北陸鉄道 特急バス</strong> で <strong>小木港</strong> へ 約2.5時間
                <a
                  href="https://www.hokutetsu.co.jp/highway-bus/noto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1 ml-2"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  時刻表・料金
                </a>
              </p>
            </TransportCard>
          </div>

          {/* フローチャート（詳細） */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl mb-8">
            <div className="max-w-5xl mx-auto">
              {/* 中央縦並びルート */}
              <div className="text-center mb-8">
                {/* 全国各地（電車ルート用） */}
                <div className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-bold shadow-lg text-lg mb-3 inline-block">
                  全国各地
                </div>

                {/* 電車 */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl leading-none">↓</span>
                  <span className="text-xs text-gray-800 inline-flex items-center">
                    🚅 北陸新幹線 / 🚄 サンダーバード
                  </span>
                </div>

                {/* 金沢 */}
                <LocationNode
                  name="金沢駅"
                  bgColor="bg-gray-200"
                  photoAreaColor="bg-gray-300"
                  className="mb-3 shadow-md"
                />

                {/* お車/バス */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl leading-none">↓</span>
                  <span className="text-xs text-gray-800 inline-flex items-center">
                    🚗🚌 のと里山海道 約 1.5時間
                  </span>
                </div>

                {/* 能登空港IC */}
                <div className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-bold shadow-lg text-lg mb-3">
                  能登空港IC
                </div>

                {/* お車/バス */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl leading-none">↓</span>
                  <span className="text-xs text-gray-800 inline-flex items-center">
                    🚗🚌
                  </span>
                </div>

                {/* のと里山空港（左から飛行機ルート合流） */}
                <div className="flex items-center justify-center gap-4 mb-3">
                  {/* 左：飛行機ルート */}
                  <div className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-bold shadow-lg text-lg">
                    全国各地
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <div className="text-2xl leading-none">→</div>
                    <div className="text-xs text-gray-800 mt-1 inline-flex items-center">
                      ✈️ 飛行機
                    </div>
                  </div>

                  {/* 中央：のと里山空港 */}
                  <LocationNode
                    name="のと里山空港"
                    bgColor="bg-gray-200"
                    photoAreaColor="bg-gray-300"
                    className="shadow-md"
                  />
                </div>

                {/* お車/バス */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl leading-none">↓</span>
                  <span className="text-xs text-gray-800 inline-flex items-center">
                    🚗🚌 珠洲道路・宇出津経由 約1時間
                  </span>
                </div>
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
                  />
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-orange-900">小木エリア</h4>
                </div>

                {/* 施設分岐 */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                  {/* 桔梗庵 */}
                  <div className="flex-1 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl leading-none">↓</span>
                      <span className="text-xs text-gray-800 inline-flex items-center">
                        🚶 徒歩15分<br />
                        石川県漁協小木支所方向
                      </span>
                    </div>
                    <LocationNode
                      name="桔梗庵"
                      bgColor="bg-purple-200"
                      textColor="text-purple-900"
                      photoAreaColor="bg-purple-300"
                      borderColor="border-purple-400"
                      className="shadow-lg"
                    />
                  </div>

                  {/* 双方向矢印 */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-3xl font-bold text-gray-600 leading-none">
                      ⇄
                    </div>
                    <div className="text-xs text-gray-700 mt-2 text-center inline-flex items-center flex-col">
                      🚶 徒歩数分<br />
                      数100m
                    </div>
                  </div>

                  {/* greengrass */}
                  <div className="flex-1 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl leading-none">↓</span>
                      <span className="text-xs text-gray-800 inline-flex items-center">
                        🚶 徒歩15分<br />
                        能登町役場小木支所方向
                      </span>
                    </div>
                    <LocationNode
                      name="greengrass"
                      bgColor="bg-lime-200"
                      textColor="text-lime-900"
                      photoAreaColor="bg-lime-300"
                      borderColor="border-lime-400"
                      className="shadow-lg"
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
        <h3 className="text-3xl font-bold mb-8 text-center px-4">近くの施設</h3>

        <div className="space-y-0">
            {/* 小木漁港 */}
            <FacilityBanner
              title="小木漁港"
              gradientFrom="from-blue-100"
              gradientTo="to-blue-50"
              carIconColor="text-blue-600"
              distance="桔梗庵から車で2分"
              description="人気の釣り場です。"
              mapSrc="https://maps.google.com/maps?q=小木漁港,石川県鳳珠郡能登町&t=&z=15&ie=UTF8&iwloc=&output=embed"
              mapTitle="小木漁港の地図"
            />

            {/* イカの駅 つくモール */}
            <FacilityBanner
              title="イカの駅 つくモール"
              titleLink="https://ikanoeki.com/"
              gradientFrom="from-orange-100"
              gradientTo="to-orange-50"
              carIconColor="text-orange-600"
              distance="桔梗庵から車で7分"
              description="お土産やグルメが楽しめる道の駅。"
              mapSrc="https://maps.google.com/maps?q=イカの駅つくモール,石川県鳳珠郡能登町&t=&z=15&ie=UTF8&iwloc=&output=embed"
              mapTitle="イカの駅 つくモールの地図"
            />

            {/* のと海洋ふれあいセンター */}
            <FacilityBanner
              title="のと海洋ふれあいセンター"
              titleLink="http://notomarine.jp/"
              gradientFrom="from-teal-100"
              gradientTo="to-teal-50"
              carIconColor="text-teal-600"
              distance="桔梗庵から車で10分"
              description="海の生き物と触れ合える体験施設。"
              mapSrc="https://maps.google.com/maps?q=のと海洋ふれあいセンター,石川県鳳珠郡能登町&t=&z=15&ie=UTF8&iwloc=&output=embed"
              mapTitle="のと海洋ふれあいセンターの地図"
            />

            {/* 縄文真脇遺跡 */}
            <FacilityBanner
              title="縄文真脇遺跡"
              gradientFrom="from-amber-100"
              gradientTo="to-amber-50"
              carIconColor="text-amber-600"
              distance="桔梗庵から車で15分"
              description="約4000年前の縄文時代の遺跡。"
              mapSrc="https://maps.google.com/maps?q=縄文真脇遺跡,石川県鳳珠郡能登町&t=&z=15&ie=UTF8&iwloc=&output=embed"
              mapTitle="縄文真脇遺跡の地図"
            />

            {/* 柳田植物公園 */}
            <FacilityBanner
              title="柳田植物公園"
              gradientFrom="from-green-100"
              gradientTo="to-green-50"
              carIconColor="text-green-600"
              distance="桔梗庵から車で20分"
              description="四季折々の花々が楽しめる植物公園。"
              mapSrc="https://maps.google.com/maps?q=柳田植物公園,石川県鳳珠郡能登町&t=&z=15&ie=UTF8&iwloc=&output=embed"
              mapTitle="柳田植物公園の地図"
            />
        </div>
      </div>
    </div>
  );
};

export default Access;
