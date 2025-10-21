import React from 'react';
import './Access.css';

function Access() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">アクセス</h2>
      <p className="text-center access-sub-heading">桔梗庵</p>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="map-responsive">
            <iframe
              src="https://maps.google.com/maps?q=石川県鳳珠郡能登町小木10-28&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="google map"
            ></iframe>
          </div>
                    <p className="access-sub-heading greengrass-spacing">greengrass</p>
          <p className="text-center">
            <a href="https://www.google.com/maps/place/%E3%83%AF%E3%83%BC%E3%82%AF%E3%82%B9%E3%82%B0%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B0%E3%83%A9%E3%82%B9/@37.3001348,137.223473,17z/data=!3m1!4b1!4m6!3m5!1s0x5ff6cf794fe42e51:0x4d34f4084d245c35!8m2!3d37.3001348!4d137.223473!16s%2Fg%2F1tfwk64s?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
              greengrassの場所はこちら
            </a>
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-8 offset-md-2">
          <h4>交通手段</h4>
                              <div className="car-access-section">
            <p><strong>お車でお越しの場合</strong></p>
                                    <p>金沢から<a href="https://www.pref.ishikawa.lg.jp/nakanotopublic/notosatoyama/syokai.html" target="_blank" rel="noopener noreferrer">のと里山海道</a>に乗る。能登空港IC（終点）信号を右折、珠洲道路を通って宇出津（うしつ）方面へ。宇出津から海岸線を走って小木の信号通過、前方小木港を右折し、道なりに進みます。</p>
            <p>所要時間は金沢から能登空港ICまで約1時間30分、能登空港ICから約1時間。</p>
          </div>
                    <div className="car-access-section">
            <p><strong>飛行機でお越しの場合</strong></p>
                                                            <p>のと里山空港から<a href="https://www.noto-airport.jp/access/furutaku.html" target="_blank" rel="noopener noreferrer">ふるさとタクシー</a>（運行ゾーン③ 能登町（内浦地区）小木）で約1時間。</p>
          </div>
                                                  <div className="car-access-section">
            <p><strong>バスでお越しの場合</strong></p>
            <p>金沢駅西口より
              <a href="https://www.hokutetsu.co.jp/highway-bus/noto/" target="_blank" rel="noopener noreferrer">
                北陸鉄道 能登方面特急バス
              </a>
            で輪島行きに乗車、「のと里山空港」で宇出津行きに乗り換え、「小木港」で降車。</p>
                                    <p><strong>【桔梗庵】</strong>「小木港」から、石川県漁協 小木市所方向に徒歩15分。</p>
                                                <p><strong>【greengrass】</strong>「小木港」から、能登町役場 小木支所方向に徒歩15分。小木支所の後ろにあります。</p>
                    </div>
          <h4 className="mt-5">近くの施設など</h4>
                    <p><strong>能登小木漁港</strong></p>
          <p>人気の釣り場です。桔梗庵から車で2分。</p>
          {/* 写真を配置予定 */}
                              <p><strong><a href="https://ikanoeki.com/" target="_blank" rel="noopener noreferrer">イカの駅 つくモール</a></strong></p>
          <p>桔梗庵から車で7分。</p>
          {/* 写真を配置予定 */}
                              <p><strong><a href="http://notomarine.jp/" target="_blank" rel="noopener noreferrer">のと海洋ふれあいセンター</a></strong></p>
          <p>桔梗庵から車で10分。</p>
          {/* 写真を配置予定 */}
        </div>
      </div>
    </div>
  );
}

export default Access;