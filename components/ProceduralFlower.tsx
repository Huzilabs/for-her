'use client';

import { motion } from 'framer-motion';

type FlowerType = 'rose' | 'tulip' | 'sunflower' | 'lily';

interface ProceduralFlowerProps {
    type: FlowerType;
    color: string;
    stemHeight: number;
    scale: number;
    delay: number;
    rotation: number;
}

const swayVariants = {
    animate: {
        rotate: [0, 2, 0, -2, 0],
        transition: {
            duration: 6,
            ease: "easeInOut" as const,
            repeat: Infinity,
            repeatType: "mirror" as const
        }
    }
};

export default function ProceduralFlower({
    type,
    color,
    stemHeight = 150,
    scale = 1,
    delay = 0,
    rotation = 0,
}: ProceduralFlowerProps) {

    // Stem Animation
    const stemVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1.5, delay: delay, ease: "easeInOut" as const }
        }
    };

    // Bloom Animation
    const bloomVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                delay: delay + 1.2, // Start blooming after stem grows
                type: "spring" as const,
                bounce: 0.4
            }
        }
    };

    // Leaf Animation
    const leafVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.8, delay: delay + 0.8, type: "spring" as const }
        }
    };

    const renderFlowerHead = () => {
        switch (type) {
            case 'rose':
                return (
                    <div className="relative w-16 h-16">
                        {/* Layers of petals for a rose look */}
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute inset-0 rounded-full border border-black/5"
                                style={{
                                    background: `radial-gradient(circle at 30% 30%, ${color}, #00000040)`,
                                    transform: `rotate(${i * 30}deg) scale(${1 - i * 0.05})`,
                                    zIndex: 20 - i,
                                    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2)'
                                }}
                            />
                        ))}
                        <motion.div
                            className="absolute inset-3 rounded-full bg-white/20 blur-sm z-30"
                        />
                    </div>
                );

            case 'tulip':
                return (
                    <div className="relative w-12 h-16 -translate-y-4">
                        {/* Left Petal */}
                        <div
                            className="absolute left-0 bottom-0 w-8 h-16 rounded-tl-full rounded-bl-lg bg-current opacity-90 origin-bottom-right transform -rotate-15"
                            style={{
                                background: `linear-gradient(to bottom right, ${color}, #00000030)`
                            }}
                        />
                        {/* Right Petal */}
                        <div
                            className="absolute right-0 bottom-0 w-8 h-16 rounded-tr-full rounded-br-lg bg-current opacity-90 origin-bottom-left transform rotate-15"
                            style={{
                                background: `linear-gradient(to bottom left, ${color}, #00000030)`
                            }}
                        />
                        {/* Center Petal */}
                        <div
                            className="absolute left-2 bottom-1 w-8 h-14 rounded-t-full bg-current opacity-100 z-10"
                            style={{
                                background: `linear-gradient(to bottom, ${color}, #00000010)`,
                                filter: 'brightness(1.1)'
                            }}
                        />
                    </div>
                );

            case 'sunflower':
                return (
                    <div className="relative w-20 h-20 flex items-center justify-center">
                        {/* Petals */}
                        {[...Array(16)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-4 h-10 rounded-full origin-bottom"
                                style={{
                                    backgroundColor: color,
                                    transform: `rotate(${i * 22.5}deg) translateY(-50%)`,
                                }}
                            />
                        ))}
                        {/* Center */}
                        <div className="absolute w-10 h-10 rounded-full bg-[#5c4033] z-10 border-2 border-[#4a332a]" />
                    </div>
                );

            default: // Generic/Lily-ish
                return (
                    <div className="relative w-16 h-16">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-6 h-16 left-5 top-0 rounded-[50%] origin-bottom"
                                style={{
                                    backgroundColor: color,
                                    transform: `rotate(${i * 72}deg) translateY(-50%)`,
                                }}
                            />
                        ))}
                        <div className="absolute inset-0 m-auto w-3 h-3 rounded-full bg-yellow-200 z-10" />
                    </div>
                );
        }
    };

    return (
        <motion.div
            className="absolute bottom-0 left-1/2 origin-bottom"
            style={{
                height: stemHeight + 60, // Total height container
                width: 100, // Container width
                marginLeft: -50,
                scale,
                rotate: rotation,
                zIndex: Math.floor(scale * 10)
            }}
        >
            <div className="relative w-full h-full flex flex-col items-center justify-end">
                {/* Flower Head */}
                <motion.div
                    variants={bloomVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute top-0 z-20 origin-bottom"
                    style={{ filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.1))' }}
                >
                    <motion.div variants={swayVariants} animate="animate">
                        {renderFlowerHead()}
                    </motion.div>
                </motion.div>

                {/* Stem SVG */}
                <svg
                    width="100"
                    height={stemHeight}
                    viewBox={`0 0 100 ${stemHeight}`}
                    className="overflow-visible absolute bottom-0"
                >
                    {/* Main Stem - simple curve or straight line based on rotation roughly */}
                    <motion.path
                        d={`M 50 ${stemHeight} Q ${50 + (rotation / 2)} ${stemHeight / 2} 50 0`}
                        fill="transparent"
                        stroke="#4a7c59"
                        strokeWidth="4"
                        strokeLinecap="round"
                        variants={stemVariants}
                        initial="hidden"
                        animate="visible"
                    />

                    {/* Leaves attached to stem */}
                    <motion.path
                        d={`M 50 ${stemHeight * 0.6} Q 30 ${stemHeight * 0.5} 20 ${stemHeight * 0.4}`}
                        fill="transparent"
                        stroke="#4a7c59"
                        strokeWidth="0" // Filled leaf logic below instead? Or thick stroke
                    />
                </svg>

                {/* Leaves (DOM elements for easier animation) */}
                <motion.div
                    variants={leafVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute w-8 h-4 bg-[#4a7c59] rounded-tr-full rounded-bl-full origin-bottom-right"
                    style={{ bottom: stemHeight * 0.4, left: 'calc(50% - 32px)', rotate: '-20deg' }}
                />
                <motion.div
                    variants={leafVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute w-8 h-4 bg-[#4a7c59] rounded-tl-full rounded-br-full origin-bottom-left"
                    style={{ bottom: stemHeight * 0.6, left: '50%', rotate: '20deg' }}
                />
            </div>
        </motion.div>
    );
}
