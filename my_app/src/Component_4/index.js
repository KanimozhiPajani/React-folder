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
         value:[],
         name:'',
         count:null,
         currencies:'',
         capital:'',
         numbercode:null,
         timeZone:null,
         population:null,
         visible:false
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
  this.count=[Math.floor(Math.random() * 250)];
  const {name,currencies,capital,numericCode,timezones,population,visible}=this.state.value
  this.setState({
    value:this.state.data[this.count],
    visible:true,
    name:name,
    currencies:currencies,
    capital:capital,
    numbercode:numericCode,
    timeZone:timezones,
    population:population  ,
  
  })
    console.log(this.state.data);
}



select =()=>{
const {name,currencies,capital,numericCode,timezones,population}=this.state.value
  
  this.setState({
    
  value:this.state.data[this.state.count],
  visible:true,
  name:name,
  currencies:currencies,
  capital:capital,
  numbercode:numericCode,
  timeZone:timezones,
  population:population,
  visible:true
  })
  }

    render() {
const {name,currencies,numbercode,timeZone,capital,population,visible}=this.state
const button = visible ? 'Select random Countries' : 'Click'
        return (<div>
  <h1>Hello World</h1>
  <button onClick={this.change}>{button}</button>
  
  
{visible ? 
  <div>
  <h1>Name:{name}</h1>
  <h1>Currency:{currencies}</h1>
  <h1>Numbercode:{numbercode}</h1>
  <h1>Timezone:{timeZone}</h1>
  <h1>Capital:{capital}</h1>
  <h1>Population:{population}</h1>
  </div>
  :null
}

  <button onClick={()=>this.setState({count:0})}>Afghanistan</button>
  <button onClick={()=>this.setState({count:1})}>Åland Islands</button>
  <button onClick={()=>this.setState({count:144})}>Mexico</button>
  <button onClick={()=>this.setState({count:185})}>Russia</button>
  <button onClick={()=>this.setState({count:202})}>Singapore</button>
  <button onClick={()=>this.setState({count:104})}>India</button>
  <button onClick={()=>this.setState({count:17})}>Bahrain</button>
  <button onClick={()=>this.setState({count:48})}>China</button>
  <button onClick={()=>this.setState({count:112})}>Italy</button>
  <button onClick={()=>this.setState({count:114})}>Japan</button>
  
  <button onClick={this.select}>Get</button>
</div>
        )
    }
}

export default index
