import TransportCard from './TransportCard';
import ExternalLink from '../common/ExternalLink';

const AccessTransport = () => {
  return (
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
  );
};

export default AccessTransport;
