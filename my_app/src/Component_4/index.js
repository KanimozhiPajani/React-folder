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
         visible:false,
         countries:false
    }
}

//Fetching data
componentDidMount() {
  axios.request(options)
  .then((response) => {
        this.setState({ data: response.data });
    })
  }
 
//Get the info of selected countries
getInfo =()=>{
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

  })
}

//Render
    render() {
       const {name,currencies,numbercode,timeZone,capital,population,visible,countries}=this.state
       const button = visible ? 'Select random Countries' : 'Title'

    return (
    <div>
      
        <button onClick={()=>{
              this.setState({ count:[Math.floor(Math.random() * 250)],
              visible:true,})}}>{button}</button>
  
        <button onClick={()=>{this.setState({countries:!countries})}}>Get contries list</button> 

        {visible ? 
        <div>
          <h1>Name:{name}</h1>
          <h1>Currency:{currencies}</h1>
          <h1>Numbercode:{numbercode}</h1>
          <h1>Timezone:{timeZone}</h1>
          <h1>Capital:{capital}</h1>
          <h1>Population:{population}</h1>
        </div>
        :null}

        {countries ? 
        <div>
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
        </div>:null}
  
  <button onClick={this.getInfo}>Get Information</button>
</div>
        )
    }
}

export default index
