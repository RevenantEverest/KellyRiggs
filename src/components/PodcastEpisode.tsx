import type { YouTubeFeedEntry } from '@/types/youtubeFeed';

import dayjs from 'dayjs';
import { YouTubePlayer } from '@/components/common';

interface PodcastEpisodeProps {
    episode: YouTubeFeedEntry
};

function PodcastEpisode({ episode }: PodcastEpisodeProps) {

    const videoId = episode.id.split(":")[2];

    return(
        <div className="bg-card-light rounded-lg h-100 flex-1">
            <div className="flex flex-col gap-8">
                <YouTubePlayer
                    id={videoId}
                    title={episode.title}
                />
                <div className="px-2 flex flex-col gap-4">
                    <h1 className="text-text font-semibold text-lg">{episode.title}</h1>
                    <p className="text-accent font-semibold">{dayjs(episode.published).format("MMMM D, YYYY")}</p>
                </div>
            </div>
        </div>
    );
};

export default PodcastEpisode;