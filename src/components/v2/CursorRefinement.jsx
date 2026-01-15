import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Code2, CheckCircle2 } from 'lucide-react';
import Section from '../Section';

const CursorRefinement = () => (
    <Section id="v2-cursor" className="snap-start h-screen bg-white dark:bg-slate-900 flex items-center">
        <div className="max-w-6xl mx-auto px-4 w-full grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500/10 text-orange-500 font-bold text-sm mb-6 border border-orange-500/20">
                    <Target className="w-5 h-5" /> Tinh chỉnh chuẩn xác
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Cursor: <br /><span className="text-orange-500">Phẫu thuật Logic</span></h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    Nơi các feature được mài giũa và các hàm phức tạp được tối ưu hóa ở quy mô vừa và nhỏ.
                </p>

                <div className="space-y-4">
                    {[
                        "Chỉnh sửa Logic hàm Match Score thời gian thực.",
                        "Tái cấu trúc (Refactor) các component UI phức tạp.",
                        "Debug và xử lý các lỗi logic trong nghiệp vụ dinh dưỡng.",
                        "Thêm nhanh các tag và bộ lọc món ăn mới."
                    ].map((text, i) => (
                        <div key={i} className="flex gap-3 items-start">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-slate-700 dark:text-slate-300 font-medium">{text}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="md:col-span-3">
                <div className="bg-slate-900 rounded-[32px] p-8 border border-slate-800 shadow-2xl relative overflow-hidden group">
                    {/* Code decoration */}
                    <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <span className="text-slate-600 text-xs font-mono ml-4">src/utils/nutrition-logic.js</span>
                    </div>

                    <div className="space-y-4 font-mono text-sm">
                        <div className="flex gap-4">
                            <span className="text-slate-600">24</span>
                            <span className="text-emerald-400">+ export const adjustScoreByActivity = (base, activity) =&gt; &#123;</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-slate-600">25</span>
                            <span className="text-emerald-400">+   const multiplier = activity.intensity === 'HIGH' ? 1.2 : 0.9;</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-slate-600">26</span>
                            <span className="text-emerald-400">+   return Math.min(100, base * multiplier);</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-slate-600">27</span>
                            <span className="text-emerald-400">+ &#125;</span>
                        </div>
                        <div className="pt-4 border-t border-slate-800">
                            <div className="flex items-center gap-3">
                                <Zap className="w-4 h-4 text-orange-500 animate-pulse" />
                                <span className="text-slate-400 italic text-xs">AI is applying changes to 'nutrition-logic.js'...</span>
                            </div>
                        </div>
                    </div>

                    {/* Cursor floating element */}
                    <motion.div
                        animate={{ x: [0, 50, -50, 0], y: [0, 20, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute top-1/2 left-1/2 w-8 h-8 pointer-events-none"
                    >
                        <svg viewBox="0 0 24 24" className="w-full h-full text-white fill-current">
                            <path d="M5.5,2L19,12.5L13.5,14L18,21L15.5,22L11,15.5L5.5,20V2Z" />
                        </svg>
                    </motion.div>
                </div>
            </div>
        </div>
    </Section>
);

export default CursorRefinement;
