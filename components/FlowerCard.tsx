'use client';

import { motion } from 'framer-motion';
import { Flower } from '@/lib/data';
import Image from 'next/image';

interface FlowerCardProps {
    flower: Flower;
    index: number;
    onSelect: (flower: Flower) => void;
}

export default function FlowerCard({ flower, index, onSelect }: FlowerCardProps) {
    return (
        <motion.div
            layoutId={`card-${flower.id}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => onSelect(flower)}
            className="group cursor-pointer"
        >
            <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-gray-100 mb-4">
                <motion.div
                    layoutId={`image-${flower.id}`}
                    className="w-full h-full"
                >
                    <Image
                        src={flower.imageUrl}
                        alt={flower.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </motion.div>

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <motion.div layoutId={`info-${flower.id}`}>
                <h3 className="text-xl font-display font-medium text-foreground group-hover:text-primary transition-colors">
                    {flower.name}
                </h3>
                <p className="text-sm text-foreground/50 italic font-serif">
                    {flower.scientificName}
                </p>
            </motion.div>
        </motion.div>
    );
}
