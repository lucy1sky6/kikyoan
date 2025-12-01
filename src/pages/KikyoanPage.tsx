import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa6';
import { BackButton, ReadMoreButton, ViewPhotosButton } from '../components/common';
import ContactSection from '../components/layout/ContactSection';
import MagazineSection from '../components/content/MagazineSection';
import StoryModal from '../components/content/StoryModal';
import { getImagePath } from '../utils/getImagePath';

const KikyoanPage = () => {
  const navigate = useNavigate();
  const [isKikyoanStoryOpen, setIsKikyoanStoryOpen] = useState(false);
  const [isActivitiesStoryOpen, setIsActivitiesStoryOpen] = useState(false);
  const [isFeaturesStoryOpen, setIsFeaturesStoryOpen] = useState(false);
  const [isRecommendedStoryOpen, setIsRecommendedStoryOpen] = useState(false);
  const [isKikyoanIntroductionOpen, setIsKikyoanIntroductionOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16 px-4 relative"
    >
      {/* 戻るボタン */}
      <BackButton color="purple" />

      <div className="max-w-5xl mx-auto px-4">
        {/* タイトル */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-20 mt-16 md:mt-20"
        >
          <h1 className="mb-2 flex justify-center">
            <img
              src={getImagePath('/images/kikyoan-title.webp')}
              alt="桔梗庵"
              className="h-24 md:h-32 w-auto"
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(14%) sepia(64%) saturate(4571%) hue-rotate(263deg) brightness(91%) contrast(103%)',
              }}
            />
          </h1>
          <p className="text-sm font-sans italic tracking-wider text-purple-700 opacity-70 mb-6">
            ［ききょうあん］
          </p>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            築130年、海辺から能登を支える
          </p>
        </motion.div>

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
          aspectRatio="landscape"
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
          aspectRatio="square"
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
          aspectRatio="auto"
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
          aspectRatio="landscape"
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
              <p className="mb-4">
                能登での体験宿泊として、多くの方にご利用いただいています。
              </p>
              <ReadMoreButton onClick={() => setIsKikyoanIntroductionOpen(true)} color="purple" />
            </>
          }
          imagePosition="right"
          aspectRatio="landscape"
          gradientFrom="from-purple-100"
          gradientTo="to-purple-200"
          titleColor="text-purple-900"
          imageSrc={getImagePath('/images/kikyoan/introduction.webp')}
          imageAlt="ご紹介いただきました"
          delay={0.65}
        />

        {/* 料金・予約について */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-purple-900 mb-8 text-center">
            料金・予約について
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 料金の目安 */}
            <div
              className="bg-gradient-to-b from-white to-purple-50 p-8"
              style={{ boxShadow: '0 20px 25px -8px rgb(0 0 0 / 0.25)' }}
            >
              <h3 className="text-2xl font-bold text-purple-800 mb-4">料金の目安</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between">
                  <span>1泊（体験宿泊所）</span>
                  <span className="font-semibold">¥XX,XXX~</span>
                </li>
                <li className="flex justify-between">
                  <span>半日レンタル</span>
                  <span className="font-semibold">¥X,XXX~</span>
                </li>
                <li className="flex justify-between">
                  <span>1日レンタル</span>
                  <span className="font-semibold">¥XX,XXX~</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-4 ml-4">※料金は利用内容により変動します</p>
            </div>

            {/* 予約について */}
            <div
              className="bg-gradient-to-b from-white to-purple-50 p-8"
              style={{ boxShadow: '0 20px 25px -8px rgb(0 0 0 / 0.25)' }}
            >
              <h3 className="text-2xl font-bold text-purple-800 mb-4">予約について</h3>
              <p className="text-gray-700 mb-4">
                最新の空き状況や予約については、SNSにてお知らせしております。
              </p>
              <div className="flex gap-4 mb-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 transition text-2xl"
                >
                  <FaInstagram />
                </a>
              </div>
              <p className="text-gray-700">お気軽にお問い合わせください。</p>
            </div>
          </div>
        </motion.div>

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-12 mb-8"
        >
          <img
            src={getImagePath('/images/kikyoan-figure.webp')}
            alt=""
            className="w-64 h-64 rounded-2xl"
            aria-hidden="true"
          />
        </motion.div>

        {/* 桔梗庵ストーリーモーダル */}
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

        {/* 桔梗庵でできることモーダル */}
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

              <div className="my-8 ml-6 rounded-lg overflow-hidden">
                <img
                  src={getImagePath('/images/kikyoan/sashimi.webp')}
                  alt="新鮮な刺し身"
                  className="w-full h-auto"
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

        {/* こんな方におすすめモーダル */}
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

        {/* ご紹介いただきましたモーダル */}
        <StoryModal
          isOpen={isKikyoanIntroductionOpen}
          onClose={() => setIsKikyoanIntroductionOpen(false)}
          title="ご紹介いただきました"
          content={
            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-900">TABITAIKEN</h3>
              <p className="mb-4">TABITAIKENにて桔梗庵をご紹介いただいております。</p>
              <p className="mb-6">
                <a
                  href="https://www.tabitaiken.com/peelingwood"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 hover:text-purple-900 underline font-semibold"
                >
                  桔梗庵の紹介ページはこちら
                </a>
              </p>
              <p className="text-gray-600 text-sm">※外部サイトへ移動します</p>
            </div>
          }
        />

        {/* 施設の魅力モーダル */}
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
      </div>
    </motion.div>
  );
};

export default KikyoanPage;
