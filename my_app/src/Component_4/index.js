import React, { Component } from 'react'
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://restcountries-v1.p.rapidapi.com/all',
  params: {from: 'SGD', to: 'MYR', q: '1.0'},
  headers: {
    'x-rapidapi-key': 'cfe9b35587msh1b32900c704735ep179212jsne00b260c2a60',
    'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com'
  }
};

export class index extends Component {

constructor(props) {
    super(props)

    this.state = {
         data : [],
         name:'',
         count:null,
         num:null
    }
    
}
componentDidMount() {

  axios.request(options)
  .then((response) => {
      
    if (response.data.length >0 ) {
      this.setState({
        data: response.data ,
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });
}
 
  
change = () =>{
  this.count=[Math.floor(Math.random() * 20)];
  this.setState({name:this.state.data[this.count].name})
  console.log(this.state.data);
}



select =()=>{
  this.setState({
    
    name:this.state.data[this.state.count].name})
  }

    render() {

        return (<div>
  <h1>Hello World</h1>
  <button onClick={this.change}>Click</button>
  <h1>{this.state.name}</h1>
  <button onClick={()=>this.setState({count:1})}>Aglend</button>
  <button onClick={()=>this.setState({count:2})}>Aruba</button>
  <button onClick={()=>this.setState({count:3})}>America</button>
  <button onClick={()=>this.setState({count:4})}>Arabia</button>
  <button onClick={this.select}>Get</button>
</div>
        )
    }
}

export default index
