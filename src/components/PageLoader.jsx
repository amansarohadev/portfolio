import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const PageLoader = ({ onLoadComplete }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsLoading(false);
                        onLoadComplete?.();
                    }, 500);
                    return 100;
                }
                return prev + Math.random() * 15 + 5;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [onLoadComplete]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[99999] bg-[#030014] flex flex-col items-center justify-center"
                >
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            className="absolute w-[500px] h-[500px] rounded-full blur-[100px]"
                            style={{
                                background: 'radial-gradient(circle, rgba(79,172,254,0.3) 0%, transparent 70%)',
                                top: '30%',
                                left: '30%',
                            }}
                            animate={{
                                scale: [1, 1.2, 1],
                                x: [0, 50, 0],
                                y: [0, -30, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        <motion.div
                            className="absolute w-[400px] h-[400px] rounded-full blur-[100px]"
                            style={{
                                background: 'radial-gradient(circle, rgba(112,56,253,0.3) 0%, transparent 70%)',
                                bottom: '20%',
                                right: '20%',
                            }}
                            animate={{
                                scale: [1.2, 1, 1.2],
                                x: [0, -40, 0],
                                y: [0, 40, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </div>

                    {/* Logo */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, ease: "backOut" }}
                        className="relative mb-12"
                    >
                        <div className="w-20 h-20 border-2 border-accent/30 rounded-xl flex items-center justify-center backdrop-blur-sm bg-white/5">
                            <Terminal size={40} className="text-accent" />
                        </div>

                        {/* Orbiting dot */}
                        <motion.div
                            className="absolute w-3 h-3 bg-accent rounded-full"
                            style={{ top: '50%', left: '50%', marginTop: -6, marginLeft: -6 }}
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            <motion.div
                                className="absolute w-3 h-3 bg-accent rounded-full"
                                style={{ x: 50 }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Loading text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-center"
                    >
                        <h2 className="text-2xl font-bold text-white mb-2 tracking-widest">
                            AMAN<span className="text-white/40">.INSIGHTS</span>
                        </h2>

                        {/* Progress bar */}
                        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mt-6">
                            <motion.div
                                className="h-full bg-gradient-to-r from-accent to-primary"
                                initial={{ width: 0 }}
                                animate={{ width: `${Math.min(progress, 100)}%` }}
                                transition={{ ease: "easeOut" }}
                            />
                        </div>

                        <motion.p
                            className="text-xs text-white/40 mt-4 font-mono"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            Initializing experience...
                        </motion.p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageLoader;
