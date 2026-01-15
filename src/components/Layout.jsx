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
            {/* Version Switcher */}
            <div className="fixed top-6 left-6 z-[60] flex gap-2 p-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg">
                <Link
                    to="/v1"
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${location.pathname === '/' || location.pathname === '/v1'
                            ? 'bg-indigo-500 text-white shadow-md'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                        }`}
                >
                    V1
                </Link>
                <Link
                    to="/v2"
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${location.pathname === '/v2'
                            ? 'bg-indigo-500 text-white shadow-md'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                        }`}
                >
                    V2
                </Link>
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
