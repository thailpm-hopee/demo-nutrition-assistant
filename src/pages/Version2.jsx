import React, { useState, useEffect } from 'react';
import { SLIDES_V2 } from '../utils/constants';
import Hero from '../components/v1/Hero';
import ProblemComparison from '../components/v2/ProblemComparison';
import IdeationAI from '../components/v2/IdeationAI';
import DesignProcess from '../components/v2/DesignProcess';
import ClaudeCode from '../components/v2/ClaudeCode';
import CursorRefinement from '../components/v2/CursorRefinement';
import InvisibleAI from '../components/v1/InvisibleAI';
import Protection from '../components/v1/Protection';
import Demo from '../components/v1/Demo';

const Version2 = () => {
    const [activeSegment, setActiveSegment] = useState(0);

    const slides = SLIDES_V2;

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
                {/* Hero */}
                <div id="slide-1" className="snap-start"><Hero /></div>

                {/* Part 1: Problem & Solution */}
                <div id="slide-2" className="snap-start"><ProblemComparison type="grab" /></div>
                <div id="slide-3" className="snap-start"><ProblemComparison type="maps" /></div>

                {/* Part 2: AI Ideation & Efficiency */}
                <div id="slide-4" className="snap-start"><IdeationAI slide={1} /></div>
                <div id="slide-5" className="snap-start"><IdeationAI slide={2} /></div>

                {/* UI/UX Process */}
                <div id="slide-6" className="snap-start"><DesignProcess /></div>

                {/* Claude Code & Cursor */}
                <div id="slide-7" className="snap-start"><ClaudeCode /></div>
                <div id="slide-8" className="snap-start"><CursorRefinement /></div>

                {/* V1 Components maintained in V2 */}
                <div id="slide-9" className="snap-start"><InvisibleAI /></div>
                <div id="slide-10" className="snap-start"><Protection /></div>

                {/* Final Demo Lead */}
                <div id="slide-11" className="snap-start"><Demo /></div>
            </main>
        </>
    );
};

export default Version2;
