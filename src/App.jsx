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
    Heart
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
            ? 'bg-slate-800 border-l-4 border-indigo-500 text-slate-200'
            : 'bg-indigo-600 text-white'
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
        <div className="bar-container h-4 bg-slate-800 rounded-full overflow-hidden">
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

    const slides = [
        { title: "Hero", icon: Rocket },
        // { title: "Team", icon: Users },
        { title: "Bối cảnh", icon: AlertCircle },
        { title: "Ý tưởng", icon: Zap },
        { title: "Gemini", icon: MessageSquare },
        { title: "Claude AI", icon: Cpu },
        { title: "Bảo vệ", icon: ShieldCheck },
        { title: "Invisible AI", icon: Eye },
        { title: "Metrics", icon: BarChart3 },
        { title: "Kết luận", icon: Target },
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
        <div className="bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500/30">
            {/* Navigation Dots */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
                {slides.map((s, i) => (
                    <div key={i} className="group relative flex items-center justify-end">
                        <span className="absolute right-8 px-2 py-1 bg-slate-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            {s.title}
                        </span>
                        <a
                            href={`#slide-${i + 1}`}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSegment === i ? 'bg-indigo-500 scale-125' : 'bg-slate-700 hover:bg-slate-600'
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
                <Section id="slide-1" className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/30 snap-start h-screen">
                    <div className="text-center px-4">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="inline-block p-4 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 mb-8"
                        >
                            <Rocket className="w-12 h-12 text-indigo-400" />
                        </motion.div>
                        <h1 className="text-4xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-emerald-400 leading-tight">
                            Smart Nutrition Assistant
                        </h1>
                        <p className="text-xl md:text-3xl font-medium text-slate-300 mb-12 max-w-3xl mx-auto">
                            Trợ lý dinh dưỡng cá nhân hóa – <span className="text-indigo-400">Thấu hiểu không cần hỏi.</span>
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto text-left">
                            <div className="p-5 md:p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-indigo-500/50 transition-all group">
                                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-indigo-500/20 transition-colors">
                                    <Target className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-white">Vị thế</h3>
                                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">Tiên phong kỷ nguyên AI-Agent trong chăm sóc sức khỏe.</p>
                            </div>
                            <div className="p-5 md:p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-secondary/50 transition-all group">
                                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-secondary/20 transition-colors">
                                    <Cpu className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-white">Cốt lõi</h3>
                                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">Dữ liệu Wearables + Google Maps API + LLMs Reasoning.</p>
                            </div>
                            <div className="p-5 md:p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-indigo-500/50 transition-all group">
                                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-indigo-500/20 transition-colors">
                                    <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-white">Thông điệp</h3>
                                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">"Ăn đúng những gì cơ thể cần, tại nơi bạn đang đứng."</p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* SLIDE 2: BỐI CẢNH */}
                <Section id="slide-2" className="snap-start h-screen bg-slate-900 flex items-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl md:text-5xl font-black mb-8 flex items-center gap-4">
                            <AlertCircle className="w-10 h-10 md:w-12 md:h-12 text-red-400" />
                            Khi "Ăn khỏe" là thử thách
                        </h2>
                        <p className="text-xl text-slate-300 italic mb-10 border-l-4 border-indigo-500 pl-6 leading-relaxed">
                            "Thực tế cho thấy phần lớn dân văn phòng đang đối mặt với tình trạng ăn uống thiếu khoa học, kéo theo nhiều rủi ro sức khỏe lâu dài. Ứng dụng trợ lý ăn uống ra đời để đồng hành, nhắc nhở và cá nhân hóa chế độ dinh dưỡng cho từng người."
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                            <div className="space-y-6">
                                <div className="p-6 md:p-8 rounded-3xl bg-slate-800/50 border-t-4 border-indigo-500 shadow-xl">
                                    <div className="text-4xl md:text-5xl font-black text-indigo-400 mb-1">55%</div>
                                    <p className="text-slate-300 font-medium text-sm md:text-base">Dân văn phòng muốn ăn healthy</p>
                                    <p className="text-slate-500 text-xs md:text-sm">Nỗ lực cải thiện sức khỏe mỗi ngày.</p>
                                </div>
                                <div className="p-6 md:p-8 rounded-3xl bg-slate-800/50 border-t-4 border-red-500 shadow-xl">
                                    <div className="text-4xl md:text-5xl font-black text-red-500 mb-1">10%</div>
                                    <p className="text-slate-300 font-medium text-sm md:text-base">Duy trì được quá 1 tháng</p>
                                    <p className="text-slate-500 text-xs md:text-sm">Đứt quãng do thiếu công cụ hỗ trợ.</p>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-8 pt-10">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center shrink-0">
                                        <span className="text-red-400 font-bold text-xl">!</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">Manual Fatigue</h4>
                                        <p className="text-slate-400">80% bỏ App vì mệt mỏi khi phải nhập Calo thủ công.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center shrink-0">
                                        <span className="text-red-400 font-bold text-xl">!</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">Decision Paralysis</h4>
                                        <p className="text-slate-400">Mất 20 phút mỗi trưa chỉ để phân vân chọn món.</p>
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
                                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Khởi nguồn từ một câu hỏi</h2>
                                <div className="p-8 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-3xl relative">
                                    <MessageSquare className="absolute -top-4 -left-4 w-10 h-10 text-indigo-500 bg-slate-900 rounded-lg p-2" />
                                    <p className="text-2xl text-slate-200 italic leading-relaxed">
                                        "Hôm nay ăn gì?"
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50">
                                    <h4 className="text-indigo-400 font-bold mb-2 flex items-center gap-2">
                                        <MapPin className="w-5 h-5" /> Vị trí + Calo
                                    </h4>
                                    <p className="text-slate-400">Ý tưởng sơ khai về một công cụ tìm kiếm quán ăn thông minh.</p>
                                </div>
                                <div className="p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50">
                                    <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
                                        <Zap className="w-5 h-5" /> Thách thức
                                    </h4>
                                    <p className="text-slate-400">Làm sao để biến tìm kiếm thành một "Trợ lý thực thụ"?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* SLIDE 4: GEMINI */}
                <Section id="slide-4" className="snap-start h-screen bg-slate-900">
                    <div className="max-w-3xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-black mb-4">Gemini: Người phản biện</h2>
                            <p className="text-slate-400">Nhóm đưa ý tưởng ➔ AI đặt câu hỏi ➔ Tinh chỉnh Logic.</p>
                        </div>
                        <div className="bg-slate-950/50 rounded-3xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                <Zap className="w-32 h-32 text-indigo-500" />
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

                {/* SLIDE 5: CLAUDE AI */}
                <Section id="slide-5" className="snap-start min-h-screen bg-slate-900 py-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center px-4 max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black mb-6">Claude AI: Triển khai</h2>
                            <p className="text-lg text-slate-400 mb-8 leading-relaxed">Hiện thực hóa ý tưởng thành giải pháp kỹ thuật toàn diện.</p>

                            <div className="space-y-6">
                                <div className="flex gap-4 p-4 bg-slate-800/40 rounded-2xl border border-slate-700/50">
                                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20">
                                        <Eye className="text-indigo-400 w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">Thiết kế hệ thống</h4>
                                        <p className="text-slate-400 text-sm">Wireframe UI & Schema PostgreSQL tối ưu.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 bg-slate-800/40 rounded-2xl border border-slate-700/50">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                        <Cpu className="text-emerald-400 w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">Full-stack Development</h4>
                                        <p className="text-slate-400 text-sm">React Native Mobile, NestJS API & Google Maps.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-indigo-500/10 blur-[80px] -z-10" />
                            <div className="bg-slate-950 p-6 rounded-3xl border border-slate-700 font-mono text-[10px] md:text-xs overflow-hidden shadow-2xl">
                                <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                    </div>
                                    <span className="text-slate-600 text-[10px] ml-2 font-sans italic">// Claude thực thi logic tinh vi</span>
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

                {/* SLIDE 6: BẢO VỆ */}
                <Section id="slide-6" className="snap-start h-screen bg-indigo-950/20">
                    <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2">
                            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl inline-block mb-6">
                                <ShieldCheck className="w-12 h-12 text-red-500" />
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Cơ chế Bảo vệ</h2>
                            <p className="text-xl text-slate-300 leading-relaxed italic">
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
                                    className={`p-6 bg-slate-800 border-l-8 border-${item.color}-500 rounded-2xl shadow-lg`}
                                >
                                    <p className={`text-${item.color}-400 font-bold text-sm uppercase mb-1`}>{item.label}</p>
                                    <p className="text-lg font-medium text-white">{item.value}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* SLIDE 7: INVISIBLE AI */}
                <Section id="slide-7" className="snap-start h-screen bg-slate-900 flex items-center">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="text-4xl md:text-6xl font-black mb-4">Invisible AI</h2>
                            <p className="text-xl md:text-2xl text-slate-400 font-light tracking-wide">Khi những hành động nhỏ trở thành ngôn ngữ để AI thấu hiểu bạn sâu sắc hơn.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="group p-6 md:p-8 bg-slate-800/30 rounded-[32px] md:rounded-[40px] border border-slate-700/50 hover:bg-slate-800/50 transition-all text-center">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 border border-indigo-500/20">
                                    <Eye className="w-6 h-6 md:w-8 md:h-8 text-indigo-400" />
                                </div>
                                <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Học hành vi ngầm</h4>
                                <p className="text-slate-400 text-sm md:text-base leading-relaxed">Nếu User liên tục lướt qua nhanh các món dầu mỡ, AI tự động trừ Match Score cho các quán Fastfood trong tương lai.</p>
                            </div>
                            <div className="group p-6 md:p-8 bg-slate-800/30 rounded-[32px] md:rounded-[40px] border border-slate-700/50 hover:bg-slate-800/50 transition-all text-center">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 border border-emerald-500/20">
                                    <BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />
                                </div>
                                <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Match Score Dynamic</h4>
                                <div className="text-4xl md:text-5xl font-black text-emerald-400 mb-4 md:mb-6 group-hover:scale-110 transition-transform inline-block">0 - 100%</div>
                                <p className="text-slate-400 text-sm md:text-base leading-relaxed">Điểm tương thích hiển thị kèm các tag giúp User quyết định nhanh chóng.</p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* SLIDE 8: METRICS */}
                <Section id="slide-8" className="snap-start min-h-screen py-6 md:py-10 flex items-center justify-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-6 md:mb-8">
                            <h2 className="text-2xl md:text-4xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-emerald-400">Sức mạnh AI-Driven</h2>
                            <p className="text-base md:text-lg text-slate-400">Hiệu suất phi thường: Tiết kiệm thời gian thực thi.</p>
                        </div>
                        <div className="space-y-3 md:space-y-4 bg-slate-800/40 p-4 md:p-6 rounded-[24px] border border-slate-700/50 backdrop-blur-md">
                            <MetricBar label="Quy trình truyền thống" value="120 Giờ" percentage={100} color="bg-slate-600" />
                            <MetricBar label="Phát triển cùng AI Agent" value="32 Giờ" percentage={27} color="bg-gradient-to-r from-indigo-500 to-emerald-400 shadow-[0_0_20px_rgba(99,102,241,0.5)]" />

                            <div className="mt-6 md:mt-8 text-center">
                                <motion.div
                                    initial={{ scale: 0.9 }}
                                    whileInView={{ scale: 1 }}
                                    className="inline-block p-4 md:p-6 rounded-[24px] md:rounded-[32px] bg-slate-900 border-2 border-indigo-500/50"
                                >
                                    <p className="text-4xl md:text-6xl font-black text-white leading-none">73%</p>
                                    <p className="text-indigo-400 font-bold text-base md:text-lg uppercase tracking-tighter mt-1">Thời gian được tối ưu</p>
                                </motion.div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 mt-6 md:mt-8 text-[10px] md:text-xs font-bold text-slate-400">
                                    <div className="p-2 bg-indigo-500/5 rounded-xl border border-indigo-500/10">IDEATION: 80% mượt</div>
                                    <div className="p-2 bg-emerald-500/5 rounded-xl border border-emerald-500/10">CODING: 90% nhanh</div>
                                    <div className="p-2 bg-indigo-500/5 rounded-xl border border-indigo-500/10">DB DESIGN: 80% chuẩn</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>


                {/* SLIDE 9: KẾT LUẬN */}
                <Section id="slide-9" className="snap-start h-screen bg-gradient-to-t from-indigo-900/40 to-slate-900">
                    <div className="text-center max-w-4xl mx-auto px-4">
                        <motion.div
                            initial={{ rotate: 180, scale: 0 }}
                            whileInView={{ rotate: 0, scale: 1 }}
                            transition={{ type: 'spring', damping: 10 }}
                            className="w-24 h-24 bg-indigo-500 rounded-full mx-auto mb-2 flex items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.5)]"
                        >
                            <Rocket className="w-12 h-12 text-white" />
                        </motion.div>
                        <h2 className="text-5xl md:text-6xl font-black mb-8">Tầm nhìn 2026</h2>
                        <p className="text-2xl text-slate-300 mb-16 leading-relaxed">
                            Smart Nutrition Assistant - <span className="text-indigo-400 font-bold">Người đồng hành thầm lặng</span> cho sức khỏe Việt.
                        </p>

                        <div className="bg-slate-950/80 p-8 md:p-12 rounded-[40px] border border-slate-800 text-left mb-16 shadow-2xl relative">
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-indigo-500/20 rounded-2xl">
                                    <Rocket className="w-8 h-8 text-indigo-400" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-white mb-2">Trạng thái dự án</h4>
                                    <p className="text-indigo-400 font-bold">🚀 Đang trong giai đoạn phát triển & hoàn thiện các tính năng cốt lõi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
        </div>
    );
}

export default App;
