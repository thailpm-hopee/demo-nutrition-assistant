import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section';

// Placeholder imports - replace these with actual images
import food_scanner_1 from '../../assets/IMG_0069.png';
import food_scanner_2 from '../../assets/IMG_0070.png';
import food_scanner_3 from '../../assets/IMG_0071.png';

const PhoneMockup = ({ imageSrc, index, delay = 0 }) => (
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
                width: '340px',
                height: '760px', // Maintains 1242:2688 ratio (0.462)
            }}
        >
            {/* Phone notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-slate-900 dark:bg-slate-950 rounded-full z-10" />

            {/* Image content */}
            <div className="w-full bg-white h-full">
                <img
                    src={imageSrc}
                    alt={`Food Scanner ${index}`}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    </motion.div>
);

const FoodScanner = () => (
    <Section id="slide-3" className="snap-start h-screen bg-gradient-to-b from-white to-emerald-50/50 dark:from-slate-900 dark:to-emerald-950/20 flex items-center justify-center">
        <div className="text-center max-w-6xl mx-auto px-4">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-black mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400"
            >
                FOOD SCANNER
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                <PhoneMockup imageSrc={food_scanner_1} index={1} delay={0} />
                <PhoneMockup imageSrc={food_scanner_2} index={2} delay={0.15} />
                <PhoneMockup imageSrc={food_scanner_3} index={3} delay={0.3} />
            </div>
        </div>
    </Section>
);

export default FoodScanner;
