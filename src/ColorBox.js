import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const newOpacity = this.props.opacity - 0.1;
    console.log(this.props)
    if (this.props.opacity >= 0.2){
      return (
        <div className="color-box" style={{opacity: newOpacity + 0.1}}>
          <ColorBox opacity={newOpacity}/>
        </div>
      )
    }
    else {
      return null
    }
  }

}
