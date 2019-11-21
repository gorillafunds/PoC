import React from 'react';
import {getAccount} from '../web3/melonweb3';

export default class Web3Address extends React.Component{

    constructor(props){
        super(props);
       
        this.state = {
            ready: false,
            accountAddress: getAccount()
        }
    }

    async componentDidMount(){
        const account = await getAccount();
        this.setState({
            ready: true,
            accountAddress: account
        });
        try{
            window.ethereum.on('accountsChanged', async()=>{
                this.setState({accountAddress: getAccount()})
            })}catch{
              console.log("No Metamask");
          }
    }


    state = {
        ready: false,
        accountAddress: getAccount(),
    }

    render(){

        if(!this.state.ready){
            return null;
        }

        return(
        <div className="Web3Address">
            <h6>Your Address:</h6>
            <h6>{this.state.accountAddress}</h6>
        </div>
        )
    }
}

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






    
