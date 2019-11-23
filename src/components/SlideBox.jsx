import React from 'react';
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

export default class SlideBox extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
        <div className="slider-background">
            <SlideDown className={'my-dropdown-slidedown'}>
                {this.props.open ? this.props.children : null}
            </SlideDown>
        </div>
        )
    }
  }