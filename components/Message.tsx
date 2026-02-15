'use client';

import { motion } from 'framer-motion';

export default function Message() {
    return (
        <div className="text-center px-4 mt-10 space-y-2">


            <motion.p
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 2.2, duration: 1.2, ease: 'easeOut' }}
                className="text-foreground/80 italic font-display text-2xl md:text-3xl max-w-lg mx-auto leading-relaxed"
            >
                thora noor mily ga           </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.2, duration: 0.9, ease: 'easeOut' }}
                className="text-foreground/50 italic font-serif text-sm tracking-widest"
            >
                — huzi
            </motion.p>

        </div>
    );
}