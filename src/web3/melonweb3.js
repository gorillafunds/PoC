import  Web3 from 'web3-eth';
import { Environment } from '@melonproject/melonjs';
var web3;
var env;
env = getWeb3();

export async function getWeb3(){

  /* Legacy browser */
  if (window.ethereum){
    try{
        web3 = new Web3(window.ethereum);
        env = new Environment(web3);
        await env.enable; 
    } catch(error){
      console.log(error, "No access to user accounts - Legacy Browser");
    }

  return env;
  /* Metamask */
} else if (window.web3){ 
    try{
        web3 =  new Web3(window.web3.currentProvider);
        env = new Environment(web3);
        await env.enable; 
    } catch (error){
      console.log(error, "No access to user accounts - Metamask");
    }
    return env;
  } else {
    /* Infura Fallback */
    try{
      
    //console.log(env);
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

export async function web3Enabled(){
  env = await getWeb3();
  if (env.client.currentProvider.selectedAddress === null ){
    const answer = "Please activate Metamask";
    return answer;
  }
}

export async function getAccount(){
    env = await getWeb3();
    console.log(env);
     if(env !== 'undefined'){
      if(env.client.currentProvider !== null){
        const account = env.client.currentProvider.selectedAddress;
        return account;
      }
    } else {
      const account = "Please activate Metamask";
      return account;
    }
  }

