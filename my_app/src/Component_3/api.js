import React, { Component } from 'react'
import SearchBar from './searchBar';
import unsplash from './Api/unSplash';
import ImageList from './imageList';

 class Api extends Component {
     state={
         image:[]
     }

    onSubmit = async term =>{
     const response = await unsplash.get('search/photos',{
            params:{query:term}
        });
        this.setState({
            image:response.data.results
        })
    }  

    render() {
        return (
            <div>
             <SearchBar onSubmit={this.onSubmit}/> 
             <ImageList image={this.state.image} />  
            </div>
        )
    }
}

export default Api
