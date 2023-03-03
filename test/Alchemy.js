const Alchemy = artifacts.require("Alchemy");

contract("Alchemy", () => {
    let alchemy = null;
    let primaryAccount = null;
    let secondaryAccount = null;

    before(async () => {
        alchemy = await Alchemy.deployed();
        const accounts = await web3.eth.getAccounts();
        primaryAccount = accounts[0];
        secondaryAccount = accounts[1];
    });

    it("Smart contract deployed", async () => {
        assert(alchemy.address != "");
    });

    it("Mint 10 more NFTs from primary address", async () => {
        for (let i = 0; i < 10; i++) {
            await alchemy.safeMint(
                primaryAccount,
                "ipfs://QmeFUtjMRfNYvS4yfWaJhHY8s3nLdENARDeDQWeYQUBkXc"
            );
        }
        const result = await alchemy.balanceOf(primaryAccount);
        assert(result.toNumber() == 10);
    });

    it("Mint 1 NFTs from primary address (failure)", async () => {
        try {
            await alchemy.safeMint(
                primaryAccount,
                "ipfs://QmeFUtjMRfNYvS4yfWaJhHY8s3nLdENARDeDQWeYQUBkXc"
            );
        } catch (ex) {
            assert(ex.message.includes("NFT wallet limit reached"));
        }
    });

    it("Mint 10 NFTs from secondary address", async () => {
        for (let i = 0; i < 10; i++) {
            await alchemy.safeMint(
                secondaryAccount,
                "ipfs://QmeFUtjMRfNYvS4yfWaJhHY8s3nLdENARDeDQWeYQUBkXc"
            );
        }
        const result = await alchemy.balanceOf(secondaryAccount);
        assert(result.toNumber() == 10);
    });

    it("Mint 1 NFTs from secondary address (failure)", async () => {
        try {
            await alchemy.safeMint(
                secondaryAccount,
                "ipfs://QmeFUtjMRfNYvS4yfWaJhHY8s3nLdENARDeDQWeYQUBkXc"
            );
        } catch (ex) {
            assert(ex.message.includes("NFT wallet limit reached"));
        }
    });
});
