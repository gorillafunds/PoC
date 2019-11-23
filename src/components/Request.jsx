import React from "react"
import {getAccount, getWeb3} from "../web3/melonweb3";
import { Participation } from "@melonproject/melonjs";
import ExcecuteRequestButton from "./ExcecuteRequestButton";
import CancelRequestButton from "./CancelRequestButton";
import RequestInfo from "./RequestInfo";

export default class Request extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ready: false,
            requestStatus: 0
          }
    }
        
        async componentDidMount(){
            this.env = await getWeb3();
            this.setState({
                accountAddress: await getAccount()
            });
            console.log(this.state.accountAddress);
            this.FundParticipation = new Participation(this.env, this.props.participationContractAddress);
                    const sum1 = await this.hasRequestQuery().then(function(result){
                        if(result){
                            return 1;
                        }else{
                            return 0;
                            }
                        }, function(err){
                        console.log(err);
                    });
                        
                    const sum2 = await this.hasValidRequestQuery().then(function(result){
                        if(result){
                            return 2;
                        }else{
                            return 0;
                            }
                        }, function(err){
                        console.log(err);
                    });

                    const sum3 = await this.hasExpiredRequestQuery().then(function(result){
                        if(result){
                            return 4;
                        }else{
                            return 0;
                            }
                        }, function(err){
                        console.log(err);
                    });    

                    this.setState({
                        ready: true,
                        requestStatus: sum1 + sum2 + sum3,
                    });
                    try{
                        window.ethereum.on('accountsChanged', async()=>{
                            this.setState({accountAddress: getAccount()})
                        })}catch{
                          //console.log("No Metamask");
                      }
                }

                getAnswer(){

                    let requestInfo = "";
                    switch (this.state.requestStatus){
                        case 1:
                            requestInfo = "Request pending...";
                            return <RequestInfo requestInfo={requestInfo}/>;
                        case 2: 
                            return <ExcecuteRequestButton participationContractAddress={this.props.participationContractAddress}/>;
                        case 3:
                            return <ExcecuteRequestButton  participationContractAddress={this.props.participationContractAddress}/>;
                        case 5:
                            return <CancelRequestButton  participationContractAddress={this.props.participationContractAddress}/>;
                        case 7: 
                            //console.log("Request-Status: 7 - Error");
                            break;
                        default: 
                            requestInfo = "No Requests at the moment"
                            return <RequestInfo requestInfo={requestInfo}/>;
                        }
                    }
            
        
        async hasRequestQuery(){
            //console.log("Account", account);
            const hasRequest = await this.FundParticipation.hasRequest(this.state.accountAddress).catch((err) => {console.log(err, "address", this.state.accountAddress)});
            return hasRequest;
        };
        
        async hasValidRequestQuery(){
            const hasValidRequest = await this.FundParticipation.hasValidRequest(this.state.accountAddress).catch((err) => {console.log(err)});
            return hasValidRequest;
        };
        
        async hasExpiredRequestQuery(){
            const hasExpiredRequest = await this.FundParticipation.hasExpiredRequest(this.state.accountAddress).catch((err) => {console.log(err)});
            return hasExpiredRequest;
        };    
           
        render() {
        
            if(!this.state.ready){
                return null;
            }

            return (
                <div>
                    {this.getAnswer()}
                </div>
                )
            }
        }

