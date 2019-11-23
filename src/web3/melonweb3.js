import  Web3 from 'web3-eth';
import { Environment } from '@melonproject/melonjs';
var web3;
var env;
env = getWeb3();

export async function getWeb3(){

  if (window.ethereum){
    try{
        web3 = new Web3(window.ethereum);
        env = new Environment(web3);
        await env.enable(); 
    } catch(error){
      console.log("No access to user accounts");
    }

  return env;
  
} else if (window.web3){ 
    try{
        web3 =  new Web3(window.web3.currentProvider);
        env = new Environment(web3);
        await env.enable(); 
    } catch (error){
      console.log("No access to user accounts");
    }
    return env;
  } else {
    try{
      console.log("I am hier");
    //web3 = new Web3("wss://mainnet.infura.io/ws/v3/ec86b2b5c5644c29b07cf35d77d1bd78");
    //env = new Environment(web3);
    console.log(env);
    const provider = new Web3(new Web3.providers.HttpProvider(
      'https://mainnet.infura.io/v3/ec86b2b5c5644c29b07cf35d77d1bd78'
    ));
    web3 = new Web3(provider);
    env = new Environment(web3);
    } catch {
      console.log("Problem with Infura");
    }
    return env;
  }
}

export function hasProvider(){
  return !!env.currentProvider;
}

export async function getAccount(){
  env = await getWeb3();
  console.log(env);
  console.log("0");
     if(env !== 'undefined'){
      console.log("1");
      if(env.client.currentProvider !== null){
        console.log("2");
          const account = env.client.currentProvider.selectedAddress;
          return account;
        }
      } else {
        const account = "Please activate Metamask";
        console.log("3");
        return account;
       }
   }

/*if(typeof window !=='undefined'){

  //if(window.web3 !== 'undefined'){
  if(window.web3){
        
        web3 = new Web3(window.web3.currentProvider);
        env = new Environment(web3);
    
        //if (typeof web3 !== 'undefined' && web3.currentProvider.enable() !== undefined && web3.currentProvider.selectedAddress !== undefined){
        if (typeof web3 !== 'undefined'  && web3.currentProvider.selectedAddress !== undefined){
        } else {
          console.log("No Metamask found");
        }

        /*window.web3.version.getNetwork((netId) => {
          switch (netId) {
            case "1":
              //console.log('This is mainnet')
              break
            case "2":
              //console.log('This is the deprecated Morden test network.')
              break
            case "3":
              //console.log('This is the ropsten test network.')
              break
            case "4":
              //console.log('This is the Rinkeby test network.')
              break
            case "42":
              //console.log('This is the Kovan test network.')
              break
            default:
              //console.log('This is an unknown network.')
          }
       }
       );
    } else {
      const provider = new Web3(new Web3.providers.HttpProvider(
        'https://mainnet.infura.io/v3/ec86b2b5c5644c29b07cf35d77d1bd78'
       ));
      web3 = new Web3(provider);
      env = new Environment(web3);
      env.defaultAccount = "0xEE98FE37EDE0F727aa73b42ea5f79A4789917937";
    } 
  } else {
    const provider = new Web3(new Web3.providers.HttpProvider(
        'https://mainnet.infura.io/v3/ec86b2b5c5644c29b07cf35d77d1bd78'
    ));
    web3 = new Web3(provider);
    env = new Environment(web3);
    env.defaultAccount = "0xEE98FE37EDE0F727aa73b42ea5f79A4789917937";
  }

  //env = getWeb3();
  */

  //export default env;

