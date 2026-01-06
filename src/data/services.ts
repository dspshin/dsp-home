export interface Service {
  id: string;
  title: string;
  link: string;
  icon: string;
  description: string;
  features: string[];
  techStack: { category: string; value: string }[];
  note?: string;
  screenshot?: string;
}

export const services: Service[] = [
  {
    id: 'tower-defense',
    title: 'Merge Defense',
    link: 'https://tower.dsp.ai.kr/',
    icon: 'https://tower.dsp.ai.kr/icon.png',
    description: 'Next.js와 FastAPI를 사용하여 구축된 최신 풀스택 아키텍처 기반의 웹 타워 디펜스 게임입니다. 플레이어는 타워를 소환하고, 머지(병합)하여 업그레이드하며, 적의 웨이브를 막아내야 합니다.',
    features: [
      '클라우드 저장 및 불러오기',
      '안전한 백엔드 검증 (Anti-cheat)',
      '오프라인 보상 시스템',
    ],
    techStack: [
      { category: 'Frontend', value: 'Next.js 14+ (App Router), TypeScript, HTML5 Canvas' },
      { category: 'Backend', value: 'FastAPI, Python 3.9+, Pydantic' },
      { category: 'Database', value: 'Supabase (PostgreSQL)' },
    ],
    screenshot: '/screenshots/tower.png',
    note: '작은 모바일 화면에의 최적화는 되어 있지 않으므로 노트북이나 데스크탑, 테블릿으로 실행하는 것이 좋습니다.',
  },
  {
    id: 'saju-2026',
    title: '2026 병오년 신년 운세',
    link: 'https://saju.dsp.ai.kr/',
    icon: 'https://saju.dsp.ai.kr/icon.png',
    description: '2026년 붉은 말의 해(병오년) 운세를 정밀하게 분석해주는 웹 어플리케이션입니다.',
    features: [
      '정밀한 만세력 (lunar-javascript 활용)',
      '2026년 운세 해석 (일간/오행 분석)',
      '다양한 운세 항목 (총운, 재물운, 애정운, 건강운 등)',
    ],
    techStack: [
      { category: 'Framework', value: 'Next.js 15+ (App Router)' },
      { category: 'Language', value: 'TypeScript' },
      { category: 'Styling', value: 'Tailwind CSS v4' },
      { category: 'Logic', value: 'lunar-javascript' },
    ],
    screenshot: '/screenshots/saju.png',
  },
  {
    id: 'animal-face',
    title: '동물상 테스트 AI',
    link: 'https://animalface.dsp.ai.kr/',
    icon: 'https://animalface.dsp.ai.kr/icon.png',
    description: '사용자의 얼굴 특징을 분석하여 8가지 동물상(강아지, 고양이, 쿼카 등) 중 어떤 동물과 가장 닮았는지 알려주는 모바일 웹 애플리케이션입니다. Google MediaPipe를 활용하여 서버 전송 없이 안전하게 분석합니다.',
    features: [
      '개인정보 보호 (100% 클라이언트 처리)',
      '8가지 동물상 정밀 분석 (강아지, 고양이, 토끼 등)',
      '실시간 카메라 및 파일 업로드 분석',
    ],
    techStack: [
      { category: 'Framework', value: 'Next.js 15 (App Router)' },
      { category: 'Language', value: 'TypeScript' },
      { category: 'Styling', value: 'Tailwind CSS v4' },
      { category: 'Vision', value: 'Google MediaPipe Face Landmarker (Client-side WASM)' },
      { category: 'Logic', value: '얼굴 랜드마크 좌표 기반 휴리스틱 알고리즘 (src/utils/faceAnalysis.ts)' },
      { category: 'Animation', value: 'Framer Motion' },
      { category: 'Camera', value: 'react-webcam' },
      { category: 'I18n', value: 'next-intl' },
    ],
    screenshot: '/screenshots/animal.png',
    note: '모든 분석은 사용자 기기 내에서만 이루어지며, 사진은 절대 서버로 전송되거나 저장되지 않습니다.',
  },
  {
    id: 'personal-color',
    title: 'Personal Color Analysis',
    link: 'https://color.dsp.ai.kr/',
    icon: 'https://color.dsp.ai.kr/icon',
    description: '정교한 얼굴 분석 엔진(8-Type System)을 기반으로 한 퍼스널 컬러 진단 서비스입니다. Google MediaPipe로 얼굴 랜드마크를 추적하고, 뺨 영역의 색상을 분석하여 8가지 세부 타입(Spring, Summer, Autumn, Winter 등)을 제시합니다.',
    features: [
      '정교한 얼굴 분석 엔진 (8-Type System)',
      'Google MediaPipe Face Landmarker 활용',
      '8가지 세부 타입 결과 제공 (Spring Light/Bright 등)',
      'RGB → LAB 색상 공간 변환 분석',
    ],
    techStack: [
      { category: 'Framework', value: 'Next.js 15 (App Router)' },
      { category: 'Language', value: 'TypeScript' },
      { category: 'Styling', value: 'Tailwind CSS, Lucide React' },
      { category: 'AI/ML', value: 'Google MediaPipe tasks-vision' },
      { category: 'Motion', value: 'Framer Motion' },
    ],
    screenshot: '/screenshots/color.png',
  },
  {
    id: 'face-fate',
    title: 'FaceFate - 디지털 관상',
    link: 'https://facefate.dsp.ai.kr/',
    icon: 'https://facefate.dsp.ai.kr/icon',
    description: 'FaceFate는 서버리스 클라이언트 사이드 웹 애플리케이션으로, 사용자의 얼굴 특징을 실시간으로 분석하여 신비로운 운세 결과를 제공합니다. AI(MediaPipe)와 고전적인 관상학(Physiognomy) 이론을 결합하여, 서버 전송 없이 브라우저 내에서 안전하게 모든 분석이 이루어집니다.',
    features: [
      '서버리스 클라이언트 사이드 분석 (100% 프라이버시 보호)',
      '478개 3D 얼굴 랜드마크 기반 정밀 계측',
      '관상학 기반 4대 운명(성격, 재물, 리더십, 생명력) 분석',
    ],
    techStack: [
      { category: 'Framework', value: 'Next.js 15 (App Router)' },
      { category: 'Language', value: 'TypeScript' },
      { category: 'Styling', value: 'Tailwind CSS' },
      { category: 'AI/Vision', value: 'MediaPipe Tasks Vision (Face Landmarker)' },
    ],
    screenshot: '/screenshots/facefate.jpg',
    note: 'Google MediaPipe를 통해 추출된 478개의 3D 얼굴 랜드마크(Mesh)를 기반으로, 벡터 연산을 통해 주요 관상 포인트를 정량적으로 분석합니다.',
  },
];
