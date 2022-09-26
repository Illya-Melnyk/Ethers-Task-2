import { ethers } from "./ethers-5.6.esm.min.js";

document.getElementById("sendTransaction").addEventListener("click", transfer);

async function transfer() {
    await window.ethereum.enable();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    let recipientAddress = document.getElementById("recipient").value;
    let privateKey = document.getElementById("privateKey").value;
    let wallet = new ethers.Wallet(privateKey, provider)
    
    const signer = provider.getSigner();

    let tx = signer.sendTransaction({
        to: recipientAddress,
        value: ethers.utils.parseEther("0.0025"),
    });

    await wallet.signTransaction(tx);

    let transfer = await wallet.sendTransaction(tx)
.then((txObj) => {
    console.log('txHash', txObj.hash)
});

    console.log(transfer);
}



//____________________________________________________________________________________________
 
// const addressTo = recipientAddress;
  
//   let wallet = new ethers.Wallet(privateKey, provider);

//   const send = async () => {
//       console.log(`Attempting to send transaction from ${wallet.address} to ${addressTo}`);
      
//       const tx = {
//           to: addressTo,
//           value: ethers.utils.parseEther('0.025'),
//         };
  
//         const createReceipt = await wallet.sendTransaction(tx);
//         await createReceipt.wait();
//         console.log(`Transaction successful with hash: ${createReceipt.hash}`);
//     };
  
//     document.getElementById("sendTransaction").addEventListener("click", send);
//     send();
//________________________________________________________________________________________

     // async function transfer() {
    
     //     let wallet = new ethers.Wallet({privateKey}, provider);
     
     //     await provider.send("eth_requestAccounts", []);
     
     //     let transact = await wallet.sendTransaction({ 
         //         to: recipientAddress, 
         //         value: ethers.utils.parseEther(0.025)})
         
         //     console.log(transact);
         // }

//___________________________________________________________________________________________