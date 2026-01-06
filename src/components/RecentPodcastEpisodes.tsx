"use client"

import type { YouTubeFeed } from '@/types/youtubeFeed';

import { Button } from '@/components/ui/button';

import { FaArrowRightLong } from 'react-icons/fa6';
import { useQuery } from '@tanstack/react-query';

import PodcastEpisode from './PodcastEpisode';

import { getYouTubeRecentYouTubeVideos } from '@/services/internal';
import { QUERY_KEYS } from '@/constants';
import { MotionFadeIn } from './common';

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
                <h1 className="text-5xl font-bold">Recent Podcast Episodes</h1>
            </MotionFadeIn>
            <MotionFadeIn>
                <div className="flex gap-5 w-full items-center justify-center">
                    {query.data && renderVideos(query.data.feed)}
                </div>
            </MotionFadeIn>
            <MotionFadeIn>
                <div className="flex gap-5 items-center">
                    <p className="font-semibold text-lg">Want to see more?</p>
                    <Button>
                        Check Out The Full Channel
                        <FaArrowRightLong />
                    </Button>
                </div>
            </MotionFadeIn>
        </div>
    );
};

export default RecentPodcastEpisodes;