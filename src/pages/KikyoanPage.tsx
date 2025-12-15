import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaCcVisa,
  FaCcJcb,
  FaCcAmex,
  FaCcDinersClub,
  FaCcMastercard,
} from 'react-icons/fa';
import { ReadMoreButton, ViewPhotosButton, ExternalLink } from '../components/common';
import PageLayout from '../components/layout/PageLayout';
import ContactSection from '../components/layout/ContactSection';
import MagazineSection from '../components/content/MagazineSection';
import StoryModal from '../components/content/StoryModal';
import PageTitle from '../components/content/PageTitle';
import PricingSection from '../components/content/PricingSection';
import PriceCard from '../components/content/PriceCard';
import ListCard from '../components/content/ListCard';
import ProfileCard from '../components/content/ProfileCard';
import ReservationForm from '../components/content/ReservationForm';
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
        topLabel="癒しの宿"
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
              レンタルスペースとして、また体験宿泊所（素泊まりのみ）としてご利用いただけます。
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
              木のぬくもりを感じながら、能登の自然に囲まれたゆったりした時間をお楽しみください。
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

      {/* 家主紹介 */}
      <PricingSection title="家主紹介" color="purple" delay={0.7}>
        <div className="md:col-span-2">
          <ProfileCard
            text={
              <>
                <h4 className="font-bold text-purple-800 mb-2">家主からご挨拶</h4>
                <p className="mb-4">
                  こんにちは。家主の桔梗園子（ききょうそのこ）です。
                </p>
                <p className="mb-4">
                  能登地震をきっかけに、この古民家を利用し、皆さまのお役に立てることはできないか、模索していました。
                </p>
                <p className="mb-4">
                  能登の復興支援で、せっかく能登のために遠方からはるばる仕事やボランティアに来られる方々がいらっしゃるのに、ゆっくり体を休める宿泊施設が足りない、それで苦労されている方がいらっしゃるというお話を聞き、何かお力添えできないか、そう思ったのが桔梗庵を農家民宿に登録したきっかけです。
                </p>
                <p className="mb-4">
                  自分自身、何か新しいことに挑戦してみたいという想いもあり、皆さまに支えられてまた応援していただき、新しいスタートを切る運びとなりました。
                </p>
                <p>
                  能登に来られる皆さまの憩いの場になりますよう、心よりお待ち申し上げます。
                </p>
              </>
            }
            bottomText="富山県出身。能登の田舎暮らしは50年余り。電子オルガン（brother エミリオン）講師を25年。今でも電子オルガンを趣味とする。また、琴城流大正琴准教授、リフレクソロジーセラピストの顔も持つ。シャンソン、歌、踊りも好む。"
            color="purple"
          />
        </div>
      </PricingSection>

      {/* 設備・備品・サービス */}
      <PricingSection title="設備・備品・サービス" color="purple" delay={0.75}>
        <ListCard
          title="設備・備品"
          categories={[
            {
              category: '部屋の構成',
              items: ['ダイニング＆キッチン', 'リビング', '和室（4部屋）', '洗面所・洗浄機付きトイレ', '浴室'],
            },
            {
              category: '基本設備',
              items: [
                'Wi-Fi完備',
                '調理器具一式',
                {
                  text: '（炊飯ジャー、電子レンジ、コーヒーメーカー、湯沸かしポット、鍋、フライパン、お玉、菜箸、ボウル、お茶碗、スープカップ、皿、箸、大小フォーク＆スプーン、包丁、まな板他）',
                  noBullet: true,
                },
                'テレビ',
                '冷蔵庫',
                '洗濯機',
                'エアコン',
                '石油ファンヒーター（冬期）',
              ],
            },
            {
              category: '宿泊設備',
              items: ['布団・寝具', 'タオル'],
            },
            {
              category: 'その他',
              items: ['ドライヤー', 'シャンプー', 'コンディショナー', 'ボディーソープ', '歯磨きセット'],
            },
          ]}
          color="purple"
          note="※家主は普段向かいの別宅におりますが、キッチン、洗面所、お手洗いは共同となります（冷蔵庫、洗濯機、浴室は共同ではありません）。"
        />
        <ListCard
          title="サービス他"
          items={['駐車スペース（普通車2～3台可、台数等お問い合わせください）', 'BBQスペース', '全館禁煙']}
          color="purple"
        />
      </PricingSection>

      {/* 料金・予約について */}
      <PricingSection title="料金・予約について" color="purple" delay={0.75}>
        <PriceCard
          title="料金の目安"
          items={[
            { label: '1泊（1名様でも2名様でも）', price: '¥18,000' },
            { label: '1泊（3名様以降　※最大8名様まで宿泊可）', price: '1名様増で +¥8,000' },
            { label: '2泊目から', price: '1名様 ¥8,000' },
          ]}
          note={
            <>
              <div className="ml-4">
                例）
                <br />
                <div className="ml-4">
                  2名様 2泊
                  <br />
                  ￥18,000+￥8,000✕2＝￥34,000
                  <br />
                  1名様あたり 1泊￥8,500
                  <br />
                  <br />
                  3名様 2泊
                  <br />
                  ￥18,000+￥8,000+￥8,000✕3=￥50,000
                  <br />
                  1名様あたり 1泊￥8,333
                </div>
              </div>
              <br />
              3泊以上　10％引き
              <br />
              1週間以上　15％引き
              <br />
              1ヶ月以上　20％引き
              <br />
              <br />
              ※金、土は +￥1,000
              <br />
              <br />
              時間レンタル、半日レンタルでもご利用いただけます。
              <br />
              お気軽にお問い合わせください。
            </>
          }
          color="purple"
        />
        <InfoCard title="決済方法" color="purple">
          <p className="text-gray-700 mb-6">
            現金・カード決済・銀行振込がご利用いただけます。
          </p>
          <h4 className="text-lg font-semibold text-purple-800 mb-4">ご利用可能なクレジットカード</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-3 bg-white/60 rounded-lg px-3 py-2">
              <FaCcVisa className="text-3xl text-[#1A1F71]" />
              <span className="text-gray-700 text-sm">Visa</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 rounded-lg px-3 py-2">
              <FaCcJcb className="text-3xl text-[#0E4C96]" />
              <span className="text-gray-700 text-sm">JCB</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 rounded-lg px-3 py-2">
              <FaCcAmex className="text-3xl text-[#006FCF]" />
              <span className="text-gray-700 text-sm">American Express</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 rounded-lg px-3 py-2">
              <FaCcDinersClub className="text-3xl text-[#004A97]" />
              <span className="text-gray-700 text-sm">Diners Club</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 rounded-lg px-3 py-2">
              <FaCcMastercard className="text-3xl text-[#EB001B]" />
              <span className="text-gray-700 text-sm">Mastercard</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 rounded-lg px-3 py-2">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="4" fill="#E21836" />
                <rect x="12" width="12" height="24" rx="0" fill="#00447C" />
                <text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">UP</text>
              </svg>
              <span className="text-gray-700 text-sm">UnionPay</span>
            </div>
          </div>
          <h4 className="text-lg font-semibold text-purple-800 mb-3">銀行振込</h4>
          <p className="text-gray-700">ご希望の方は、お気軽にお問い合わせください。</p>
        </InfoCard>
        <InfoCard title="予約について" color="purple">
          <p className="text-gray-700 mb-4">
            最新の空き状況や予約については、SNSにてお知らせしております。
          </p>
          <SnsLink color="purple" />
          <p className="text-gray-700 mb-4">お気軽にお問い合わせください。</p>
          <p className="text-gray-700">
            ご予約は「予約フォーム」をご利用ください。
            <br />
            Airbnbのサイトからでもご予約いただけますが、「予約フォーム」から直接ご予約いただいた方が、お得です。
          </p>
        </InfoCard>
        <div className="md:col-span-2">
          <ReservationForm color="purple" />
        </div>
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
            <p className="mb-6">お客様1日1グループのみの完全貸切※です。のびのびと自由にお過ごしいただけます。</p>

            <h3 className="text-xl font-bold mb-3 text-purple-900">レンタルスペース</h3>
            <p className="mb-6 ml-6">
              イベント、会議、ワークショップなど、多目的にご利用いただけます。
            </p>

            <h3 className="text-xl font-bold mb-3 text-purple-900">体験宿泊所</h3>
            <p className="mb-6 ml-6">
              能登の暮らしを体験できる宿泊施設（素泊まりのみ）としてもご利用可能です。
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

            <p className="text-sm text-gray-600">
              ※家主は普段向かいの別宅におりますが、キッチン、洗面所、お手洗いは共同となります（冷蔵庫、洗濯機、浴室は共同ではありません）。
            </p>
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
