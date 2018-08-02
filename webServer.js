//使用基于nodejs的express框架，创建一个web服务器；
const express = require('express');
const app = express();
const Web3 = require('web3');
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "shadow note swear barely boss ensure exercise float inmate lesson sock under";
const provider = new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/36a3fbc090bd447b9b9d75c4748f4171");
const web3 = new Web3(provider);

// app.get('/send/:address', async function(req, res){
//     console.log("开始转账")
//     const address=req.params.address;
//     const accounts = await web3.eth.getAccounts();
//     let account0balance = await web3.eth.getBalance(accounts[0]);
//     await web3.eth.sendTransaction({
//         from:accounts[0],
//         to:'address',
//         value: '1000000000000000',
//     });
//     res.send('转帐成功');
// });
//
// app.listen(3000, function () {
//     console.log('Example app listening on port 3000!');
// });
app.get('/send/:address',async function (req, res) {
    console.log('开始转账');
    const address = req.params.address;
    console.log(address);
    try {
        const accounts = await web3.eth.getAccounts();
        const trans = await web3.eth.sendTransaction({
            from: accounts[0],
            to: address,
            value: '1000000000000000'
        });
        res.send('转账成功');
    }catch (error){
        res.send(error);
    }
});
 app.listen(3000, function () {
     console.log('Example app listening on port 3000!');
 });