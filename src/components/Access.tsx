const Access = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">アクセス</h2>
      <p className="text-xl text-center font-semibold mb-6">桔梗庵</p>

      <div className="max-w-4xl mx-auto">
        {/* Google Map */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src="https://maps.google.com/maps?q=石川県鳳珠郡能登町小木10-28&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="absolute top-0 left-0 w-full h-full border-0 rounded-lg shadow-lg"
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
            title="桔梗庵の地図"
          ></iframe>
        </div>

        {/* greengrass */}
        <p className="text-xl text-center font-semibold mt-12 mb-6">
          greengrass
        </p>
        <p className="text-center mb-8">
          <a
            href="https://www.google.com/maps/place/%E3%83%AF%E3%83%BC%E3%82%AF%E3%82%B9%E3%82%B0%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B0%E3%83%A9%E3%82%B9/@37.3001348,137.223473,17z/data=!3m1!4b1!4m6!3m5!1s0x5ff6cf794fe42e51:0x4d34f4084d245c35!8m2!3d37.3001348!4d137.223473!16s%2Fg%2F1tfwk64s?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            greengrassの場所はこちら
          </a>
        </p>

        {/* 交通手段 */}
        <div className="mt-12">
          <h4 className="text-2xl font-bold mb-6">交通手段</h4>

          {/* 車でお越しの場合 */}
          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <p className="font-bold text-lg mb-3">お車でお越しの場合</p>
            <p className="mb-3">
              金沢から
              <a
                href="https://www.pref.ishikawa.lg.jp/nakanotopublic/notosatoyama/syokai.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mx-1"
              >
                のと里山海道
              </a>
              に乗る。能登空港IC（終点）信号を右折、珠洲道路を通って宇出津（うしつ）方面へ。宇出津から海岸線を走って小木の信号通過、前方小木港を右折し、道なりに進みます。
            </p>
            <p>
              所要時間は金沢から能登空港ICまで約1時間30分、能登空港ICから約1時間。
            </p>
          </div>

          {/* 飛行機でお越しの場合 */}
          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <p className="font-bold text-lg mb-3">飛行機でお越しの場合</p>
            <p>
              のと里山空港から
              <a
                href="https://www.noto-airport.jp/access/furutaku.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mx-1"
              >
                ふるさとタクシー
              </a>
              （運行ゾーン③ 能登町（内浦地区）小木）で約1時間。
            </p>
          </div>

          {/* バスでお越しの場合 */}
          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <p className="font-bold text-lg mb-3">バスでお越しの場合</p>
            <p className="mb-3">
              金沢駅西口より
              <a
                href="https://www.hokutetsu.co.jp/highway-bus/noto/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mx-1"
              >
                北陸鉄道 能登方面特急バス
              </a>
              で輪島行きに乗車、「のと里山空港」で宇出津行きに乗り換え、「小木港」で降車。
            </p>
            <p className="mb-2">
              <strong>【桔梗庵】</strong>
              「小木港」から、石川県漁協 小木市所方向に徒歩15分。
            </p>
            <p>
              <strong>【greengrass】</strong>
              「小木港」から、能登町役場
              小木支所方向に徒歩15分。小木支所の後ろにあります。
            </p>
          </div>
        </div>

        {/* 近くの施設 */}
        <div className="mt-12">
          <h4 className="text-2xl font-bold mb-6">近くの施設など</h4>

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
