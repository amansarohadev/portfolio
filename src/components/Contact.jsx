import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Linkedin, Twitter, ArrowUpRight, Github, Send, MapPin } from 'lucide-react';
import { submitContactMessage } from '../lib/analytics';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ loading: false, success: false, error: '' });

    const socialLinks = [
        { icon: <Linkedin size={24} />, label: "LinkedIn", href: "https://linkedin.com/in/amansarohadev", color: "hover:bg-blue-500" },
        { icon: <Github size={24} />, label: "Github", href: "https://github.com/amansarohadev", color: "hover:bg-gray-700" },
        { icon: <Twitter size={24} />, label: "Twitter", href: "https://x.com/amansarohadev", color: "hover:bg-sky-500" },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: '' });

        const result = await submitContactMessage(formData.name, formData.email, formData.message);

        if (result.success) {
            setStatus({ loading: false, success: true, error: '' });
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus({ loading: false, success: false, error: '' }), 3000);
        } else {
            setStatus({ loading: false, success: false, error: 'Failed to send message. Please try again.' });
        }
    };

    return (
        <section id="contact" className="py-32 px-6 relative overflow-hidden bg-[#030014]">
            {/* Animated background gradient */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px]"
                />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
                            Get In Touch
                        </span>

                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                            Ready to build your{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary">
                                data pipeline?
                            </span>
                        </h2>

                        <p className="text-lg text-white/50 mb-12 leading-relaxed">
                            I'm currently open to new opportunities in Azure Data Engineering and Cloud Architecture.
                            Let's build scalable data solutions together.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-4 mb-12">
                            <motion.a
                                href="mailto:amansarohadev@gmail.com"
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all">
                                    <Mail size={20} className="text-white/60 group-hover:text-accent" />
                                </div>
                                <div>
                                    <div className="text-xs text-white/40 uppercase tracking-wider">Email</div>
                                    <div className="text-white group-hover:text-accent transition-colors">amansarohadev@gmail.com</div>
                                </div>
                            </motion.a>

                            <motion.a
                                href="https://github.com/amansarohadev"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all">
                                    <Github size={20} className="text-white/60 group-hover:text-accent" />
                                </div>
                                <div>
                                    <div className="text-xs text-white/40 uppercase tracking-wider">GitHub</div>
                                    <div className="text-white group-hover:text-accent transition-colors">amansarohadev</div>
                                </div>
                            </motion.a>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    <MapPin size={20} className="text-white/60" />
                                </div>
                                <div>
                                    <div className="text-xs text-white/40 uppercase tracking-wider">Location</div>
                                    <div className="text-white/80">Sonipat, Haryana, India</div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-transparent transition-all ${social.color}`}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-2xl"></div>

                            <div className="relative glass-card p-10 rounded-3xl border border-white/10">
                                <div className="relative z-10">
                                    <div className="text-center mb-8">
                                        <div className="w-16 h-16 rounded-full border-2 border-dashed border-accent/30 flex items-center justify-center mx-auto mb-4">
                                            <Send size={24} className="text-accent" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
                                        <p className="text-white/40 text-sm">I usually respond within 24 hours</p>
                                    </div>

                                    {/* Contact form */}
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {status.success && (
                                            <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm text-center">
                                                Message sent successfully!
                                            </div>
                                        )}
                                        {status.error && (
                                            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm text-center">
                                                {status.error}
                                            </div>
                                        )}
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-accent/50 transition-colors"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-accent/50 transition-colors"
                                        />
                                        <textarea
                                            rows={4}
                                            placeholder="Your Message"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            required
                                            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                                        />
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            disabled={status.loading}
                                            className="w-full py-4 bg-gradient-to-r from-accent to-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-accent/20 transition-all disabled:opacity-50"
                                        >
                                            {status.loading ? 'Sending...' : 'Send Message'}
                                            <ArrowUpRight size={18} />
                                        </motion.button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-32 pt-8 border-t border-white/5 max-w-6xl mx-auto relative z-10"
            >
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest">
                    <p>Aman © {new Date().getFullYear()}</p>
                    <p className="flex items-center gap-2">
                        Designed with ♥ & Cosmic Intelligence
                    </p>
                </div>
            </motion.footer>
        </section>
    );
};

export default Contact;
