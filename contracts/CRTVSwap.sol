pragma solidity >=0.6.0 <0.7.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract CRTVSwap is ERC20 {
  constructor() ERC20("Creative Tokens","CRTV") public {
      _mint(msg.sender,1000*10**18);
  }
}