import React from 'react';
import { Eye, BarChart3 } from 'lucide-react';
import Section from '../Section';

const InvisibleAI = () => (
    <Section id="slide-8" className="snap-start h-screen bg-white dark:bg-slate-900 flex items-center">
        <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-4xl md:text-6xl font-black mb-4 text-slate-900 dark:text-white">Invisible AI</h2>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light tracking-wide">Khi những hành động nhỏ trở thành ngôn ngữ để AI thấu hiểu bạn sâu sắc hơn.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
                <div className="group p-6 md:p-8 bg-slate-50 dark:bg-slate-800/30 rounded-[32px] md:rounded-[40px] border border-slate-200 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800/50 transition-all text-center shadow-sm hover:shadow-xl">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 border border-indigo-500/20">
                        <Eye className="w-6 h-6 md:w-8 md:h-8 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-slate-800 dark:text-white">Học hành vi ngầm</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">Nếu User liên tục lướt qua nhanh các món dầu mỡ, AI tự động trừ Match Score cho các quán Fastfood trong tương lai.</p>
                </div>
                <div className="group p-6 md:p-8 bg-slate-50 dark:bg-slate-800/30 rounded-[32px] md:rounded-[40px] border border-slate-200 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800/50 transition-all text-center shadow-sm hover:shadow-xl">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 border border-emerald-500/20">
                        <BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-slate-800 dark:text-white">Match Score Dynamic</h4>
                    <div className="text-4xl md:text-5xl font-black text-emerald-600 dark:text-emerald-400 mb-4 md:mb-6 group-hover:scale-110 transition-transform inline-block">0 - 100%</div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">Điểm tương thích hiển thị kèm các tag giúp User quyết định nhanh chóng.</p>
                </div>
            </div>
        </div>
    </Section>
);

export default InvisibleAI;
