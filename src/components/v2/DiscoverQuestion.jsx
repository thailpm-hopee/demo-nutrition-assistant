import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';

const DiscoverQuestion = () => (
    <Section id="slide-4" className="snap-start h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-slate-900 dark:via-slate-900 dark:to-orange-950/20 flex items-center justify-center">
        <div className="text-center max-w-5xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-800 dark:text-white leading-tight">
                    Hôm nay
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-600 dark:from-orange-400 dark:to-amber-400">
                        ăn gì?
                    </span>
                </h2>
            </motion.div>
        </div>
    </Section>
);

export default DiscoverQuestion;
