// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RewardToken is ERC20 {
    uint256 initSupply = 1000000 * 10**uint256(decimals());

    constructor() ERC20("gMold Reward Token", "gMRWD") {
        _mint(msg.sender, initSupply);
    }
}
