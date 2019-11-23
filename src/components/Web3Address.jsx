import React from 'react';
import {getAccount, getWeb3} from '../web3/melonweb3';

export default class Web3Address extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ready: false,
            web3: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount(){
        
        this.env = await getWeb3();
        this.setState({
            ready: true,
            accountAddress: await getAccount(),
            web3: true
        });
        try{
            window.ethereum.on('accountsChanged', async()=>{
                this.setState({
                    accountAddress: await getAccount()
                })
            })
        }catch{
              console.log("No Metamask");
              this.setState({
                  accountAddress: "Please activate Metamask",
              })
        }
        if(this.env.client.currentProvider.selectedAddress === null){
            this.setState({
                web3: false
            })
        }
    }

    async handleClick(){
        try{
            await window.ethereum.enable();
            this.setState({
                accountAddress: await getAccount(),
                ready: true,
                web3: true
            });
        } catch{
            console.log("Funktioniert nicht");
        }
        try{
            await window.web3.enable();
            this.setState({
                accountAddress: await getAccount(),
                ready: true,
                web3: true
            });
        } catch{
            console.log("Funktioniert nicht");
        }
        this.render();
    }

    state = {
        ready: false,
        accountAddress: getAccount(),
    }

    render(){


        if(!this.state.ready){
            return null;
        } 

        if(this.env.client.currentProvider.selectedAddress === null && this.state.web3 === false){
            return (
                <div className="BaseButton ConnectButton" onClick={this.handleClick}><h3>Connect</h3></div>
            )
        }

        return(
        <div className="Web3Address">
            <h6>{this.state.accountAddress}</h6>
        </div>
        )
    }
}







    
