const Alchemy = artifacts.require("Alchemy");

module.exports = function (deployer) {
    deployer.deploy(Alchemy);
};
