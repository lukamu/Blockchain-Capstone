let SquareVerifier = artifacts.require('SquareVerifier');
let SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
let base_proof = require('../../zokrates/code/square/proof');

contract('TestSolnSquareVerifier', accounts => {

    const account1 = accounts[0];
    const account2 = accounts[1];

    beforeEach(async function () {
        const _SquareVerifier = await SquareVerifier.new ({from:account1});
        this.contract = await SolnSquareVerifier.new (_SquareVerifier.address, {from: account1});
    })

    // Test if a new solution can be added for contract - SolnSquareVerifier
    it('if a new solution can be added for contract - SolnSquareVerifier', async function() {
        let new_solution_added = true;
        //ACT
        try{
            await this.contract.mintNFT (account2, 10, base_proof.proof.A, base_proof.proof.A_p,
            base_proof.proof.B, base_proof.proof.B_p, base_proof.proof.C, base_proof.proof.C_p, base_proof.proof.H,
            base_proof.proof.K, base_proof.input, {from:account1});
        }
        catch(e)
        {   
            console.log("Exception occurred: ", e);
            new_solution_added = false;
        }
        //ASSERT
        assert.equal (new_solution_added, true, "New Solution cannot be added");
    }) 
    
    it('if a repeated solution can be added for contract',async function(){
        let new_solution_added = true;
        //ACT
        try{
            await this.contract.mintNFT (account2, 11, base_proof.proof.A, base_proof.proof.A_p,
                base_proof.proof.B, base_proof.proof.B_p, base_proof.proof.C, base_proof.proof.C_p, base_proof.proof.H,
                base_proof.proof.K, base_proof.input, {from:account1});

            await this.contract.mintNFT (account2, 12, base_proof.proof.A, base_proof.proof.A_p,
                base_proof.proof.B, base_proof.proof.B_p, base_proof.proof.C, base_proof.proof.C_p, base_proof.proof.H,
                base_proof.proof.K, base_proof.input, {from:account1});
        }
        catch(e)
        {
            new_solution_added=false;
        }        
        //ASSERT
        assert.equal(new_solution_added, false, "Repeated solution cannot be added"); 
    })
    
    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it('if an ERC721 token can be minted for contract - SolnSquareVerifier', async function() {
        let new_solution_added = true;
        //ACT
        try{
            await this.contract.mintNFT (account2, 20, base_proof.proof.A, base_proof.proof.A_p,
                base_proof.proof.B, base_proof.proof.B_p, base_proof.proof.C, base_proof.proof.C_p, base_proof.proof.H,
                base_proof.proof.K, base_proof.input, {from:account1});
       }
       catch(e) {
           new_solution_added = false;
       }
       //ASSERT
       assert.equal(new_solution_added, true, "Contract cann't be minted");
    })    
});