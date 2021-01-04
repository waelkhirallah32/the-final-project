import React from 'react';
import video from '../../src/videos/video.mp4';
function Hero(){
    return (
        <div>
            <video className="video"autoPlay loop muted src={video} type='video/mp4'/>
        </div>
    )
}


export default Hero;