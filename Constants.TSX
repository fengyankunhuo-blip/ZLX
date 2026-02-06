
import { Project, Category } from './types';

export const CATEGORIES: Category[] = [
  '全部', 
  '品牌设计', 
  'UI/UX设计', 
  '产品设计',
  '插画设计', 
  '摄影作品', 
  '宣传册设计', 
  '产品包装设计', 
  '展会设计'
];

// =================================================================
// 修改指南：
// 1. 在这里修改您的作品信息。
// 2. imageUrl 是列表页的小图。
// 3. detailImageUrl 是点击进去的大图。
// 4. gallery 是详情页底部的更多细节图。
// =================================================================

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: '稳力科技 · 品牌升级',
    category: '品牌设计',
    description: '通过独特的视觉符号重塑稳力科技的品牌形象。我们在办公空间与物料应用中，建立了一套极具辨识度与科技感的企业视觉识别系统。',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop', 
    detailImageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
    gallery: [
       'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop',
       'https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1200&auto=format&fit=crop',
       'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1200&auto=format&fit=crop'
    ],
    year: '2024'
  },
  {
    id: 2,
    title: 'UI/UX设计',
    category: 'UI/UX设计',
    description: '一款定义未来的氢能移动能源终端。极简的金属机身设计，无任何冗余品牌干扰，突显纯粹的科技美学与工业质感。',
    imageUrl: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1200&auto=format&fit=crop', 
    detailImageUrl: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1600&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1603732526033-bb4e9821652b?q=80&w=1200&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1200&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=1200&auto=format&fit=crop'
    ],
    year: '2024'
  },
  {
    id: 3,
    title: '工业产品',
    category: '产品设计',
    description: '专为极端环境设计的工业级能源模组。裸露的金属散热结构与精密的核心组件，完美诠释了硬核工业科技的魅力。',
    imageUrl: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1200&auto=format&fit=crop', 
    detailImageUrl: 'https://images.unsplash.com/photo-1535378437-d6d911a58163?q=80&w=1600&auto=format&fit=crop', 
    gallery: [
        'https://images.unsplash.com/photo-1562408593-f65a2718460b?q=80&w=1200&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop'
    ],
    year: '2023'
  },
  {
    id: 4,
    title: '以太 · 数字艺术',
    category: '插画设计',
    description: '一套用于品牌宣传的3D抽象海报。通过C4D渲染的流体玻璃质感，模拟氢能源的洁净与流动，作为主视觉应用。',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop', 
    detailImageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1200&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1200&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop'
    ],
    year: '2023'
  },
  {
    id: 5,
    title: '企业宣传手册',
    category: '宣传册设计',
    description: '采用顶级特种纸印刷的年度宣传手册。极简的排版与精致的装帧工艺，在翻阅间传递企业的专业与愿景。',
    imageUrl: 'https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=1200&auto=format&fit=crop', 
    detailImageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1600&auto=format&fit=crop', 
    gallery: [
        'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1507842217121-e0493caf8276?q=80&w=1200&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1554188248-986adbbccd32?q=80&w=1200&auto=format&fit=crop'
    ],
    year: '2024'
  },
  {
    id: 6,
    title: '产品包装',
    category: '产品包装设计',
    description: '采用环保材料打造的极简包装结构。在保护产品的同时，通过独特的开箱体验传递品牌对可持续发展的承诺，让每一次开启都充满仪式感。',
    imageUrl: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1200&auto=format&fit=crop', 
    detailImageUrl: 'https://images.unsplash.com/photo-1563964344403-12d8a59cb456?q=80&w=1600&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1581093458791-9f3039cd3861?q=80&w=1200&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1504384308090-c54be3852f9d?q=80&w=1200&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'
    ],
    year: '2024'
  },
  {
    id: 7,
    title: '线下展会',
    category: '展会设计',
    description: '沉浸式的线下展会空间设计。以蓝色能量光束为视觉核心，通过光影与多媒体互动的结合，为参观者打造全方位的品牌感知场域，完美呈现未来能源愿景。',
    imageUrl: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1200&auto=format&fit=crop', 
    detailImageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1600&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1520110120835-c96534a4c984?q=80&w=1200&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1200&auto=format&fit=crop'
    ],
    year: '2024'
  },
  {
    id: 8,
    title: '产品摄影',
    category: '摄影作品',
    description: '探索光与影的极致表达。通过专业的布光与构图，捕捉产品最细腻的纹理与质感，展现工业设计之美，为品牌提供极具张力的视觉素材。',
    imageUrl: 'https://images.unsplash.com/photo-1508614589041-895b8cba3e51?q=80&w=1200&auto=format&fit=crop', 
    detailImageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
    gallery: [
        'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1524143986875-f554496b4778?q=80&w=1200&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=1200&auto=format&fit=crop'
    ],
    year: '2024'
  }
];

export const SOCIAL_LINKS = [
  { name: 'Dribbble', url: '#' },
  { name: 'Behance', url: '#' },
  { name: 'Instagram', url: '#' },
  { name: 'LinkedIn', url: '#' },
];
