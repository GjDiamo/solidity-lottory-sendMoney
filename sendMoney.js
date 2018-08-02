const Web3 = require('web3');
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "";
const provider = new HDWalletProvider(mnemonic, "");
const web3 = new Web3(provider);

send = async ()=>{
    const accounts = await web3.eth.getAccounts();
    let account0balance = await web3.eth.getBalance(accounts[0]);
    const str = 'xxx 我好喜欢你';
    let data = Buffer.from(str).toString('hex');
    data = '0x'+data;
    await web3.eth.sendTransaction({
        from:accounts[0],
        to:'0x42Fe18A4d265707B092cD35a24169572c3E2214b',
        value: '1000000000000000000',
        data:data
    });
    account0balance = await web3.eth.getBalance(accounts[0]);
    console.log('account0balance:'+account0balance+'wei');
};
send();