import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, MapPin, X, Check, Target } from 'lucide-react';
import Section from '../Section';

const ProblemComparison = ({ type }) => {
    const content = {
        grab: {
            id: "v2-problem-1",
            title: "Grab/Shopee Food vs AI Assistant",
            subtitle: "Vấn đề: Áp lực chọn món & Bestseller tập trung",
            competitor: {
                name: "Delivery Apps",
                icon: ShoppingBag,
                problem: "Chỉ tập trung vào doanh thu, gợi ý món 'hot' thay vì món 'cần'.",
                list: [
                    "Quá nhiều lựa chọn gây mệt mỏi (Decision Fatigue).",
                    "Giao dịch nhanh > Sức khỏe lâu dài.",
                    "Không biết món ăn có phù hợp với mục tiêu calo không."
                ]
            },
            solution: {
                name: "Smart Nutrition Assistant",
                icon: Target,
                fix: "Tối ưu hóa quyết định dựa trên sức khỏe.",
                list: [
                    "Gợi ý ít nhưng trúng đích.",
                    "Match Score dựa trên dữ liệu Apple Health.",
                    "Giải thích tại sao món này tốt cho bạn hôm nay."
                ]
            }
        },
        maps: {
            id: "v2-problem-2",
            title: "Google Maps vs AI Assistant",
            subtitle: "Vấn đề: Tìm kiếm địa điểm đơn thuần",
            competitor: {
                name: "Google Maps",
                icon: MapPin,
                problem: "Công cụ tìm địa điểm chung, thiếu ngữ cảnh sức khỏe.",
                list: [
                    "Kết quả dựa trên Rating và Khoảng cách.",
                    "Người dùng phải tự suy luận hàm lượng dinh dưỡng.",
                    "Dễ rơi vào bẫy quán ăn ngon nhưng 'phạm' chế độ ăn."
                ]
            },
            solution: {
                name: "Smart Nutrition Assistant",
                icon: Target,
                fix: "Biến bản đồ thành trợ lý dinh dưỡng di động.",
                list: [
                    "Tích hợp Google Maps API + LLMs Reasoning.",
                    "Tag sức khỏe (Low-carb, High-protein) hiển thị trực tiếp.",
                    "Gợi ý quán ăn dọc đường đi phù hợp với lịch trình."
                ]
            }
        }
    }[type];

    return (
        <Section id={content.id} className="snap-start h-screen bg-slate-50 dark:bg-slate-900 flex items-center">
            <div className="max-w-6xl mx-auto px-4 w-full">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white uppercase tracking-tight">{content.title}</h2>
                    <p className="text-xl text-indigo-500 font-bold">{content.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    {/* Competitor Sidebar */}
                    <div className="p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <content.competitor.icon className="w-24 h-24" />
                        </div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
                                <X className="text-red-500 w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold">{content.competitor.name}</h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium italic">"{content.competitor.problem}"</p>
                        <ul className="space-y-4">
                            {content.competitor.list.map((item, i) => (
                                <li key={i} className="flex gap-3 text-slate-500 text-sm md:text-base">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solution Sidebar */}
                    <div className="p-8 rounded-3xl bg-indigo-600 text-white shadow-2xl relative overflow-hidden group border-4 border-indigo-400/30">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <content.solution.icon className="w-24 h-24 animate-pulse" />
                        </div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                                <Check className="text-white w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold">{content.solution.name}</h3>
                        </div>
                        <p className="text-indigo-100 mb-6 font-medium italic">"{content.solution.fix}"</p>
                        <ul className="space-y-4">
                            {content.solution.list.map((item, i) => (
                                <li key={i} className="flex gap-3 text-white/90 text-sm md:text-base">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                                    <span className="font-semibold">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default ProblemComparison;
