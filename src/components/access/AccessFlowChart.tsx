import RouteStopNode from './RouteStopNode';
import RouteNode from './RouteNode';
import FlowArrow from './FlowArrow';
import { getImagePath } from '../../utils/getImagePath';

const AccessFlowChart = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 p-2 sm:p-4 md:p-6 lg:p-8 mb-8 flex justify-center" style={{ boxShadow: '0 20px 25px -8px rgb(0 0 0 / 0.25)' }}>
      <div className="max-w-5xl scale-[0.8] sm:scale-90 md:scale-95 lg:scale-100" style={{ width: 'max-content', transformOrigin: 'top center' }}>
        {/* 中央縦並びルート */}
        <div className="text-center mb-8">
          {/* 全国各地（電車ルート用） */}
          <RouteNode name="全国各地" bgColor="bg-yellow-100" className="mb-3 inline-block" />

          {/* 電車 */}
          <FlowArrow
            direction="down"
            description="🚅 北陸新幹線 / 🚄 サンダーバード"
          />

          {/* 金沢 */}
          <RouteStopNode
            name="金沢駅"
            bgColor="bg-cyan-50"
            photoAreaColor="bg-cyan-100"
            className="mb-3 shadow-md"
            photoSrc={getImagePath('/images/access/kanazawa-station.webp')}
          />

          {/* お車/バス */}
          <FlowArrow
            direction="down"
            description="🚗🚌 のと里山海道 約 1.5時間"
          />

          {/* 能登空港IC */}
          <RouteNode name="能登空港IC" bgColor="bg-green-600" textColor="text-white" className="mb-3" />

          {/* お車/バス */}
          <FlowArrow direction="down" description="🚗🚌" />

          {/* のと里山空港（左から飛行機ルート合流） */}
          <div className="mb-3 text-center">
            <div className="inline-block relative">
              {/* 中央：のと里山空港 */}
              <RouteStopNode
                name="のと里山空港"
                bgColor="bg-cyan-50"
                photoAreaColor="bg-cyan-100"
                className="shadow-md"
                photoSrc={getImagePath('/images/access/noto-airport.webp')}
              />

              {/* 左：飛行機ルート（空港のすぐ左に配置） */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 flex items-center gap-3 mr-3 whitespace-nowrap">
                <RouteNode name="全国各地" bgColor="bg-yellow-100" />
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
        <div className="relative rounded-2xl pt-3 pb-6 sm:pb-8 px-3 sm:px-6 md:px-8 bg-orange-200">
          {/* 小木入口（エリアの上部に重なる） */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
            <RouteStopNode
              name="小木入口"
              bgColor="bg-orange-200"
              textColor="text-orange-900"
              photoAreaColor="bg-orange-300"
              className="shadow-none"
              photoSrc={getImagePath('/images/access/ogi-entrance.webp')}
            />
          </div>

          <div className="mb-4 sm:mb-6">
            <h4 className="text-base sm:text-lg md:text-xl font-bold text-orange-900">小木エリア</h4>
          </div>

          {/* 施設分岐 */}
          <div className="flex flex-row justify-center items-center gap-2 sm:gap-4 md:gap-8">
            {/* 桔梗庵 */}
            <div className="flex-1 text-center">
              <FlowArrow
                direction="down"
                description={
                  <>
                    🚶 徒歩15分
                    <br />
                    石川県漁協 小木支所方向
                  </>
                }
              />
              <RouteStopNode
                name="桔梗庵"
                bgColor="bg-purple-900"
                textColor="text-white"
                photoAreaColor="bg-purple-800"
                className="shadow-lg"
                photoSrc={getImagePath('/images/access/kikyoan.webp')}
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
                    能登町役場 小木支所方向
                  </>
                }
              />
              <RouteStopNode
                name="greengrass"
                bgColor="bg-lime-900"
                textColor="text-white"
                photoAreaColor="bg-lime-800"
                className="shadow-lg"
                photoSrc={getImagePath('/images/access/greengrass.webp')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessFlowChart;
