import React from 'react';
import IOSStats from '../../media/ios-stats.svg';


export default class FundListItem extends React.Component{

    constructor(props){
        super(props);
       
        this.state = {
            className: "FundListItem",
            message: ""
        }
        this.startAnimation = this.startAnimation.bind(this);
    }

    startAnimation(event){
        //event.preventDefault();
        console.log("loading");
        try{
            this.setState({
                className: "FundListItem Loading",
                message: "Loading. We are fetching all necessary data"
            })
        } catch {
            console.log("Test");
        }
    }

    render(){
        
        return(
                <div className={this.state.className} onClick={this.startAnimation}>
                    <div className="FundListItemName" style={{display:`inline-block`, float: `left`}}>
                        <h5>{this.props.name}</h5> 
                        <h6>Contract Address: {this.props.id}</h6>
                        <br/>
                        <h6>{this.state.message}</h6>
                    </div>
                    <div className="Placeholder FundListItemDiagramm" style={{display: `inline-block`, float: `right`}}>
                        <img src={IOSStats} alt="iostats_image" style={{imageRendering:`auto` }}/>
                    </div>
                </div>
            )}
}