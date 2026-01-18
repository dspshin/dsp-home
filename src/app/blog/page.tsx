'use client';

import Link from 'next/link';
import { blogPosts, BlogPost } from '@/data/blog';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function BlogListPage() {
    const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] font-sans">

            <div className="max-w-6xl mx-auto px-6 py-20">

                {/* Navigation */}
                <nav className="mb-16">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors no-underline"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        메인으로 돌아가기
                    </Link>
                </nav>

                {/* Header Section */}
                <header className="mb-20 max-w-2xl">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-[var(--text-primary)]">
                        AI 분석 & 이야기
                    </h1>
                    <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                        사주, 관상, 퍼스널컬러 등 다양한 AI 분석과 <br />
                        흥미로운 운세 지식을 한곳에서 만나보세요.
                    </p>
                </header>

                {/* Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sortedPosts.map((post, index) => (
                        <BlogCard key={post.slug} post={post} index={index} />
                    ))}
                </div>

                {/* Footer */}
                <footer className="mt-32 pt-10 border-t border-gray-200 text-center">
                    <p className="text-[var(--text-tertiary)] text-sm">© {new Date().getFullYear()} DSP. All rights reserved.</p>
                </footer>
            </div>
        </main>
    );
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
    // Determine icon based on tag or content (simple heuristic)


    // Determine badge color based on tag


    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            <Link href={`/blog/${post.slug}`} className="group block h-full no-underline text-inherit">
                <article className="h-full p-6 rounded-xl bg-white border border-gray-200 hover:border-[var(--primary)]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">

                    <div className="space-y-4">
                        {/* Tags or Date could go here if needed, keeping it simple for now */}

                        {/* Title & Description */}
                        <div>
                            <h2 className="text-xl font-bold text-[var(--text-primary)] leading-tight group-hover:text-[var(--primary)] transition-colors mb-3">
                                {post.title}
                            </h2>
                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-3">
                                {post.description}
                            </p>
                        </div>
                    </div>

                    {/* Read Link */}
                    <div className="pt-6 flex items-center text-sm font-semibold text-[var(--text-tertiary)] group-hover:text-[var(--primary)] transition-colors">
                        읽으러 가기 <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>

                </article>
            </Link>
        </motion.div>
    );
}
