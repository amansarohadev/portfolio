import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
    {
        quote: "Aman transformed our data infrastructure from a tangled mess into a well-oiled machine. His expertise in Azure Databricks helped us reduce query times by 80%.",
        author: "Sarah Chen",
        role: "VP of Engineering",
        company: "TechVentures Inc",
        avatar: "SC",
        rating: 5
    },
    {
        quote: "Working with Aman was a game-changer. He built our real-time analytics pipeline that now processes millions of events per second without breaking a sweat.",
        author: "Michael Torres",
        role: "CTO",
        company: "DataFlow Systems",
        avatar: "MT",
        rating: 5
    },
    {
        quote: "The fraud detection system Aman architected has saved us millions. His deep understanding of streaming architectures is truly exceptional.",
        author: "Emily Watson",
        role: "Head of Data Science",
        company: "FinSecure",
        avatar: "EW",
        rating: 5
    },
    {
        quote: "Aman doesn't just build pipelines - he builds solutions that scale. His work on our data lakehouse has been foundational to our AI initiatives.",
        author: "David Kim",
        role: "Director of Analytics",
        company: "AI Dynamics",
        avatar: "DK",
        rating: 5
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    // Auto-advance testimonials
    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9
        })
    };

    const navigate = (dir) => {
        setDirection(dir);
        setCurrent((prev) => {
            if (dir === 1) return (prev + 1) % testimonials.length;
            return prev === 0 ? testimonials.length - 1 : prev - 1;
        });
    };

    return (
        <section className="py-32 px-6 bg-[#030014] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]"></div>

            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        What People <span className="text-white/50">Say</span>
                    </h2>
                </motion.div>

                {/* Testimonial Carousel */}
                <div className="relative">
                    {/* Quote icon */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                        <Quote size={48} className="text-accent/30" fill="currentColor" />
                    </div>

                    {/* Main testimonial card */}
                    <div className="relative h-[350px] md:h-[280px] flex items-center justify-center">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.3 }
                                }}
                                className="absolute w-full"
                            >
                                <div className="glass-card p-10 md:p-12 rounded-2xl border border-white/10 text-center">
                                    {/* Rating */}
                                    <div className="flex justify-center gap-1 mb-6">
                                        {[...Array(testimonials[current].rating)].map((_, i) => (
                                            <Star key={i} size={18} className="text-yellow-400" fill="currentColor" />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 italic">
                                        "{testimonials[current].quote}"
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center justify-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold">
                                            {testimonials[current].avatar}
                                        </div>
                                        <div className="text-left">
                                            <div className="text-white font-bold">{testimonials[current].author}</div>
                                            <div className="text-white/40 text-sm">
                                                {testimonials[current].role} @ {testimonials[current].company}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center items-center gap-6 mt-8">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => navigate(-1)}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-accent/50 transition-all"
                        >
                            <ChevronLeft size={24} />
                        </motion.button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > current ? 1 : -1);
                                        setCurrent(index);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all ${index === current
                                            ? 'w-8 bg-accent'
                                            : 'bg-white/20 hover:bg-white/40'
                                        }`}
                                />
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => navigate(1)}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-accent/50 transition-all"
                        >
                            <ChevronRight size={24} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
