import React from 'react';

function Loading(props){
    return(
        <div>
            {props.isLoading && 
            <div>
                Loading...
            </div>
            }
        </div>
    )
}

export default Loading;