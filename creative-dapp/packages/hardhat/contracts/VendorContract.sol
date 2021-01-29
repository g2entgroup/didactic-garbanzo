// "SPDX-License-Identifier: MIT"
pragma solidity >=0.6.0 <0.7.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol"; //https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract VendorContract {

  IERC20 crtvToken;

  constructor (IERC20 theToken) public {
    crtvToken = theToken;
  }

  function buyToken() public payable {
    require(crtvToken.transfer(msg.sender, msg.value), "TRANSFER FAILED" );
  }

  function sellToken(uint256 amount) public {
    require(crtvToken.transferFrom(msg.sender, address(this), amount), "TRANSFER FAILED");
    (bool success, ) = msg.sender.call{value: amount}("");
    (success);
  }

  receive() external payable {
    buyToken();
  }

}