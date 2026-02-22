import type { Photo } from '../types';
import { getImagePath } from '../utils/getImagePath';

// 写真データ（画像ファイルは public/images/gallery/ に配置）
export const GALLERY_PHOTOS: Photo[] = [
  { id: 13, src: getImagePath('/images/gallery/kikyoan/04.webp'), alt: '土間の壁', description: '落ち着いた雰囲気の和の空間。能登の静けさが感じられます。', tags: ['桔梗庵'] },
  { id: 17, src: getImagePath('/images/gallery/kikyoan/05.webp'), alt: '桔梗三千雄作の靴べら', description: 'greengrassの木でミッチーが作りました。', tags: ['桔梗庵'] },
  { id: 25, src: getImagePath('/images/gallery/kikyoan/06.webp'), alt: '向かいの2階より', description: 'すだれ越しから見た桔梗庵。', tags: ['桔梗庵'] },
  { id: 14, src: getImagePath('/images/gallery/greengrass/04.webp'), alt: 'greengrassの山林', description: '四季折々の草木花が見られます。', tags: ['greengrass'] },
  { id: 15, src: getImagePath('/images/gallery/greengrass/05.webp'), alt: 'greengrassの外壁に', description: 'greengrassに太陽の光が降り注ぎ、木陰ができて涼しげ。', tags: ['greengrass'] },
  { id: 16, src: getImagePath('/images/gallery/greengrass/06.webp'), alt: 'ピーリングウッドから', description: 'すべすべの道具を作ってみました。', tags: ['greengrass'] },
  { id: 18, src: getImagePath('/images/gallery/sea/01.webp'), alt: '小木漁港', description: '人気の釣り場として知られる小木漁港の風景。', tags: ['海'] },
  { id: 19, src: getImagePath('/images/gallery/sea/02.webp'), alt: '近所の海岸', description: '透き通った青い海と美しい海岸線が広がります。', tags: ['海'] },
  { id: 20, src: getImagePath('/images/gallery/sea/03.webp'), alt: '近所を散歩する', description: '千畳敷の海が見えます。', tags: ['海'] },
  { id: 21, src: getImagePath('/images/gallery/sea/04.webp'), alt: '能登の海', description: '穏やかな波が打ち寄せる能登の美しい海。', tags: ['海'] },
  { id: 22, src: getImagePath('/images/gallery/sea/05.webp'), alt: '海岸の風景', description: '岩場と海が織りなす自然の造形美。', tags: ['海'] },
  { id: 23, src: getImagePath('/images/gallery/sea/06.webp'), alt: '小木の海', description: '静かな小木の海辺の風景。', tags: ['海'] },
  { id: 24, src: getImagePath('/images/gallery/sea/07.webp'), alt: '日本海', description: '石を切り出した形が能登半島に見えます。', tags: ['海'] },
  { id: 26, src: getImagePath('/images/gallery/town/01.webp'), alt: '恵比寿神社', description: 'ここから見える景色はとてもいいです。', tags: ['小木の町'] },
  { id: 27, src: getImagePath('/images/gallery/festival/01.webp'), alt: 'とも旗祭り', description: '地元では「とんばた祭り」と言い、県指定無形民族文化財です。', tags: ['祭り'] },
  { id: 28, src: getImagePath('/images/gallery/festival/02.webp'), alt: 'とも旗祭り', description: '青空に映えるとも旗。', tags: ['祭り'] },
  { id: 29, src: getImagePath('/images/gallery/festival/03.webp'), alt: 'とも旗祭り', description: '風によってしなるとも旗の姿は圧巻です。', tags: ['祭り'] },
  { id: 30, src: getImagePath('/images/gallery/kikyoan/07.webp'), alt: '談話室', description: '築130年の古民家、桔梗庵の佇まい。', tags: ['桔梗庵'] },
  { id: 31, src: getImagePath('/images/gallery/kikyoan/08.webp'), alt: '桔梗庵の室内', description: '温かみのある木の空間。', tags: ['桔梗庵'] },
  { id: 32, src: getImagePath('/images/gallery/kikyoan/09.webp'), alt: '桔梗庵の玄関', description: '伝統的な日本家屋の趣を残した土間。', tags: ['桔梗庵'] },
  { id: 33, src: getImagePath('/images/gallery/kikyoan/10.webp'), alt: '桔梗庵の和室', description: '落ち着いた雰囲気の和の空間。', tags: ['桔梗庵'] },
  { id: 34, src: getImagePath('/images/gallery/kikyoan/11.webp'), alt: '軒先には', description: 'ツバメが巣を作ることも。', tags: ['桔梗庵'] },
  { id: 35, src: getImagePath('/images/gallery/kikyoan/12.webp'), alt: '桔梗庵の空間', description: '丁度いい空間でゆったりと過ごせます。', tags: ['桔梗庵'] },
  { id: 36, src: getImagePath('/images/gallery/kikyoan/13.webp'), alt: '桔梗庵の玄関', description: '趣のある玄関からお迎えします。', tags: ['桔梗庵'] },
  { id: 37, src: getImagePath('/images/gallery/kikyoan/14.webp'), alt: '玄関に入ると', description: '手前左にみせの間、奥左に居間、更に奥にはダイニングキッチンがあります。', tags: ['桔梗庵'] },
  { id: 38, src: getImagePath('/images/gallery/kikyoan/15.webp'), alt: '桔梗庵の雰囲気', description: '静かな環境で心安らぐひととき。', tags: ['桔梗庵'] },
  { id: 39, src: getImagePath('/images/gallery/greengrass/07.webp'), alt: 'ピーリングウッド', description: '木の皮を剥いた独特の風合いを持つ木材製品。', tags: ['greengrass'] },
  { id: 40, src: getImagePath('/images/gallery/greengrass/08.webp'), alt: 'greengrassの風景', description: '春には枝垂れ桜が咲き、緑の山に彩りを与えてくれます。', tags: ['greengrass'] },
  { id: 41, src: getImagePath('/images/gallery/greengrass/09.webp'), alt: '木材加工', description: '丁寧な手仕事で仕上げられる木材。', tags: ['greengrass'] },
  { id: 42, src: getImagePath('/images/gallery/greengrass/10.webp'), alt: 'greengrassの工房1F', description: 'ミッチーが手掛けたピーリングウッドが、ところ狭しと保管されています。', tags: ['greengrass'] },
  { id: 43, src: getImagePath('/images/gallery/greengrass/11.webp'), alt: '工房の作品', description: '木の自然の形を活かした作品の数々。', tags: ['greengrass'] },
  { id: 44, src: getImagePath('/images/gallery/greengrass/12.webp'), alt: 'greengrassにある枝垂れ桜', description: '2000年になった記念に植えました。', tags: ['greengrass'] },
  { id: 45, src: getImagePath('/images/gallery/greengrass/13.webp'), alt: 'greengrassにある枝垂れ桜', description: '毎年見事に花を咲かせてくれます。26年経ち、大きくなりました。', tags: ['greengrass'] },
  { id: 46, src: getImagePath('/images/gallery/greengrass/14.webp'), alt: '工房の風景', description: 'greengrassの工房と自然の風景。', tags: ['greengrass'] },
  { id: 47, src: getImagePath('/images/gallery/festival/04.webp'), alt: '能登の祭り', description: '伝統を守り続ける能登の祭りの様子。', tags: ['祭り'] },
  { id: 48, src: getImagePath('/images/gallery/sea/08.webp'), alt: '桔梗庵にほど近い海', description: '漁船が停泊し、漁師さんが早朝に漁に出られます。', tags: ['海'] },
  { id: 49, src: getImagePath('/images/gallery/other/02.webp'), alt: 'イカの駅　つくモール', description: '2020年開業。能登のグルメ、遊覧船乗り場があります。', tags: ['その他'] },
  { id: 50, src: getImagePath('/images/gallery/other/03.webp'), alt: '真脇遺跡公園', description: '園内には真脇遺跡縄文館があり、縄文真脇温泉などが併設されています。', tags: ['その他'] },
];

// タグのリスト
export const GALLERY_TAGS = ['すべて', '桔梗庵', 'greengrass', '海', '祭り', '小木の町', 'その他'];
