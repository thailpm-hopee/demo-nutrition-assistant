import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Layers, Palette, MonitorPlay } from 'lucide-react';
import Section from '../Section';

const DesignProcess = () => {
    const steps = [
        {
            title: "User Flow Mapping",
            icon: Layers,
            desc: "Xây dựng luồng trải nghiệm người dùng từ lúc mở app đến khi chọn được món ăn.",
            color: "blue"
        },
        {
            title: "AI Wireframing",
            icon: PenTool,
            desc: "Dùng các công cụ AI để phác thảo nhanh cấu trúc các màn hình chính.",
            color: "indigo"
        },
        {
            title: "Visual Identity",
            icon: Palette,
            desc: "Thiết kế bảng màu (Vibrant/Dark mode) và Typography hiện đại, cao cấp.",
            color: "emerald"
        },
        {
            title: "Hi-Fi Prototyping",
            icon: MonitorPlay,
            desc: "Hoàn thiện bản mẫu có tính tương tác cao để kiểm thử tính khả dụng.",
            color: "purple"
        }
    ];

    return (
        <Section id="v2-design" className="snap-start h-screen bg-white dark:bg-slate-900 flex items-center">
            <div className="max-w-6xl mx-auto px-4 w-full">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">Quy trình Thiết kế UI/UX</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Kiến tạo giao diện "Premium & Vibrant" dựa trên nền tảng logic đã được AI hỗ trợ.</p>
                </div>

                <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800 -translate-y-1/2 hidden md:block" />

                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.2 }}
                                className="relative bg-white dark:bg-slate-800 p-8 rounded-[32px] border border-slate-100 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all group"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-${step.color}-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <step.icon className={`w-8 h-8 text-${step.color}-500`} />
                                </div>
                                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>

                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                    Step {i + 1}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default DesignProcess;
