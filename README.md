# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Project Resources

## Installing
A step by step series of examples that instruct you how to get a development environment running.

#### Unzip the file and enter in the project directory
```
cd Blockchain-Capstone
```
#### Install required node packages 
```
npm install
```

#### Open a terminal window and Launch Ganache:
```
ganache-cli 
```

#### Open a separate terminal window and  compile smart contracts:
Change to the folder ```eth-contracts``` 
cd eth-contracts
```
truffle compile
```

This will create the smart contract artifacts in folder ```./build/contracts```.

#### Migrate smart contracts to the locally running blockchain, ganache-cli:
Change to the folder ```eth-contracts``` 
```
truffle migrate --reset
```
This will :
  - deploy the smart contract artifacts to running Ganache 
 
#### Test smart contracts:
Change to the folder ```eth-contracts``` 
```
truffle test 
```

# Rinkeby Contracts Migration

2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0xf03cd243285708cf89b087b02f3eda7d1088e4003619dda6e1c37f87310e1712
   > Blocks: 0            Seconds: 12
   > contract address:    0xBB4e85d1c7f0c4bE518974E31FE9DA229A816ba4
   > account:             0x8c3D6870c1cC23107B6b458C8866E9a7DeA8DFB7
   > balance:             4.475980108
   > gas used:            1719551
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01719551 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x0340616f8befa5cdc4265283a68795240286fd549b26d6428267f02f54d71724
   > Blocks: 0            Seconds: 12
   > contract address:    0x8DB8f9A2a58A54b51bcE6BB9179f6c9838da6aAf
   > account:             0x8c3D6870c1cC23107B6b458C8866E9a7DeA8DFB7
   > balance:             4.432863158
   > gas used:            4311695
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.04311695 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.06031246 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.06306756 ETH

#### Mint tokens
###### For this project :
```
 10 tokens are minted

Minted token #51. Transaction:  https://rinkeby.etherscan.io/tx/0x55fa3b5778720354dfcc59b7682a671ab42aec0958e2010f41c7ed3785b7d8cc
Minted token #52. Transaction:  https://rinkeby.etherscan.io/tx/0x577ae5a58b36a61f22711ca6b827d6ce5800525b529b7f20bc216aeb675cb6f5
Minted token #53. Transaction:  https://rinkeby.etherscan.io/tx/0xbdd4438ae01ccace84d47a8c588e43d7c238307c17e86653cfb068622544fba0
Minted token #54. Transaction:  https://rinkeby.etherscan.io/tx/0x2fc262da417eb7fd904bd1bfd359f0849dbe42f6b0ec92ea10107747947e32cb
Minted token #55. Transaction:  https://rinkeby.etherscan.io/tx/0xb9a84454fabda5e875bd132fab156ebdf7711b2ddf912fa07765637eaeb3024f
Minted token #56. Transaction:  https://rinkeby.etherscan.io/tx/0x88e5cde47315dd0dbf22f4a90de076d6834e7a3fdb777d9e22572ea74d34908f
Minted token #57. Transaction:  https://rinkeby.etherscan.io/tx/0x1d4ecd5e6bcfd76c7d1a3a13b7d81c53e1adb73314a30aa4f7cb9d35a543393b
Minted token #58. Transaction:  https://rinkeby.etherscan.io/tx/0x1cb6504e839c9ff93b9b6a95e48d6a9408dab1c5b9ef13844d9db78484f6042c
Minted token #59. Transaction:  https://rinkeby.etherscan.io/tx/0xac8d9c4e14664ee88f674f9b03b8d5a41e85938843e95f8ad6868185d9ba823d
Minted token #60. Transaction:  https://rinkeby.etherscan.io/tx/0xe3d048f1629f05166d86b98a668ab6ca59728db449c9f7ce492a7ce359dc882e
```

# Opensea
https://rinkeby.opensea.io/accounts/0x8c3d6870c1cc23107b6b458c8866e9a7dea8dfb7
https://rinkeby.opensea.io/assets/0x8db8f9a2a58a54b51bce6bb9179f6c9838da6aaf/51?


* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
