const { default: Web3 } = require("web3")

// const { default: Web3 } = require("web3");
const instance = await Storage.deployed()
instance.addFunds({value:"2000000000000000"})
web3.eth.getStorageAt("0xB7Df4Da40c94973d453854c45d2C054Fd924B066",0)
0x0f00ab1ebe0a567c1c822583e88e312c33f9bb31def60011 07