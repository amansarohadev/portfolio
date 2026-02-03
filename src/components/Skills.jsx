import { motion } from 'framer-motion';
import {
    Cloud, Database, Code, Workflow, Server, Lock,
    Layers, GitBranch, Terminal, BarChart3, Cpu, Zap
} from 'lucide-react';

const skillCategories = [
    {
        title: "Cloud & Data Platforms",
        icon: <Cloud className="text-accent" size={24} />,
        skills: [
            { name: "Azure Databricks", level: 95 },
            { name: "Azure Synapse", level: 90 },
            { name: "Microsoft Fabric", level: 85 },
            { name: "Azure Data Factory", level: 92 },
        ],
        gradient: "from-cyan-500/20 to-blue-600/20",
        borderColor: "border-cyan-500/30"
    },
    {
        title: "Languages & Frameworks",
        icon: <Code className="text-primary" size={24} />,
        skills: [
            { name: "Python / PySpark", level: 95 },
            { name: "SQL / T-SQL", level: 98 },
            { name: "Scala", level: 75 },
            { name: "JavaScript", level: 70 },
        ],
        gradient: "from-purple-500/20 to-pink-600/20",
        borderColor: "border-purple-500/30"
    },
    {
        title: "Data Engineering",
        icon: <Workflow className="text-secondary" size={24} />,
        skills: [
            { name: "ETL/ELT Pipelines", level: 95 },
            { name: "Delta Lake", level: 90 },
            { name: "Kafka Streaming", level: 85 },
            { name: "Data Modeling", level: 88 },
        ],
        gradient: "from-pink-500/20 to-orange-600/20",
        borderColor: "border-pink-500/30"
    },
    {
        title: "DevOps & Tools",
        icon: <GitBranch className="text-green-400" size={24} />,
        skills: [
            { name: "Azure DevOps", level: 90 },
            { name: "Docker / K8s", level: 80 },
            { name: "Git / CI-CD", level: 92 },
            { name: "Terraform", level: 75 },
        ],
        gradient: "from-green-500/20 to-teal-600/20",
        borderColor: "border-green-500/30"
    }
];

const bentoItems = [
    {
        icon: <Database size={32} />,
        label: "500TB+",
        sublabel: "Data Processed",
        size: "col-span-1",
        color: "text-accent"
    },
    {
        icon: <Server size={32} />,
        label: "50+",
        sublabel: "Pipelines Built",
        size: "col-span-1",
        color: "text-primary"
    },
    {
        icon: <Zap size={32} />,
        label: "<50ms",
        sublabel: "Stream Latency",
        size: "col-span-1",
        color: "text-secondary"
    },
    {
        icon: <BarChart3 size={32} />,
        label: "99.9%",
        sublabel: "Uptime SLA",
        size: "col-span-1",
        color: "text-green-400"
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-32 px-6 bg-[#030014] relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10"></div>

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                        Technical Arsenal
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Expertise</span>
                    </h2>
                    <p className="text-white/50 max-w-2xl mx-auto">
                        Mastering the modern data stack to build scalable, reliable, and intelligent data solutions.
                    </p>
                </motion.div>

                {/* Bento Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                >
                    {bentoItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className={`${item.size} glass-card p-6 rounded-xl border border-white/10 hover:border-accent/30 transition-all duration-500 group cursor-default`}
                        >
                            <div className={`${item.color} mb-4 group-hover:scale-110 transition-transform`}>
                                {item.icon}
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">{item.label}</div>
                            <div className="text-xs text-white/40 uppercase tracking-wider">{item.sublabel}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Skills Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.15 }}
                            className={`glass-card p-8 rounded-xl border ${category.borderColor} hover:border-opacity-60 transition-all duration-500 group`}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.gradient}`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-5">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-white/80 text-sm font-medium">{skill.name}</span>
                                            <span className="text-white/40 text-xs font-mono">{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1, ease: "easeOut" }}
                                                className={`h-full rounded-full bg-gradient-to-r ${category.gradient.replace('/20', '')}`}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <span className="text-xs text-white/40 uppercase tracking-widest mb-6 block">Certifications</span>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Azure Data Engineer', 'Databricks Certified', 'Azure Solutions Architect', 'AWS Data Analytics'].map((cert, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="px-6 py-3 border border-white/10 rounded-full text-sm text-white/60 hover:text-white hover:border-accent/50 transition-all cursor-default"
                            >
                                {cert}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
