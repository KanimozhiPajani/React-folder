import React, { Component } from 'react';
import Display from './display';
import Spinner from './spinner';

class Location extends Component {
    constructor(props) {
        super(props)
    
       this.state = {
             lat : null,
             err : ''
        };
    }

    componentDidMount () {

       window.navigator.geolocation.getCurrentPosition(
           position => this.setState({lat : position.coords.latitude},
               console.log(position)),
           err => this.setState({err : err.message})
       );
       
   }

   renderContent() {
       if(this.state.err && !this.state.lat){
           return<div className={'error'}>Error:{this.state.err}</div>
       }
       if(!this.state.err && this.state.lat){
        return <Display lat = {this.state.lat} />
       }
       else{
       return <Spinner message='Loading...' />
       }
   }
    
   render() {
       return (
           <div>
           {this.renderContent()}
           </div>
       )
   }
}

export default Location
