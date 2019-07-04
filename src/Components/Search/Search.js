import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './SearchStyle.css';


function Search(props) {
    return (
        <div className="search">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search here..."
                    value={props.search}
                    onChange={props.handleInput} />

                <div className="input-group-append">
                    <button className="btn btn-outline-primary" type="button"
                        onClick={props.result}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Search;