import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

// Generate static params for all blog posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
    return (
        <BlogPostContent params={props.params} />
    );
}

async function BlogPostContent(props: { params: Promise<{ slug: string }> }) {
    const { slug } = await props.params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen relative bg-[var(--background)] text-[var(--text-primary)]">
            <div className="gradient-bg fixed inset-0 pointer-events-none" />

            <article className="relative z-10 w-full max-w-3xl mx-auto px-6 py-16 sm:py-24">
                {/* Navigation */}
                <nav className="mb-12">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors py-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m15 18-6-6 6-6" /></svg>
                        목록으로 돌아가기
                    </Link>
                </nav>

                {/* Header */}
                <header className="mb-12 border-b border-gray-200 pb-8">
                    <div className="flex gap-2 mb-4">
                        {post.tags.map(tag => (
                            <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-gray-100 text-[var(--text-secondary)] border border-gray-200">
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight text-[var(--text-primary)]">
                        {post.title}
                    </h1>
                    <div className="text-[var(--text-tertiary)] text-sm">
                        {post.date}
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-lg max-w-none text-[var(--text-secondary)] prose-headings:text-[var(--text-primary)] prose-strong:text-[var(--text-primary)] prose-a:text-[var(--primary)] hover:prose-a:text-[var(--accent)]">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>

                {/* Related Links */}
                {post.relatedLinks && post.relatedLinks.length > 0 && (
                    <div className="mt-16 pt-8 border-t border-gray-200">
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">관련 서비스 바로가기</h3>
                        <div className="flex flex-wrap gap-4">
                            {post.relatedLinks.map(link => (
                                <a
                                    key={link.url}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 rounded-xl bg-[var(--primary)] text-white font-bold hover:bg-[var(--accent)] transition-colors shadow-sm hover:shadow-md"
                                >
                                    {link.title}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                <footer className="mt-20 pt-10 text-center">
                    <p className="text-[var(--text-tertiary)] text-sm">
                        © {new Date().getFullYear()} DSP. All rights reserved.
                    </p>
                </footer>
            </article>
        </main>
    );
}
