'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { flowers, Flower } from '@/lib/data';
import FlowerCard from './FlowerCard';
import { X } from 'lucide-react';
import Image from 'next/image';

export default function Gallery() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const selectedFlower = flowers.find(f => f.id === selectedId);

    return (
        <section className="py-20 px-4 md:px-8 bg-[#fdfcf8]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display mb-4">In Bloom</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {flowers.map((flower, index) => (
                        <FlowerCard
                            key={flower.id}
                            flower={flower}
                            index={index}
                            onSelect={() => setSelectedId(flower.id)}
                        />
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && selectedFlower && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
                            />
                            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                                <motion.div
                                    layoutId={`card-${selectedFlower.id}`}
                                    className="bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl flex flex-col md:flex-row pointer-events-auto"
                                >
                                    <motion.div
                                        layoutId={`image-${selectedFlower.id}`}
                                        className="relative w-full md:w-1/2 h-64 md:h-auto"
                                    >
                                        <Image
                                            src={selectedFlower.imageUrl}
                                            alt={selectedFlower.name}
                                            fill
                                            className="object-cover"
                                        />
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                            className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/40 transition-colors md:hidden"
                                        >
                                            <X size={24} />
                                        </button>
                                    </motion.div>

                                    <div className="p-8 md:p-12 w-full md:w-1/2 flex flex-col justify-center bg-white relative">
                                        <button
                                            onClick={() => setSelectedId(null)}
                                            className="absolute top-6 right-6 text-foreground/40 hover:text-foreground transition-colors hidden md:block"
                                        >
                                            <X size={24} />
                                        </button>

                                        <motion.div layoutId={`info-${selectedFlower.id}`}>
                                            <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-2">
                                                {selectedFlower.name}
                                            </h2>
                                            <p className="text-lg text-primary italic font-serif mb-6">
                                                {selectedFlower.scientificName}
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <p className="text-foreground/70 leading-relaxed mb-8">
                                                {selectedFlower.description}
                                            </p>

                                            <div className="flex items-center space-x-4 text-sm text-foreground/50">
                                                <div
                                                    className="w-8 h-8 rounded-full border border-gray-200"
                                                    style={{ backgroundColor: selectedFlower.color }}
                                                />
                                                <span>Dominant Color</span>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
