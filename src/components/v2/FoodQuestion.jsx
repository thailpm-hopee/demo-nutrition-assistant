import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';

const FoodQuestion = () => (
    <Section id="slide-2" className="snap-start h-screen bg-gradient-to-br from-emerald-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-950/20 flex items-center justify-center">
        <div className="text-center max-w-5xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-800 dark:text-white leading-tight">
                    Ăn như thế nào là đủ
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-400">
                        để có cơ thể khoẻ mạnh?
                    </span>
                </h2>
            </motion.div>
        </div>
    </Section>
);

export default FoodQuestion;
