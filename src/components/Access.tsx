import { FaCar, FaExternalLinkAlt } from 'react-icons/fa';

const Access = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">所在地</h2>

      <div className="max-w-6xl mx-auto">
        {/* マップ2カラム */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* 桔梗庵 */}
          <div>
            <p className="text-xl text-center font-semibold mb-4">桔梗庵</p>
            <div className="relative w-full" style={{ paddingBottom: '75%' }}>
              <iframe
                src="https://maps.google.com/maps?q=石川県鳳珠郡能登町小木10-28&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="absolute top-0 left-0 w-full h-full border-0 rounded-lg shadow-lg"
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                title="桔梗庵の地図"
              ></iframe>
            </div>
            <p className="text-center text-gray-700 mt-3 text-sm">
              〒927-0553 石川県鳳珠郡能登町小木10-28
            </p>
          </div>

          {/* greengrass */}
          <div>
            <p className="text-xl text-center font-semibold mb-4">greengrass</p>
            <div className="relative w-full" style={{ paddingBottom: '75%' }}>
              <iframe
                src="https://maps.google.com/maps?q=37.3001348,137.223473&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="absolute top-0 left-0 w-full h-full border-0 rounded-lg shadow-lg"
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                title="greengrassの地図"
              ></iframe>
            </div>
            <p className="text-center text-gray-700 mt-3 text-sm">
              〒927-0553 石川県鳳珠郡能登町小木
            </p>
          </div>
        </div>

        {/* 交通手段 */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold mb-8 text-center">アクセス</h3>

          {/* 詳細情報（概要） */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* 飛行機 */}
            <div className="p-6 bg-gray-50 rounded-lg border-2 border-gray-300">
              <p className="font-bold text-lg mb-3 text-gray-900">✈️ 飛行機</p>
              <p className="text-sm text-gray-700 mb-2">
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
              <p className="text-sm text-gray-700 mb-2">
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
            </div>

            {/* 車 */}
            <div className="p-6 bg-gray-50 rounded-lg border-2 border-gray-300">
              <p className="font-bold text-lg mb-3 text-gray-900">🚗 お車</p>
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
            </div>

            {/* バス */}
            <div className="p-6 bg-gray-50 rounded-lg border-2 border-gray-300">
              <p className="font-bold text-lg mb-3 text-gray-900">🚌 バス</p>
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
            </div>
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
                <div className="bg-gray-200 text-gray-900 rounded-lg font-bold shadow-md inline-flex items-stretch mb-3 text-lg overflow-hidden">
                  <span className="px-4 py-3">金沢駅</span>
                  <div className="w-16 bg-gray-300 border-l-2 border-gray-400 flex items-center justify-center text-xs">
                    写真
                  </div>
                </div>

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
                  <div className="bg-gray-200 text-gray-900 rounded-lg font-bold shadow-md inline-flex items-stretch text-lg overflow-hidden">
                    <span className="px-4 py-3">のと里山空港</span>
                    <div className="w-16 bg-gray-300 border-l-2 border-gray-400 flex items-center justify-center text-xs">
                      写真
                    </div>
                  </div>
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
                  <div className="bg-orange-200 text-orange-900 rounded-lg font-bold shadow-lg text-lg inline-flex items-stretch border-2 border-orange-400 overflow-hidden">
                    <span className="px-4 py-3">小木入口</span>
                    <div className="w-16 bg-orange-300 border-l-2 border-orange-500 flex items-center justify-center text-xs">
                      写真
                    </div>
                  </div>
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
                    <div className="bg-purple-200 text-purple-900 rounded-lg font-bold shadow-lg text-lg inline-flex items-stretch overflow-hidden">
                      <span className="px-6 py-4">桔梗庵</span>
                      <div className="w-16 bg-purple-300 border-l-2 border-purple-400 flex items-center justify-center text-xs">
                        写真
                      </div>
                    </div>
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
                    <div className="bg-lime-200 text-lime-900 rounded-lg font-bold shadow-lg text-lg inline-flex items-stretch overflow-hidden">
                      <span className="px-6 py-4">greengrass</span>
                      <div className="w-16 bg-lime-300 border-l-2 border-lime-400 flex items-center justify-center text-xs">
                        写真
                      </div>
                    </div>
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
            <div className="relative h-48 bg-gradient-to-r from-blue-100 to-blue-50 shadow-lg overflow-hidden flex items-center">
              {/* 背景画像用（将来的に追加） */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* テキスト情報 */}
              <div className="relative z-10 flex-1 px-8">
                <h4 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
                  小木漁港
                </h4>
                <div className="inline-flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full mb-3 shadow-md">
                  <FaCar className="text-blue-600" />
                  <span className="text-sm font-semibold text-gray-800">桔梗庵から車で2分</span>
                </div>
                <p className="text-base text-white drop-shadow-md">
                  人気の釣り場です。
                </p>
              </div>

              {/* Google Map */}
              <div className="relative z-10 w-80 h-full">
                <iframe
                  src="https://maps.google.com/maps?q=小木漁港,石川県鳳珠郡能登町&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  title="小木漁港の地図"
                ></iframe>
              </div>
            </div>

            {/* イカの駅 つくモール */}
            <div className="relative h-48 bg-gradient-to-r from-orange-100 to-orange-50 shadow-lg overflow-hidden flex items-center">
              {/* 背景画像用（将来的に追加） */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* テキスト情報 */}
              <div className="relative z-10 flex-1 px-8">
                <h4 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
                  <a
                    href="https://ikanoeki.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    イカの駅 つくモール
                  </a>
                </h4>
                <div className="inline-flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full mb-3 shadow-md">
                  <FaCar className="text-orange-600" />
                  <span className="text-sm font-semibold text-gray-800">桔梗庵から車で7分</span>
                </div>
                <p className="text-base text-white drop-shadow-md">
                  お土産やグルメが楽しめる道の駅。
                </p>
              </div>

              {/* Google Map */}
              <div className="relative z-10 w-80 h-full">
                <iframe
                  src="https://maps.google.com/maps?q=イカの駅つくモール,石川県鳳珠郡能登町&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  title="イカの駅 つくモールの地図"
                ></iframe>
              </div>
            </div>

            {/* のと海洋ふれあいセンター */}
            <div className="relative h-48 bg-gradient-to-r from-teal-100 to-teal-50 shadow-lg overflow-hidden flex items-center">
              {/* 背景画像用（将来的に追加） */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* テキスト情報 */}
              <div className="relative z-10 flex-1 px-8">
                <h4 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
                  <a
                    href="http://notomarine.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    のと海洋ふれあいセンター
                  </a>
                </h4>
                <div className="inline-flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full mb-3 shadow-md">
                  <FaCar className="text-teal-600" />
                  <span className="text-sm font-semibold text-gray-800">桔梗庵から車で10分</span>
                </div>
                <p className="text-base text-white drop-shadow-md">
                  海の生き物と触れ合える体験施設。
                </p>
              </div>

              {/* Google Map */}
              <div className="relative z-10 w-80 h-full">
                <iframe
                  src="https://maps.google.com/maps?q=のと海洋ふれあいセンター,石川県鳳珠郡能登町&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  title="のと海洋ふれあいセンターの地図"
                ></iframe>
              </div>
            </div>

            {/* 縄文真脇遺跡 */}
            <div className="relative h-48 bg-gradient-to-r from-amber-100 to-amber-50 shadow-lg overflow-hidden flex items-center">
              {/* 背景画像用（将来的に追加） */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* テキスト情報 */}
              <div className="relative z-10 flex-1 px-8">
                <h4 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
                  縄文真脇遺跡
                </h4>
                <div className="inline-flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full mb-3 shadow-md">
                  <FaCar className="text-amber-600" />
                  <span className="text-sm font-semibold text-gray-800">桔梗庵から車で15分</span>
                </div>
                <p className="text-base text-white drop-shadow-md">
                  約4000年前の縄文時代の遺跡。
                </p>
              </div>

              {/* Google Map */}
              <div className="relative z-10 w-80 h-full">
                <iframe
                  src="https://maps.google.com/maps?q=縄文真脇遺跡,石川県鳳珠郡能登町&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  title="縄文真脇遺跡の地図"
                ></iframe>
              </div>
            </div>

            {/* 柳田植物公園 */}
            <div className="relative h-48 bg-gradient-to-r from-green-100 to-green-50 shadow-lg overflow-hidden flex items-center">
              {/* 背景画像用（将来的に追加） */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* テキスト情報 */}
              <div className="relative z-10 flex-1 px-8">
                <h4 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
                  柳田植物公園
                </h4>
                <div className="inline-flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full mb-3 shadow-md">
                  <FaCar className="text-green-600" />
                  <span className="text-sm font-semibold text-gray-800">桔梗庵から車で20分</span>
                </div>
                <p className="text-base text-white drop-shadow-md">
                  四季折々の花々が楽しめる植物公園。
                </p>
              </div>

              {/* Google Map */}
              <div className="relative z-10 w-80 h-full">
                <iframe
                  src="https://maps.google.com/maps?q=柳田植物公園,石川県鳳珠郡能登町&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  title="柳田植物公園の地図"
                ></iframe>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Access;
