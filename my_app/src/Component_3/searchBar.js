import React, { Component } from 'react';
import './style.css';

class SearchBar extends Component {
constructor(props) {
    super(props)

    this.state = {
         searched : ''
    }
}
change =(event) =>{
    this.setState(
        {
        searched : event.target.value
        }
    )
}

changeSub=(event)=>{
    event.preventDefault();
    this.props.onSubmit(this.state.searched);
}

    render() {
        return (
           
            <div className='ui segment '>
                <form onSubmit = {this.changeSub}>
                <div className = 'field bg'>

                <input type='text' className='textarea'
                value={this.state.searched}
                onChange={this.change} 
                placeholder='search'/>
         
               </div>
               </form>
            </div>
          
        )
    }
}

export default SearchBar
