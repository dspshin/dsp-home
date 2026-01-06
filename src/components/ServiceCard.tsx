'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, Monitor, Code, Layers } from 'lucide-react';
import { Service } from '@/data/services';
import clsx from 'clsx';

export default function ServiceCard({ service }: { service: Service }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/5 active:scale-[0.98] sm:active:scale-100 group"
        >
            <div
                className="p-4 sm:p-5 cursor-pointer flex items-center justify-between"
                onClick={() => setIsOpen(!isOpen)}
                style={{ display: 'flex', alignItems: 'center', gap: '24px' }}
            >
                <div
                    className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-lg overflow-hidden bg-white/5 border border-white/10 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center"
                    style={{ width: '48px', height: '48px', minWidth: '48px' }}
                >
                    {service.icon ? (
                        <img
                            src={service.icon}
                            alt={service.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <Monitor className="w-8 h-8 text-[var(--text-tertiary)]" />
                    )}
                </div>

                <div className="flex-1 min-w-0 py-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--primary)] transition-colors line-clamp-1">
                        {service.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] line-clamp-1 pr-2">
                        {service.description}
                    </p>
                </div>

                <button
                    className={clsx(
                        "p-2 rounded-full transition-all duration-300 shrink-0",
                        isOpen ? "rotate-180" : ""
                    )}
                    style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#a8a29e' }}
                    aria-label={isOpen ? "Collapse" : "Expand"}
                >
                    <ChevronDown className="w-5 h-5" />
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <div className="px-5 pb-6 text-[var(--text-secondary)] space-y-6 border-t border-white/5 pt-5 sm:px-6">

                            {/* Description */}
                            <p className="leading-relaxed text-[var(--text-primary)] text-sm sm:text-base">
                                {service.description}
                            </p>

                            {/* Action Button */}
                            <div>
                                <a
                                    href={service.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 bg-[var(--primary)] hover:bg-[var(--accent)] text-white rounded-xl font-semibold transition-colors duration-200 shadow-lg shadow-orange-500/20"
                                >
                                    서비스 바로가기 <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>

                            {/* Features */}
                            <div>
                                <h4 className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <Layers className="w-4 h-4 text-[var(--secondary)]" /> 핵심 기능
                                </h4>
                                <ul className="grid gap-2 grid-cols-1 sm:grid-cols-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2.5 text-sm bg-white/5 p-3 rounded-lg border border-white/5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                                            <span className="text-[var(--text-primary)] font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <h4 className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <Code className="w-4 h-4 text-[var(--primary)]" /> 기술 스택
                                </h4>
                                <div className="space-y-2">
                                    {service.techStack.map((tech, i) => (
                                        <div key={i} className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] gap-3 text-sm p-3 rounded-lg bg-white/5 border border-white/5">
                                            <span className="font-semibold text-[var(--text-secondary)]">{tech.category}</span>
                                            <span className="text-[var(--text-primary)]">{tech.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Note */}
                            {service.note && (
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-sm font-medium">
                                    <Monitor className="w-5 h-5 shrink-0 mt-0.5" />
                                    <p>{service.note}</p>
                                </div>
                            )}

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div >
    );
}
