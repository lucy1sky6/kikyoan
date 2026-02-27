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
import ListCard from '../components/content/ListCard';
import ProfileCard from '../components/content/ProfileCard';
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
  const [isSupportPrice, setIsSupportPrice] = useState(false);

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
              ホテルや旅館とは異なり、能登の暮らしをそのまま体感できる素泊まりの宿です。
              レンタルスペースとしてもご利用いただけます。
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
              築130年の古民家に手を入れながら大切に住み継いできた建物です。
              最新の設備ではありませんが、木のぬくもりと能登の自然に囲まれたゆったりした時間をお楽しみください。
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
              ・お仕事や復興支援で能登に来られる方
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
        imageSrc={getImagePath('/images/kikyoan/recommended.webp')}
        imageAlt="桔梗庵での過ごし方"
        delay={0.6}
      />

      {/* セクション5: ご紹介いただきました＆リンク集 */}
      <MagazineSection
        title="ご紹介いただきました＆リンク集"
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
        imageAlt="ご紹介いただきました＆リンク集"
        delay={0.65}
      />

      {/* 家主紹介 */}
      <PricingSection title="家主紹介" color="purple" delay={0.7}>
        <div className="md:col-span-2">
          <ProfileCard
            imageSrc={getImagePath('/images/kikyoan/host-greeting.webp')}
            imageAlt="家主 桔梗園子"
            text={
              <>
                <h4 className="text-2xl font-bold text-purple-800 mb-4">家主からご挨拶</h4>
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
            bottomText="富山県出身。能登の田舎暮らしは50年余り。電子オルガン（brother エミリオン）講師を25年。琴城流大正琴准教授、リフレクソロジーセラピストの顔も持つ。シャンソン、歌、踊りも好む。"
            color="purple"
          />
        </div>
      </PricingSection>

      {/* 設備・備品 */}
      <PricingSection title="設備・備品" color="purple" delay={0.75}>
        <ListCard
          title=""
          categories={[
            {
              category: '部屋の構成',
              items: ['ダイニング＆キッチン', '和室（3部屋）', '洗面所・洗浄機付きトイレ', '浴室'],
            },
            {
              category: '基本設備',
              items: [
                'Wi-Fi完備',
                '調理器具一式',
                {
                  text: '（炊飯ジャー、電子レンジ、IHクッキングヒーター、グリルなべ、コーヒーメーカー、鍋、フライパン、お玉、菜箸、ボウル、お茶碗、皿、箸、大小フォーク＆スプーン、包丁、まな板他）',
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
              items: ['布団・寝具'],
            },
            {
              category: 'その他',
              items: [
                '歯ブラシセットあります。',
                'タオル、バスタオルの貸し出しはありませんが、どうしても必要な場合はお気軽にご相談ください。',
              ],
            },
            {
              category: 'ご持参をおすすめするもの',
              items: [
                '洗面用具',
                'タオル・バスタオル',
                'シャンプー・ボディソープ類',
                'パジャマ・部屋着',
                'スリッパ（室内用）',
              ],
            },
          ]}
          color="purple"
          note="※キッチン・洗面所・お手洗いは家主と共同です（冷蔵庫、洗濯機、浴室は共同ではありません）。"
        />
      </PricingSection>

      {/* 基本情報 */}
      <PricingSection title="基本情報" color="purple" delay={0.75}>
        <div className="md:col-span-2">
          <InfoCard title="" color="purple">
            <p className="text-gray-700 mb-4">
              ご宿泊は、1泊につき1組様（最大8名様）のみの貸切です。
            </p>
            <p className="text-gray-700 mb-4 font-semibold">
              家主は普段向かいの別宅におりますが、キッチン・洗面所・お手洗いは家主と共同です。
              <br />
              <span className="font-normal text-gray-600">（冷蔵庫、洗濯機、浴室は共同ではありません）</span>
            </p>
            <p className="text-gray-700 mb-4">
              食事なしの素泊まりのみ
            </p>
            <p className="text-gray-700 mb-4">
              チェックイン　15:00～21:00
              <br />
              チェックアウト　～11:00
            </p>
            <ul className="text-gray-700 space-y-1">
              <li>・駐車スペース有り（普通車2～3台可、台数等お問い合わせください）</li>
              <li>・BBQスペース有り</li>
              <li>・全館禁煙</li>
            </ul>
            <p className="text-gray-600 text-sm mt-4">
              ※田舎の古民家のため、季節によって虫が出ることがあります。対策は講じておりますが、あらかじめご了承ください。
            </p>
          </InfoCard>
        </div>
      </PricingSection>

      {/* 周辺のお店・お食事 */}
      <PricingSection title="周辺のお店・お食事" color="purple" delay={0.78}>
        <div className="md:col-span-2">
          <InfoCard title="" color="purple">
            <p className="text-gray-700 mb-4 font-semibold">
              周辺にコンビニはありません。食材はチェックイン前にお買い求めいただくことをおすすめします。
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-purple-800 mb-1">スーパーしんや（食料品）</h4>
                <p className="text-gray-700 ml-4">桔梗庵から車で約5分 {/* TODO: 距離・時間を要確認 */}</p>
                <p className="text-gray-700 ml-4">営業時間: 9:30〜18:30（毎週日曜定休）</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-800 mb-1">どんたく宇出津店（食料品）</h4>
                <p className="text-gray-700 ml-4">ショッピングタウン アルプ内・桔梗庵から車で約15分</p>
                <p className="text-gray-700 ml-4">営業時間: 9:00〜19:00</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-800 mb-1">福寿司（お食事）</h4>
                <p className="text-gray-700 ml-4">桔梗庵から車で約5分</p>
                <p className="text-gray-700 ml-4">営業時間: 17:00〜23:00（不定休・ランチは完全予約制）</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-800 mb-1">能登shirushi（お食事）</h4>
                <p className="text-gray-700 ml-4">桔梗庵から車で約3分（不定休）</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-800 mb-1">うわみ花月堂（スイーツ・パン屋さん）</h4>
                <p className="text-gray-700 ml-4">桔梗庵から車で約1分</p>
                <p className="text-gray-700 ml-4">営業時間: 9:30〜17:30（毎週日曜定休）</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-800 mb-1">イカの駅 つくモール（お土産・お食事など）</h4>
                <p className="text-gray-700 ml-4">桔梗庵から車で7分</p>
                <p className="text-gray-700 ml-4">営業時間: 10:00〜17:00（毎週水曜定休）</p>
                <p className="text-gray-700 ml-4">レストラン: 11:00〜15:00</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-4">
              ※震災の影響や季節により、営業時間が変更されている場合があります。お出かけ前にご確認ください。
            </p>
          </InfoCard>
        </div>
      </PricingSection>

      {/* 料金・予約について */}
      <PricingSection title="料金・予約について" color="purple" delay={0.8}>
        {!isSupportPrice ? (
          <PriceCard
            title="料金の目安"
            items={[
              { label: '1泊（1名様でも2名様でも）', price: '¥13,600' },
              { label: '1泊（3名様以降　※最大8名様まで宿泊可）', price: '1名様増で +¥6,500' },
              { label: '2泊目から', price: '1名様 ¥6,500' },
            ]}
            note={
              <>
                <div className="ml-4">
                  例）
                  <br />
                  <div className="ml-4">
                    2名様 2泊
                    <br />
                    ￥13,600+￥6,500✕2＝￥26,600
                    <br />
                    1名様あたり 1泊￥6,650
                    <br />
                    <br />
                    3名様 2泊
                    <br />
                    ￥13,600+￥6,500+￥6,500✕3=￥39,600
                    <br />
                    1名様あたり 1泊￥6,600
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
                <br />
                <br />
                <span className="block text-right">
                  <span
                    className="text-purple-500 text-sm cursor-pointer hover:text-purple-700 underline underline-offset-2 transition-colors"
                    onClick={() => setIsSupportPrice(true)}
                  >
                    復興支援関係の方はこちら
                  </span>
                </span>
              </>
            }
            color="purple"
          />
        ) : (
          <PriceCard
            title="復興支援関係者向け料金"
            items={[
              { label: '1泊（1名様）', price: 'ご相談' },
              { label: '3泊以上', price: '10％引き' },
              { label: '1週間以上', price: '15％引き' },
              { label: '30日以上', price: '20％引き' },
            ]}
            note={
              <>
                復興支援に携わる皆さまへ、感謝を込めた特別料金です。
                <br />
                <br />
                <span className="block text-right">
                  <span
                    className="text-purple-500 text-sm cursor-pointer hover:text-purple-700 underline underline-offset-2 transition-colors"
                    onClick={() => setIsSupportPrice(false)}
                  >
                    通常料金に戻す
                  </span>
                </span>
              </>
            }
            color="purple"
          />
        )}
        <InfoCard title="決済方法" color="purple">
          <p className="text-gray-700 mb-6">
            現金・銀行振込がご利用いただけます。
          </p>
          <h4 className="text-lg font-semibold text-purple-800 mb-3">銀行振込</h4>
          <p className="text-gray-700">ご希望の方は、お気軽にお問い合わせください。</p>
        </InfoCard>
        <InfoCard title="予約について" color="purple">
          <p className="text-gray-700 mb-4">
            最新の空き状況については、SNSにてお知らせしております。
          </p>
          <SnsLink instagramUrl="https://www.instagram.com/kikyoan_greengrass" color="purple" />
          <p className="text-gray-700 mt-4">
            ご予約は 0768-74-0072 まで、お気軽にご連絡ください。
          </p>
        </InfoCard>
        <div className="md:col-span-2">
          <InfoCard title="約款" color="purple">
            <div className="text-gray-700 text-sm space-y-4">
              <section>
                <h4 className="font-bold text-purple-800 mb-2">第1条（宿泊契約の成立）</h4>
                <p className="ml-4">宿泊契約は、当施設が宿泊の申し込みを承諾したときに成立します。予約確定後、当施設から確認のご連絡をいたします。</p>
              </section>

              <section>
                <h4 className="font-bold text-purple-800 mb-2">第2条（宿泊料金のお支払い）</h4>
                <p className="ml-4">宿泊料金は、チェックアウト時またはチェックイン時に現金、または事前の銀行振込にてお支払いください。</p>
              </section>

              <section>
                <h4 className="font-bold text-purple-800 mb-2">第3条（チェックイン・チェックアウト）</h4>
                <p className="ml-4">チェックインは15:00〜21:00、チェックアウトは11:00までとなります。時間の変更をご希望の場合は、事前にご相談ください。</p>
              </section>

              <section>
                <h4 className="font-bold text-purple-800 mb-2">第4条（キャンセルポリシー）</h4>
                <ul className="ml-4 list-disc list-inside space-y-1">
                  <li>7日前まで：無料</li>
                  <li>3〜6日前：宿泊料金の30%</li>
                  <li>前日：宿泊料金の50%</li>
                  <li>当日：宿泊料金の100%</li>
                  <li>無連絡キャンセル：宿泊料金の100%</li>
                </ul>
              </section>

              <section>
                <h4 className="font-bold text-purple-800 mb-2">第5条（禁止事項）</h4>
                <ul className="ml-4 list-disc list-inside space-y-1">
                  <li>館内での喫煙（全館禁煙）</li>
                  <li>ペットの同伴（盲導犬・介助犬を除く）</li>
                  <li>他のお客様や近隣住民へのご迷惑となる行為</li>
                  <li>危険物の持ち込み</li>
                  <li>当施設の許可のない物品販売・営業行為</li>
                  <li>予約時に申告された人数を超える宿泊</li>
                </ul>
              </section>

              <section>
                <h4 className="font-bold text-purple-800 mb-2">第6条（施設・備品の利用）</h4>
                <p className="ml-4">施設および備品は大切にご利用ください。故意または過失により施設・備品を破損・汚損された場合は、修繕費用を請求させていただくことがあります。</p>
              </section>

              <section>
                <h4 className="font-bold text-purple-800 mb-2">第7条（責任の範囲）</h4>
                <p className="ml-4">当施設は、宿泊に関して当施設の責に帰すべき事由により損害を与えた場合、その損害を賠償いたします。ただし、お客様の貴重品・現金等の紛失・盗難については、当施設に故意または重大な過失がない限り責任を負いかねます。</p>
              </section>

              <section>
                <h4 className="font-bold text-purple-800 mb-2">第8条（宿泊契約の解除）</h4>
                <p className="ml-4">以下の場合、当施設は宿泊契約を解除することがあります。</p>
                <ul className="ml-4 list-disc list-inside space-y-1 mt-1">
                  <li>法令の規定、公序良俗に反する行為があった場合</li>
                  <li>伝染病と認められる疾病にかかっていると判明した場合</li>
                  <li>宿泊に際して合理的な範囲を超える要求があった場合</li>
                  <li>天災等不可抗力により宿泊が不可能となった場合</li>
                </ul>
              </section>

              <section>
                <h4 className="font-bold text-purple-800 mb-2">第9条（個人情報の取り扱い）</h4>
                <p className="ml-4">ご予約時にお預かりした個人情報は、宿泊に関する業務および法令に基づく届出の目的のみに使用し、適切に管理いたします。</p>
              </section>

              <section>
                <h4 className="font-bold text-purple-800 mb-2">第10条（準拠法・管轄）</h4>
                <p className="ml-4">本約款は日本法に準拠し、本約款に関する紛争については、当施設所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。</p>
              </section>
            </div>
          </InfoCard>
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
              築130年の古民家を改装したこの施設は、能登の伝統と新しい息吹が調和する空間です。
              海に近い静かな環境で、心安らぐひとときをお過ごしください。
            </p>

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
            <p className="mb-6">
              お客様1泊につき1組様（最大8名様）のみの貸切※です。
              <br />
              <span className="text-sm text-gray-600">
                ※キッチン・洗面所・お手洗いは家主と共同です（冷蔵庫、洗濯機、浴室は共同ではありません）。
              </span>
              <br />
              のびのびと自由にお過ごしいただけます。
            </p>

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

            <h3 className="text-xl font-bold mb-3 text-purple-900">お仕事や復興支援の方</h3>
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
        title="ご紹介いただきました＆リンク集"
        content={
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-900">サイト</h3>

            <h4 className="text-lg font-bold mb-3 ml-6">TABITAIKEN</h4>
            <p className="mb-4 ml-6">TABITAIKEN様にて桔梗庵をご紹介いただいております。</p>
            <p className="mb-6 ml-6">
              <ExternalLink href="https://www.tabitaiken.com/peelingwood" color="purple">
                桔梗庵の紹介ページはこちら
              </ExternalLink>
            </p>
            <p className="text-gray-600 text-sm mb-8 ml-6">※外部サイトへ移動します</p>

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
              桔梗庵は、築130年の古民家に手を入れながら大切に住み継いできた建物です。
            </p>
            <p className="mb-6">
              能登の伝統的な建築様式をそのまま残しており、古民家ならではの趣があります。
              最新の設備ではありませんが、Wi-Fiやキッチンなど滞在に必要なものは揃っています。
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
