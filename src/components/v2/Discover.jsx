import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';

// Placeholder imports - replace these with actual images
// import placeholder_discover_1 from '../../assets/placeholder_discover_1.png';
// import placeholder_discover_2 from '../../assets/placeholder_discover_2.png';
// import placeholder_discover_3 from '../../assets/placeholder_discover_3.png';

const PhoneMockup = ({ index, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="relative"
    >
        <div
            className="relative bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden border-4 border-slate-300 dark:border-slate-600"
            style={{
                width: '200px',
                height: '432px', // Maintains 1242:2688 ratio (0.462)
            }}
        >
            {/* Phone notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-slate-900 dark:bg-slate-950 rounded-full z-10" />

            {/* Placeholder content */}
            <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-400/30 dark:bg-slate-600/30 flex items-center justify-center">
                        <span className="text-2xl text-slate-500 dark:text-slate-400">🍽️</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        placeholder_discover_{index}.png
                    </p>
                </div>
            </div>
        </div>
    </motion.div>
);

const Discover = () => (
    <Section id="slide-5" className="snap-start h-screen bg-gradient-to-b from-white to-orange-50/50 dark:from-slate-900 dark:to-orange-950/20 flex items-center justify-center">
        <div className="text-center max-w-6xl mx-auto px-4">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-black mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400"
            >
                DISCOVER
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                <PhoneMockup index={1} delay={0} />
                <PhoneMockup index={2} delay={0.15} />
                <PhoneMockup index={3} delay={0.3} />
            </div>
        </div>
    </Section>
);

export default Discover;
