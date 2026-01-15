import React, { useState, useEffect } from 'react';
import { SLIDES_V1 } from '../utils/constants';
import Hero from '../components/v1/Hero';
import Context from '../components/v1/Context';
import Idea from '../components/v1/Idea';
import Comparison from '../components/v1/Comparison';
import Gemini from '../components/v1/Gemini';
import Claude from '../components/v1/Claude';
import Protection from '../components/v1/Protection';
import InvisibleAI from '../components/v1/InvisibleAI';
import Metrics from '../components/v1/Metrics';
import Demo from '../components/v1/Demo';

const Version1 = () => {
    const [activeSegment, setActiveSegment] = useState(0);

    const slides = SLIDES_V1;

    useEffect(() => {
        const container = document.querySelector('.scroll-container');
        const handleScroll = () => {
            if (container) {
                const index = Math.round(container.scrollTop / window.innerHeight);
                setActiveSegment(index);
            }
        };
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            const container = document.querySelector('.scroll-container');
            if (!container) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextSlide = Math.min(activeSegment + 1, slides.length - 1);
                container.scrollTo({
                    top: nextSlide * window.innerHeight,
                    behavior: 'smooth'
                });
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevSlide = Math.max(activeSegment - 1, 0);
                container.scrollTo({
                    top: prevSlide * window.innerHeight,
                    behavior: 'smooth'
                });
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeSegment, slides.length]);

    return (
        <>
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
                <Hero />
                <Context />
                <Idea />
                <Comparison />
                <Protection />
                <InvisibleAI />
                <Gemini />
                <Claude />
                <Metrics />
                <Demo />
            </main>
        </>
    );
};

export default Version1;
