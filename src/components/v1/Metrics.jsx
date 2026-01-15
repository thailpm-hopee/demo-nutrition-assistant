import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';
import MetricBar from '../MetricBar';

const Metrics = () => (
    <Section id="slide-9" className="snap-start min-h-screen py-6 md:py-10 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-4xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-emerald-600 dark:from-indigo-400 dark:to-emerald-400">Sức mạnh AI-Driven</h2>
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">Hiệu suất phi thường: Tiết kiệm thời gian thực thi.</p>
            </div>
            <div className="space-y-3 md:space-y-4 bg-white dark:bg-slate-800/40 p-4 md:p-6 rounded-[24px] border border-slate-200 dark:border-slate-700/50 backdrop-blur-md shadow-xl">
                <MetricBar label="Quy trình truyền thống" value="160 Giờ" percentage={100} color="bg-slate-600" />
                <MetricBar label="Phát triển cùng AI Agent" value="64 Giờ" percentage={40} color="bg-gradient-to-r from-indigo-500 to-emerald-400 shadow-[0_0_20px_rgba(99,102,241,0.5)]" />

                <div className="mt-6 md:mt-8 text-center">
                    <motion.div
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        className="inline-block p-4 md:p-6 rounded-[24px] md:rounded-[32px] bg-white dark:bg-slate-900 border-2 border-indigo-500/50 shadow-inner"
                    >
                        <p className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-none">60%</p>
                        <p className="text-indigo-600 dark:text-indigo-400 font-bold text-base md:text-lg uppercase tracking-tighter mt-1">Thời gian được tối ưu</p>
                    </motion.div>
                </div>
            </div>
        </div>
    </Section>
);

export default Metrics;
