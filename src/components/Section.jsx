import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, id, className = "" }) => (
    <section id={id} className={`slide-section ${className}`}>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-6xl w-full"
        >
            {children}
        </motion.div>
    </section>
);

export default Section;
