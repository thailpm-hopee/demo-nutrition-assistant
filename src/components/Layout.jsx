import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const location = useLocation();

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-500/30 transition-colors duration-300`}>
            {/* Version Selector */}
            <div className="fixed top-6 left-6 z-[60]">
                <select
                    value={location.pathname === '/v2' ? '/v2' : '/v1'}
                    onChange={(e) => window.location.href = e.target.value}
                    className="px-4 py-2.5 pr-10 rounded-xl text-sm font-bold bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg text-slate-800 dark:text-slate-100 hover:border-indigo-400 dark:hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all cursor-pointer appearance-none bg-no-repeat bg-right"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236366f1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                        backgroundPosition: 'right 0.75rem center',
                        backgroundSize: '1rem'
                    }}
                >
                    <option value="/v1">Version 1</option>
                    <option value="/v2">Version 2</option>
                </select>
            </div>

            {/* Theme Toggle */}
            <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="fixed top-6 right-6 z-[60] p-3 rounded-2xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-xl hover:scale-110 active:scale-95 transition-all border border-slate-200 dark:border-slate-700"
                aria-label="Toggle Theme"
            >
                {isDarkMode ? (
                    <Sun className="w-5 h-5 transition-transform hover:rotate-45" />
                ) : (
                    <Moon className="w-5 h-5 transition-transform hover:-rotate-12" />
                )}
            </button>

            {children}
        </div>
    );
};

export default Layout;
