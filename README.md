# Alchemy's Road to Web3 Week 1

This repository covers the modified code following Alchemy's
[Road to Web3 Week 1](https://docs.alchemy.com/docs/how-to-develop-an-nft-smart-contract-erc721-with-alchemy).

# Development Environment Setup

For my setup, I used Arch Linux. Please adapt the packages to your particular OS and distribution.

## Organization

The contract has a corresponding test implementation. You will find the matching name under `/test`.

-   `/contracts` The Solidity contract source code.
-   `/migrations` The contract deployment source code.
-   `/test` The contract test source code.

## Dependencies

Ensure truffle and npm is installed

    yay -S truffle nodejs

Next install the npm dependencies for truffle:

    npm i

## Local Development Mode

Start truffle in development mode:

    truffle develop

## Building

Compile contracts directly from the command line:

    truffle compile

Or under truffle development:

    truffle(develop)> compile

## Deploying

Deploy contracts directly from the command line:

    truffle deploy

Or under truffle development:

    truffle(develop)> deploy

To ensure latest code changes execute the following:

    truffle deploy --reset

Or under truffle development:

    truffle(develop)> deploy --reset

## Testing

To run the test suite, execute the following:

    truffle test

Or under truffle development:

    test

At the truffle console, interact with the contract:

    truffle(develop)> let alchemy = await Alchemy.deployed()
    truffle(develop)> await a.safeMint("0x0632b2d322191b3d025e31534220a0fc6688504b", "ipfs://QmeFUtjMRfNYvS4yfWaJhHY8s3nLdENARDeDQWeYQUBkXc")
