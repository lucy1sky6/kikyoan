import type { Photo } from '../types';
import { getImagePath } from '../utils/getImagePath';

// 写真データ（画像ファイルは public/images/gallery/ に配置）
export const GALLERY_PHOTOS: Photo[] = [
  { id: 12, src: getImagePath('/images/gallery/other/01.webp'), alt: '伝統工芸', description: '能登に伝わる伝統的な工芸品の数々。', tags: ['その他'] },
  { id: 13, src: getImagePath('/images/gallery/kikyoan/04.webp'), alt: '桔梗庵の室内', description: '落ち着いた雰囲気の和の空間。能登の静けさが感じられます。', tags: ['桔梗庵'] },
  { id: 17, src: getImagePath('/images/gallery/kikyoan/05.webp'), alt: '桔梗庵の外観', description: '海に近い静かな場所に佇む古民家の様子。', tags: ['桔梗庵'] },
  { id: 25, src: getImagePath('/images/gallery/kikyoan/06.webp'), alt: '桔梗庵の縁側', description: '縁側から見える能登の自然。', tags: ['桔梗庵'] },
  { id: 14, src: getImagePath('/images/gallery/greengrass/04.webp'), alt: 'greengrass工房の様子', description: '木材加工の様子。丁寧な手仕事が光ります。', tags: ['greengrass'] },
  { id: 15, src: getImagePath('/images/gallery/greengrass/05.webp'), alt: 'greengrass作品', description: '職人の技が光る木工作品の数々。', tags: ['greengrass'] },
  { id: 16, src: getImagePath('/images/gallery/greengrass/06.webp'), alt: 'greengrass工房内部', description: '温かみのある木の工房で制作が行われています。', tags: ['greengrass'] },
  { id: 18, src: getImagePath('/images/gallery/sea/01.webp'), alt: '小木漁港', description: '人気の釣り場として知られる小木漁港の風景。', tags: ['海'] },
  { id: 19, src: getImagePath('/images/gallery/sea/02.webp'), alt: '能登の海岸', description: '透き通った青い海と美しい海岸線が広がります。', tags: ['海'] },
  { id: 20, src: getImagePath('/images/gallery/sea/03.webp'), alt: '日本海の景色', description: '雄大な日本海の景色を一望できる絶景スポット。', tags: ['海'] },
  { id: 21, src: getImagePath('/images/gallery/sea/04.webp'), alt: '能登の海', description: '穏やかな波が打ち寄せる能登の美しい海。', tags: ['海'] },
  { id: 22, src: getImagePath('/images/gallery/sea/05.webp'), alt: '海岸の風景', description: '岩場と海が織りなす自然の造形美。', tags: ['海'] },
  { id: 23, src: getImagePath('/images/gallery/sea/06.webp'), alt: '小木の海', description: '静かな小木の海辺の風景。', tags: ['海'] },
  { id: 24, src: getImagePath('/images/gallery/sea/07.webp'), alt: '日本海', description: '能登半島から望む雄大な日本海。', tags: ['海'] },
  { id: 26, src: getImagePath('/images/gallery/town/01.webp'), alt: '小木の町並み', description: '能登の港町、小木の風景。', tags: ['小木の町'] },
  { id: 27, src: getImagePath('/images/gallery/festival/01.webp'), alt: '祭りの風景', description: '地域の伝統的な祭りで賑わう小木の町。', tags: ['祭り'] },
  { id: 28, src: getImagePath('/images/gallery/festival/02.webp'), alt: '祭りの様子', description: '能登の祭りに集まる人々の活気。', tags: ['祭り'] },
  { id: 29, src: getImagePath('/images/gallery/festival/03.webp'), alt: '祭りの賑わい', description: '伝統を受け継ぐ祭りの一コマ。', tags: ['祭り'] },
];

// タグのリスト
export const GALLERY_TAGS = ['すべて', '桔梗庵', 'greengrass', '海', '祭り', '小木の町', 'その他'];
