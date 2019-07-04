import React from 'react';
import './MainVideo.css'

function MainVideo(props) {
    return (
        <div className="mainVideo">
            <iframe width="1000" height="400" src={props.main} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
        </div>
    )
}
export default MainVideo;