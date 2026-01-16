import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';

// Development time data
const data = [
    { stage: 'Lên ý tưởng', traditional: 48, ai: 16 },
    { stage: 'Thiết kế UI/UX', traditional: 32, ai: 16 },
    { stage: 'Coding & Logic', traditional: 160, ai: 60 },
    { stage: 'Testing', traditional: 24, ai: 8 },
];

const totalTraditional = data.reduce((sum, d) => sum + d.traditional, 0); // 264h
const totalAI = data.reduce((sum, d) => sum + d.ai, 0); // 100h
const reductionPercent = (((totalTraditional - totalAI) / totalTraditional) * 100).toFixed(1); // 62.1%

const maxHours = Math.max(...data.map(d => d.traditional)); // 160h for scaling

const BarRow = ({ stage, traditional, ai, delay = 0 }) => {
    const traditionalWidth = (traditional / maxHours) * 100;
    const aiWidth = (ai / maxHours) * 100;
    const reduction = (((traditional - ai) / traditional) * 100).toFixed(0);

    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="mb-6"
        >
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm md:text-base font-semibold text-slate-700 dark:text-slate-300">
                    {stage}
                </span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                    -{reduction}%
                </span>
            </div>

            {/* Traditional bar */}
            <div className="relative h-7 mb-1.5">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${traditionalWidth}%` }}
                    transition={{ duration: 0.8, delay: delay + 0.2 }}
                    viewport={{ once: true }}
                    className="absolute inset-y-0 left-0 bg-slate-300 dark:bg-slate-600 rounded-lg flex items-center justify-end pr-2"
                >
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                        {traditional}h
                    </span>
                </motion.div>
            </div>

            {/* AI bar */}
            <div className="relative h-7">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${aiWidth}%` }}
                    transition={{ duration: 0.8, delay: delay + 0.4 }}
                    viewport={{ once: true }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-lg flex items-center justify-end pr-2"
                >
                    <span className="text-xs font-medium text-white">
                        {ai}h
                    </span>
                </motion.div>
            </div>
        </motion.div>
    );
};

const DevelopmentComparison = () => (
    <Section id="slide-7" className="snap-start h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 w-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-6"
            >
                <h2 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white mb-2">
                    Thời gian phát triển MVP
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-base">
                    So sánh quy trình thông thường vs có AI
                </p>
            </motion.div>

            {/* Legend */}
            <div className="flex justify-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-slate-300 dark:bg-slate-600" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">Thông thường</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-gradient-to-r from-indigo-500 to-emerald-500" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">Có AI</span>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Bars - Left Side (2 columns) */}
                <div className="lg:col-span-2 bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-slate-200 dark:border-slate-700/50 shadow-xl">
                    {data.map((item, index) => (
                        <BarRow
                            key={item.stage}
                            stage={item.stage}
                            traditional={item.traditional}
                            ai={item.ai}
                            delay={index * 0.1}
                        />
                    ))}
                </div>

                {/* Summary - Right Side (1 column) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-slate-200 dark:border-slate-700/50 shadow-xl"
                >
                    <div className="flex flex-col gap-6 h-full justify-center">
                        <div className="text-center">
                            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Thông thường</p>
                            <p className="text-2xl md:text-3xl font-black text-slate-400 dark:text-slate-500">{totalTraditional}h <span className="text-base md:text-lg">({(totalTraditional / 8).toFixed(0)} ngày)</span></p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">Với AI</p>
                            <p className="text-2xl md:text-3xl font-black text-emerald-600 dark:text-emerald-400">{totalAI}h <span className="text-base md:text-lg">({(totalAI / 8).toFixed(1)} ngày)</span></p>
                        </div>
                        <div className="text-center px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-500/10 to-emerald-500/10 dark:from-indigo-500/20 dark:to-emerald-500/20">
                            <p className="text-xs text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">Giảm</p>
                            <p className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-emerald-600 dark:from-indigo-400 dark:to-emerald-400">
                                {reductionPercent}%
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </Section>
);

export default DevelopmentComparison;
