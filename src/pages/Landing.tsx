import { Link } from 'react-router-dom';
import KikyoanSection from '../components/KikyoanSection';
import GreengrassSection from '../components/GreengrassSection';
import Access from '../components/Access';
import Contact from '../components/Contact';

const Landing = () => {
  return (
    <main>
      {/* 2分割セクション */}
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* 桔梗庵セクション - 薄紫背景 */}
        <Link
          to="/kikyoan"
          className="flex-1 bg-purple-200 hover:bg-purple-300 transition-colors flex items-center justify-center"
        >
          <KikyoanSection />
        </Link>

        {/* greengrassセクション - 蛍光黄緑背景 */}
        <Link
          to="/greengrass"
          className="flex-1 bg-lime-300 hover:bg-lime-400 transition-colors flex items-center justify-center"
        >
          <GreengrassSection />
        </Link>
      </div>

      {/* アクセスとコンタクト */}
      <div className="container mx-auto px-4 mt-12">
        <Access />
        <Contact />
      </div>
    </main>
  );
};

export default Landing;
