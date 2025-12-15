import { useState } from 'react';

interface ReservationFormProps {
  color: 'purple' | 'lime' | 'blue';
}

const colorClasses = {
  purple: {
    bg: 'from-white to-purple-50',
    title: 'text-purple-800',
    button: 'bg-purple-600 hover:bg-purple-700',
    focus: 'focus:ring-purple-500 focus:border-purple-500',
    label: 'text-purple-900',
  },
  lime: {
    bg: 'from-white to-lime-50',
    title: 'text-lime-800',
    button: 'bg-lime-600 hover:bg-lime-700',
    focus: 'focus:ring-lime-500 focus:border-lime-500',
    label: 'text-lime-900',
  },
  blue: {
    bg: 'from-white to-blue-50',
    title: 'text-blue-800',
    button: 'bg-blue-600 hover:bg-blue-700',
    focus: 'focus:ring-blue-500 focus:border-blue-500',
    label: 'text-blue-900',
  },
};

const ReservationForm = ({ color }: ReservationFormProps) => {
  const colors = colorClasses[color];
  const [formData, setFormData] = useState({
    name: '',
    nameKana: '',
    postalCode: '',
    address: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    paymentMethod: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理（実装予定）
    alert('予約フォームの送信機能は現在準備中です。お電話またはSNSでお問い合わせください。');
  };

  const inputClass = `w-full px-4 py-2 border border-gray-300 rounded-lg ${colors.focus} focus:ring-2 outline-none transition`;
  const labelClass = `block text-sm font-medium ${colors.label} mb-1`;

  return (
    <div
      className={`bg-gradient-to-b ${colors.bg} p-8`}
      style={{ boxShadow: '0 20px 25px -8px rgb(0 0 0 / 0.25)' }}
    >
      <h3 className={`text-2xl font-bold ${colors.title} mb-6`}>予約フォーム</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* お名前 */}
        <div>
          <label htmlFor="name" className={labelClass}>
            お名前 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="山田 太郎"
          />
        </div>

        {/* よみがな */}
        <div>
          <label htmlFor="nameKana" className={labelClass}>
            よみがな <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nameKana"
            name="nameKana"
            value={formData.nameKana}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="やまだ たろう"
          />
        </div>

        {/* 郵便番号 */}
        <div>
          <label htmlFor="postalCode" className={labelClass}>
            郵便番号
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className={inputClass}
            placeholder="123-4567"
          />
        </div>

        {/* 住所 */}
        <div>
          <label htmlFor="address" className={labelClass}>
            住所 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="石川県○○市○○町1-2-3"
          />
        </div>

        {/* 電話番号 */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            電話番号 <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="090-1234-5678"
          />
        </div>

        {/* メールアドレス */}
        <div>
          <label htmlFor="email" className={labelClass}>
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="example@email.com"
          />
        </div>

        {/* チェックイン日 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="checkIn" className={labelClass}>
              チェックイン日 <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          {/* チェックアウト日 */}
          <div>
            <label htmlFor="checkOut" className={labelClass}>
              チェックアウト日 <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* 宿泊人数 */}
        <div>
          <label htmlFor="guests" className={labelClass}>
            宿泊人数 <span className="text-red-500">*</span>
          </label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
            className={inputClass}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <option key={num} value={num}>
                {num}名
              </option>
            ))}
          </select>
        </div>

        {/* お支払い方法 */}
        <div>
          <label htmlFor="paymentMethod" className={labelClass}>
            お支払い方法 <span className="text-red-500">*</span>
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="">選択してください</option>
            <option value="cash">現金</option>
            <option value="card">カード</option>
            <option value="bank">銀行振込</option>
          </select>
        </div>

        {/* ご要望・ご質問 */}
        <div>
          <label htmlFor="message" className={labelClass}>
            ご要望・ご質問
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={inputClass}
            placeholder="ご要望やご質問がございましたらご記入ください"
          />
        </div>

        {/* 送信ボタン */}
        <div className="pt-4">
          <button
            type="submit"
            className={`w-full ${colors.button} text-white font-bold py-3 px-6 rounded-lg transition duration-200`}
          >
            予約を申し込む
          </button>
          <p className="text-sm text-gray-500 mt-2 text-center">
            ※ 予約確定ではありません。後日、確認のご連絡をいたします。
          </p>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
