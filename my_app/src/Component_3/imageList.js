import React, { Component } from 'react'
import ImageCard from './imageCard';

const ImageList = props => {
    const images = props.image.map((image) => {
        return <ImageCard image={image} key={image.id} />
    });
    return <div>{images}</div>
    
};

export default ImageList
