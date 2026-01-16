import React, { useState, useEffect } from 'react';
import { SLIDES_V2 } from '../utils/constants';
import Hero from '../components/v2/Hero';
import FoodQuestion from '../components/v2/FoodQuestion';
import FoodScanner from '../components/v2/FoodScanner';
import DiscoverQuestion from '../components/v2/DiscoverQuestion';
import Discover from '../components/v2/Discover';
import Roadmap from '../components/v2/Roadmap';
import DevelopmentComparison from '../components/v2/DevelopmentComparison';
import Demo from '../components/v2/Demo';
import { ZoomIn, ZoomOut } from 'lucide-react';

const Version2 = () => {
    const [activeSegment, setActiveSegment] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [isFullWidth, setIsFullWidth] = useState(false);

    const slides = SLIDES_V2;

    useEffect(() => {
        const container = document.querySelector('.scroll-container');
        const handleScroll = () => {
            if (container) {
                const slideHeight = window.innerHeight * zoom;
                const index = Math.round(container.scrollTop / slideHeight);
                setActiveSegment(index);
            }
        };
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, [zoom]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            const container = document.querySelector('.scroll-container');
            if (!container) return;

            const slideHeight = window.innerHeight * zoom;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextSlide = Math.min(activeSegment + 1, slides.length - 1);
                container.scrollTo({
                    top: nextSlide * slideHeight,
                    behavior: 'smooth'
                });
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevSlide = Math.max(activeSegment - 1, 0);
                container.scrollTo({
                    top: prevSlide * slideHeight,
                    behavior: 'smooth'
                });
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeSegment, slides.length, zoom]);

    return (
        <>
            {isFullWidth && (
                <style>{`
                    .slide-section > div,
                    .slide-section > div > div {
                        max-width: 100% !important;
                    }
                `}</style>
            )}

            {/* Navigation Dots */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
                {slides.map((s, i) => (
                    <div key={i} className="group relative flex items-center justify-end">
                        <span className="absolute right-8 px-2 py-1 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-xs rounded border border-slate-200 dark:border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
                            {s.title}
                        </span>
                        <button
                            onClick={() => {
                                const container = document.querySelector('.scroll-container');
                                if (container) {
                                    container.scrollTo({
                                        top: i * window.innerHeight * zoom,
                                        behavior: 'smooth'
                                    });
                                }
                            }}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSegment === i ? 'bg-indigo-500 scale-125' : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                                }`}
                        />
                    </div>
                ))}
            </div>

            {/* Controls */}
            <div className="fixed bottom-6 left-6 z-50 flex gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-2 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg print:hidden">
                <button onClick={() => setZoom(z => Math.max(0.2, (Math.round(z * 10) - 1) / 10))} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors text-slate-700 dark:text-slate-200">
                    <ZoomOut size={20} />
                </button>
                <button
                    onClick={() => setZoom(1)}
                    className="flex items-center px-2 text-sm font-mono min-w-[3rem] justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                    title="Reset to 100%"
                >
                    {Math.round(zoom * 100)}%
                </button>
                <button onClick={() => setZoom(z => Math.min(3, (Math.round(z * 10) + 1) / 10))} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors text-slate-700 dark:text-slate-200">
                    <ZoomIn size={20} />
                </button>
                {/* <div className="w-px bg-slate-200 dark:bg-slate-700 mx-1" /> */}
                {/* <button
                    onClick={() => setIsFullWidth(!isFullWidth)}
                    className={`p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors ${isFullWidth ? 'text-indigo-500' : 'text-slate-700 dark:text-slate-200'}`}
                    title="Toggle Full Width"
                >
                    {isFullWidth ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                </button> */}
            </div>

            <main className={`scroll-container h-screen overflow-y-auto ${zoom === 1 ? 'snap-y snap-mandatory' : ''}`}>
                <div style={{ zoom: zoom }}>
                    <Hero />
                    <DiscoverQuestion />
                    <Discover />
                    <FoodQuestion />
                    <FoodScanner />
                    <Roadmap />
                    <DevelopmentComparison />
                    <Demo />
                </div>
            </main>
        </>
    );
};

export default Version2;
