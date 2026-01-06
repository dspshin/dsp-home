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
    screenshot: 'https://saju.dsp.ai.kr/screenshot.png', // Example placeholder
  },
];
