
import React, { useState, useMemo, useEffect } from 'react';
import { PROJECTS, CATEGORIES } from '../constants';
import { Category, Project } from '../types';

const Projects: React.FC = () => {
  // 直接读取 constants.tsx 中的数据，确保部署后内容可见
  const projects = PROJECTS;

  const [filter, setFilter] = useState<Category>('全部');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (filter === '全部') return projects;
    return projects.filter(p => p.category === filter);
  }, [filter, projects]);

  return (
    <div className="pt-24 pb-32 px-6 bg-[#fbfbfd]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10 border-b border-gray-200 pb-10">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-[#1d1d1f]">精选<br/>案例</h1>
            <p className="text-gray-500 max-w-xl text-lg font-medium leading-relaxed">
              每一个案例都是一次思维的重塑。这里收录了我最具代表性的设计项目，涵盖品牌、交互与产品设计。
            </p>
          </div>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap gap-x-3 gap-y-3 mb-20">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-[12px] font-medium tracking-wide transition-all duration-300 ${
                filter === cat 
                  ? 'bg-[#1d1d1f] text-white shadow-xl shadow-black/10' 
                  : 'bg-white text-gray-500 border border-gray-100 hover:border-gray-300 hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group flex flex-col gap-6">
              <ProjectCard 
                project={project} 
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="cursor-pointer project-card animate-in fade-in slide-in-from-bottom-8 duration-1000"
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-gray-100 aspect-[4/3] shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          loading="lazy"
          className="w-full h-full object-cover grayscale-[0%] group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
      </div>
      <div className="mt-8 space-y-2 px-2">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-bold tracking-tight text-[#1d1d1f] group-hover:text-blue-600 transition-colors">{project.title}</h3>
          <span className="text-xs font-bold text-gray-400 tracking-widest mt-1.5">{project.year}</span>
        </div>
        <p className="text-xs font-bold text-gray-500">{project.category}</p>
      </div>
    </div>
  );
};

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center bg-white/98 backdrop-blur-md animate-in fade-in duration-500">
      <div className="w-full h-full overflow-y-auto">
        <div className="min-h-full flex flex-col items-center relative py-20 px-4 md:px-10">
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="fixed top-8 right-8 z-[160] bg-[#1d1d1f] text-white w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 hover:bg-blue-600 transition-all duration-300 shadow-2xl group"
          >
            <svg className="group-hover:rotate-90 transition-transform duration-500" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          <div className="w-full max-w-5xl space-y-24">
            
            {/* Header Info */}
            <div className="text-center space-y-8 animate-in fade-in slide-in-from-top-12 duration-1000 delay-100">
              <span className="inline-block px-4 py-1 rounded-full border border-gray-200 text-xs font-bold text-blue-600 bg-blue-50">
                {project.category}
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1d1d1f] leading-tight">
                {project.title}
              </h2>
              <div className="w-16 h-1 bg-black mx-auto rounded-full opacity-10"></div>
              <p className="text-xl md:text-2xl text-gray-500 font-normal max-w-3xl mx-auto leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Main Visual */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] bg-gray-50 animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-200">
              <img 
                src={project.detailImageUrl} 
                alt="Main View" 
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Content Body */}
            {!project.isExhibition && (
              <div className="space-y-32 animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-300">
                
                {/* Text Block */}
                <div className="grid md:grid-cols-12 gap-12 items-start border-t border-gray-100 pt-20">
                  <div className="md:col-span-4">
                    <h4 className="text-sm font-bold text-[#1d1d1f] mb-2">设计理念</h4>
                    <span className="text-xs text-gray-400">01 — Design Concept</span>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                      本项目旨在打破传统的行业视觉规范。通过对品牌核心价值的深度解构，我们提取出最纯粹的视觉符号，并将其贯穿于整个设计系统中。色彩的选择克制而精准，排版遵循严格的网格系统，旨在为用户提供清晰、愉悦的信息获取体验。
                    </p>
                  </div>
                </div>

                {/* Gallery Grid */}
                {project.gallery && project.gallery.length > 0 && (
                  <div className="space-y-16">
                     <h4 className="text-sm font-bold text-[#1d1d1f] text-center">视觉细节展示</h4>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {project.gallery.map((imgUrl, index) => (
                          <div 
                            key={index} 
                            className={`rounded-[2rem] overflow-hidden shadow-lg bg-gray-50 group ${index % 3 === 0 ? 'md:col-span-2 aspect-[2/1]' : 'aspect-square'}`}
                          >
                            <img 
                              src={imgUrl} 
                              alt={`Detail ${index + 1}`} 
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000"
                            />
                          </div>
                        ))}
                     </div>
                  </div>
                )}
              </div>
            )}
            
            <div className="flex justify-center pt-20 pb-10">
              <button 
                onClick={onClose}
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#1d1d1f] rounded-full overflow-hidden transition-all hover:bg-blue-600 shadow-2xl"
              >
                <span className="relative text-xs font-bold tracking-[0.1em] text-white">
                  返回作品列表
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
