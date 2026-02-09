"use client"

import type { YouTubeFeedEntry } from '@/types/youtubeFeed';

import { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa6';
import dayjs from 'dayjs';

import { YouTubePlayer } from '@/components/common';
import { FaRegCalendar } from 'react-icons/fa6';

interface PodcastEpisodeProps {
    episode: YouTubeFeedEntry
};

function PodcastEpisode({ episode }: PodcastEpisodeProps) {

    const player = useRef<HTMLIFrameElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const videoId = episode.id.split(":")[2];

    useEffect(() => {
        if(!player.current) {
            return;
        }

        console.log(player);
    }, [player]);

    return(
        <div className="bg-card-light rounded-lg h-100 flex-1">
            <div className="flex flex-col gap-8">
                <div className="relative group duration-300" onClick={() => {
                    console.log(isPlaying);
                    setIsPlaying(!isPlaying);
                }}>
                    <div className="flex opacity-0 group-hover:opacity-100 duration-300 absolute top-0 h-full w-full z-100! bg-black/40 items-center justify-center pointer-events-none">
                        <div className="bg-card-light rounded-full text-4xl text-text py-5 px-5 hover:cursor-pointer">
                        {
                            isPlaying ?
                            <FaPause /> :
                            <FaPlay />
                        }
                        </div>
                    </div>
                    <YouTubePlayer
                        ref={player}
                        wrapperClass="container-layout aspect-video bg-cover block relative bg-position-[50%] rounded-t-lg h-60 w-full"
                        iframeClass="relative bg-position-[50%] rounded-t-xl w-full h-64 -top-7"
                        id={videoId}
                        title={episode.title}
                    />
                </div>
                <div className="px-2 flex flex-col gap-4 layout aspect-video">
                    <h1 className="text-text font-semibold text-lg">{episode.title}</h1>
                    <div className="flex gap-2 items-center">
                        <FaRegCalendar className="text-secondary" />
                        <p className="text-accent font-semibold">
                            {dayjs(episode.published).format("MMMM D, YYYY")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PodcastEpisode;