import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import Section from '../Section';

const Protection = () => (
    <Section id="slide-7" className="snap-start h-screen bg-indigo-50/50 dark:bg-indigo-950/20">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl inline-block mb-6">
                    <ShieldCheck className="w-12 h-12 text-red-500" />
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-slate-900 dark:text-white">Cơ chế Bảo vệ</h2>
                <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    "Sự an toàn là bắt buộc. Hệ thống yêu cầu 3 thông tin vàng ngay khi khởi tạo."
                </p>
            </div>
            <div className="md:w-1/2 space-y-4 w-full">
                {[
                    { label: "Mục tiêu", value: "Giảm cân | Duy trì | Tăng cơ", color: "indigo" },
                    { label: "Dị ứng nghiêm trọng", value: "Hải sản, Đậu phộng, Sữa... ➔ Lọc CỨNG", color: "red" },
                    { label: "Khẩu vị nền", value: "Thanh đạm | Đậm đà | Cay nồng", color: "emerald" }
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ x: 10 }}
                        className={`p-6 bg-white dark:bg-slate-800 border-l-8 border-${item.color}-500 rounded-2xl shadow-lg border-y border-r border-slate-100 dark:border-none`}
                    >
                        <p className={`text-${item.color}-600 dark:text-${item.color}-400 font-bold text-sm uppercase mb-1`}>{item.label}</p>
                        <p className="text-lg font-medium text-slate-800 dark:text-white">{item.value}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </Section>
);

export default Protection;
