import React from 'react';
import { Cpu, Layout, Database, Smartphone } from 'lucide-react';
import Section from '../Section';

const ClaudeCode = () => (
    <Section id="v2-claude" className="snap-start h-screen bg-slate-50 dark:bg-slate-900 flex items-center">
        <div className="max-w-6xl mx-auto px-4 w-full grid md:grid-cols-2 gap-12 items-center">
            <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500/10 text-indigo-500 font-bold text-sm mb-6 border border-indigo-500/20">
                    <Cpu className="w-5 h-5" /> Hệ điều hành phát triển
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Claude Code: <br /><span className="text-indigo-600 dark:text-indigo-400">Thiết kế Khung sườn</span></h2>

                <div className="space-y-6">
                    <div className="flex gap-5 p-6 bg-white dark:bg-slate-800/40 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                            <Layout className="text-indigo-500 w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-1">Cấu trúc Mobile App</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Tự động khởi tạo boilerplate React Native với Navigation và State Management tối ưu.</p>
                        </div>
                    </div>
                    <div className="flex gap-5 p-6 bg-white dark:bg-slate-800/40 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                            <Database className="text-emerald-500 w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-1">Backend Scaffolding</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Thiết kế RESTful API (NestJS) và Schema database chuẩn xác ngay từ câu lệnh đầu tiên.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative">
                {/* Space for animation/demo */}
                <div className="aspect-[4/3] w-full rounded-[40px] bg-slate-200 dark:bg-slate-800 border-4 border-dashed border-slate-400 dark:border-slate-600 flex flex-col items-center justify-center text-center p-8 overflow-hidden group">
                    <div className="w-20 h-20 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Smartphone className="w-10 h-10 text-indigo-500 animate-bounce" />
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">Placeholder for Demo Animation</p>
                    <p className="text-slate-400 dark:text-slate-500 text-xs text-balance">Khu vực dành cho video/ảnh động demo UI/UX Mobile thực tế được tạo bởi Claude Code.</p>

                    {/* Shadow pulse */}
                    <div className="absolute inset-0 bg-indigo-500/5 dark:bg-indigo-500/10 animate-pulse pointer-events-none" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 hidden lg:block">
                    <p className="text-indigo-500 font-black text-2xl uppercase italic">Fast-Track</p>
                    <p className="text-slate-400 text-[10px] font-bold">Development Speed x5</p>
                </div>
            </div>
        </div>
    </Section>
);

export default ClaudeCode;
