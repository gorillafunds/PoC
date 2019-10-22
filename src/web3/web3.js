import Web3 from 'web3-eth'
//const web3 = new Web3(window.web3.currentProvider);

var web3;

if(typeof window !=='undefined'){
  if(window.web3 !== 'undefined'){
      const provider = new Web3.providers.HttpProvider(
      'https://mainnet.infura.io/v3/ec86b2b5c5644c29b07cf35d77d1bd78'
      );
      web3 = new Web3(provider);
      console.log(web3);
    } else {
        
        web3 = new Web3(window.web3.currentProvider);
    
        if (typeof web3 !== 'undefined' && web3.currentProvider.enable() !== undefined && web3.currentProvider.selectedAddress !== undefined){
          console.log("MetaMask found");
        } else {
          console.log("No Metamask found");
        }

        window.web3.version.getNetwork((err, netId) => {
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
  } else {
        const provider = new Web3.providers.HttpProvider(
          'https://mainnet.infura.io/v3/ec86b2b5c5644c29b07cf35d77d1bd78'
        );
        web3 = new Web3(provider);
  }

  export default web3;

  /*if (window.ethereum){
    window.web3 = new Web3(ethereum);
    try {
        // Request account access if needed
        await ethereum.enable();
        // Acccounts now exposed
        //web3.eth.sendTransaction({/* ... *///});
        // } catch (error) {
         //   console.log("An error ocurred")
        //}
   // }
    // Legacy dapp browsers...
 /* else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);
    // Acccounts always exposed
    //web3.eth.sendTransaction({/* ... *///});
 // }
  // Non-dapp browsers...
  /*else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
}*/