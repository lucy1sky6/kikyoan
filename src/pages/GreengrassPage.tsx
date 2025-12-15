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
              木の皮を剥いた、独特の風合いを持つ木材製品です。
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
            { label: '木の椅子', price: '¥50,000～' },
            { label: 'ピーリングウッド（小）', price: '¥500～' },
            { label: 'ピーリングウッド（大）', price: '¥5,000～' },
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
              この台風により、所有する山のたくさんの木々が折れ地面になぎ倒されました。
            </p>

            <div className="my-8">
              <ContentImage
                src={getImagePath('/images/greengrass/typhoon-branches.jpg')}
                alt="台風後の枝"
              />
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

            <div className="my-8">
              <ContentImage
                src={getImagePath('/images/greengrass/michio-hands.jpg')}
                alt="ミッチーの手"
              />
            </div>

            <div className="my-8">
              <ContentImage
                src={getImagePath('/images/greengrass/kousakudai.png')}
                alt="工房での作業風景"
              />
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

            <h3 className="text-xl font-bold mb-3 text-lime-900">どんな椅子？</h3>
            <p className="mb-4 ml-6">
              頑丈な木と木を組んで、ナチュラルなインテリアに溶け込む椅子を作っています。
              <br />
              クギを一切使わず、仕口（しぐち）を「とめほぞ」で組んでいます。
            </p>
            <p className="mb-4 ml-6">
              イメージとしては、
              <br />
              「森に住む、おとぎ話の主人公が使っている椅子」
            </p>
            <p className="mb-6 ml-6">木目調デザインの個人宅やカフェで、お使い頂いております。</p>

            <div className="my-8 ml-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <ContentImage
                src={getImagePath('/images/greengrass/chairs-1.jpg')}
                alt="木の椅子1"
              />
              <ContentImage
                src={getImagePath('/images/greengrass/chairs-2.jpg')}
                alt="木の椅子2"
              />
              <ContentImage
                src={getImagePath('/images/greengrass/chairs-3.jpg')}
                alt="木の椅子3"
              />
              <ContentImage
                src={getImagePath('/images/greengrass/chairs-4.jpg')}
                alt="木の椅子4"
              />
            </div>

            <h3 className="text-xl font-bold mb-3 text-lime-900">1脚1脚、すべて違います</h3>
            <p className="mb-4 ml-6">
              椅子作りでのワクワクとしては、「木の種類や個性で異なる曲がり」を組み合わせる所です。
              <br />
              （思いがけない印象になったり、期待以上のものが生まれたり）
            </p>
            <p className="mb-4 ml-6">
              楽しく作り続け、今までに仕上がった椅子は50脚以上。
              <br />
              どれも妥協なく、1つ1つこだわって丁寧に作りました。
            </p>
            <p className="mb-6 ml-6">
              木と木の出会いが1脚の椅子を作る――
              <br />
              世界に2つと無い、あなたの椅子として選ばれることは、この上ない喜びです。
            </p>

            <div className="my-8 ml-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              <ContentImage
                src={getImagePath('/images/greengrass/chairs-variety-1.png')}
                alt="様々な椅子1"
              />
              <ContentImage
                src={getImagePath('/images/greengrass/chairs-variety-2.png')}
                alt="様々な椅子2"
              />
              <ContentImage
                src={getImagePath('/images/greengrass/chairs-variety-3.png')}
                alt="様々な椅子3"
              />
              <ContentImage
                src={getImagePath('/images/greengrass/chairs-variety-4.png')}
                alt="様々な椅子4"
              />
              <ContentImage
                src={getImagePath('/images/greengrass/chairs-variety-5.png')}
                alt="様々な椅子5"
              />
              <ContentImage
                src={getImagePath('/images/greengrass/chairs-variety-6.png')}
                alt="様々な椅子6"
              />
            </div>

            <p className="mb-8 ml-6">
              Creemaに出品しております。現在、販売は休止中ですが、展示として椅子を始めいくつかの作品をご覧いただけます。
              <br />
              <ExternalLink href="https://www.creema.jp/creator/2248338/item/display" color="lime">
                https://www.creema.jp/creator/2248338/item/display
              </ExternalLink>
            </p>

            <h3 className="text-xl font-bold mb-3 text-lime-900">椅子製作者ミッチー略歴</h3>
            <ul className="list-disc list-inside mb-6 ml-6 space-y-2">
              <li>漁家に生まれ、家業を継ぐかたわら、自身所有の山林を整備</li>
              <li>1997年、北國新聞会館にて、個展『森の小径』を開催</li>
              <li>
                2014年、石川県が推進する「元気な里山里海づくり」に協力し、地域の人々と共に地域ボランティア「グリーンキーパーズ」を結成
              </li>
              <li>金沢大学の協力を得て活動</li>
              <li>木工歴30年</li>
              <li>2022年1月 逝去</li>
            </ul>

            <div className="my-8 ml-6 grid grid-cols-2 gap-4">
              <ContentImage
                src={getImagePath('/images/greengrass/michio-1.jpg')}
                alt="ミッチー1"
              />
              <ContentImage
                src={getImagePath('/images/greengrass/michio-2.jpg')}
                alt="ミッチー2"
              />
            </div>
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
              皮をむき、綺麗に洗い、数ヶ月間乾かしたものです。がっしりしていて、とても丈夫です。
              適当に切って、小さいお子様用の積み木や遊び道具を作られるのに最適です。
              ナチュラルなインテリアによく合います。
            </p>

            <div className="my-8 grid grid-cols-2 gap-4">
              <ContentImage
                src={getImagePath('/images/greengrass/peeling-1.jpg')}
                alt="ピーリングウッド1"
              />
              <ContentImage
                src={getImagePath('/images/greengrass/peeling-2.jpg')}
                alt="ピーリングウッド2"
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

            <div className="my-8 ml-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              <ContentImage
                src={getImagePath('/images/greengrass/exhibition-1.png')}
                alt="森の小径展の様子1"
              />
              <ContentImage
                src={getImagePath('/images/greengrass/exhibition-2.png')}
                alt="森の小径展の様子2"
              />
              <ContentImage
                src={getImagePath('/images/greengrass/exhibition-3.png')}
                alt="森の小径展の様子3"
              />
              <ContentImage
                src={getImagePath('/images/greengrass/exhibition-4.png')}
                alt="森の小径展の様子4"
              />
              <ContentImage
                src={getImagePath('/images/greengrass/exhibition-5.png')}
                alt="森の小径展の様子5"
              />
              <ContentImage
                src={getImagePath('/images/greengrass/exhibition-6.png')}
                alt="森の小径展の様子6"
              />
            </div>

            <p className="mb-6 ml-6">
              「森の小径展」では、それまでに作り上げた木の椅子を展示し、
              実際に手に取って、座って、その良さを体験していただきました。
              <br />
              多くの方々にお越しいただき、木の魅力を感じていただける貴重な機会となりました。
            </p>

            <div className="my-8 ml-6">
              <ContentImage
                src={getImagePath('/images/greengrass/exhibition-7.png')}
                alt="森の小径展の様子7"
              />
            </div>

            <p className="mb-6 ml-6">
              森の小径展では、こちらの手作り看板で皆さんをお迎えしました。
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
              工房の裏山は、2013年に整備され、砂防ダムができました。
            </p>

            <div className="my-8">
              <ContentImage
                src={getImagePath('/images/greengrass/backyard-dam.jpg')}
                alt="工房の裏山と砂防ダム"
              />
            </div>

            <p className="mb-6">
              自然あふれる、のどかな山です。2000年を記念して、しだれ桜を植えましたが、今では大きな木に成長しました。
              工房の裏山には、いろんな木々や花が咲いています。季節の移ろいを感じることができます。
            </p>

            <div className="my-8">
              <ContentImage
                src={getImagePath('/images/greengrass/spring-scenery.jpg')}
                alt="季節の風景"
              />
            </div>

            <p className="mb-6">
              実際に工房を訪れていただくと、木の椅子やピーリングウッドを間近でご覧いただけます。
              ぜひ、木の椅子に自由に座ってみてください。
              木のぬくもりを感じながら、お気に入りの一品を見つけてください。
            </p>
            <p className="mb-6">見学をご希望の方は、お気軽にお問い合わせください。</p>

            <div className="my-8">
              <ContentImage
                src={getImagePath('/images/greengrass/workshop-visit.jpg')}
                alt="工房の様子"
              />
            </div>
          </div>
        }
      />
    </PageLayout>
  );
};

export default GreengrassPage;
