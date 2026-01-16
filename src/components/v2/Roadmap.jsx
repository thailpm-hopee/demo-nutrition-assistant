import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Section from '../Section';

const PhaseItem = ({ children, hasCheck = false, delay = 0 }) => (
    <motion.li
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay }}
        viewport={{ once: true }}
        className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
    >
        {hasCheck && (
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </span>
        )}
        {!hasCheck && (
            <span className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-slate-300 dark:border-slate-600" />
        )}
        <span className="text-sm md:text-base">{children}</span>
    </motion.li>
);

const PhaseCard = ({ title, subtitle, children, gradient, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="p-6 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-shadow"
    >
        <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${gradient}`}>
            {title} {subtitle}
        </div>
        <ul className="space-y-3">
            {children}
        </ul>
    </motion.div>
);

const Roadmap = () => (
    <Section id="slide-6" className="snap-start h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/20 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-center mb-12 text-slate-800 dark:text-white"
            >
                Roadmap
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Phase 1 */}
                <PhaseCard
                    title="PHASE 1"
                    subtitle="MVP"
                    gradient="bg-emerald-500 text-white"
                    delay={0}
                >
                    <PhaseItem hasCheck delay={0.1}>Discovery</PhaseItem>
                    <PhaseItem hasCheck delay={0.15}>Food Scanner</PhaseItem>
                    <PhaseItem hasCheck delay={0.2}>Nhập calo thủ công</PhaseItem>
                    <PhaseItem delay={0.25}>Tích hợp Google Maps</PhaseItem>
                </PhaseCard>

                {/* Phase 2 */}
                <PhaseCard
                    title="PHASE 2"
                    subtitle="Advanced AI"
                    gradient="bg-indigo-500 text-white"
                    delay={0.2}
                >
                    <PhaseItem delay={0.3}>Đồng bộ Health App</PhaseItem>
                    <PhaseItem delay={0.35}>AI Học khẩu vị/hành vi cơ bản</PhaseItem>
                    <PhaseItem delay={0.4}>OCR Menu</PhaseItem>
                </PhaseCard>

                {/* Phase 3 */}
                <PhaseCard
                    title="PHASE 3"
                    subtitle="Business"
                    gradient="bg-amber-500 text-white"
                    delay={0.4}
                >
                    <PhaseItem delay={0.55}>Hệ thống dành cho đối tác nhà hàng</PhaseItem>
                    <PhaseItem delay={0.6}>Gói Premium cho PT/Cá nhân</PhaseItem>
                </PhaseCard>
            </div>
        </div>
    </Section>
);

export default Roadmap;
