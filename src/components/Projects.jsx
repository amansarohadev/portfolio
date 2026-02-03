import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Cpu, Lock, ArrowUpRight, Play } from 'lucide-react';

const projects = [
    {
        title: "Azure Data Lakehouse",
        description: "Enterprise-grade analytics platform processing 2TB+ daily logs. Built with Azure Synapse, Databricks, and PowerBI. Serving real-time insights to 500+ business analysts.",
        tags: ["Azure Synapse", "PySpark", "Delta Lake", "PowerBI"],
        image: "/project_thumb_3.png",
        icon: <Database className="text-accent" size={24} />,
        color: "from-cyan-500 to-blue-600",
        featured: true
    },
    {
        title: "Real-time Fraud Detection",
        description: "Streaming pipeline using Kafka and Spark Structured Streaming to detect anomalies in financial transactions with <50ms latency. Processing 1M+ events per second.",
        tags: ["Kafka", "Spark Streaming", "Redis", "ML"],
        image: "/project_thumb_1.png",
        icon: <Lock className="text-secondary" size={24} />,
        color: "from-pink-500 to-rose-600",
        featured: false
    },
    {
        title: "IoT Telemetry Pipeline",
        description: "Serverless architecture for ingesting millions of sensor events using Azure IoT Hub and Functions. Real-time monitoring dashboard for industrial equipment.",
        tags: ["Azure IoT", "CosmosDB", "Serverless", "Event Grid"],
        image: "/project_thumb_2.png",
        icon: <Cpu className="text-primary" size={24} />,
        color: "from-purple-500 to-indigo-600",
        featured: false
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-32 px-6 bg-[#030014] relative z-10 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10"></div>

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                                Selected Works
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white">
                                Engineering{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary">
                                    At Scale.
                                </span>
                            </h2>
                        </div>
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.02 }}
                            className="inline-flex items-center gap-2 text-white/60 hover:text-accent transition-colors group"
                        >
                            <Github size={20} />
                            View All Projects
                            <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Featured Project */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <div className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10 hover:border-accent/30 transition-all duration-300 bg-[#0a0a1a]">
                        {/* Image */}
                        <div className="relative h-[280px] md:h-[350px] overflow-hidden">
                            <img
                                src={projects[0].image}
                                alt={projects[0].title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent"></div>

                            {/* Play button */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                    <Play size={28} className="text-white ml-1" fill="currentColor" />
                                </div>
                            </div>
                        </div>

                        {/* Content - NOT overlapping */}
                        <div className="p-8 md:p-10">
                            <div className="flex items-start justify-between">
                                <div className="max-w-2xl">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
                                        {projects[0].icon}
                                        <span className="text-accent text-xs font-medium">Featured Project</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                                        {projects[0].title}
                                    </h3>
                                    <p className="text-white/60 leading-relaxed mb-5 max-w-xl">
                                        {projects[0].description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {projects[0].tags.map(tag => (
                                            <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action buttons */}
                                <div className="hidden md:flex gap-3">
                                    <a href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-white hover:bg-accent hover:border-accent transition-all">
                                        <Github size={18} />
                                    </a>
                                    <a href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-white hover:bg-accent hover:border-accent transition-all">
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Other Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.slice(1).map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="h-full glass-card rounded-xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-300">
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent"></div>

                                    {/* Icon badge */}
                                    <div className={`absolute top-4 right-4 p-2.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/10`}>
                                        {project.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/50 text-sm leading-relaxed mb-5">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-white/50">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-4 pt-5 border-t border-white/5">
                                        <a href="#" className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-accent transition-colors">
                                            <Github size={15} /> Code
                                        </a>
                                        <a href="#" className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-accent transition-colors">
                                            <ExternalLink size={15} /> Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
