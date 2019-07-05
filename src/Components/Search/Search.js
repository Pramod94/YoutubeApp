import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import play from '/home/pramod/React/youtube_app/src/Components/Images/youtube-play.jpg'
import './SearchStyle.css';


function Search(props) {
    return (
        <div className="search">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search here..."
                    value={props.search}
                    onChange={props.handleInput} />

                <div className="input-group-append">
                    <button className="btn btn-outline-success" type="button"
                        onClick={props.result}>
                        {/* <img src={play} alt="search" width="40px" height="24px"/> */}
                        Search
                        </button>
                </div>
            </div>
        </div>
    )
}

export default Search;