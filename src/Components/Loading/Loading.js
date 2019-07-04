import React from 'react';
import './Spin.css';

function Loading(props){
    return(
        <div>
            {props.isLoading && 
            // <div className="lds-hourglass"></div>
            <div className="loader"></div>
            }
        </div>
    )
}

export default Loading;