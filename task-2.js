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
