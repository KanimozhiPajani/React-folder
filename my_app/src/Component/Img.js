import React, { Component } from 'react'
import './Style.css';

export class Img extends Component {
    render() {
        return (
            <div >
                <img src="https://www.thebalanceeveryday.com/thmb/BgK5TCxHFPlGIuap3tmKwtgQsKw=/3500x2333/filters:fill(auto,1)/Random-Drawing-by-Materio-GettyImages-95442265-5b4ba4ff46e0fb00378f364a.jpg" 
                alt='image' 
                className='image p-4'></img>
            </div>
        )
    }
}

export default Img
