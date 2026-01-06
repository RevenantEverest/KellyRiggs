import type { RefAttributes } from 'react';
import LiteYouTubeEmbed, { type LiteYouTubeProps } from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

function YouTubePlayer(props: LiteYouTubeProps & RefAttributes<HTMLIFrameElement>) {

    return(
        <LiteYouTubeEmbed {...props} />
    );
};

export default YouTubePlayer;