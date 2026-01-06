'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, Monitor, Server, Code, Database, Layers } from 'lucide-react';
import { Service } from '@/data/services';
import clsx from 'clsx';

export default function ServiceCard({ service }: { service: Service }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/5 group"
        >
            <div
                className="p-6 cursor-pointer flex items-center gap-5"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="relative w-16 h-16 shrink-0 rounded-xl overflow-hidden bg-white/10 border border-white/10 group-hover:scale-105 transition-transform duration-300">
                    <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 64px, 64px"
                    />
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[var(--primary)] transition-colors">
                        {service.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] line-clamp-1 pr-4">
                        {service.description}
                    </p>
                </div>

                <button
                    className={clsx(
                        "p-2 rounded-full hover:bg-white/10 transition-transform duration-300",
                        isOpen ? "rotate-180" : ""
                    )}
                    aria-label={isOpen ? "Collapse" : "Expand"}
                >
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="px-6 pb-6 pt-2 text-[var(--text-secondary)] space-y-6 border-t border-white/5 mx-6 mt-2">

                            {/* Description */}
                            <p className="leading-relaxed text-[var(--text-primary)]">
                                {service.description}
                            </p>

                            {/* Action Button */}
                            <div>
                                <a
                                    href={service.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--primary)] hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200"
                                >
                                    Visit Service <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>

                            {/* Features */}
                            <div>
                                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <Layers className="w-4 h-4 text-[var(--secondary)]" /> Key Features
                                </h4>
                                <ul className="grid gap-2 grid-cols-1 sm:grid-cols-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm bg-white/5 p-3 rounded-lg">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <Code className="w-4 h-4 text-[var(--primary)]" /> Tech Stack
                                </h4>
                                <div className="space-y-3">
                                    {service.techStack.map((tech, i) => (
                                        <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                            <span className="font-medium text-gray-400 sm:w-24 shrink-0">{tech.category}</span>
                                            <span className="text-white">{tech.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Note */}
                            {service.note && (
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-200 text-sm">
                                    <Monitor className="w-5 h-5 shrink-0 mt-0.5" />
                                    <p>{service.note}</p>
                                </div>
                            )}

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
