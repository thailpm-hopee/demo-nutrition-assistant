import React from 'react';
import { Eye, Cpu } from 'lucide-react';
import Section from '../Section';

const Claude = () => (
    <Section id="slide-6" className="snap-start min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center px-4 max-w-6xl mx-auto">
            <div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">Claude AI: Triển khai</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">Hiện thực hóa ý tưởng thành giải pháp kỹ thuật toàn diện.</p>

                <div className="space-y-6">
                    <div className="flex gap-4 p-4 bg-white dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20">
                            <Eye className="text-indigo-600 dark:text-indigo-400 w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 dark:text-white">Thiết kế hệ thống</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Wireframe UI & Schema PostgreSQL tối ưu.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-white dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                            <Cpu className="text-emerald-600 dark:text-emerald-400 w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 dark:text-white">Full-stack Development</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">React Native Mobile, NestJS API & Google Maps.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="absolute inset-0 bg-indigo-500/10 blur-[80px] -z-10" />
                <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-3xl border border-slate-800 dark:border-slate-700 font-mono text-[10px] md:text-xs overflow-hidden shadow-2xl">
                    <div className="flex items-center gap-2 mb-4 border-b border-slate-800 dark:border-slate-800 pb-3">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                        </div>
                        <span className="text-slate-500 dark:text-slate-600 text-[10px] ml-2 font-sans italic">// Claude thực thi logic tinh vi</span>
                    </div>
                    <pre className="text-indigo-300/90 leading-relaxed">
                        {`interface UserProfile {
  goal: 'LOSE' | 'MAINTAIN' | 'GAIN';
  allergens: Allergen[];
  tasteProfile: TastePreferences;
}

const calculateMatch = (user, dish) => {
  if (dish.contains(user.allergens)) return 0;
  return baseScore * user.tasteProfileFactor;
}`}
                    </pre>
                </div>
            </div>
        </div>
    </Section>
);

export default Claude;
