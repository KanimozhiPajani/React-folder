import React, { Component } from 'react'

 class SearchBar extends Component {
constructor(props) {
    super(props)

    this.state = {
         searched:''
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
            <div>
                <form onSubmit={this.changeSub}>
                <input type='text' 
                value={this.state.searched} onChange={this.change}  placeholder='search'/>
                <button>Sumbit</button>
                </form>
                
            </div>
        )
    }
}

export default SearchBar
