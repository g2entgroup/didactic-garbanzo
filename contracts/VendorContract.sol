pragma solidity >=0.6.0 <0.7.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol"; //https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract VendorContract {

  IERC20 token;

  constructor (address tokenAddress) public {
    token = IERC20(tokenAddress);
  }

  function buyToken() public payable {
    require(token.transfer(msg.sender, msg.value) );
  }

  //function sellToken();

}
