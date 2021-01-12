import React, { Component } from 'react'


 class ImageCard extends Component {

    constructor(props) {
        super(props)
        this.state={
            spans : null
        }
    
        this.imageRef = React.createRef();
    }

    componentDidMount (){
        this.imageRef.current.addEventListener('load',this.setSpan)
    }
    setSpan = () =>{
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);
        this.setState({spans})
    }

    render() {
        return (
            <div style={{gridRowEnd:`span ${this.state.spans}`}} >
                <img 
                alt={this.props.image.description}
                src={this.props.image.urls.regular}
                ref={this.imageRef}
                />
            </div>
        )
    }
}

export default ImageCard
