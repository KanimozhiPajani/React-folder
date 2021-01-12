import React, { Component } from 'react'

 class SearchBar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             value : ''
        }
    }
    

    change = (e) => {
        this.setState({
       value : e.target.value})
    }
    formSubmit = (e) => {
        e.preventDefault();
        this.props.onSumbit(this.state.value);
    }

    render() {
        return (
            <div>
               <form onSubmit={this.formSubmit}>
                   <label>Search</label>
                   <input type='text'
                    placeholder='Search here'
                    onChange={this.change} />
               </form> 
            </div>
        )
    }
}

export default SearchBar
