require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt lonely bottom suspect bitter birth random unique hunt brand equal giant'; 
let testAccounts = [
"0xdba1cbca1c8bb919748775413b2b4193fea5b52f9437bb429f46155b0fd0ca21",
"0xb1925c38bac45e6bb2965ea6aa966777bd43d3de7c05aedc3f0b7a7027de4487",
"0x7adec08e64cb0c7466fec0ecbe63ab3b6a6d7b874aebfd26caeb2d8cbc4ea1a9",
"0x3522c590affbd92b8d5099b01c5a37fb69f06f803213427469a4333c48e47029",
"0x7f80132331fbbe391a8b04b1431da3f9f82fd38e117cb5f2606d2cee6f827644",
"0x490e94c0992334f07fdf06288b2b79a6ac8423bd041bc6771e8cd0a3bad8f3c5",
"0xb41038551a2ef7e3dee274b96021befe8c6130cf4a4b92429e1843673ff9e017",
"0xcb1243d16a19c33bda44ba3592d97f24c1be165767ab8f356d79a487d778eb14",
"0x27aaf166711c92802d5d14657420b15aa1d8abebe415efd3a097be868293989b",
"0x69bdb5d47aa4c39a169cf14469e29731700aca68b15ccd293cea4cc8dde6ce9a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

