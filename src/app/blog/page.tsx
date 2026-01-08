'use client';

import Link from 'next/link';
import { blogPosts, BlogPost } from '@/data/blog';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function BlogListPage() {
    const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#fbbf24] selection:text-black font-sans">

            <div className="max-w-6xl mx-auto px-6 py-20">

                {/* Navigation */}
                <nav className="mb-16">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors no-underline"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        메인으로 돌아가기
                    </Link>
                </nav>

                {/* Header Section */}
                <header className="mb-20 max-w-2xl">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
                        AI 분석 & 이야기
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
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
                <footer className="mt-32 pt-10 border-t border-white/10 text-center">
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} DSP. All rights reserved.</p>
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
                <article className="h-full p-6 sm:p-8 rounded-[2rem] bg-[#080808] hover:bg-[#121212] transition-all duration-300 flex flex-col items-start justify-between">

                    <div className="space-y-6 w-full pl-[10px]">

                        {/* Title & Description */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-300 leading-snug group-hover:text-amber-400 transition-colors">
                                {post.title}
                            </h2>
                            <p className="text-gray-500 leading-relaxed line-clamp-3">
                                {post.description}
                            </p>
                        </div>
                    </div>

                    {/* Read Link */}
                    <div className="pt-8 flex items-center text-gray-500 group-hover:text-white transition-colors font-medium pl-[10px]">
                        읽으러 가기 <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>

                </article>
            </Link>
        </motion.div>
    );
}
