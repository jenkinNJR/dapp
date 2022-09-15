// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import  "./Owner.sol";
import  "./Logger.sol";
import  "./Imt.sol";

contract StorageTwo is Owner, Logger, Imt{
    uint256 public noOfFunds;
    mapping(uint256 => address) funders;

    struct Data {
        address id;
        uint256 amount;
    }
    Data data;

    mapping(uint256 => Data) funds;

    function emitLog() public override pure  returns(uint32){
        return 123;
    }

    function addFunds() external payable {
        uint256 index = noOfFunds++;
        funders[index] = msg.sender;
    }

    function getFunders(uint256 index) public view returns (address) {
        return funders[index];
    }

    modifier limitWidral {
        require(address(this).balance >= 1 ether, "amount is low");
        _;
    }

    function withDraw() external override  onlyOwner limitWidral {
        payable(msg.sender).transfer(address(this).balance);
    }

    function allData() external view returns (address[] memory) {
        address[] memory _funders = new address[](noOfFunds);
        for (uint256 i = 0; i < noOfFunds; i++) {
            _funders[i] = funders[i];
        }
        return _funders;
    }
}