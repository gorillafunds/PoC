import React from 'react';
import env from '../web3/melonweb3';

const account = env.client.givenProvider.selectedAddress;

export default (props) => (
    <div className="Web3Address">
        <h6>Your Address:</h6>
        <h6> {account}</h6>
    </div>
)

/*export default class Web3Address extends React.Component{

        constructor(){
            this.getWeb3Address();
        }

        state = {
            ready: false,
            accountAddress: "",
        }

        getWeb3Address(){
            this.componentDidMount();
           }

        async componentDidMount(){

            this.setState({
                ready: true,
                accountAddress: account
            })
        }

        render(){
            
            //console.log("Web3Address-State:", this.state);

            if(!this.state.ready){
                return null;
            }

            return(
                <div className="Web3Address">
                    <span><h6>Your Address: {this.state.accountAddress}</h6></span>
                </div>
            )
        }
}*/






    
