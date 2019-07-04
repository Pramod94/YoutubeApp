import React from 'react';

class Search extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <input type="text"
                        value={this.props.search}
                        onChange={this.props.handleInput}
                    />
                </div>
                <div>
                    <button onClick={this.props.result}>Search</button>
                </div>
            </div>
        )
    }
}

export default Search;