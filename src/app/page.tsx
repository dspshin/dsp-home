import { services } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';

export default function Home() {
  return (
    <main className="min-h-screen p-6 sm:p-24 relative overflow-hidden">
      <div className="gradient-bg" />

      <div className="max-w-3xl mx-auto space-y-16 relative z-10">
        <header className="text-center space-y-6 mt-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            DSP <span className="gradient-text">Services</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
            DSP의 다양한 웹 서비스와 프로젝트를 한곳에서 만나보세요.
            <br className="hidden sm:block" />
            최신 기술 스택으로 구축된 프리미엄 서비스를 제공합니다.
          </p>
        </header>

        <section className="grid gap-6">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </section>

        <footer className="pt-20 pb-10 text-center space-y-2">
          <div className="w-12 h-1 bg-white/10 mx-auto rounded-full mb-8" />
          <p className="text-[var(--text-tertiary)] text-sm">
            © {new Date().getFullYear()} DSP. All rights reserved.
          </p>
          <p className="text-[var(--text-tertiary)] text-xs">
            Built with Next.js, Framer Motion & Love.
          </p>
        </footer>
      </div>
    </main>
  );
}
