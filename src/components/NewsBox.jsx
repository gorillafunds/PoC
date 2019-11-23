import React from "react";
import { hasProvider, getWeb3, getAccount } from '../web3/melonweb3';
import Web3Address from '../components/Web3Address';
import SlideBox from '../components/SlideBox';

export default class NewsBox extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            open: false,
            ready: true,
            inactive: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount(){
        console.log(this.props);
        //this.env = await getWeb3();
        this.setState({
            accountAddress: await getAccount()
        });
        if(this.props.case === "MetamaskAlert"){
            this.setState({
                open: true,
                ready: true,
                inactive: false
            })
        }
    }

    handleClick(){
        console.log(this.state);
        this.setState({
                    open: false,
                    inactive: true
                })
        console.log(this.state);
        }

    getContent(){
        if(false){
            return(<div></div>)
        } else {
                console.log("hier");
                if(!this.state.inactive){
                    return(
                        <SlideBox open={this.state.open}>
                            <div className="News">
                                To interact with Gorilla Funds you need the MetaMask-AddOn.
                                </div>
                            <div className="BaseButton SliderButton" onClick={this.handleClick}>
                                <h4> O.K. </h4>
                            </div> 
                        </SlideBox>
                    )} else {
                        return(<div></div>);
                    }
                } 
    }
    

    render(){

        if(!this.state.ready){
            return null;
        }

        return(
            <div className="slider-background">
            {this.getContent()}
            </div>
            )
        }
    }