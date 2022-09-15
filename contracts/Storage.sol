// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Storage {
    uint8 public a = 7; // 1 by
    uint16 public b = 17; // 2 b
    address public c = 0xab1eBe0A567c1C822583e88E312c33f9Bb31DEF6; //20b
    bool d = false; // 1b
    uint64 public e = 15;  // 8b
    //0x 0f 00 ab1ebe0a567c1c822583e88e312c33f9bb31def6 0011 07
    // slot0
    uint256 public f = 200; // 32b
    //slot 1
    uint8 public g = 40; // 1b
    // slot 2
    uint256 public h = 789; // 32b
    // slot 3
}
