import React from 'react';
import Section from '../Section';

const Comparison = () => (
    <Section id="slide-4" className="snap-start h-screen bg-slate-50 dark:bg-slate-900 flex items-center">
        <div className="max-w-6xl mx-auto px-4 w-full">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white">Tại sao cần giải pháp mới?</h2>
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
                            <td className="p-4 md:p-6 font-medium text-emerald-500 bg-indigo-500/5">✅ Gợi ý đúng – kèm giải thích</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </Section>
);

export default Comparison;
