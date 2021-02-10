import React, { Component } from 'react'
import axios from 'axios';
import './style.css'

//Api
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

state = {
         data : [],//info of 250 
         value:[],//info of selected index
         //needed info
         name:'',
         count:null,
         currencies:'',
         capital:'',
         numbercode:null,
         timeZone:null,
         population:null,
         //display
         countries:false,
         info:false,
         list:false
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
const {name,currencies,capital,numericCode,timezones,population}=this.state.value;
const {data,count} = this.state

  this.setState({
  value:data[count],
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
       const {name,currencies,numbercode,timeZone,capital,population,visible,countries,info,list}=this.state
       const button = visible ? 'Select random Countries' : 'Get start'

    return (
    <div>

      {/*Header*/}
      <nav className='nav'>
        <img src="https://www.wbdc.org/wp-content/uploads/2016/05/att_globe_rgb_pos.png" 
        width='100px' height='90px' 
        className="logo"/>
      </nav>

      {/*Text*/}
      <h2 className='mt-7 text'>Get information about countries </h2>
      
      {/*Random selector*/}
        <button onClick={()=>{
              this.setState({ count:[Math.floor(Math.random() * 250)],
              visible:true,info:true,list:true})}}
              className='button mt-4'>{button}</button>

      {/*Countries list*/}
        {list ?
        <button onClick={()=>{this.setState({countries:!countries})}}
        className='button ml-4'>Get countries list</button>
        : null} 

      {/*Rendering fetched data*/}
        {visible ? 
        <div className='mt-5 mb-2'>
          <h2>Name : {name}</h2>
          <h3>Capital : {capital}</h3>
          <h3>Currency : {currencies}</h3>
          <h3>Population : {population}</h3>
          <h3>Numbercode : {numbercode}</h3>
          <h3>Timezone : {timeZone}</h3>
        </div>
        :null}

     {/*List*/}
        {countries ? 
        <div onClick={()=>{this.setState({info:true})}} className='button1'>
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

      {/*Getting info*/}
        {info ? 
           <button onClick={this.getInfo}
            className='button mt-5'>Get Information</button>:null}

      {/*Steps*/}
        <div className='mt-5 text br-2 '>
          <h3>STEPS:</h3>
          <h4>1. Click the button "Get start" to start the application</h4>
          <h4>2. To get  randomly selected countries "Select random countries" </h4>
          <h4>3. To get info about specific countries select "countries list"</h4>
          <h4>4. Double click "Get info" button</h4>
        </div>

</div>
        )
    }
}

export default index
