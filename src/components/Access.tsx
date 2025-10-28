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
              石川県鳳珠郡能登町小木
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
                のと里山空港から
                <a
                  href="https://www.noto-airport.jp/access/furutaku.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mx-1"
                >
                  ふるさとタクシー
                </a>
                で約1時間
              </p>
              <p className="text-xs text-gray-600">
                運行ゾーン③ 能登町（内浦地区）小木
              </p>
            </div>

            {/* 車 */}
            <div className="p-6 bg-gray-50 rounded-lg border-2 border-gray-300">
              <p className="font-bold text-lg mb-3 text-gray-900">🚗 お車</p>
              <p className="text-sm text-gray-700">
                金沢から
                <a
                  href="https://www.pref.ishikawa.lg.jp/nakanotopublic/notosatoyama/syokai.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mx-1"
                >
                  のと里山海道
                </a>
                経由で約2.5時間
              </p>
            </div>

            {/* バス */}
            <div className="p-6 bg-gray-50 rounded-lg border-2 border-gray-300">
              <p className="font-bold text-lg mb-3 text-gray-900">🚌 バス</p>
              <p className="text-sm text-gray-700">
                金沢駅西口より
                <a
                  href="https://www.hokutetsu.co.jp/highway-bus/noto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mx-1"
                >
                  北陸鉄道 特急バス
                </a>
                で小木港へ
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
                  <span className="text-2xl">↓</span>
                  <span className="bg-gray-100 px-3 py-2 rounded text-xs text-gray-800">
                    🚅 北陸新幹線 / 🚄 サンダーバード
                  </span>
                </div>

                {/* 金沢 */}
                <div className="bg-gray-200 text-gray-900 px-4 py-3 rounded-lg font-bold shadow-md inline-flex items-center gap-3 mb-3 text-lg">
                  <span>金沢駅</span>
                  <div className="w-12 h-12 bg-gray-300 rounded border-2 border-gray-400 flex items-center justify-center text-xs">
                    写真
                  </div>
                </div>

                {/* 車/バス */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl">↓</span>
                  <span className="bg-gray-100 px-3 py-2 rounded text-xs text-gray-800">
                    🚗 車/🚌 バス
                    <a
                      href="https://www.pref.ishikawa.lg.jp/nakanotopublic/notosatoyama/syokai.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline font-semibold ml-1"
                    >
                      のと里山海道
                    </a>
                    {' '}約1.5時間
                  </span>
                </div>

                {/* 能登空港IC */}
                <div className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-bold shadow-lg text-lg mb-3">
                  能登空港IC
                </div>

                {/* 車 */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl">↓</span>
                  <span className="bg-gray-100 px-3 py-2 rounded text-xs text-gray-800">
                    🚗 車 珠洲道路・宇出津経由 約1時間
                  </span>
                </div>

                {/* のと里山空港（左から飛行機ルート合流） */}
                <div className="flex items-center justify-center gap-4 mb-3">
                  {/* 左：飛行機ルート */}
                  <div className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-bold shadow-lg text-lg">
                    全国各地
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <div className="text-2xl">→</div>
                    <div className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-800 mt-1">
                      ✈️ 飛行機
                    </div>
                  </div>

                  {/* 中央：のと里山空港 */}
                  <div className="bg-gray-200 text-gray-900 px-4 py-3 rounded-lg font-bold shadow-md inline-flex items-center gap-3 text-lg">
                    <span>のと里山空港</span>
                    <div className="w-12 h-12 bg-gray-300 rounded border-2 border-gray-400 flex items-center justify-center text-xs">
                      写真
                    </div>
                  </div>
                </div>

                {/* タクシー */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl">↓</span>
                  <span className="bg-gray-100 px-3 py-2 rounded text-xs text-gray-800">
                    🚗 タクシー 約1時間
                  </span>
                </div>
              </div>

              {/* 小木エリア（大きなコンテナ） */}
              <div className="relative border-4 border-orange-300 rounded-2xl pt-3 pb-8 px-8 bg-orange-50">
                {/* 小木入口（エリアの上部に重なる） */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-orange-200 text-orange-900 px-6 py-3 rounded-lg font-bold shadow-lg text-lg flex items-center gap-3 border-2 border-orange-400">
                    <div className="w-10 h-10 bg-orange-300 rounded border-2 border-orange-500 flex items-center justify-center text-xs">
                      写真
                    </div>
                    <span>小木入口</span>
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
                      <span className="text-3xl">↓</span>
                      <span className="bg-gray-100 px-3 py-2 rounded text-xs text-gray-800">
                        🚶 徒歩15分<br />
                        石川県漁協小木支所方向
                      </span>
                    </div>
                    <div className="bg-purple-200 text-purple-900 px-6 py-4 rounded-lg font-bold shadow-lg text-lg inline-flex items-center gap-3">
                      <div className="w-12 h-12 bg-purple-300 rounded border-2 border-purple-400 flex items-center justify-center text-xs">
                        写真
                      </div>
                      <span>桔梗庵</span>
                    </div>
                  </div>

                  {/* 双方向矢印 */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-3xl font-bold text-gray-600">
                      ⇄
                    </div>
                    <div className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-700 mt-2 text-center">
                      🚶 徒歩数分<br />
                      数100m
                    </div>
                  </div>

                  {/* greengrass */}
                  <div className="flex-1 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl">↓</span>
                      <span className="bg-gray-100 px-3 py-2 rounded text-xs text-gray-800">
                        🚶 徒歩15分<br />
                        能登町役場小木支所方向
                      </span>
                    </div>
                    <div className="bg-lime-200 text-lime-900 px-6 py-4 rounded-lg font-bold shadow-lg text-lg inline-flex items-center gap-3">
                      <span>greengrass</span>
                      <div className="w-12 h-12 bg-lime-300 rounded border-2 border-lime-400 flex items-center justify-center text-xs">
                        写真
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 近くの施設 */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold mb-8 text-center">近くの施設など</h3>

          <div className="space-y-4">
            <div>
              <p className="font-bold">能登小木漁港</p>
              <p className="text-gray-700">
                人気の釣り場です。桔梗庵から車で2分。
              </p>
            </div>

            <div>
              <p className="font-bold">
                <a
                  href="https://ikanoeki.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  イカの駅 つくモール
                </a>
              </p>
              <p className="text-gray-700">桔梗庵から車で7分。</p>
            </div>

            <div>
              <p className="font-bold">
                <a
                  href="http://notomarine.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  のと海洋ふれあいセンター
                </a>
              </p>
              <p className="text-gray-700">桔梗庵から車で10分。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Access;
