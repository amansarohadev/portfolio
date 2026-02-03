import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
    {
        company: "Independent / Freelance",
        role: "Azure Data Engineer",
        period: "Jan 2024 - Present",
        location: "Remote",
        description: "Designing and implementing scalable data architectures using Azure cloud services. Building end-to-end ETL/ELT pipelines with Azure Data Factory, Databricks, and Synapse Analytics. Implementing Medallion Architecture (Bronze, Silver, Gold) with high-scale PySpark transformations.",
        highlights: ["Azure Data Factory", "Databricks", "Synapse Analytics", "PySpark", "Medallion Architecture"],
        isCurrent: true,
        logo: "AE"
    },
    {
        company: "HCLTech",
        role: "Azure SQL Database Engineer",
        period: "Oct 2022 - Dec 2023",
        location: "Noida, India (Microsoft Client)",
        description: "Worked directly with Microsoft as client, managing and optimizing production SQL databases. Handled database deployments, performance monitoring, T-SQL optimization, and indexing strategies for high-availability enterprise environments.",
        highlights: ["Azure SQL Database", "T-SQL", "Performance Tuning", "Database Administration"],
        isCurrent: false,
        logo: "HCL"
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-32 px-6 bg-[#030014] relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -z-10"></div>

            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Career Journey</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Professional <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/40">Experience</span>
                        </h2>
                    </div>
                    <p className="text-white/40 max-w-md">
                        2+ years of building data infrastructure and cloud solutions for enterprise clients.
                    </p>
                </motion.div>

                {/* Experience Cards */}
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ scale: 1.01 }}
                            className={`group relative glass-card p-8 md:p-10 rounded-2xl border transition-all duration-500 ${exp.isCurrent
                                ? 'border-accent/30 bg-gradient-to-r from-accent/5 to-transparent'
                                : 'border-white/5 hover:border-white/20'
                                }`}
                        >
                            {/* Current badge */}
                            {exp.isCurrent && (
                                <div className="absolute -top-3 right-8">
                                    <span className="px-4 py-1 bg-accent text-black text-xs font-bold uppercase tracking-wider rounded-full">
                                        Current
                                    </span>
                                </div>
                            )}

                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Left: Logo & Timeline */}
                                <div className="flex items-start gap-6">
                                    <motion.div
                                        whileHover={{ rotate: 5, scale: 1.1 }}
                                        className={`w-16 h-16 rounded-xl flex items-center justify-center text-xl font-bold ${exp.isCurrent
                                            ? 'bg-gradient-to-br from-accent to-primary text-white'
                                            : 'bg-white/5 text-white/60 border border-white/10'
                                            }`}
                                    >
                                        {exp.logo}
                                    </motion.div>
                                </div>

                                {/* Right: Content */}
                                <div className="flex-1">
                                    {/* Header */}
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                                                {exp.company}
                                            </h3>
                                            <p className="text-accent font-semibold">{exp.role}</p>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-white/40">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                {exp.period}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin size={14} />
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-white/60 leading-relaxed mb-6">
                                        {exp.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.highlights.map((highlight, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 + i * 0.05 }}
                                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60 hover:border-accent/30 hover:text-white transition-all"
                                            >
                                                {highlight}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Subtle line connector */}
                            {index < experiences.length - 1 && (
                                <div className="absolute -bottom-8 left-14 w-[2px] h-8 bg-gradient-to-b from-white/10 to-transparent hidden md:block"></div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* View Full Resume CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-lg text-white font-medium hover:bg-white/5 hover:border-accent/50 transition-all"
                    >
                        <ExternalLink size={18} />
                        Download Full Resume
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
