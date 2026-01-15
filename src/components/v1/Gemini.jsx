import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import Section from '../Section';
import ChatBubble from '../ChatBubble';

const Gemini = () => (
    <Section id="slide-5" className="snap-start h-screen bg-slate-50 dark:bg-slate-900 flex items-center">
        <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white">Gemini: Người phản biện</h2>
                <p className="text-slate-600 dark:text-slate-400 font-medium">Nhóm đưa ý tưởng ➔ AI đặt câu hỏi ➔ Tinh chỉnh Logic.</p>
            </div>
            <div className="bg-white dark:bg-slate-950/50 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10">
                    <Zap className="w-32 h-32 text-indigo-600 dark:text-indigo-500" />
                </div>
                <ChatBubble sender="user" text="Tìm quán ăn theo calo người dùng vừa tiêu thụ qua Apple Health." />
                <ChatBubble sender="gemini" text="Tuyệt vời, nhưng nếu người dùng dị ứng hải sản thì sao? Hay nếu họ thích ăn cay nhưng hệ thống chỉ gợi ý món thanh đạm?" delay={0.5} />
                <ChatBubble sender="user" text="Ồ, cần thêm bộ lọc Allergy filter và Taste Profile để cá nhân hóa triệt để!" delay={1} />

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="mt-12 p-5 bg-indigo-500/10 border-t border-indigo-500/30 rounded-2xl text-center"
                >
                    <p className="text-indigo-400 font-bold">✨ Gemini giúp hình thành Match Score phức tạp.</p>
                </motion.div>
            </div>
        </div>
    </Section>
);

export default Gemini;
