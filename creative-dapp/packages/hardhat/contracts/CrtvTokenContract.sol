pragma solidity >=0.6.0 <0.7.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; //https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract CRTVToken is ERC20 {
  constructor() ERC20("Creative Token","CRTV") public {
      _mint(msg.sender, 980 * 10 ** uint(decimals()));
  }
}
