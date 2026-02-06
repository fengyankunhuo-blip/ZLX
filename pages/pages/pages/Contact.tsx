
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 py-20">
        <div className="flex-1 space-y-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#1d1d1f]">
            开启你的<br /><span className="text-gray-300">下一个愿景</span>
          </h1>
          <div className="space-y-6">
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              无论是一个激动人心的新想法，还是一个成熟的项目升级，我都渴望能助你一臂之力。
            </p>
            <div className="pt-4">
              <a 
                href="mailto:305602885@qq.com" 
                className="text-2xl md:text-3xl font-medium underline underline-offset-8 hover:text-blue-600 transition-colors"
              >
                305602885@qq.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white p-10 rounded-[3rem] shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col justify-center">
          <div className="space-y-8 text-center md:text-left">
            <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase">联系方式</h3>
            
            <div className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-black text-[#1d1d1f] tracking-tight">133 8797 9189</span>
              <span className="text-sm text-gray-400 font-medium">朱禄鑫 / 独立设计师</span>
            </div>

            <div className="pt-8 flex gap-4 justify-center md:justify-start">
               <a href="tel:13387979189" className="bg-[#1d1d1f] text-white px-8 py-4 rounded-full text-sm font-bold tracking-[0.1em] hover:bg-blue-600 transition-apple shadow-lg">
                 立即拨打
               </a>
               <a href="mailto:305602885@qq.com" className="bg-white text-[#1d1d1f] border border-gray-200 px-8 py-4 rounded-full text-sm font-bold tracking-[0.1em] hover:bg-gray-50 transition-apple">
                 发送邮件
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
