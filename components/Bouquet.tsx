'use client';

import { motion } from 'framer-motion';
import { bouquetData } from '@/lib/bouquet-data';
import ProceduralFlower from './ProceduralFlower';
import { useState } from 'react';

export default function Bouquet() {
    const [bloomed, setBloomed] = useState(false);

    const playHeavenlyChord = () => {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContext) return;

        const ctx = new AudioContext();
        const now = ctx.currentTime;

        // C Major 7 chord/pad: C4, E4, G4, B4, C5
        const frequencies = [261.63, 329.63, 392.00, 493.88, 523.25];

        const masterGain = ctx.createGain();
        masterGain.connect(ctx.destination);
        masterGain.gain.setValueAtTime(0, now);
        masterGain.gain.linearRampToValueAtTime(0.3, now + 1); // Fade in
        masterGain.gain.exponentialRampToValueAtTime(0.01, now + 6); // Long fade out

        frequencies.forEach((freq, i) => {
            const osc = ctx.createOscillator();

            // Mix of sine (pure) and triangle (slightly fuller)
            osc.type = i % 2 === 0 ? 'sine' : 'triangle';
            osc.frequency.value = freq;

            // Add slight detuning for "chorus" effect
            const detune = Math.random() * 10 - 5;
            osc.detune.value = detune;

            const oscGain = ctx.createGain();
            oscGain.gain.value = 1 / frequencies.length;

            osc.connect(oscGain);
            oscGain.connect(masterGain);

            osc.start(now);
            osc.stop(now + 6.5);
        });
    };

    const speakMessage = () => {
        if (!window.speechSynthesis) return;

        const utterance = new SpeechSynthesisUtterance("Thora noor mily ga");
        utterance.rate = 0.8; // Slightly slower for effect
        utterance.pitch = 1.1; // Slightly higher/softer
        utterance.volume = 0.8;

        // Try to find a suitable voice
        const voices = window.speechSynthesis.getVoices();
        // Prefer a female voice or Hindi/Urdu if available, otherwise default
        const preferredVoice = voices.find(v => v.name.includes('Female') || v.lang.includes('hi') || v.lang.includes('ur'));
        if (preferredVoice) utterance.voice = preferredVoice;

        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="relative w-full h-[600px] flex items-center justify-center cursor-pointer" onClick={() => {
            setBloomed(true);
            playHeavenlyChord();
            setTimeout(speakMessage, 1500); // Delay slightly to sync with visual bloom
        }}>
            <motion.div
                className="relative flex items-end justify-center w-[400px] h-[500px]"
                initial="hidden"
                animate="visible"
            >
                {/* Pot/Wrapper/Ribbon could go here */}
                {/* Base Shadow for realism */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className="absolute bottom-0 w-32 h-4 bg-black/10 blur-xl rounded-[100%]"
                />

                {bouquetData.map((flower) => (
                    <ProceduralFlower
                        key={flower.id}
                        type={flower.type as any}
                        color={flower.color}
                        stemHeight={flower.stemHeight}
                        scale={flower.scale}
                        rotation={flower.rotation}
                        delay={flower.delay}
                    />
                ))}

                {/* Ribbon/Tie */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, duration: 0.8, type: "spring" }}
                    className="absolute bottom-[20px] w-12 h-8 bg-red-400 rounded-full z-50 shadow-lg"
                    style={{ boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
                >
                    <div className="absolute -left-2 top-2 w-4 h-8 bg-red-400 -rotate-45 rounded-sm" />
                    <div className="absolute -right-2 top-2 w-4 h-8 bg-red-400 rotate-45 rounded-sm" />
                </motion.div>
            </motion.div>

            {!bloomed && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute bottom-10 text-foreground/30 font-display italic tracking-widest text-sm mt-20"
                >
                    Growing for you...
                </motion.div>
            )}
        </div>
    );
}
