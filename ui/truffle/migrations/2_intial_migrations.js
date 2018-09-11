var VotingContract = artifacts.require("./VotingContract.sol");

module.exports = function(deployer) {
  // Set a maximum amount of gas for the deployment
  deployer.deploy(VotingContract, {gas: 4612388}).then(function(instance) {
    console.log(instance);
    return VotingContract.address;
  });
};
