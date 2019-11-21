import React from "react"
import { getAccount } from "../web3/melonweb3";
import SharesBox from "./SharesBox";


export default class Shares extends React.Component{

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
              //console.log("No Metamask");
          }
    }

    getOwner(element, address){
        //console.log("element",element);
        return element.owner.id === address;
    }

    getShares(){
        
        //console.log("getShares",this.state);
        const account = this.state.accountAddress;
        const owner = this.props.investments.filter((element) => {
            return element.owner.id === account;
        });
        //console.log(owner);

        if(typeof owner !== 'undefined' && owner.length !== 0){ 
            //console.log("owner", owner);
            return  <SharesBox shares={owner[0].shares/1e18}/>
        } else {
            return <SharesBox shares={"0"}/>;
        }
    }

    render(){

        if(!this.state.ready){
            return null;
        }

        return (
            <div className="Shares">
            {this.getShares()}
        </div>
        )
    }
}