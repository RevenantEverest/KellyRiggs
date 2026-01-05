"use client"

import type { PropsWithChildren } from 'react';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

import { useWindowDimensions } from '@/hooks';

interface MarqueeProps {
    gapBetween?: number,
    speed?: number
};

function Marquee({ children, gapBetween=0, speed=20 }: PropsWithChildren<MarqueeProps>) {

    const marquee = useRef<HTMLDivElement | null>(null);
    const dimensions = useWindowDimensions();

    const [marqueeWidth, setMarqueeWidth] = useState(0);
    const [marqueeSpeed] = useState(speed);

    const duplicateChildren = new Array(3).fill(children);

    useEffect(() => {
        if(global.window !== undefined) {
            setMarqueeWidth(marquee.current?.scrollWidth ?? 0);
        }
    }, [dimensions]);

    const renderElements = () => {
        return duplicateChildren.map((child, index) => (
            <div key={index} className="shrink-0" style={{ padding: `0 calc(var(--spacing) * ${gapBetween / 2}) 0 calc(var(--spacing) * ${gapBetween / 2})` }}>
                {child}
            </div>
        ));
    };

    return(
        <motion.div className="overflow-hidden">
            <motion.div
                ref={marquee}
                animate={{
                    x: [0, -(marqueeWidth) / 3],
                    scale: 1,
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear',
                    duration: marqueeSpeed,
                }}
                className={`flex z-20`}
            >
                {renderElements()}
            </motion.div>
        </motion.div>
    );
};

export default Marquee;