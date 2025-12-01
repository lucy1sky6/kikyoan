import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReadMoreButton, ViewPhotosButton, ExternalLink } from '../components/common';
import PageLayout from '../components/layout/PageLayout';
import ContactSection from '../components/layout/ContactSection';
import MagazineSection from '../components/content/MagazineSection';
import StoryModal from '../components/content/StoryModal';
import PageTitle from '../components/content/PageTitle';
import PricingSection from '../components/content/PricingSection';
import PriceCard from '../components/content/PriceCard';
import InfoCard from '../components/content/InfoCard';
import DecorativeImage from '../components/content/DecorativeImage';
import ContentImage from '../components/content/ContentImage';
import SnsLink from '../components/content/SnsLink';
import { getImagePath } from '../utils/getImagePath';

const GreengrassPage = () => {
  const navigate = useNavigate();
  const [isGreengrassStoryOpen, setIsGreengrassStoryOpen] = useState(false);
  const [isChairsStoryOpen, setIsChairsStoryOpen] = useState(false);
  const [isPeelingStoryOpen, setIsPeelingStoryOpen] = useState(false);
  const [isWorkshopStoryOpen, setIsWorkshopStoryOpen] = useState(false);
  const [isExhibitionStoryOpen, setIsExhibitionStoryOpen] = useState(false);
  const [isMediaStoryOpen, setIsMediaStoryOpen] = useState(false);

  return (
    <PageLayout color="lime">
      {/* タイトル */}
      <PageTitle
        imageSrc="/images/greengrass-title.webp"
        imageAlt="greengrass"
        reading="［グリーングラス］"
        catchphrase="手作りの椅子と、出会える場所"
        color="lime"
        imageFilter="brightness(0) saturate(100%) invert(24%) sepia(37%) saturate(1598%) hue-rotate(57deg) brightness(96%) contrast(92%)"
      />

      {/* セクション1: greengrassって？ */}
      <MagazineSection
        title="greengrassって？"
        description={
          <>
            <p className="mb-4">
              １Fが作業場兼木材置き場、2Fが手作り木の椅子の展示スペースとなっています。
              網元の番屋（漁船に関わる器材の倉庫）を改造した建物です。
            </p>
            <ReadMoreButton onClick={() => setIsGreengrassStoryOpen(true)} color="lime" />
          </>
        }
        imagePosition="right"
        gradientFrom="from-lime-100"
        gradientTo="to-lime-200"
        titleColor="text-lime-900"
        imageSrc={getImagePath('/images/greengrass/about.webp')}
        imageAlt="greengrassの外観"
        delay={0.3}
      />

      {/* セクション2: 木の椅子へのこだわり */}
      <MagazineSection
        title="木の椅子へのこだわり"
        description={
          <>
            <p className="mb-4">
              すべて手作りで丁寧に仕上げた木の椅子をご提供しています。
              木の温もりと座り心地の良さを追求した、世界に一つだけの椅子です。
            </p>
            <ReadMoreButton onClick={() => setIsChairsStoryOpen(true)} color="lime" />
          </>
        }
        imagePosition="left"
        gradientFrom="from-lime-100"
        gradientTo="to-lime-200"
        titleColor="text-lime-900"
        imageSrc={getImagePath('/images/greengrass/chairs.webp')}
        imageAlt="手作りの木の椅子"
        delay={0.4}
      />

      {/* セクション3: ピーリングウッドとは */}
      <MagazineSection
        title="ピーリングウッドとは"
        description={
          <>
            <p className="mb-4">
              ピーリングウッドの説明が入ります。自然の木材を活かした独特の風合いや、
              その特徴についての説明テキストがここに入ります。
            </p>
            <ReadMoreButton onClick={() => setIsPeelingStoryOpen(true)} color="lime" />
          </>
        }
        imagePosition="right"
        gradientFrom="from-lime-100"
        gradientTo="to-lime-200"
        titleColor="text-lime-900"
        imageSrc={getImagePath('/images/greengrass/peeling.webp')}
        imageAlt="ピーリングウッド"
        delay={0.5}
      />

      {/* セクション4: 工房を訪れて */}
      <MagazineSection
        title="工房を訪れて"
        description={
          <>
            <p className="mb-4">
              実際に工房を訪れて、木の椅子やピーリングウッドをご覧いただけます。
              木のぬくもりを感じながら、お気に入りの一品を見つけてください。
            </p>
            <div className="flex flex-wrap gap-3">
              <ReadMoreButton onClick={() => setIsWorkshopStoryOpen(true)} color="lime" />
              <ViewPhotosButton
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/gallery?tag=greengrass');
                }}
                color="lime"
              />
            </div>
          </>
        }
        imagePosition="left"
        gradientFrom="from-lime-100"
        gradientTo="to-lime-200"
        titleColor="text-lime-900"
        imageSrc={getImagePath('/images/greengrass/workshop.webp')}
        imageAlt="工房の様子"
        delay={0.6}
      />

      {/* セクション5: 個展の開催 */}
      <MagazineSection
        title="個展の開催"
        description={
          <>
            <p className="mb-4">
              1997年5月25日～5月31日、北國新聞社本社ビルにて「森の小径展」を開催しました。
            </p>
            <p className="mb-4">
              一つ一つ丁寧に作られた椅子を実際に見て、触れて、座っていただける貴重な機会となりました。
            </p>
            <ReadMoreButton onClick={() => setIsExhibitionStoryOpen(true)} color="lime" />
          </>
        }
        imagePosition="right"
        gradientFrom="from-lime-100"
        gradientTo="to-lime-200"
        titleColor="text-lime-900"
        imageSrc={getImagePath('/images/greengrass/exhibition.webp')}
        imageAlt="個展の様子"
        delay={0.7}
      />

      {/* セクション6: メディア・導入事例 */}
      <MagazineSection
        title="メディア・導入事例"
        description={
          <>
            <p className="mb-4">
              NHKで能登の里山が特集され、工房の裏山も含めて紹介されました。山も含めてgreengrassなのです。
            </p>
            <p className="mb-4">
              県内外のカフェやレストランで椅子をご利用いただいています。
              実際に座り心地を体験していただけます。
            </p>
            <ReadMoreButton onClick={() => setIsMediaStoryOpen(true)} color="lime" />
          </>
        }
        imagePosition="left"
        gradientFrom="from-lime-100"
        gradientTo="to-lime-200"
        titleColor="text-lime-900"
        imageSrc={getImagePath('/images/greengrass/media.webp')}
        imageAlt="メディア出演・導入事例"
        delay={0.8}
      />

      {/* 価格・在庫について */}
      <PricingSection title="価格・在庫について" color="lime" delay={0.9}>
        <PriceCard
          title="価格の目安"
          items={[
            { label: '木の椅子', price: '¥XX,XXX~' },
            { label: 'ピーリングウッド（小）', price: '¥X,XXX~' },
            { label: 'ピーリングウッド（大）', price: '¥XX,XXX~' },
          ]}
          note="※サイズや仕様により価格は変動します"
          color="lime"
        />
        <InfoCard title="在庫について" color="lime">
          <p className="text-gray-700 mb-4">
            最新の在庫状況については、SNSにてお知らせしております。
          </p>
          <SnsLink color="lime" />
          <p className="text-gray-700">お気軽にお問い合わせください。</p>
        </InfoCard>
      </PricingSection>

      {/* お問い合わせ */}
      <ContactSection
        titleColor="text-lime-900"
        phone="0768-74-0072"
        phoneLink="tel:0768740072"
        linkColor="text-lime-700"
        linkHoverColor="hover:text-lime-900"
        businessHours="9:00〜18:00　不定休"
      />

      {/* 装飾イラスト */}
      <DecorativeImage src="/images/greengrass-figure.webp" delay={0.9} />

      {/* モーダル群 */}
      <StoryModal
        isOpen={isGreengrassStoryOpen}
        onClose={() => setIsGreengrassStoryOpen(false)}
        title="greengrassについて"
        content={
          <div>
            <p className="mb-6">
              greengrassの始まりは、1990年9月の台風19号がきっかけでした。
              この台風により、たくさんの木々が折れ地面になぎ倒されました。
            </p>

            <div className="my-8 bg-gray-200 h-64 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">台風後の枝の写真</span>
            </div>

            <p className="mb-6">
              この折れた枝を何かに活用できないか。そう考えたのが、故桔梗三千雄（ミッチー）。
              自然の恵みを無駄にせず、新しい価値を生み出したい。
              その想いから、日曜大工が趣味だったミッチーの、木材を活かした作品作りが始まりました。
            </p>

            <p className="mb-6">
              greengrassで一人で一つ一つ手作りで木の椅子を制作していました。一つの椅子を制作するのに数ヶ月かかります。
              <br />
              ミッチーは
              生前、「木と木の組み合わせが難しいし頭を悩ませるけど、アイディアがわいてきちんと組めて椅子が完成したときは本当に嬉しい」とにこにこと話していました。
              グローブのような大きな手でしっかり椅子を組んでいたのを思い出します。
            </p>

            <div className="my-8 bg-gray-200 h-64 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">工房での作業風景</span>
            </div>

            <p className="mb-6">
              自然の力で生まれた素材を、職人の手で丁寧に形にする。
              greengrassは、能登の自然と共に歩む工房です。
            </p>
          </div>
        }
      />

      <StoryModal
        isOpen={isChairsStoryOpen}
        onClose={() => setIsChairsStoryOpen(false)}
        title="木の椅子へのこだわり"
        content={
          <div>
            <p className="mb-6">
              greengrassの木の椅子は、すべて手作りで丁寧に仕上げています。
            </p>
            <p className="mb-6">
              一つ一つの椅子に、職人の想いと技術が込められています。木の温もりと座り心地の良さを追求し、
              長く愛用していただける製品づくりを心がけています。
            </p>
            <p className="mb-6">
              自然の木目を活かしたデザインで、世界に一つだけの椅子をお届けします。
            </p>
          </div>
        }
      />

      <StoryModal
        isOpen={isPeelingStoryOpen}
        onClose={() => setIsPeelingStoryOpen(false)}
        title="ピーリングウッドとは"
        content={
          <div>
            <p className="mb-6">
              ピーリングウッドは、木の皮を剥いた独特の風合いを持つ木材製品です。
            </p>

            <div className="my-8">
              <ContentImage
                src={getImagePath('/images/greengrass/peeling.webp')}
                alt="ピーリングウッド"
              />
            </div>

            <p className="mb-6">
              自然の木材を活かした素朴な美しさと、手に馴染む温もりが特徴です。
              インテリアとしても、実用品としてもお使いいただけます。
            </p>
            <p className="mb-6">能登の自然が生み出す、唯一無二の木材製品です。</p>
          </div>
        }
      />

      <StoryModal
        isOpen={isExhibitionStoryOpen}
        onClose={() => setIsExhibitionStoryOpen(false)}
        title="個展の開催"
        content={
          <div>
            <h3 className="text-xl font-bold mb-3 text-lime-900">森の小径展</h3>
            <p className="mb-6 ml-6">
              1997年5月25日～5月31日、北國新聞社本社ビルにて「森の小径展」を開催しました。
            </p>

            <div className="my-8 ml-6 bg-gray-200 h-64 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">個展の写真1</span>
            </div>

            <div className="my-8 ml-6 bg-gray-200 h-64 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">個展の写真2</span>
            </div>

            <div className="my-8 ml-6 bg-gray-200 h-64 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">個展の写真3</span>
            </div>

            <p className="mb-6 ml-6">
              「森の小径展」では、それまでに作り上げた木の椅子を展示し、
              実際に手に取って、座って、その良さを体験していただきました。
            </p>
            <p className="mb-6 ml-6">
              多くの方々にお越しいただき、木の魅力を感じていただける貴重な機会となりました。
            </p>

            <div className="my-8 ml-6">
              <ContentImage
                src={getImagePath('/images/greengrass/founder-michio.webp')}
                alt="桔梗三千雄と娘"
              />
            </div>

            <p className="mb-6 ml-6">
              greengrassを創設し、一つ一つ丁寧に椅子を作り続けた桔梗三千雄。
              写真は幼い頃の娘との一枚です。
            </p>
            <p className="mb-6 ml-6">
              その想いは今も工房に息づいています。そして、写真の中で小さかった娘が成長し、
              現在このサイトを管理しながら、父の想いを受け継いでいます。
            </p>
          </div>
        }
      />

      <StoryModal
        isOpen={isMediaStoryOpen}
        onClose={() => setIsMediaStoryOpen(false)}
        title="メディア・導入事例"
        content={
          <div>
            <h3 className="text-xl font-bold mb-3 text-lime-900">メディア掲載</h3>
            <p className="mb-6 ml-6">
              NHKで能登の里山が特集された際、greengrassの工房と裏山が紹介されました。
            </p>
            <p className="mb-6 ml-6">
              山も含めてgreengrassなのです。自然と共に生きる工房の姿を多くの方々に知っていただきました。
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-lime-900">導入事例</h3>
            <p className="mb-4 ml-6">
              greengrassの椅子は、以下の施設でご利用いただいています。実際に座り心地を体験していただけます。
            </p>
            <ul className="space-y-3 mb-6 ml-6">
              <li>
                <ExternalLink href="https://kurart-arau.jp/cafe/" color="lime">
                  蔵人新宇
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://www.nihonkai-club.com/about.html" color="lime">
                  日本海倶楽部
                </ExternalLink>
              </li>
            </ul>
            <p className="text-gray-600 text-sm mb-6 ml-6">
              ※リンクをクリックすると外部サイトへ移動します
            </p>
            <p className="mb-6 ml-6">
              その他、県内外のカフェやレストランでもご利用いただいています。
            </p>
          </div>
        }
      />

      <StoryModal
        isOpen={isWorkshopStoryOpen}
        onClose={() => setIsWorkshopStoryOpen(false)}
        title="工房を訪れて"
        content={
          <div>
            <p className="mb-6">
              greengrassの工房は、能登の自然に囲まれた静かな場所にあります。
            </p>
            <p className="mb-6">
              網元の番屋を改造した建物で、１階が作業場兼木材置き場、２階が手作り木の椅子の展示スペースとなっています。
            </p>
            <p className="mb-6">
              実際に工房を訪れていただくと、木の椅子やピーリングウッドを間近でご覧いただけます。
              木のぬくもりを感じながら、お気に入りの一品を見つけてください。
            </p>
            <p className="mb-6">
              工房の裏には山が広がり、その自然もgreengrassの一部です。
              山から得られる木材を使って、一つ一つ丁寧に作品を作り上げています。
            </p>
            <p className="mb-6">見学をご希望の方は、事前にお問い合わせください。</p>
          </div>
        }
      />
    </PageLayout>
  );
};

export default GreengrassPage;
