import { FaPlane, FaCar, FaBus } from 'react-icons/fa';
import TransportCard from './TransportCard';
import ExternalLink from '../common/ExternalLink';

const AccessTransport = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* 飛行機 */}
      <TransportCard icon={<FaPlane />} title="飛行機">
        <p className="text-sm text-gray-700">
          のと里山空港から <span className="font-black">北陸鉄道 特急バス</span> で約1時間
          <ExternalLink
            href="https://www.hokutetsu.co.jp/highway-bus/noto/"
            label="時刻表・料金"
          />
        </p>
        <p className="text-sm text-gray-700">
          のと里山空港から <span className="font-black">ふるさとタクシー</span> で約1時間
          <ExternalLink
            href="https://www.noto-airport.jp/access/furutaku.html"
            label="詳細・予約"
          />
        </p>
      </TransportCard>

      {/* 車 */}
      <TransportCard icon={<FaCar />} title="お車">
        <p className="text-sm text-gray-700">
          金沢から <span className="font-black">のと里山海道</span> 経由で約2.5時間
          <ExternalLink
            href="https://www.pref.ishikawa.lg.jp/nakanotopublic/notosatoyama/syokai.html"
            label="道路情報"
          />
        </p>
      </TransportCard>

      {/* バス */}
      <TransportCard icon={<FaBus />} title="バス">
        <p className="text-sm text-gray-700">
          金沢駅西口から <span className="font-black">北陸鉄道 特急バス</span> で <span className="font-black">小木港</span> へ 約2.5時間
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
