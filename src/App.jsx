import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Zap,
    MapPin,
    Target,
    ShieldCheck,
    Eye,
    BarChart3,
    Users,
    Rocket,
    MessageSquare,
    Cpu,
    AlertCircle,
    ChevronDown,
    ChevronUp,
    Heart,
    Sun,
    Moon
} from 'lucide-react';

const Section = ({ children, id, className = "" }) => (
    <section id={id} className={`slide-section ${className}`}>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-6xl w-full"
        >
            {children}
        </motion.div>
    </section>
);

const ChatBubble = ({ sender, text, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, x: sender === 'gemini' ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.5 }}
        className={`flex ${sender === 'gemini' ? 'justify-start' : 'justify-end'} mb-4`}
    >
        <div className={`p-4 rounded-2xl max-w-[80%] ${sender === 'gemini'
            ? 'bg-slate-100 dark:bg-slate-800 border-l-4 border-indigo-500 text-slate-800 dark:text-slate-200 shadow-sm'
            : 'bg-indigo-600 text-white shadow-lg'
            }`}>
            <p className="text-xs font-bold mb-1 opacity-60 uppercase tracking-wider">
                {sender === 'gemini' ? 'Gemini AI' : 'User'}
            </p>
            <p className="text-sm md:text-base">{text}</p>
        </div>
    </motion.div>
);

const MetricBar = ({ label, value, color, percentage }) => (
    <div className="mb-3 md:mb-4">
        <div className="flex justify-between mb-1">
            <span className="text-sm md:text-base font-semibold">{label}</span>
            <span className="text-sm md:text-base font-bold text-indigo-400">{value}</span>
        </div>
        <div className="bar-container h-4 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div
                className={`h-full ${color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />
        </div>
    </div>
);

function App() {
    const [activeSegment, setActiveSegment] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const slides = [
        { title: "Hero", icon: Rocket },
        // { title: "Team", icon: Users },
        { title: "Bối cảnh", icon: AlertCircle },
        { title: "Ý tưởng", icon: Zap },
        { title: "So sánh", icon: BarChart3 },
        { title: "Gemini", icon: MessageSquare },
        { title: "Claude AI", icon: Cpu },
        { title: "Bảo vệ", icon: ShieldCheck },
        { title: "Invisible AI", icon: Eye },
        { title: "Metrics", icon: BarChart3 },
        { title: "Demo", icon: Target },
    ];

    useEffect(() => {
        const container = document.querySelector('.scroll-container');
        const handleScroll = () => {
            const index = Math.round(container.scrollTop / window.innerHeight);
            setActiveSegment(index);
        };
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-500/30 transition-colors duration-300`}>
            {/* Theme Toggle */}
            <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="fixed top-6 right-6 z-[60] p-3 rounded-2xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-xl hover:scale-110 active:scale-95 transition-all border border-slate-200 dark:border-slate-700"
                aria-label="Toggle Theme"
            >
                {isDarkMode ? <Sun className="w-5 h-5 transition-transform hover:rotate-45" /> : <Moon className="w-5 h-5 transition-transform hover:-rotate-12" />}
            </button>

            {/* Navigation Dots */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
                {slides.map((s, i) => (
                    <div key={i} className="group relative flex items-center justify-end">
                        <span className="absolute right-8 px-2 py-1 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-xs rounded border border-slate-200 dark:border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
                            {s.title}
                        </span>
                        <a
                            href={`#slide-${i + 1}`}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSegment === i ? 'bg-indigo-500 scale-125' : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                                }`}
                        />
                    </div>
                ))}
            </div>

            <main className="scroll-container h-screen overflow-y-auto snap-y snap-mandatory">
                {/* SLIDE 1: MEET OUR TEAM */}
                {/* <Section id="slide-1" className="snap-start min-h-screen bg-slate-900 flex items-center py-20">
                    <div className="w-full">
                        <div className="text-center mb-12 px-4">
                            <h2 className="text-3xl md:text-5xl font-black mb-4">Meet Our Team</h2>
                            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed italic max-w-3xl mx-auto">
                                "Chúng tôi không code bằng tay tất cả, chúng tôi dẫn dắt AI để tạo ra giá trị nhanh nhất."
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 px-4 max-w-7xl mx-auto">
                            {[
                                { name: "Nguyễn Phan Thiên Phong", role: "Trưởng nhóm", desc: "Quản lý tiến độ và hỗ trợ các bạn hoàn thiện dự án." },
                                { name: "Nguyễn Ngọc Quý", role: "UI Design (FE)", desc: "Thiết kế giao diện người dùng và tối ưu UX." },
                                { name: "Hoàng Hà Vy", role: "Claude Developer", desc: "Sử dụng Claude Code tạo app (Mobile, BE)." },
                                { name: "Trần Lê Thanh Tuyền", role: "Idea & Feedback", desc: "Cung cấp ý tưởng và phản biện tối ưu hóa." },
                                { name: "Lê Nguyễn", role: "Idea & Feedback", desc: "Cung cấp ý tưởng và phản biện tối ưu hóa." },
                                { name: "Lê Phan Minh Thái", role: "Idea & Feedback", desc: "Cung cấp ý tưởng và phản biện tối ưu hóa." },
                                { name: "Hồ Hòa Hải", role: "Idea & Feedback", desc: "Cung cấp ý tưởng và phản biện tối ưu hóa." },
                                { name: "Đinh Hải Dương", role: "Idea & Feedback", desc: "Cung cấp ý tưởng và phản biện tối ưu hóa." },
                                { name: "Nguyễn Quang Lâm", role: "Idea & Feedback", desc: "Cung cấp ý tưởng và phản biện tối ưu hóa." },
                                { name: "Châu Văn Tân", role: "Idea & Feedback", desc: "Cung cấp ý tưởng và phản biện tối ưu hóa." }
                            ].map((member, idx) => (
                                <div key={idx} className="group p-4 md:p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50 hover:bg-slate-800/80 transition-all text-center">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-700 rounded-2xl mx-auto mb-4 flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                                        <Users className="w-6 h-6 md:w-8 md:h-8 text-slate-500" />
                                    </div>
                                    <h4 className="text-sm md:text-base font-bold mb-1 line-clamp-2 h-10 md:h-12 flex items-center justify-center">{member.name}</h4>
                                    <p className="text-indigo-400 font-black text-[8px] md:text-[10px] uppercase mb-2 tracking-widest">{member.role}</p>
                                    <p className="text-slate-400 text-[10px] md:text-xs leading-relaxed line-clamp-3">{member.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section> */}

                {/* SLIDE 1: HERO */}
                <Section id="slide-1" className="bg-gradient-to-br from-slate-50 via-white to-indigo-100/30 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/30 snap-start h-screen">
                    <div className="text-center px-4">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="inline-block p-4 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 mb-8"
                        >
                            <Rocket className="w-12 h-12 text-indigo-400" />
                        </motion.div>
                        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-emerald-600 dark:from-indigo-400 dark:to-emerald-400 leading-tight">
                            Smart Nutrition Assistant
                        </h1>
                        <p className="text-xl md:text-3xl font-medium text-slate-700 dark:text-slate-300 mb-12 max-w-3xl mx-auto">
                            Trợ lý dinh dưỡng cá nhân hóa – <span className="text-indigo-600 dark:text-indigo-400">Thấu hiểu không cần hỏi.</span>
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto text-left">
                            <div className="p-5 md:p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 hover:border-indigo-500/50 transition-all group shadow-sm hover:shadow-md">
                                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-indigo-500/20 transition-colors">
                                    <Target className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-slate-800 dark:text-white">Vị thế</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">Tiên phong kỷ nguyên AI-Agent trong chăm sóc sức khỏe.</p>
                            </div>
                            <div className="p-5 md:p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 hover:border-secondary/50 transition-all group shadow-sm hover:shadow-md">
                                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-secondary/20 transition-colors">
                                    <Cpu className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-slate-800 dark:text-white">Cốt lõi</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">Tương tác nhỏ + Google Maps API + LLMs Reasoning.</p>
                            </div>
                            <div className="p-5 md:p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 hover:border-indigo-500/50 transition-all group shadow-sm hover:shadow-md">
                                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-indigo-500/20 transition-colors">
                                    <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-slate-800 dark:text-white">Thông điệp</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">"Ăn đúng những gì cơ thể cần, tại nơi bạn đang đứng."</p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* SLIDE 2: BỐI CẢNH */}
                <Section id="slide-2" className="snap-start h-screen bg-white dark:bg-slate-900 flex items-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl md:text-5xl font-black mb-8 flex items-center gap-4">
                            <AlertCircle className="w-10 h-10 md:w-12 md:h-12 text-red-400" />
                            Khi "Ăn khỏe" là thử thách
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 italic mb-10 border-l-4 border-indigo-500 pl-6 leading-relaxed">
                            "Thực tế cho thấy phần lớn dân văn phòng đang đối mặt với tình trạng ăn uống thiếu khoa học, kéo theo nhiều rủi ro sức khỏe lâu dài. Ứng dụng trợ lý ăn uống ra đời để đồng hành trong xu hướng ăn sạch <sup className="text-emerald-500 dark:text-emerald-400 font-bold">[3]</sup> và cá nhân hóa dinh dưỡng."
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                            <div className="space-y-6">
                                <div className="p-6 md:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-transparent border-t-4 border-t-indigo-500 shadow-xl">
                                    <div className="text-4xl md:text-5xl font-black text-indigo-500 dark:text-indigo-400 mb-1">55%</div>
                                    <p className="text-slate-700 dark:text-slate-300 font-medium text-sm md:text-base">Dân văn phòng muốn ăn healthy <sup className="text-indigo-500 dark:text-indigo-400 font-bold">[2]</sup></p>
                                    <p className="text-slate-500 dark:text-slate-500 text-xs md:text-sm">Nỗ lực cải thiện sức khỏe mỗi ngày.</p>
                                </div>
                                <div className="p-6 md:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-transparent border-t-4 border-t-red-500 shadow-xl">
                                    <div className="text-4xl md:text-5xl font-black text-red-600 dark:text-red-500 mb-1">10%</div>
                                    <p className="text-slate-700 dark:text-slate-300 font-medium text-sm md:text-base">Duy trì được quá 1 tháng <sup className="text-red-600 dark:text-red-500 font-bold">[1]</sup></p>
                                    <p className="text-slate-500 dark:text-slate-500 text-xs md:text-sm">Đứt quãng do thiếu công cụ hỗ trợ.</p>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-8 pt-10">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center shrink-0">
                                        <span className="text-red-400 font-bold text-xl">!</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1 text-slate-800 dark:text-white">Manual Fatigue</h4>
                                        <p className="text-slate-600 dark:text-slate-400">80% bỏ App vì mệt mỏi khi phải nhập Calo thủ công.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center shrink-0">
                                        <span className="text-red-500 dark:text-red-400 font-bold text-xl">!</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1 text-slate-800 dark:text-white">Decision Paralysis</h4>
                                        <p className="text-slate-600 dark:text-slate-400">Mất 20 phút mỗi trưa chỉ để phân vân chọn món.</p>
                                    </div>
                                </div>

                                {/* References moved here */}
                                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/50 flex flex-col gap-y-3 text-sm text-slate-500 dark:text-slate-500">
                                    <div className="flex gap-2 items-center">
                                        <span className="font-bold text-slate-500 dark:text-slate-600 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-xs">[1]</span>
                                        <a href="https://www.statista.com/statistics/259341/retention-rate-of-mobile-apps-worldwide-by-category/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors underline decoration-slate-200 dark:decoration-slate-800 underline-offset-4 line-clamp-1 italic">Statista: Mobile App Retention Rate</a>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <span className="font-bold text-slate-500 dark:text-slate-600 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-xs">[2]</span>
                                        <a href="https://behapyhealthy.com/xu-huong-an-uong-healthy-2025-vi-sao-gioi-tre-viet-dang-do-xo-theo-duoi/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors underline decoration-slate-200 dark:decoration-slate-800 underline-offset-4 line-clamp-1 italic">Behapy: Vì sao giới trẻ Việt đổ xô theo đuổi ăn uống Healthy</a>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <span className="font-bold text-slate-500 dark:text-slate-600 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-xs">[3]</span>
                                        <a href="https://odffood.com/xu-huong-an-sach-2025-cua-nguoi-viet-nam-len-ngoi/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors underline decoration-slate-200 dark:decoration-slate-800 underline-offset-4 line-clamp-1 italic">ODFFood: Xu hướng ăn sạch 2025 của người Việt</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </Section>

                {/* SLIDE 3: Ý TƯỞNG */}
                <Section id="slide-3" className="snap-start h-screen">
                    <div className="relative max-w-5xl mx-auto px-4">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px]" />
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-400 text-sm font-bold mb-6 tracking-wider uppercase">
                                    The Spark
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-slate-900 dark:text-white">Khởi nguồn từ một câu hỏi</h2>
                                <div className="p-8 bg-white dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-3xl relative shadow-xl">
                                    <MessageSquare className="absolute -top-4 -left-4 w-10 h-10 text-indigo-500 bg-white dark:bg-slate-900 rounded-lg p-2 shadow-lg border border-slate-100 dark:border-slate-800" />
                                    <p className="text-2xl text-slate-800 dark:text-slate-200 italic leading-relaxed">
                                        "Hôm nay ăn gì?"
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="p-6 bg-white dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm">
                                    <h4 className="text-indigo-600 dark:text-indigo-400 font-bold mb-2 flex items-center gap-2">
                                        <MapPin className="w-5 h-5" /> Vị trí + Calo
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400">Ý tưởng sơ khai về một công cụ tìm kiếm quán ăn thông minh.</p>
                                </div>
                                <div className="p-6 bg-white dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm">
                                    <h4 className="text-red-500 dark:text-red-400 font-bold mb-2 flex items-center gap-2">
                                        <Zap className="w-5 h-5" /> Thách thức
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400">Làm sao để biến tìm kiếm thành một "Trợ lý thực thụ"?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* SLIDE 4: SO SÁNH GIẢI PHÁP */}
                <Section id="slide-4" className="snap-start h-screen bg-slate-50 dark:bg-slate-900 flex items-center">
                    <div className="max-w-6xl mx-auto px-4 w-full">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white">Tại sao cần giải pháp mới?</h2>
                            <p className="text-slate-600 dark:text-slate-400 font-medium">So sánh Smart Nutrition Assistant với các ứng dụng hiện nay.</p>
                        </div>

                        <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-950/50 backdrop-blur-sm">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-100 dark:bg-slate-800/50">
                                        <th className="p-4 md:p-6 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">Tiêu chí lựa chọn</th>
                                        <th className="p-4 md:p-6 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">App truyền thống<br />(Grab, ShopeeFood)</th>
                                        <th className="p-4 md:p-6 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">Google Maps</th>
                                        <th className="p-4 md:p-6 text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-800 bg-indigo-500/5">Smart Nutrition Assistant</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm md:text-base">
                                    <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="p-4 md:p-6 font-bold text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800/50">Mục tiêu chính</td>
                                        <td className="p-4 md:p-6 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800/50">Tối ưu <b>bán hàng & giao dịch</b></td>
                                        <td className="p-4 md:p-6 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800/50">Tối ưu <b>tìm kiếm địa điểm</b></td>
                                        <td className="p-4 md:p-6 font-medium text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800/50 bg-indigo-500/5">Tối ưu <b>quyết định ăn uống</b> phù hợp sức khỏe cá nhân</td>
                                    </tr>
                                    <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="p-4 md:p-6 font-bold text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800/50">Cách gợi ý</td>
                                        <td className="p-4 md:p-6 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800/50">Bestseller, quảng cáo, lịch sử đặt</td>
                                        <td className="p-4 md:p-6 text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800/50">Rating, khoảng cách, từ khóa</td>
                                        <td className="p-4 md:p-6 font-medium text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800/50 bg-indigo-500/5"><b>Match Score</b> + vị trí + ngữ cảnh</td>
                                    </tr>
                                    <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="p-4 md:p-6 font-bold text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800/50">Cá nhân hóa sức khỏe</td>
                                        <td className="p-4 md:p-6 text-red-500 border-b border-slate-100 dark:border-slate-800/50">❌ Không</td>
                                        <td className="p-4 md:p-6 text-red-500 border-b border-slate-100 dark:border-slate-800/50">❌ Không</td>
                                        <td className="p-4 md:p-6 font-medium text-emerald-500 border-b border-slate-100 dark:border-slate-800/50 bg-indigo-500/5">✅ Có (mục tiêu, calo, dị ứng, khẩu vị)</td>
                                    </tr>
                                    <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="p-4 md:p-6 font-bold text-slate-700 dark:text-slate-300">Decision support</td>
                                        <td className="p-4 md:p-6 text-slate-500 border-b border-slate-100 dark:border-slate-800/50">❌ Danh sách dài → mệt mỏi</td>
                                        <td className="p-4 md:p-6 text-slate-500 border-b border-slate-100 dark:border-slate-800/50">❌ Người dùng tự suy luận</td>
                                        <td className="p-4 md:p-6 font-medium text-emerald-500 bg-indigo-500/5">✅ Gợi ý ít – đúng – có giải thích</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Section>

                {/* SLIDE 5: GEMINI */}
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

                {/* SLIDE 6: CLAUDE AI */}
                <Section id="slide-6" className="snap-start min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center px-4 max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">Claude AI: Triển khai</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">Hiện thực hóa ý tưởng thành giải pháp kỹ thuật toàn diện.</p>

                            <div className="space-y-6">
                                <div className="flex gap-4 p-4 bg-white dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm">
                                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20">
                                        <Eye className="text-indigo-600 dark:text-indigo-400 w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 dark:text-white">Thiết kế hệ thống</h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">Wireframe UI & Schema PostgreSQL tối ưu.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 bg-white dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                        <Cpu className="text-emerald-600 dark:text-emerald-400 w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 dark:text-white">Full-stack Development</h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">React Native Mobile, NestJS API & Google Maps.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-indigo-500/10 blur-[80px] -z-10" />
                            <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-3xl border border-slate-800 dark:border-slate-700 font-mono text-[10px] md:text-xs overflow-hidden shadow-2xl">
                                <div className="flex items-center gap-2 mb-4 border-b border-slate-800 dark:border-slate-800 pb-3">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                    </div>
                                    <span className="text-slate-500 dark:text-slate-600 text-[10px] ml-2 font-sans italic">// Claude thực thi logic tinh vi</span>
                                </div>
                                <pre className="text-indigo-300/90 leading-relaxed">
                                    {`interface UserProfile {
  goal: 'LOSE' | 'MAINTAIN' | 'GAIN';
  allergens: Allergen[];
  tasteProfile: TastePreferences;
}

const calculateMatch = (user, dish) => {
  if (dish.contains(user.allergens)) return 0;
  return baseScore * user.tasteProfileFactor;
}`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* SLIDE 7: BẢO VỆ */}
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
                                { label: "Mục tiêu", value: "Giảm cân | Duy trì | Tăng cơ", color: "indigo", lightColor: "indigo-600", darkColor: "indigo-500" },
                                { label: "Dị ứng nghiêm trọng", value: "Hải sản, Đậu phộng, Sữa... ➔ Lọc CỨNG", color: "red", lightColor: "red-600", darkColor: "red-500" },
                                { label: "Khẩu vị nền", value: "Thanh đạm | Đậm đà | Cay nồng", color: "emerald", lightColor: "emerald-600", darkColor: "emerald-500" }
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

                {/* SLIDE 8: INVISIBLE AI */}
                <Section id="slide-8" className="snap-start h-screen bg-white dark:bg-slate-900 flex items-center">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="text-4xl md:text-6xl font-black mb-4 text-slate-900 dark:text-white">Invisible AI</h2>
                            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light tracking-wide">Khi những hành động nhỏ trở thành ngôn ngữ để AI thấu hiểu bạn sâu sắc hơn.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="group p-6 md:p-8 bg-slate-50 dark:bg-slate-800/30 rounded-[32px] md:rounded-[40px] border border-slate-200 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800/50 transition-all text-center shadow-sm hover:shadow-xl">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 border border-indigo-500/20">
                                    <Eye className="w-6 h-6 md:w-8 md:h-8 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-slate-800 dark:text-white">Học hành vi ngầm</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">Nếu User liên tục lướt qua nhanh các món dầu mỡ, AI tự động trừ Match Score cho các quán Fastfood trong tương lai.</p>
                            </div>
                            <div className="group p-6 md:p-8 bg-slate-50 dark:bg-slate-800/30 rounded-[32px] md:rounded-[40px] border border-slate-200 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800/50 transition-all text-center shadow-sm hover:shadow-xl">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 border border-emerald-500/20">
                                    <BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-slate-800 dark:text-white">Match Score Dynamic</h4>
                                <div className="text-4xl md:text-5xl font-black text-emerald-600 dark:text-emerald-400 mb-4 md:mb-6 group-hover:scale-110 transition-transform inline-block">0 - 100%</div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">Điểm tương thích hiển thị kèm các tag giúp User quyết định nhanh chóng.</p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* SLIDE 9: METRICS */}
                <Section id="slide-9" className="snap-start min-h-screen py-6 md:py-10 flex items-center justify-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-6 md:mb-8">
                            <h2 className="text-2xl md:text-4xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-emerald-600 dark:from-indigo-400 dark:to-emerald-400">Sức mạnh AI-Driven</h2>
                            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">Hiệu suất phi thường: Tiết kiệm thời gian thực thi.</p>
                        </div>
                        <div className="space-y-3 md:space-y-4 bg-white dark:bg-slate-800/40 p-4 md:p-6 rounded-[24px] border border-slate-200 dark:border-slate-700/50 backdrop-blur-md shadow-xl">
                            <MetricBar label="Quy trình truyền thống" value="160 Giờ" percentage={100} color="bg-slate-600" />
                            <MetricBar label="Phát triển cùng AI Agent" value="64 Giờ" percentage={40} color="bg-gradient-to-r from-indigo-500 to-emerald-400 shadow-[0_0_20px_rgba(99,102,241,0.5)]" />

                            <div className="mt-6 md:mt-8 text-center">
                                <motion.div
                                    initial={{ scale: 0.9 }}
                                    whileInView={{ scale: 1 }}
                                    className="inline-block p-4 md:p-6 rounded-[24px] md:rounded-[32px] bg-white dark:bg-slate-900 border-2 border-indigo-500/50 shadow-inner"
                                >
                                    <p className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-none">60%</p>
                                    <p className="text-indigo-600 dark:text-indigo-400 font-bold text-base md:text-lg uppercase tracking-tighter mt-1">Thời gian được tối ưu</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </Section>


                {/* SLIDE 10: DEMO */}
                <Section id="slide-10" className="snap-start h-screen bg-gradient-to-t from-indigo-50 dark:from-indigo-900/40 to-white dark:to-slate-900 flex items-center justify-center">
                    <div className="text-center max-w-5xl mx-auto px-4">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1, rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 0.8, ease: "backOut" }}
                            className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-full mx-auto mb-8 flex items-center justify-center shadow-[0_0_60px_rgba(99,102,241,0.6)]"
                        >
                            <Rocket className="w-16 h-16 text-white" />
                        </motion.div>

                        <h2 className="text-6xl md:text-8xl font-black mb-6 text-slate-900 dark:text-white tracking-tighter">
                            DEMO
                        </h2>

                        <p className="text-2xl md:text-4xl text-slate-600 dark:text-slate-300 font-medium mb-12">
                            Trải nghiệm <span className="text-indigo-600 dark:text-indigo-400 font-bold">Smart Nutrition Assistant</span> ngay bây giờ.
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <button
                                className="px-12 py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xl font-bold rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all flex items-center gap-3"
                            >
                                <Zap className="w-6 h-6" />
                                Bắt đầu Demo
                            </button>
                        </motion.div>
                    </div>
                </Section>
            </main>
        </div>
    );
}

export default App;
