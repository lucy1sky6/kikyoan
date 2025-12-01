interface ContentImageProps {
  /** 画像のパス */
  src: string;
  /** 代替テキスト */
  alt: string;
  /** 角丸にするか */
  rounded?: boolean;
  /** 影をつけるか */
  shadow?: boolean;
  /** 追加のクラス名 */
  className?: string;
}

/**
 * 画像の元の比率を維持して表示するコンポーネント
 * 縦長・横長に関係なく、画像本来のアスペクト比で表示される
 */
const ContentImage = ({
  src,
  alt,
  rounded = true,
  shadow = false,
  className = '',
}: ContentImageProps) => {
  const roundedClass = rounded ? 'rounded-lg' : '';
  const shadowClass = shadow ? 'shadow-xl' : '';

  return (
    <div className={`overflow-hidden ${roundedClass} ${shadowClass} ${className}`}>
      <img src={src} alt={alt} className="w-full h-auto" loading="lazy" />
    </div>
  );
};

export default ContentImage;
