import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap } from 'lucide-react';
import Section from '../Section';

const Demo = () => (
    <Section id="slide-10" className="snap-start h-screen bg-gradient-to-t from-indigo-50 dark:from-indigo-900/40 to-white dark:to-slate-900 flex items-center justify-center">
        <div className="text-center max-w-5xl mx-auto px-4">
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1, rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.8, ease: "backOut" }}
                className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-full mx-auto mb-8 flex items-center justify-center shadow-[0_0_60px_rgba(99,102,241,0.6)]"
            >
                <Rocket className="w-16 h-16 text-white" />
            </motion.div>

            <h2 className="text-6xl md:text-8xl font-black mb-6 text-slate-900 dark:text-white tracking-tighter">
                DEMO
            </h2>

            <p className="text-2xl md:text-4xl text-slate-600 dark:text-slate-300 font-medium mb-12">
                Trải nghiệm <span className="text-indigo-600 dark:text-indigo-400 font-bold">Smart Nutrition Assistant</span> ngay bây giờ.
            </p>

            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
            >
                <button
                    className="px-12 py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xl font-bold rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all flex items-center gap-3"
                >
                    <Zap className="w-6 h-6" />
                    Bắt đầu Demo
                </button>
            </motion.div>
        </div>
    </Section>
);

export default Demo;
