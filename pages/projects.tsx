
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  // =================================================================
  // 修改指南：
  // 1. 修改 content 对象里的文字，即可更新首页内容。
  // 2. heroImage 是首页右侧的大图链接。
  // =================================================================
  const content = {
    titleLine1: '设计',
    titleLine2: '重塑价值',
    description: '你好，我是朱禄鑫。我专注于将复杂的商业逻辑转化为极简的视觉语言，为品牌构建独特且持久的数字资产。',
    heroImage: 'https://images.unsplash.com/photo-1633511090164-b43840ea1607?q=80&w=1600&auto=format&fit=crop'
  };

  return (
    <div className="pt-24 pb-20 relative group/home">
      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 py-12 md:py-24">
          <div className="flex-1 space-y-10 text-center md:text-left animate-in fade-in slide-in-from-bottom-8 duration-1000 relative">
            
            {/* Title */}
            <div className="relative">
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-[#1d1d1f]">
                {content.titleLine1}<br />
                <span className="text-gray-300">{content.titleLine2}</span>
              </h1>
            </div>

            {/* Description */}
            <div className="relative">
              <p className="text-xl text-gray-500 max-w-lg leading-relaxed font-light">
                {content.description}
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-5 pt-4">
              <Link to="/projects" className="bg-[#1d1d1f] text-white px-10 py-4 rounded-full text-sm font-bold tracking-[0.1em] hover:bg-blue-600 transition-apple shadow-2xl shadow-black/10">
                浏览作品
              </Link>
              <Link to="/contact" className="text-[#1d1d1f] px-10 py-4 rounded-full text-sm font-bold tracking-[0.1em] hover:bg-gray-100 transition-apple border border-gray-200">
                联系合作
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full max-w-2xl animate-in fade-in zoom-in-95 duration-1000">
            {/* Hero Image */}
            <div className="relative aspect-[4/5] md:aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-gray-50 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] group">
              <img 
                src={content.heroImage} 
                alt="Main Visual" 
                loading="lazy"
                className="w-full h-full object-cover transition-apple duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2.5rem]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section / PHILOSOPHY */}
      <section className="bg-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-24">
            <div className="space-y-6">
              <span className="text-xs font-bold text-blue-600 tracking-[0.2em]">设计哲学 01</span>
              <h3 className="text-3xl font-bold tracking-tight text-[#1d1d1f]">少即是多</h3>
              <p className="text-gray-500 leading-relaxed font-light">
                剔除一切无意义的装饰。我们追求的是功能与美学的完美平衡，让设计回归到解决问题本身。
              </p>
            </div>
            <div className="space-y-6">
              <span className="text-xs font-bold text-blue-600 tracking-[0.2em]">设计哲学 02</span>
              <h3 className="text-3xl font-bold tracking-tight text-[#1d1d1f]">理性美学</h3>
              <p className="text-gray-500 leading-relaxed font-light">
                基于数据的设计决策。我们将严谨的栅格系统与感性的色彩情绪相结合，构建经得起推敲的视觉体系。
              </p>
            </div>
            <div className="space-y-6">
              <span className="text-xs font-bold text-blue-600 tracking-[0.2em]">设计哲学 03</span>
              <h3 className="text-3xl font-bold tracking-tight text-[#1d1d1f]">用户至上</h3>
              <p className="text-gray-500 leading-relaxed font-light">
                不仅是视觉的愉悦，更是交互的流畅。我们关注每一个微交互，确保用户在使用过程中的心流体验。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
