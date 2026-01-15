import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Search, GitBranch, ListChecks, Clock } from 'lucide-react';
import Section from '../Section';
import MetricBar from '../MetricBar';

const IdeationAI = ({ slide }) => {
    const steps = [
        {
            title: "Phát hiện vấn đề",
            icon: Search,
            desc: "Sử dụng AI để phân tích hàng ngàn feedback từ các App sức khỏe hiện có, tìm ra 'nỗi đau' chung của người dùng.",
            manual: "12h",
            ai: "1h"
        },
        {
            title: "Kiểm tra tính khả thi",
            icon: GitBranch,
            desc: "AI quét các API tài liệu (Google Maps, HealthKit) để xác định xem ý tưởng có thể triển khai kỹ thuật hay không.",
            manual: "16h",
            ai: "2h"
        },
        {
            title: "Kiến trúc Logic Core",
            icon: Lightbulb,
            desc: "Xác định thuật toán Match Score: Làm thế nào để cá nhân hóa dinh dưỡng từ dữ liệu hành vi ngầm.",
            manual: "24h",
            ai: "3h"
        },
        {
            title: "Lập kế hoạch MVP",
            icon: ListChecks,
            desc: "Sàng lọc các tính năng 'Must-have' để ra mắt sản phẩm nhanh nhất, tránh lãng phí tài nguyên.",
            manual: "10h",
            ai: "0.5h"
        }
    ];

    if (slide === 1) {
        return (
            <Section id="v2-ideation-1" className="snap-start h-screen bg-white dark:bg-slate-900 flex items-center">
                <div className="max-w-5xl mx-auto px-4 w-full">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-4">AI-Driven Ideation</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto italic font-medium">
                            "Thay vì họp hành hàng giờ, chúng tôi cộng tác với LLMs để hoàn thành quy trình lên ý tưởng chỉ trong một buổi sáng."
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/50 transition-all text-center relative"
                            >
                                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-4 border border-indigo-500/20">
                                    <step.icon className="w-6 h-6 text-indigo-500" />
                                </div>
                                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm shadow-lg">
                                    {i + 1}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>
        );
    }

    return (
        <Section id="v2-ideation-2" className="snap-start h-screen bg-slate-50 dark:bg-slate-900 flex items-center">
            <div className="max-w-4xl mx-auto px-4 w-full">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 font-bold text-sm mb-4 border border-emerald-500/20">
                        <Clock className="w-4 h-4" /> Hiệu suất tối ưu
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black mb-4">Manual vs AI Workflow</h2>
                    <p className="text-slate-600 dark:text-slate-400">Thời gian thực tế bỏ ra cho giai đoạn lên ý tưởng & tiền khả thi.</p>
                </div>

                <div className="space-y-8 bg-white dark:bg-slate-800/50 p-10 rounded-[40px] border border-slate-200 dark:border-slate-700 shadow-2xl">
                    <MetricBar label="Quy trình Thủ công (Team làm việc độc lập)" value="62 Giờ" percentage={100} color="bg-slate-600" />
                    <MetricBar label="Quy trình cùng Gemini AI (Team + AI Collaboration)" value="6.5 Giờ" percentage={10.5} color="bg-gradient-to-r from-indigo-500 to-emerald-400 shadow-[0_0_20px_rgba(99,102,241,0.5)]" />

                    <div className="mt-12 text-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="inline-block p-8 rounded-[32px] bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-2 border-emerald-500/50 shadow-2xl"
                        >
                            <p className="text-5xl md:text-7xl font-black leading-none mb-2">~10x</p>
                            <p className="font-bold text-sm md:text-lg uppercase tracking-[0.2em]">Tốc độ đột phá</p>
                        </motion.div>
                        <p className="mt-6 text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto italic">
                            "AI không thay thế con người trong ideation, nó giúp hiện thực hóa các giả thuyết của con người một cách thần tốc."
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default IdeationAI;
