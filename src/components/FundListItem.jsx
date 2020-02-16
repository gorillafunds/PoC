import React from 'react';
import IOSStats from '../../media/ios-stats.svg';


export default class FundListItem extends React.Component{

    constructor(props){
        super(props);
       
        this.state = {
            className: "FundListItem"
        }
    }

    startAnimation(){
        console.log("loading");
        try{
            this.setState({
                className: "FundListItem Loading"
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
                    </div>
                    <div className="Placeholder FundListItemDiagramm" style={{display: `inline-block`, float: `right`}}>
                        <img src={IOSStats} alt="iostats_image" style={{imageRendering:`auto` }}/>
                    </div>
                </div>
            )}
}