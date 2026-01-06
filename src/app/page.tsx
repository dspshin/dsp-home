import { services } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="gradient-bg" />

      {/* Mobile-first layout container */}
      <div className="w-full max-w-2xl mx-auto px-5 py-12 sm:py-20 relative z-10">

        <header className="text-center space-y-6 mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
            DSP <span className="gradient-text">Services</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed max-w-md mx-auto">
            최신 기술 스택으로 구축된 다양한 웹 서비스와 프로젝트를 만나보세요.
          </p>
        </header>

        <section className="flex flex-col gap-5">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </section>

        <footer className="mt-20 pt-10 border-t border-white/5 text-center">
          <p className="text-[var(--text-tertiary)] text-sm">
            © {new Date().getFullYear()} DSP. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
