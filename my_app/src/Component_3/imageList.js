import React, { Component } from 'react'
import ImageCard from './imageCard';
import './style.css'

const ImageList = props => {
    const images = props.image.map((image) => {
        return <ImageCard image={image} key={image.id} />
    });
    return <div className={'image'}>{images}</div>
    
};

export default ImageList
