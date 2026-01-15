import React from 'react';
import { motion } from 'framer-motion';

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

export default MetricBar;
