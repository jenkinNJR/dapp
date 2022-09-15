// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MyContract {
    address private owner = msg.sender;
    // private can only accecable within contract
    
    // internal can be only accesable within smart contract and derived smart contract



    mapping(address => uint256) amount;

    receive() external payable {}

    function addFunds() public payable {
        amount[msg.sender] = msg.value + amount[msg.sender];
    }

    function getFunds() public view returns (uint256) {
        return amount[msg.sender];
    }

    function test(uint256 testNum) external pure returns (uint256) {
        assembly {
            let _num := 4
            let _fmp := mload(0x40)
        }

        return testNum;
    }

    // function send() public payable{
    //   address(owner).send(address(this).balance);
    // }

    function justTest() external pure returns (uint256) {
        return 2 + 2;
    }
}
