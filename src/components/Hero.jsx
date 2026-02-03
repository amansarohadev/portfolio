import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Database, Cloud, ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.5
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  const title1 = "Architecting Data.";
  const title2 = "Empowering Insight.";

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-start overflow-hidden bg-[#030014]"
    >
      {/* Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/hero-ferrari.png"
          alt="Azure Data Architect"
          className="w-full h-full object-cover opacity-90"
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030014] via-[#030014]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-[#030014]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030014]"></div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 px-8 w-full max-w-7xl mx-auto"
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span className="text-accent/80 text-xs font-bold tracking-[0.2em] uppercase">
              Azure Data Engineer • Microsoft Certified
            </span>
          </motion.div>

          {/* Animated Title */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="block overflow-hidden">
              {title1.split('').map((char, i) => (
                <motion.span
                  key={`t1-${i}`}
                  variants={letterVariants}
                  className="inline-block"
                  style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden mt-2">
              {title2.split('').map((char, i) => (
                <motion.span
                  key={`t2-${i}`}
                  variants={letterVariants}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-accent to-blue-600"
                  style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-lg md:text-xl text-blue-100/60 font-light leading-relaxed mb-10 max-w-xl"
          >
            Building end-to-end ETL/ELT pipelines using Azure Data Factory, Databricks, and Synapse Analytics.
            Ex-HCLTech working with Microsoft on enterprise database solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-gradient-to-r from-accent to-blue-600 text-white text-sm font-bold tracking-wide rounded-lg flex items-center gap-3 shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-shadow"
            >
              <Database size={18} />
              View Architecture
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-white/20 text-white text-sm font-bold tracking-wide rounded-lg backdrop-blur-sm hover:bg-white/10 hover:border-accent/50 transition-all flex items-center gap-2"
            >
              <Cloud size={18} />
              Contact Me
            </motion.a>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="mt-12 flex items-center gap-3 flex-wrap"
          >
            {['Azure', 'Databricks', 'Synapse', 'PySpark', 'SQL'].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + i * 0.08 }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white/50 uppercase tracking-wider hover:border-accent/30 hover:text-white/70 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Stats Card - Positioned to the right, not overlapping */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-72"
        >
          <div className="glass-card p-6 rounded-2xl border border-white/10">
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] uppercase tracking-widest text-white/50">Pipeline Status</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-green-400 font-mono">ACTIVE</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-3xl font-light text-white block">500TB+</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Data Processed</span>
              </div>
              <div>
                <span className="text-3xl font-light text-white block">99.9%</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Uptime Reliability</span>
              </div>

              <div className="h-[1px] w-full bg-white/10 my-3"></div>

              <div className="text-xs text-white/40 leading-relaxed font-mono space-y-1">
                <p>&gt; Ingesting logs...</p>
                <p>&gt; Optimizing clusters...</p>
                <p className="text-green-400">&gt; Deployment successful.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] uppercase tracking-widest text-white/30">Scroll</span>
          <ChevronDown size={20} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
