const StorageTwo = artifacts.require("StorageTwo");

module.exports = function(_deployer) {
  _deployer.deploy(StorageTwo);
};
