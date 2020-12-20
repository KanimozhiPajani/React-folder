import React, { Component } from 'react'
import Para_1 from './Para_1';
import Para_2 from './Para_2';
import Para_4 from './Para_4';
import Para_3 from './Para_3';
import Content from './Content';



export class RandomNamePicker extends Component {
  render() {
    return (
      <div className='color'>
                <Para_4 />
                <Para_3 />
                <Content />
                <Para_1 />
                <Para_2 />
      </div>
    )
  }
}

export default RandomNamePicker
