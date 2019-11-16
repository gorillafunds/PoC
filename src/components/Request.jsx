import React from "react"
import env from "../web3/melonweb3";
import { Participation } from "@melonproject/melonjs";
import ExcecuteRequestButton from "./ExcecuteRequestButton";
import CancelRequestButton from "./CancelRequestButton";
import RequestInfo from "./RequestInfo";

export default class Request extends React.Component{

        constructor(props) {
            super(props); 
            this.account = env.client.givenProvider.selectedAddress;
            this.FundParticipation = new Participation(env, this.props.participationContractAddress);
            this.requestStatus = 0;
            this.getRequestAnswer();
        }

        state = {
            ready: false,
            requestStatus: 0,
          }
        
        getAnswer(){

            //console.log("RequestStatus:", this.state.requestStatus);
            let requestInfo = "";
            switch (this.state.requestStatus){
                case 1:
                    requestInfo = "Request pending...";
                    return <RequestInfo requestInfo={requestInfo}/>
                case 2: 
                    return <ExcecuteRequestButton participationContractAddress={this.props.participationContractAddress}/>;
                case 3:
                    return <ExcecuteRequestButton  participationContractAddress={this.props.participationContractAddress}/>;
                case 5:
                    //requestInfo = "Your Request Expired"; 
                    return <CancelRequestButton  participationContractAddress={this.props.participationContractAddress}/>;
                case 7: 
                    //console.log("Request-Status: 7 - Error");
                default: 
                    requestInfo = "No Requests at the moment"
                    return <RequestInfo requestInfo={requestInfo}/>;
                }
            }

        async getRequestAnswer(){
             this.componentDidMount();
            }
        
        async componentDidMount(){

                   // async getRequestStatus(){

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
                    }, function(err){
                        console.log(err);
                    });    

                    //console.log(sum1,sum2,sum3);
                    //this.requestStatus = sum1 + sum2 + sum3;
                    this.setState({
                        ready: true,
                        requestStatus: sum1 + sum2 + sum3
                    })
        
                }
            
        
        async hasRequestQuery(){
            //console.log("Request");
            const hasRequest = await this.FundParticipation.hasRequest(this.account).catch((err) => {console.log(err)});
            return hasRequest;
        };
        
        async hasValidRequestQuery(){
            //console.log("Valid Request");
            const hasValidRequest = await this.FundParticipation.hasValidRequest(this.account).catch((err) => {console.log(err)});
            return hasValidRequest;
        };
        
        async hasExpiredRequestQuery(){
            //console.log("Expired Request");
            const hasExpiredRequest = await this.FundParticipation.hasExpiredRequest(this.account).catch((err) => {console.log(err)});
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

