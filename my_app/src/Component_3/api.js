import React, { Component } from 'react'
import SearchBar from './searchBar'

export class Api extends Component {

onSumbit = (term) => {
    console.log(term);
}

    render() {
        return (
            <div>
              <SearchBar onSumbit={this.onSumbit} />  
            </div>
        )
    }
}

export default Api
