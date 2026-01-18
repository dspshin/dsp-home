import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About DSP - Digital Service Platform',
    description: 'DSP(Digital Service Platform)는 AI 기술을 활용하여 일상에 즐거움을 더하는 웹 서비스 연구소입니다. 사주, 관상, 성격 분석 등 다양한 AI 서비스를 제공합니다.',
    openGraph: {
        title: 'About DSP - Digital Service Platform',
        description: 'AI와 일상의 즐거운 만남, DSP에 대해 알아보세요.',
        url: 'https://dsp.ai.kr/about',
        siteName: 'DSP',
        locale: 'ko_KR',
        type: 'website',
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen relative bg-[var(--background)] text-[var(--text-primary)]">
            {/* Background elements */}
            <div className="gradient-bg fixed inset-0 pointer-events-none" />

            <div className="relative z-10 w-full max-w-2xl mx-auto px-6 py-16 sm:py-24">
                {/* Navigation */}
                <nav className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors py-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m15 18-6-6 6-6" /></svg>
                        메인으로 돌아가기
                    </Link>
                </nav>

                <article className="prose max-w-none">
                    <header className="mb-12 pb-6 border-b border-gray-200">
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-[var(--text-primary)]">About DSP</h1>
                        <p className="text-[var(--text-secondary)] mt-4 text-lg">
                            Digital Service Platform : AI와 일상의 즐거운 만남
                        </p>
                    </header>

                    <section className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">우리의 미션</h2>
                            <div className="text-[var(--text-secondary)] leading-relaxed space-y-4">
                                <p>
                                    DSP(Digital Service Platform)는 최신 인공지능 기술을 활용하여 일상 생활에 재미와 유용함을 더하는 웹 서비스 연구소입니다.
                                </p>
                                <p>
                                    복잡한 AI 기술을 누구나 쉽게 경험할 수 있는 직관적인 형태로 제공하는 것을 목표로 합니다.
                                    사주, 관상 같은 전통적인 지식부터 현대적인 이미지 분석 딥러닝 기술까지, 다양한 영역을 융합하여 새로운 가치를 만들어냅니다.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">핵심 가치</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                                <div className="p-5 rounded-xl bg-white border border-gray-200 hover:border-[var(--primary)]/50 transition-colors shadow-sm">
                                    <h3 className="font-bold text-[var(--text-primary)] mb-2">프라이버시 최우선</h3>
                                    <p className="text-sm text-[var(--text-secondary)]">
                                        모든 분석은 사용자 기기(브라우저)에서 이루어집니다. 개인정보는 서버로 전송되지 않습니다.
                                    </p>
                                </div>
                                <div className="p-5 rounded-xl bg-white border border-gray-200 hover:border-[var(--primary)]/50 transition-colors shadow-sm">
                                    <h3 className="font-bold text-[var(--text-primary)] mb-2">끊임없는 실험</h3>
                                    <p className="text-sm text-[var(--text-secondary)]">
                                        최신 웹 기술(Next.js, WebAssembly)과 AI 모델을 실험하고 빠르게 적용합니다.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">Contact</h2>
                            <div className="text-[var(--text-secondary)] leading-relaxed">
                                <p className="mb-4">
                                    서비스에 대한 제안이나 버그 리포트, 혹은 협업 제안은 언제나 환영합니다.
                                </p>
                                <div className="p-4 rounded-lg bg-white border border-gray-200 inline-flex items-center gap-3 shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--text-tertiary)]"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    <span className="font-mono text-[var(--text-primary)]">freewowbot@gmail.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-12 border-t border-gray-200">
                            <p className="text-sm text-[var(--text-tertiary)]">
                                DSP는 개인 개발자가 운영하는 비영리 목적의 연구 프로젝트입니다.
                            </p>
                        </div>
                    </section>
                </article>

                <footer className="mt-20 text-center">
                    <p className="text-[var(--text-tertiary)] text-sm">
                        © {new Date().getFullYear()} DSP. All rights reserved.
                    </p>
                </footer>
            </div>
        </main>
    );
}
