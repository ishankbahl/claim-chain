var healthchain = artifacts.require('healthchain');

module.exports = function(deployer) {
    deployer.deploy(healthchain);
};