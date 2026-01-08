import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen relative bg-[#0A0A0A] text-[var(--text-primary)]">
            {/* Background elements */}
            <div className="gradient-bg opacity-30 fixed inset-0 pointer-events-none" />

            <div className="relative z-10 w-full max-w-2xl mx-auto px-6 py-16 sm:py-24">
                {/* Navigation */}
                <nav className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm text-[var(--text-secondary)] hover:text-white transition-colors py-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m15 18-6-6 6-6" /></svg>
                        메인으로 돌아가기
                    </Link>
                </nav>

                <article className="prose prose-invert max-w-none">
                    <header className="mb-12 pb-6 border-b border-white/10">
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">개인정보 처리방침</h1>
                        <p className="text-[var(--text-secondary)] mt-4 text-lg">
                            DSP는 사용자의 개인정보를 소중히 다루며, 투명하게 관리합니다.
                        </p>
                    </header>

                    <section className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">1. 개인정보의 수집 및 저장</h2>
                            <div className="text-[var(--text-secondary)] leading-relaxed space-y-4">
                                <p>
                                    본 웹사이트(DSP)는 별도의 회원가입 절차 없이 누구나 자유롭게 이용할 수 있습니다.
                                </p>
                                <p>
                                    DSP가 제공하는 다양한 AI 서비스(사주, 관상, 동물상 등)에서 사용자가 입력하거나 분석을 위해 제공하는 모든 정보(생년월일, 사진 등)는
                                    <strong className="text-white"> 오직 사용자의 브라우저 내부(Client-side)에서만 연산 목적으로 일시적으로 사용됩니다.</strong>
                                </p>
                                <p>
                                    서비스 제공자는 사용자가 입력한 어떠한 정보도 서버로 전송하거나 수집, 저장하지 않습니다.
                                    페이지를 닫거나 새로고침하면 입력하신 정보는 즉시 파기됩니다.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">2. 쿠키(Cookie) 및 광고 게재</h2>
                            <div className="text-[var(--text-secondary)] leading-relaxed space-y-4">
                                <p>
                                    본 서비스는 사용자에게 보다 나은 서비스를 제공하고, 서비스 운영을 유지하기 위해 Google AdSense를 통한 광고를 게재하고 있습니다.
                                </p>
                                <ul className="list-disc pl-5 space-y-2 marker:text-gray-500">
                                    <li>Google 및 타사 공급업체는 쿠키를 사용하여 사용자가 이전에 본 웹사이트나 다른 웹사이트에 접속한 기록을 바탕으로 광고를 게재합니다.</li>
                                    <li>Google은 광고 쿠키를 사용하여 자사 및 파트너 웹사이트 방문 기록을 바탕으로 사용자에게 적합한 광고를 표시할 수 있습니다.</li>
                                    <li>사용자는 <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">광고 설정</a>을 방문하여 맞춤광고를 사용 중지할 수 있습니다.</li>
                                    <li>또는 <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">www.aboutads.info</a>에 접속하여 타사 공급업체의 맞춤광고 게재용 쿠키 사용을 중지할 수 있습니다.</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">3. 개인정보 관련 문의</h2>
                            <div className="text-[var(--text-secondary)] leading-relaxed space-y-4">
                                <p>
                                    개인정보 처리방침과 관련하여 궁금한 점이 있으시다면 아래 이메일로 문의주시기 바랍니다.
                                </p>
                                <div className="mt-4 p-4 rounded-lg bg-white/5 inline-block">
                                    <span className="text-sm text-gray-400 block mb-1">Contact Email</span>
                                    <span className="font-mono text-white">freewowbot@gmail.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-12 border-t border-white/10">
                            <p className="text-sm text-[var(--text-tertiary)]">
                                본 방침은 2026년 1월 8일부터 시행됩니다.
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
