import { services } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blog';

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

        {/* Recent Blog Posts Section */}
        <section className="mt-40 pt-20">
          <div className="flex items-center gap-3 mb-8 px-2">
            <BookOpen className="w-6 h-6 text-[var(--primary)]" />
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              최신 기술 블로그
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {blogPosts
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .slice(0, 3)
              .map(post => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <article className="glass rounded-xl p-6 transition-all duration-300 hover:bg-white/5 hover:border-[var(--primary)]/30">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between text-xs text-[var(--text-tertiary)] uppercase tracking-wider font-medium">
                        <span>{post.tags[0]}</span>
                        <span>{post.date}</span>
                      </div>

                      <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-sm text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                        {post.description}
                      </p>

                      <div className="flex items-center text-xs font-semibold text-[var(--text-tertiary)] group-hover:text-white mt-2 transition-colors">
                        Read More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-[var(--text-secondary)] hover:text-white transition-colors py-2 px-4 rounded-full border border-white/5 hover:bg-white/5 hover:border-white/10"
            >
              블로그 전체보기 <ArrowRight className="w-3 h-3 ml-2" />
            </Link>
          </div>
        </section>


        <footer className="border-t border-white/5 text-center">
          <div className="mb-4 flex justify-center items-center">
            <Link href="/blog" className="text-[var(--text-tertiary)] hover:text-white text-sm transition-colors">
              블로그
            </Link>
            <span className="mx-6 text-[var(--text-tertiary)] opacity-30">|</span>
            <Link href="/privacy" className="text-[var(--text-tertiary)] hover:text-white text-sm transition-colors">
              개인정보처리방침
            </Link>
          </div>
          <p className="text-[var(--text-tertiary)] text-sm">
            © {new Date().getFullYear()} DSP. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
