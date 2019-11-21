import Web3 from '../../node_modules/web3-eth';
import { Environment } from '@melonproject/melonjs';
var web3;
var env;

export function getWeb3(){
  if (!web3){
    web3 = new Web3(Web3.givenProvider);
    env = new Environment(web3);
  }
}

export function hasProvider(){
  return !!env.givenProvider;
}

export async function getAccount(){
     
    if(typeof window !== 'undefined'){
        const account = env.client.givenProvider.selectedAddress;
        return account;
    } else {
        const account = "0xee98fe37ede0f727aa73b42ea5f79a4789917937";
        console.log("Hier !!!!!!!!!!!!!!!!!!!!");
        return account;
   }
}

if(typeof window !=='undefined'){

  if(window.web3 !== 'undefined'){
        
        web3 = new Web3(window.web3.currentProvider);
        env = new Environment(web3);
        console.log("Env: 1",env);
    
        if (typeof web3 !== 'undefined' && web3.currentProvider.enable() !== undefined && web3.currentProvider.selectedAddress !== undefined){
          console.log("MetaMask found");
        } else {
          console.log("No Metamask found");
        }

        window.web3.version.getNetwork((netId) => {
          switch (netId) {
            case "1":
              console.log('This is mainnet')
              break
            case "2":
              console.log('This is the deprecated Morden test network.')
              break
            case "3":
              console.log('This is the ropsten test network.')
              break
            case "4":
              console.log('This is the Rinkeby test network.')
              break
            case "42":
              console.log('This is the Kovan test network.')
              break
            default:
              console.log('This is an unknown network.')
          }
       });
    } 
    
    else {
      const provider = new Web3(new Web3.providers.HttpProvider(
        'https://mainnet.infura.io/v3/ec86b2b5c5644c29b07cf35d77d1bd78'
       ));
      web3 = new Web3(provider);
      env = new Environment(web3);
      env.defaultAccount = "0xEE98FE37EDE0F727aa73b42ea5f79A4789917937";
      //env.client.currentProvider.selectedAddress = "0xEE98FE37EDE0F727aa73b42ea5f79A4789917937";
      console.log("Env 2",env);
    } 
  } else {
        const provider = new Web3(new Web3.providers.HttpProvider(
          'https://mainnet.infura.io/v3/ec86b2b5c5644c29b07cf35d77d1bd78'
        ));
        //const provider = new Web3(new Web3("wss://mainnet.infura.io/v3/ec86b2b5c5644c29b07cf35d77d1bd78"));
        web3 = new Web3(provider);
        //web3 = new Web3(new Web3("wss://mainnet.infura.io/v3/ec86b2b5c5644c29b07cf35d77d1bd78"));
        env = new Environment(web3);
        env.defaultAccount = "0xEE98FE37EDE0F727aa73b42ea5f79A4789917937";
        //env.client.currentProvider.selectedAddress = "0xEE98FE37EDE0F727aa73b42ea5f79A4789917937";
        console.log("Env 3",env);
  }

  export default env;

