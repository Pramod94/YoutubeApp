import React from 'react';

function MainVideo(props){
    return (
        <div>
            <iframe width="560" height="315" src={props.main}
                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
        </div>
    )
}
export default MainVideo;