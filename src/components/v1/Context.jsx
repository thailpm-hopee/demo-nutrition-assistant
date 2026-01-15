import React from 'react';
import { AlertCircle } from 'lucide-react';
import Section from '../Section';

const Context = () => (
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
);

export default Context;
