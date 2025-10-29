import AccessMaps from './AccessMaps';
import AccessTransport from './AccessTransport';
import AccessFlowChart from './AccessFlowChart';
import NearbyFacilities from './NearbyFacilities';

const Access = () => {
  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold text-center mb-8">所在地</h2>

      <div className="max-w-6xl mx-auto">
        {/* マップ2カラム */}
        <AccessMaps />

        {/* 交通手段 */}
        <div className="mt-12">
          <h3 className="text-4xl font-bold mb-8 text-center">アクセス</h3>

          {/* 詳細情報（概要） */}
          <AccessTransport />

          {/* フローチャート（詳細） */}
          <AccessFlowChart />
        </div>
      </div>

      {/* 近くの施設 */}
      <NearbyFacilities />
    </div>
  );
};

export default Access;
