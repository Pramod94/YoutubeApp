import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function Search(props){
    return (
        <div>
            <div>
                <input type="text"
                    value={props.search}
                    onChange={props.handleInput}
                />
            </div>
            <div>
                <button onClick={props.result}>Search</button>
            </div>
        </div>
    )
}

export default Search;