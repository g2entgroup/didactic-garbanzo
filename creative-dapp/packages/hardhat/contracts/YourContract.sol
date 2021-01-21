pragma solidity >=0.6.0 <0.7.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; //https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract YourContract is ERC20 {

  constructor () ERC20("CreativeToken","CRTV") public {
    // what should we do on deploy?
    _mint(msg.sender, 10 ether);
  }

}
