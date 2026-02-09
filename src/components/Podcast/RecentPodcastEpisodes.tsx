"use client"

import type { YouTubeFeed } from '@/types/youtubeFeed';

import { Button } from '@/components/ui/button';

import { FaArrowRightLong, FaMicrophoneLines } from 'react-icons/fa6';
import { useQuery } from '@tanstack/react-query';

import PodcastEpisode from './PodcastEpisode';

import { getYouTubeRecentYouTubeVideos } from '@/services/internal';
import { QUERY_KEYS, SOCIAL_LINKS } from '@/constants';
import { MotionFadeIn } from '@/components/common';

function RecentPodcastEpisodes() {

    const query = useQuery({
        queryKey: [QUERY_KEYS.YOUTUBE_FEED],
        queryFn: getYouTubeRecentYouTubeVideos
    });

    const renderVideos = (feed: YouTubeFeed) => {

        const entries = feed.entry.filter((entry) => {
            return !entry.title.split(" ").includes("#shorts");
        });

        return [entries[0], entries[1], entries[2]].map((item) => (
            <PodcastEpisode key={`podcast-episode-${item.id}`} episode={item} />
        ));
    };

    return(
        <div className="flex flex-col justify-center items-center gap-20">
            <MotionFadeIn>
                <div className="flex flex-col gap-3 items-center justify-center text-center">
                    <FaMicrophoneLines className="text-7xl mb-4" />
                    <h1 className="text-5xl font-bold">The Sales <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">[UN]</span>Training Podcast</h1>
                    <p className="font-semibold text-xl text-muted">Take a look at some of the recent episodes!</p>
                </div>
            </MotionFadeIn>
            <MotionFadeIn>
                <div className="flex flex-col lg:flex-row gap-5 w-full items-center justify-center">
                    {query.data && renderVideos(query.data.feed)}
                </div>
            </MotionFadeIn>
            <MotionFadeIn>
                <div className="flex gap-5 items-center">
                    <p className="font-semibold text-lg">Want to see more?</p>
                    <a href={SOCIAL_LINKS.YOUTUBE} target="_blank" rel="noopener noreferrer">
                        <Button>
                            Check Out The Full Channel
                            <FaArrowRightLong />
                        </Button>
                    </a>
                </div>
            </MotionFadeIn>
        </div>
    );
};

export default RecentPodcastEpisodes;