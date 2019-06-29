var ERC721MintableComplete = artifacts.require('RealEstateERC721Token');

contract('TestERC721Mintable', accounts => {

    const account1 = accounts[0];
    const account2 = accounts[1];
    const account3 = accounts[2];
    const account4 = accounts[3];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account1});

            // TODO: mint multiple tokens
            await this.contract.mint(account2, 1, {from: account1});
            await this.contract.mint(account3, 2, {from: account1});
            await this.contract.mint(account4, 3, {from: account1});
        })

        it('should return total supply', async function () { 
            //ACT
            let total_supply = await this.contract.totalSupply.call();
            //ASSERT
            assert.equal (total_supply.toNumber(), 3, "Total supply incorrect"); 
        })

        it('should get token balance', async function () { 
            //ACT
            let balance = await this.contract.balanceOf.call(account3, {from: account1});
            //ASSERT
            assert.equal(balance.toNumber(), 1, "Balance of account3 incorrect");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            //ACT
            let tokenURI = await this.contract.tokenURI.call(3, {from: account1});
            //ASSERT
           assert(tokenURI == "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/3", "TokenURI incorrect");
        })

        it('should transfer token from one owner to another', async function () { 
            // ACT
            await this.contract.approve(account2, 3, {from: account4});
            await this.contract.transferFrom(account4, account2, 3, {from: account4});
            // ASSERT
            currentOwner = await this.contract.ownerOf.call(3);
            assert.equal(currentOwner, account2, "Owner incorrect");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account1});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            //ARRANGE
            let mint_worked = true;

            //ACT
            try {
                await this.contract.mint(account2, 1, {from: account2});
            } catch (e) {
                mint_worked = false;
            }
            
            //ASSERT
            assert.equal(mint_worked, false, "Address is not contract owner");
        })

        it('should return contract owner', async function () { 
            //ACT
            let owner = await this.contract.owner.call({from: account1});

            //ARRANGE
            assert.equal(owner, account1, "contract owner incorrect");
        })
    });
})