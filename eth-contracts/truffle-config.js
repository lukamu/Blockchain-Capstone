var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = '';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 6700000,
      gasPrice: 10000000000
    },
    rinkeby: {
      provider: function() { 
        return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/') 
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    }
  },
  compilers: {
    solc: {
      version: "^0.5.5",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};