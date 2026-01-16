import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Cpu, MessageSquare } from 'lucide-react';
import Section from '../Section';

const Hero = () => (
    <Section id="slide-1" className="bg-gradient-to-br from-slate-50 via-white to-indigo-100/30 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/30 snap-start h-screen">
        <div className="text-center px-4">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="inline-block p-4 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 mb-8"
            >
                <Rocket className="w-12 h-12 text-indigo-400" />
            </motion.div>
            <h1 className="text-4xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-emerald-600 dark:from-indigo-400 dark:to-emerald-400 leading-tight">
                Smart Nutrition Assistant
            </h1>
            <p className="text-xl md:text-3xl font-medium text-slate-700 dark:text-slate-300 mb-12 max-w-3xl mx-auto">
                Trợ lý dinh dưỡng cá nhân hóa
            </p>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto text-left">
                <div className="p-5 md:p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 hover:border-secondary/50 transition-all group shadow-sm hover:shadow-md">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-secondary/20 transition-colors">
                        <Cpu className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-slate-800 dark:text-white">Cốt lõi</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">Tương tác nhỏ + Google Maps API + LLMs Reasoning.</p>
                </div>
                <div className="p-5 md:p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 hover:border-indigo-500/50 transition-all group shadow-sm hover:shadow-md">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-indigo-500/20 transition-colors">
                        <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-slate-800 dark:text-white">Thông điệp</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">"Ăn đúng những gì cơ thể cần, tại nơi bạn đang đứng."</p>
                </div>
            </div>
        </div>
    </Section>
);

export default Hero;
