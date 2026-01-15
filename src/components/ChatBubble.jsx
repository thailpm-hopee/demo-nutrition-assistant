import React from 'react';
import { motion } from 'framer-motion';

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

export default ChatBubble;
