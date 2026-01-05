/*

    Be careful in this hook, since Remix renders components server-side
    it has no concept of the "window" definition.

    The current workaround is to only access "window" in useEffect hooks
    since those only run on the client

*/
"use client"

import { useEffect, useState } from 'react';

export interface Dimensions {
    width: number,
    height: number
};

function useWindowDimensions(): Dimensions {
    const [dimensions, setDimension] = useState<Dimensions>({
        width: 0,
        height: 0
    });

    useEffect(() => {
        const updateDimensions = () => {
            setDimension({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);

        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    return dimensions;
};

export default useWindowDimensions;