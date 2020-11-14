require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note soccer mixture grace bread sugar skate'; 
let testAccounts = [
"0xa9087e050f2cd9de168443bea9ae987c18d1b3089eced507c742acc839c1d373",
"0x74b84b187c75ad30d1146550740183a325f6762ce99435715c0cb2c8a217a371",
"0xb7b70ee083552118ca5cbb4868a44ccac3f97bb40e06e7aff41aa81c4f15c5d6",
"0xb03ab7f8f8f08ead8e74ef8b734439f6c18333422df2f28b5f7ca15f265f5465",
"0x0ea5f8e9d6abeb8a0feada8952a683f11f9f07280116d557ec04a129493014e6",
"0x63fa5384ddc6284fda846149391e92abc61657421527e94528c274f00a0493f0",
"0x5e9e92f0384acffb40a905639459058b57dcf704ac4f3d8f706f53df66ec6e6e",
"0x4f97dcc8a889c2db050e0ec76c462aa1373368e20762057f40ccacc6d7138f8d",
"0x046738dd300499f2b224b2c0d2b9306b7ec20e9ebbcc57262325125fbed7e46a",
"0xfd4cc27dd8f12ac6b1a3644d5c4f7c222270e864a6aabb3a3c70850c70029a0a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
