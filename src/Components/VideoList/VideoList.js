import React from 'react';

function Video(props) {
    return (
        <div onClick={props.changeUrl}>
            <iframe width="300" height="150" src={props.list}
                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
            </iframe>
        </div>
    )
}

//@function : VideoList : Lists the Videos on search 

function VideoList(props) {

    return (
        <div>
            {
                props.list.map((res, index) => { return index > 0 && <Video key={res} list={res} /> }

                )
            }
        </div>
    )
}

export default VideoList;