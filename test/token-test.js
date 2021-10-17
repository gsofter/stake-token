const { expect } = require("chai");
const { ethers, hardhatArguments } = require("hardhat");


describe("Stake Token", function () {
  let StakeToken;
  let RewardToken;
  let gStakeToken;
  let gRewardToken;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function(){
    StakeToken = await ethers.getContractFactory("StakeToken");
    RewardToken = await ethers.getContractFactory("RewardToken");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    gStakeToken = await StakeToken.deploy();
    gRewardToken = await RewardToken.deploy();
  })

  describe("Deployment", function() {
    it("Should set the right owner", async function() {
      expect(gStakeToken.owner()).to.equal(owner.address);
      expect(gRewardToken.owner()).to.equal(owner.address);
    });

    it("Should assign total supply to the owner", async function() {
      const ownerStakeBalance = await gStakeToken.balanceOf(owner);
      const ownerRewardBalance = await gRewardToken.balanceOf(owner);

      expect(gStakeToken.totalSupply()).to.equal(ownerStakeBalance);
      expect(gRewardToken.totalSupply()).to.equal(ownerRewardBalance);
    })
  });

  describe("Transactions", function() {
    it("Should transfer tokens between accounts", async function() {
      await gStakeToken.transfer(addr1, 50);
      const addr1StakeBalance = await gStakeToken.balanceOf(addr1);
      expect(addr1StakeBalance).to.equal(50);
    })
  })

});
