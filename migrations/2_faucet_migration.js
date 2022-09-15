const FaucetContract = artifacts.require("Faucet");
const Imt = artifacts.require("Imt");
const Logger = artifacts.require("Logger");
const Owner = artifacts.require("Owner");

module.exports = function (deployer) {
  deployer.deploy(FaucetContract);
  deployer.deploy(Imt);
  deployer.deploy(Logger);
  deployer.deploy(Owner);
};
