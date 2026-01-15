import { Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { businessDetails } from '../data';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="bg-khadi-900 text-khadi-100 text-xs py-1.5 px-4 text-center tracking-wide dark:bg-black dark:text-khadi-200">
                Govt Reg: {businessDetails.regNo} | KVIC Certified: {businessDetails.kvicCode}
            </div>

            <nav className="sticky top-0 z-40 bg-khadi-50/90 backdrop-blur-md border-b border-khadi-200 shadow-sm transition-colors duration-300 dark:bg-khadi-900/95 dark:border-khadi-800">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

                    {/* Logo */}
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col group text-left">
            <span className="font-serif text-2xl font-bold text-khadi-900 group-hover:text-khadi-accent transition-colors dark:text-khadi-100">
              {businessDetails.name}
            </span>
                        <span className="text-[9px] uppercase tracking-[0.2em] text-khadi-600 dark:text-khadi-400">
              Arts of Relife Society
            </span>
                    </button>

                    <div className="flex items-center gap-4 md:gap-8">
                        {/* Scroll Links */}
                        <button onClick={() => scrollToSection('gallery')} className="hidden md:block font-medium text-khadi-800 hover:text-khadi-accent dark:text-khadi-200 dark:hover:text-khadi-accent transition-colors">
                            Our Craft
                        </button>
                        <button onClick={() => scrollToSection('about')} className="hidden md:block font-medium text-khadi-800 hover:text-khadi-accent dark:text-khadi-200 dark:hover:text-khadi-accent transition-colors">
                            Institution Profile
                        </button>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-khadi-800 hover:bg-khadi-200 rounded-full transition-colors dark:text-khadi-200 dark:hover:bg-khadi-800"
                            aria-label="Toggle Dark Mode"
                        >
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}