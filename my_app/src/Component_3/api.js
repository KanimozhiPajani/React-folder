import React, { Component } from 'react'
import SearchBar from './searchBar'
import axios from 'axios';

export class Api extends Component {

onSumbit  (term) {
    axios.get('https://api.unsplash.com/search/photos',{
        params:{query:term},
        headers:{Authorization:'Client-ID _julpuoRzF2I4AYywaA8b7HmzVadYGNaBoLq7Rge7GY'}
    });
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
