import React from 'react';
import { MessageSquare, MapPin, Zap } from 'lucide-react';
import Section from '../Section';

const Idea = () => (
    <Section id="slide-3" className="snap-start h-screen">
        <div className="relative max-w-5xl mx-auto px-4">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px]" />
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-400 text-sm font-bold mb-6 tracking-wider uppercase">
                        The Spark
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-slate-900 dark:text-white">Khởi nguồn từ một câu hỏi</h2>
                    <div className="p-8 bg-white dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-3xl relative shadow-xl">
                        <MessageSquare className="absolute -top-4 -left-4 w-10 h-10 text-indigo-500 bg-white dark:bg-slate-900 rounded-lg p-2 shadow-lg border border-slate-100 dark:border-slate-800" />
                        <p className="text-2xl text-slate-800 dark:text-slate-200 italic leading-relaxed">
                            "Hôm nay ăn gì?"
                        </p>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="p-6 bg-white dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm">
                        <h4 className="text-indigo-600 dark:text-indigo-400 font-bold mb-2 flex items-center gap-2">
                            <MapPin className="w-5 h-5" /> Vị trí + Calo
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400">Ý tưởng sơ khai về một công cụ tìm kiếm quán ăn thông minh.</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm">
                        <h4 className="text-red-500 dark:text-red-400 font-bold mb-2 flex items-center gap-2">
                            <Zap className="w-5 h-5" /> Thách thức
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400">Làm sao để biến tìm kiếm thành một "Trợ lý thực thụ"?</p>
                    </div>
                </div>
            </div>
        </div>
    </Section>
);

export default Idea;
