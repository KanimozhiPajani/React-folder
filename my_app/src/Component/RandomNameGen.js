import React, { Component } from 'react'
import { Spinner } from 'react-bootstrap';
import './Style.css'

const names = [
    'Yoda',
    'Jack Sparrow',
    'Captain Kirk',
    'Spock',
    'Optimus Prime',
    'Gandalf',
    'Olivia',
    'Ethan',
    'Evelyn',
    'William',
    'Charlotte',
    'Sophia',
    'Elijah',
    'Noah',
    'Mia',
    'Emma',
    'Liam'
];

class RandomNameGen extends Component{
    constructor() {
        super()
        this.state ={
            message: 'Select winner',
            person:'',
            SpinNo:null
        }
    }

    handler() {
        this.spinNo=[Math.floor(Math.random() * names.length)];
        this.setState (
            {
                message:'Again!',
                person:names[this.spinNo]
            }
        )
    }
    
    render()
    {
        return (
        <div>
            <h1 className='mt-3 title'>Random name generator</h1>
            <img src='https://spinthewheel.app/assets/images/preview/numbers-1--100.png' className="App-logo" alt="logo" />
             
             <h3 className='mt-3'> { this.state.message }</h3>
             <h5 className='text-muted'>To pick the random winner press the spin button</h5>
             <button onClick={() =>this.handler()} className='pl-4 pr-4 button mt-3'>Spin</button>


             <div className='flex pt-4'>
             <h3 className='winner '>{this.state.person}</h3>
             </div>

        </div>
        )
    }
}
export default RandomNameGen