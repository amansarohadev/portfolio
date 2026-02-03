import { motion } from 'framer-motion';
import { MapPin, Briefcase, Award, GraduationCap } from 'lucide-react';

const About = () => {
    const highlights = [
        { icon: <Briefcase size={20} />, label: "2+ Years", sublabel: "Experience" },
        { icon: <Award size={20} />, label: "AZ-104", sublabel: "Certified" },
        { icon: <GraduationCap size={20} />, label: "B.Tech", sublabel: "CS & AI" },
        { icon: <MapPin size={20} />, label: "Sonipat", sublabel: "India" },
    ];

    return (
        <section
            id="about"
            className="py-32 px-6 bg-[#030014] relative overflow-hidden"
        >
            {/* Static background accents */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>

            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Main image container */}
                        <div className="relative">
                            {/* Glow effect behind */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-2xl scale-105"></div>

                            {/* Gradient box with geometric elements */}
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0f0c29] via-[#1a0b2e] to-[#030014]">

                                {/* Static geometric elements */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-48 h-48 border border-accent/20 rounded-full"></div>
                                    <div className="absolute w-64 h-64 border border-primary/15 rounded-full"></div>
                                    <div className="absolute w-32 h-32 border-2 border-accent/30 rotate-45"></div>
                                </div>

                                {/* Central avatar letter */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-primary">A</div>
                                </div>
                            </div>

                            {/* Floating badge - positioned inside */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="absolute bottom-4 left-4 right-4 glass-card px-5 py-3 rounded-xl border border-white/10"
                            >
                                <div className="flex items-center justify-center gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                    <span className="text-sm text-white/80">Available for projects</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                            About Me
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            Azure Data Engineer with a passion for{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                                cloud architecture
                            </span>
                        </h2>

                        <p className="text-lg text-white/60 leading-relaxed mb-6">
                            Focused Azure Data Engineer with a strong background in migrating and managing data workloads on the cloud.
                            Expert in building end-to-end ETL/ELT pipelines using Azure Data Factory, Databricks, and Synapse Analytics.
                        </p>

                        <p className="text-white/40 leading-relaxed mb-10">
                            Specialized in implementing the Medallion Architecture (Bronze, Silver, Gold) and performing high-scale data transformations using PySpark.
                            Previously spent 14+ months at HCLTech working with Microsoft, focused on T-SQL optimization and database administration.
                        </p>

                        {/* Highlights grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className="text-center p-4 border border-white/5 rounded-lg hover:border-accent/30 transition-colors"
                                >
                                    <div className="text-accent mb-2 flex justify-center">{item.icon}</div>
                                    <div className="text-xl font-bold text-white">{item.label}</div>
                                    <div className="text-[10px] text-white/40 uppercase tracking-wider">{item.sublabel}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 bg-gradient-to-r from-accent to-primary text-white font-bold rounded-lg shadow-lg shadow-accent/20 transition-all"
                            >
                                Let's Connect
                            </motion.a>
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-all"
                            >
                                View My Work
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
