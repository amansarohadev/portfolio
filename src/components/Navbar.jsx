import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { trackResumeDownload } from '../lib/analytics';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const { scrollY } = useScroll();

    // Hide/show navbar based on scroll direction
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
        setIsScrolled(latest > 50);
    });

    // Track active section
    useEffect(() => {
        const sections = ['about', 'experience', 'projects', 'skills', 'contact'];

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: isHidden ? -100 : 0 }}
                transition={{ duration: 0.3 }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                    ? 'py-4 bg-[#030014]/80 backdrop-blur-xl border-b border-white/5'
                    : 'py-6 bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                                    <Terminal size={20} className="text-white" />
                                </div>
                                {/* Glow effect */}
                                <div className="absolute inset-0 w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                            </div>
                            <span className="text-lg font-bold tracking-wider">
                                AMAN
                            </span>
                        </div>
                    </motion.a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {links.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i }}
                                className="relative px-4 py-2 group"
                            >
                                <span className={`text-xs uppercase tracking-[0.15em] font-medium transition-colors ${activeSection === link.name.toLowerCase()
                                    ? 'text-accent'
                                    : 'text-white/60 group-hover:text-white'
                                    }`}>
                                    {link.name}
                                </span>

                                {/* Animated underline */}
                                <motion.span
                                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-accent to-primary"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: activeSection === link.name.toLowerCase() ? 1 : 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.2 }}
                                    style={{ originX: 0 }}
                                />
                            </motion.a>
                        ))}
                    </div>

                    {/* Resume Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => trackResumeDownload()}
                            className="group px-5 py-2.5 bg-gradient-to-r from-accent to-primary rounded-lg font-bold text-sm text-white flex items-center gap-2 hover:shadow-lg hover:shadow-accent/25 transition-all"
                        >
                            Resume
                            <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </motion.button>
                    </div>

                    {/* Mobile Toggle */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={{
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? 'auto' : 'none'
                }}
                className="fixed inset-0 bg-[#030014]/95 backdrop-blur-xl z-40 md:hidden"
            >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {links.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
                            transition={{ delay: isOpen ? 0.1 * i : 0 }}
                            className="text-3xl font-light text-white/80 hover:text-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </motion.a>
                    ))}

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
                        transition={{ delay: isOpen ? 0.5 : 0 }}
                        className="mt-8 px-8 py-4 bg-gradient-to-r from-accent to-primary rounded-lg font-bold text-white"
                    >
                        Resume
                    </motion.button>
                </div>
            </motion.div>
        </>
    );
};

export default Navbar;
