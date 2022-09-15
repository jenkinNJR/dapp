// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

abstract contract Logger {
    uint public testNum;
    constructor(){
        testNum = 100;
    }

   function emitLog() public pure virtual  returns(uint32);

   function test3() private pure returns(uint){
       return 100;
   }
}