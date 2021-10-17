// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract StakeToken is ERC20 {
    uint256 initSupply = 1000000 * 10**uint256(decimals());

    constructor() ERC20("gMold Staking Token", "gMST") {
        _mint(msg.sender, initSupply);
    }
}
