import React from 'react';
import ReactPlayer from 'react-player';
import './mediaPlayer.css';


export const MediaPlayer = ({addLinkVideo, setshowVideoPlyer, showVideoPlyer}) => {
    const { videoUrl } = addLinkVideo;

    return (
        <div className="page__meadia__video-player">
            <div className="page__meadia__video-player__content">
                <div className="page__meadia__video-player__btn-close">
                    <button onClick={() => setshowVideoPlyer(!showVideoPlyer)}>Close</button>
                </div>
                < ReactPlayer className="page__media__player"
                    width={"80vw"}
                    height={"60vh"}
                    url={videoUrl} 
                    controls={true} 
                    light={true} 
                />
            </div>
        </div>
    )
} 