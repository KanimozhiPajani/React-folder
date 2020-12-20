import React, { Component } from 'react';
import { Row,Col } from 'react-bootstrap'
import Img from './Img'
import Img_2 from './Img_2';

class Content extends React.Component {
    constructor(props) {
      super(props);
//Declaration
      this.state = {
       value: '',
       array:[],
       visible:true,
       spin:false,
       enter:false,
       remove:false
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
    }
 
    //textArea on change
    handleChange(event) { this.setState({value: event.target.value});
     this.state.enter=true };
    
    // On Submiting
    handleSubmit(event) {
      if(this.state.enter){
      this.setState( { array : this.state.value.split(',')} );
      this.state.spin=true}
      else{
        alert('Enter the names');
      }
      event.preventDefault(); };

    //Start spinning
      spinning(){
      if(this.state.spin){
       this.setState( {visible: !this.state.visible});
       this.state.remove = true}
      };

    // to remove Selected name
      remove(WinnerName){
      if(this.state.remove){ var newArray = this.state.array.filter((ii)=>
          { return ii != WinnerName })};
  
      this.setState({array:newArray})
      this.state.remove = false
      this.state.visible = true
      console.log(WinnerName);
      };


    render() {
      
    //Destructring
      const winnerNumber =  this.count=[Math.floor(Math.random() * this.state.array.length)];
      const value = this.state.value;
      const array = this.state.array;
      const visible = this.state.visible;
      const WinnerName = this.state.array[winnerNumber];
      const enter =this.state.enter;
      const buttonName = visible ? 'Start' :'Pick another name/winner' ;

      return (
<div>

      {visible ? 
//Content to be displayed when visible = true
                <div className='first '> 
                  <h3 className='pt-5'>NAME PICKER OPTIONS</h3>
                  <h5  className='pt-2'>ADD NAMES/ENTRIES</h5>
                  <h5  className='pt-2'>Each name should be added on a new line or separated by comma</h5>
                  <form onSubmit={this.handleSubmit}  className='pt-5 '>
                    <input type ='textarea' value={value} onChange={this.handleChange}  className='textarea' />  
                    <br/>            
                    <button type="submit" className='buttonEnter mb-5'>Enter</button>
                  </form>
                </div> 

                :
//Content to be displayed when visible = false                
                <div>  
                  {array.length > 0 ? 
                  <div>
                    <h1 className='winnerName pt-5'>{WinnerName}</h1>
                    <Img_2 />
                    <button onClick={()=>this.remove(WinnerName)} className='buttonEnter mb-5'>Remove selected name from list</button>
                  </div>
                  :
                  visible=true} 
               </div>}
{/*End of  visible*/}

{/*Content to be displayed of spin */}
               <div>
                 { array.length>0 ?
                    <Row className='row'>
                         <Col md='6' sm='12'className='col_2 p-5'>
                            {array.map((item) => <h4 className='item'>{item}{'\n'}</h4>)}
                         </Col>
                         <Col md='6' sm='12'className='col_1 pt-5'>
                             <button onClick={() => this.spinning() }className='buttonEnter mb-5' >{buttonName}</button>
                             {visible ? <Img />:null}
                         </Col>
                    </Row>:null}
                </div>

</div>
      );
    }
  }
  export default Content