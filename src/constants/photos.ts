import type { Photo } from '../types';
import { getImagePath } from '../utils/getImagePath';

// 写真データ（画像ファイルは public/images/gallery/ に配置）
export const GALLERY_PHOTOS: Photo[] = [
  { id: 1, src: getImagePath('/images/gallery/kikyoan/01.webp'), alt: '桔梗庵の外観', description: '海に近い静かな場所に佇む古民家をリノベーションした施設です。', tags: ['桔梗庵'] },
  { id: 2, src: getImagePath('/images/gallery/greengrass/01.webp'), alt: 'greengrass工房', description: '手作りの木の椅子を制作する工房の様子。', tags: ['greengrass'] },
  { id: 3, src: getImagePath('/images/gallery/sea/01.webp'), alt: '能登の海', description: '透き通った青い海と美しい海岸線が広がります。', tags: ['海'] },
  { id: 4, src: getImagePath('/images/gallery/festival/01.webp'), alt: '祭の様子', description: '地域の伝統的な祭りで賑わう小木の町。', tags: ['祭'] },
  { id: 5, src: getImagePath('/images/gallery/kikyoan/02.webp'), alt: '桔梗庵の内観', description: '木のぬくもりを感じる温かみのある室内空間。', tags: ['桔梗庵'] },
  { id: 6, src: getImagePath('/images/gallery/greengrass/02.webp'), alt: '木の椅子', description: '職人が一つ一つ丁寧に仕上げた手作りの椅子。', tags: ['greengrass'] },
  { id: 7, src: getImagePath('/images/gallery/sea/02.webp'), alt: '小木港', description: '日本三大イカ釣り漁港の一つとして知られています。', tags: ['海'] },
  { id: 8, src: getImagePath('/images/gallery/festival/02.webp'), alt: 'イカ祭り', description: '新鮮なイカを味わえる地域の人気イベント。', tags: ['祭', '海'] },
  { id: 9, src: getImagePath('/images/gallery/kikyoan/03.webp'), alt: '桔梗庵の庭', description: '四季折々の草花が楽しめる落ち着いた庭園。', tags: ['桔梗庵'] },
  { id: 10, src: getImagePath('/images/gallery/greengrass/03.webp'), alt: 'ピーリングウッド', description: '自然の木材を活かした独特の風合いの製品。', tags: ['greengrass'] },
  { id: 11, src: getImagePath('/images/gallery/sea/03.webp'), alt: '日本海', description: '雄大な日本海の景色を一望できる絶景スポット。', tags: ['海'] },
  { id: 12, src: getImagePath('/images/gallery/other/01.webp'), alt: '伝統工芸', description: '能登に伝わる伝統的な工芸品の数々。', tags: ['その他'] },
  { id: 13, src: getImagePath('/images/gallery/kikyoan/04.webp'), alt: '桔梗庵の室内', description: '落ち着いた雰囲気の和の空間。能登の静けさが感じられます。', tags: ['桔梗庵'] },
];

// タグのリスト
export const GALLERY_TAGS = ['すべて', '桔梗庵', 'greengrass', '海', '祭', 'その他'];
