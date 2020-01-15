import React from "react";

export default class CancelRequestButton extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ready: false,
            buttonState: props.state,
        }
    }

    /*async componentDidMount(){
        this.setState({
            buttonState: this.props.state,
        })
    }*/

    render(){
        
        if(this.state.buttonState === 'init'){
            return (
                <div>
                    <div className="BaseButton CancelRequestButton"> 
                        <h3>Execute Request</h3>
                    </div>
                </div>
        )} else if (this.state.buttonState === 'pending'){
            return (
                <div>
                    <div className="BaseButton CancelRequestButton">
                        <h3>mining...</h3>
                    </div>
                </div>
            )} else if (this.state.buttonState === 'mined') {
            return (
                <div>
                    <div className="BaseButton CancelRequestButton">
                        <h3>Successfully Canceled</h3>  
                    </div>
                </div>
            )}
        }
    }

    //onClick={() => this.cancelRequest()}>