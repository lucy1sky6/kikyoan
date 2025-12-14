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

const KikyoanPage = () => {
  const navigate = useNavigate();
  const [isKikyoanStoryOpen, setIsKikyoanStoryOpen] = useState(false);
  const [isActivitiesStoryOpen, setIsActivitiesStoryOpen] = useState(false);
  const [isFeaturesStoryOpen, setIsFeaturesStoryOpen] = useState(false);
  const [isRecommendedStoryOpen, setIsRecommendedStoryOpen] = useState(false);
  const [isKikyoanIntroductionOpen, setIsKikyoanIntroductionOpen] = useState(false);

  return (
    <PageLayout color="purple">
      {/* タイトル */}
      <PageTitle
        imageSrc="/images/kikyoan-title.webp"
        imageAlt="桔梗庵"
        reading="［ききょうあん］"
        catchphrase="築130年、海辺から能登を支える"
        color="purple"
        imageFilter="brightness(0) saturate(100%) invert(14%) sepia(64%) saturate(4571%) hue-rotate(263deg) brightness(91%) contrast(103%)"
      />

      {/* セクション1: 桔梗庵って？ */}
      <MagazineSection
        title="桔梗庵って？"
        description={
          <>
            <p className="mb-4">明治時代に建てられた、もと網元の家です。</p>
            <ReadMoreButton onClick={() => setIsKikyoanStoryOpen(true)} color="purple" />
          </>
        }
        imagePosition="right"
        gradientFrom="from-purple-100"
        gradientTo="to-purple-200"
        titleColor="text-purple-900"
        imageSrc={getImagePath('/images/kikyoan/about.webp')}
        imageAlt="桔梗庵の外観"
        delay={0.3}
      />

      {/* セクション2: 桔梗庵でできること */}
      <MagazineSection
        title="桔梗庵でできること"
        description={
          <>
            <p className="mb-4">
              レンタルスペースとして、また体験宿泊所としてご利用いただけます。
              イベントや会議、ワーケーションなど、様々な用途でお使いいただけます。
            </p>
            <ReadMoreButton onClick={() => setIsActivitiesStoryOpen(true)} color="purple" />
          </>
        }
        imagePosition="left"
        gradientFrom="from-purple-100"
        gradientTo="to-purple-200"
        titleColor="text-purple-900"
        imageSrc={getImagePath('/images/kikyoan/activities.webp')}
        imageAlt="桔梗庵の内観"
        delay={0.4}
      />

      {/* セクション3: 施設の魅力 */}
      <MagazineSection
        title="施設の魅力"
        description={
          <>
            <p className="mb-4">
              古民家をリノベーションした温かみのある空間です。
              木のぬくもりを感じながら、能登の自然に囲まれた贅沢な時間をお楽しみください。
            </p>
            <div className="flex flex-wrap gap-3">
              <ReadMoreButton onClick={() => setIsFeaturesStoryOpen(true)} color="purple" />
              <ViewPhotosButton
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/gallery?tag=桔梗庵');
                }}
                color="purple"
              />
            </div>
          </>
        }
        imagePosition="right"
        gradientFrom="from-purple-100"
        gradientTo="to-purple-200"
        titleColor="text-purple-900"
        imageSrc={getImagePath('/images/kikyoan/features.webp')}
        imageAlt="桔梗庵の雰囲気"
        delay={0.5}
      />

      {/* セクション4: こんな方におすすめ */}
      <MagazineSection
        title="こんな方におすすめ"
        description={
          <>
            <p className="mb-4">
              ・静かな環境でリフレッシュしたい方
              <br />
              ・ボランティアで能登に来られる方
              <br />
              ・能登の自然を満喫したい方
              <br />
              ・グループでの研修やワークショップをお考えの方
              <br />
              ・長期滞在でのワーケーションをご希望の方
            </p>
            <ReadMoreButton onClick={() => setIsRecommendedStoryOpen(true)} color="purple" />
          </>
        }
        imagePosition="left"
        gradientFrom="from-purple-100"
        gradientTo="to-purple-200"
        titleColor="text-purple-900"
        imageSrc={getImagePath('/images/kikyoan/photo-intro.webp')}
        imageAlt="桔梗庵での過ごし方"
        delay={0.6}
      />

      {/* セクション5: ご紹介いただきました */}
      <MagazineSection
        title="ご紹介いただきました"
        description={
          <>
            <p className="mb-4">
              桔梗庵は様々なメディアや旅行サイトでご紹介いただいております。
            </p>
            <p className="mb-4">能登での体験宿泊として、多くの方にご利用いただいています。</p>
            <ReadMoreButton onClick={() => setIsKikyoanIntroductionOpen(true)} color="purple" />
          </>
        }
        imagePosition="right"
        gradientFrom="from-purple-100"
        gradientTo="to-purple-200"
        titleColor="text-purple-900"
        imageSrc={getImagePath('/images/kikyoan/introduction.webp')}
        imageAlt="ご紹介いただきました"
        delay={0.65}
      />

      {/* 料金・予約について */}
      <PricingSection title="料金・予約について" color="purple">
        <PriceCard
          title="料金の目安"
          items={[
            { label: '1泊（1人でも2人でも）', price: '¥18,000' },
            { label: '1泊（3人目以降）', price: '1人増で +¥8,000' },
          ]}
          note={
            <>
              3泊以上　10％引き
              <br />
              1週間以上　15％引き
              <br />
              1ヶ月以上　20％引き
              <br />
              <br />
              時間レンタル、半日レンタルでもご利用いただけます。
              <br />
              お気軽にお問い合わせください。
            </>
          }
          color="purple"
        />
        <InfoCard title="予約について" color="purple">
          <p className="text-gray-700 mb-4">
            最新の空き状況や予約については、SNSにてお知らせしております。
          </p>
          <SnsLink color="purple" />
          <p className="text-gray-700">お気軽にお問い合わせください。</p>
        </InfoCard>
      </PricingSection>

      {/* お問い合わせ */}
      <ContactSection
        titleColor="text-purple-900"
        phone="0768-74-0072"
        phoneLink="tel:0768740072"
        linkColor="text-purple-700"
        linkHoverColor="hover:text-purple-900"
        businessHours="9:00〜18:00　不定休"
      />

      {/* 装飾イラスト */}
      <DecorativeImage src="/images/kikyoan-figure.webp" />

      {/* モーダル群 */}
      <StoryModal
        isOpen={isKikyoanStoryOpen}
        onClose={() => setIsKikyoanStoryOpen(false)}
        title="桔梗庵について"
        content={
          <div>
            <h3 className="text-xl font-bold mb-3 text-purple-900">名前の由来</h3>
            <p className="mb-6 ml-6">
              「桔梗庵」という名前は、苗字が「桔梗」であることに由来しています。
              能登には珍しい苗字が多く、桔梗もかなり珍しい苗字の一つです。
            </p>
            <p className="mb-6 ml-6">
              もともとは、この古民家でリフレクソロジーを始めようと考えており、
              そのために「桔梗庵」という名前をつけました。
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-purple-900">
              能登半島地震と新たな歩み
            </h3>
            <p className="mb-6 ml-6">
              2024年1月1日、能登半島地震が発生しました。
              震度7を記録したこの地震により、能登半島の多くの地域が甚大な被害を受けました。
            </p>

            <div className="my-8 ml-6 bg-gray-200 h-64 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">地震被害の写真</span>
            </div>

            <p className="mb-6 ml-6">
              幸いにも桔梗庵は全壊を免れました。
              この地震をきっかけに、復興を支える方々の宿泊施設として、
              桔梗庵は新たな役割を担うことになりました。
            </p>

            <p className="mb-6 ml-6">
              地域の方々とともに歩み、訪れる皆様に能登の魅力を感じていただきながら、
              復興への一助となることを目指しています。
            </p>

            <p className="mb-6 ml-6">
              築130年の古民家をリノベーションしたこの施設は、能登の伝統と新しい息吹が調和する空間です。
              海に近い静かな環境で、心安らぐひとときをお過ごしください。
            </p>

            <div className="my-8 ml-6 bg-gray-200 h-64 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">復興の様子の写真</span>
            </div>

            <p className="mb-6 ml-6">
              桔梗庵でのご滞在が、能登半島の復興を応援する一歩となります。
              皆様のお越しを心よりお待ちしております。
            </p>
          </div>
        }
      />

      <StoryModal
        isOpen={isActivitiesStoryOpen}
        onClose={() => setIsActivitiesStoryOpen(false)}
        title="桔梗庵でできること"
        content={
          <div>
            <p className="mb-6">桔梗庵では、様々な用途でご利用いただけます。</p>

            <h3 className="text-xl font-bold mb-3 text-purple-900">レンタルスペース</h3>
            <p className="mb-6 ml-6">
              イベント、会議、ワークショップなど、多目的にご利用いただけます。
            </p>

            <h3 className="text-xl font-bold mb-3 text-purple-900">体験宿泊所</h3>
            <p className="mb-6 ml-6">
              能登の暮らしを体験できる宿泊施設としてもご利用可能です。
            </p>

            <h3 className="text-xl font-bold mb-3 text-purple-900">ワーケーション</h3>
            <p className="mb-6 ml-6">
              静かな環境で仕事に集中しながら、能登の自然を楽しむことができます。
            </p>

            <h3 className="text-xl font-bold mb-3 text-purple-900">長期の釣り合宿</h3>
            <p className="mb-6 ml-6">
              旅館とは異なり素泊まりでご利用いただけます。
              キッチンが完備されているので、ご自身で調理することも可能です。
              近くの漁港で手に入れた新鮮な魚を刺し身にして味わうこともできます。
            </p>

            <div className="my-8 ml-6">
              <ContentImage
                src={getImagePath('/images/kikyoan/sashimi.webp')}
                alt="新鮮な刺し身"
              />
            </div>

            <p className="mb-6 ml-6">
              能登の海の幸を存分に楽しみながら、ゆったりとした長期滞在をお楽しみください。
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-purple-900">設備一覧</h3>
            <div className="mb-6 ml-6">
              <h4 className="font-bold mb-2 text-purple-800">部屋の構成</h4>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>ダイニング＆キッチン</li>
                <li>リビング</li>
                <li>和室（4部屋）</li>
                <li>洗面所・水洗トイレ</li>
              </ul>
            </div>
            <div className="mb-6 ml-6">
              <h4 className="font-bold mb-2 text-purple-800">基本設備</h4>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>Wi-Fi完備</li>
                <li>調理器具一式</li>
                <li>冷蔵庫</li>
                <li>洗濯機</li>
                <li>エアコン</li>
              </ul>
            </div>
            <div className="mb-6 ml-6">
              <h4 className="font-bold mb-2 text-purple-800">宿泊設備</h4>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>布団・寝具</li>
                <li>タオル</li>
              </ul>
            </div>
            <div className="mb-6 ml-6">
              <h4 className="font-bold mb-2 text-purple-800">その他</h4>
              <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                <li>駐車スペース</li>
                <li>BBQスペース</li>
              </ul>
            </div>
          </div>
        }
      />

      <StoryModal
        isOpen={isRecommendedStoryOpen}
        onClose={() => setIsRecommendedStoryOpen(false)}
        title="こんな方におすすめ"
        content={
          <div>
            <p className="mb-6">桔梗庵は以下のような方々に特におすすめです。</p>

            <h3 className="text-xl font-bold mb-3 text-purple-900">リフレッシュしたい方</h3>
            <p className="mb-6 ml-6">
              日常から離れて、静かな環境でゆっくりと過ごしたい方に最適です。
            </p>

            <h3 className="text-xl font-bold mb-3 text-purple-900">ボランティアの方</h3>
            <p className="mb-6 ml-6">
              能登の復旧・復興支援のために来てくださる方の滞在先として、心を込めてお迎えいたします。長期滞在も可能ですので、安心して活動に専念していただけます。
            </p>

            <h3 className="text-xl font-bold mb-3 text-purple-900">自然を満喫したい方</h3>
            <p className="mb-6 ml-6">
              能登の美しい海と山に囲まれた環境で、自然を満喫できます。
            </p>

            <h3 className="text-xl font-bold mb-3 text-purple-900">グループ利用</h3>
            <p className="mb-6 ml-6">
              研修やワークショップなど、グループでの活動にも対応しています。
            </p>

            <h3 className="text-xl font-bold mb-3 text-purple-900">ワーケーション</h3>
            <p className="mb-6 ml-6">
              長期滞在しながら仕事をする方にも快適な環境を提供します。
            </p>
          </div>
        }
      />

      <StoryModal
        isOpen={isKikyoanIntroductionOpen}
        onClose={() => setIsKikyoanIntroductionOpen(false)}
        title="ご紹介いただきました"
        content={
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-900">サイト</h3>

            <h4 className="text-lg font-bold mb-3 ml-6">TABITAIKEN</h4>
            <p className="mb-4 ml-6">TABITAIKENにて桔梗庵をご紹介いただいております。</p>
            <p className="mb-6 ml-6">
              <ExternalLink href="https://www.tabitaiken.com/peelingwood" color="purple">
                桔梗庵の紹介ページはこちら
              </ExternalLink>
            </p>
            <p className="text-gray-600 text-sm mb-8 ml-6">※外部サイトへ移動します</p>

            <h3 className="text-xl font-bold mb-4 text-purple-900">メディア</h3>

            <h4 className="text-lg font-bold mb-3 ml-6">NHK Eテレ/BSプレミアム</h4>
            <p className="mb-6 ml-6">
              「ふるカフェ系　ハルさんの休日」
              <br />
              群馬県みどり市　蔵人新宇（kurart ARAU）様にて椅子を使っていただいております
            </p>
          </div>
        }
      />

      <StoryModal
        isOpen={isFeaturesStoryOpen}
        onClose={() => setIsFeaturesStoryOpen(false)}
        title="施設の魅力"
        content={
          <div>
            <p className="mb-6">
              桔梗庵は、築130年の古民家をリノベーションした温かみのある空間です。
            </p>
            <p className="mb-6">
              能登の伝統的な建築様式を活かしながら、現代的な快適さも備えています。
              Wi-Fiやキッチンなどの設備も完備しています。
            </p>
            <p className="mb-6">
              海に近い静かな環境にあり、一歩外に出ると、美しい能登の田舎の風景が広がります。
              <br />
              海辺を少し散歩すれば、あまり見かけることのない小木石（おぎいし）が切り出された跡も見ることができます。
            </p>
            <p className="mb-6">
              広々とした空間は、個人でのご利用はもちろん、グループでのイベントやワークショップにも最適です。
            </p>
          </div>
        }
      />
    </PageLayout>
  );
};

export default KikyoanPage;
