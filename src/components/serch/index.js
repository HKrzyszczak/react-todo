import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        console.log('Wartość search: ' + this.search.value);
        this.search.value = '';
        event.preventDefault();

    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref={field => this.search = field}/>
                    <button>Szukaj</button>
                </form>
            </div>
        )
    }
}

export default Search;