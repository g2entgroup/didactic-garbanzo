// "SPDX-License-Identifier: MIT"
pragma solidity >=0.6.0 <0.7.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; //https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract CrtvTokenContract is ERC20 {

  constructor () ERC20("CreativeToken","CRTV") public {
    // what should we do on deploy?
   constructor (string memory name, string memory symbol) ERC20("CreativeToken", "CRTV") {
        // Mint 100 tokens to msg.sender
        // Similar to how
        // 1 dollar = 100 cents
        // 1 token = 1 * (10 ** decimals)
        _mint(msg.sender, 980 * 10 ** uint(decimals()));
    }
  }

}
