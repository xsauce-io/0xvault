// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/utils/StringsUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "./StakeWallet.sol";


// SushiBar is the coolest bar in town. You come in with some Sushi, and leave with more! The longer you stay, the more Sushi you get.
//
// This contract handles swapping to and from xSushi, SushiSwap's staking token.
contract Saucer is OwnableUpgradeable,PausableUpgradeable, ERC20Upgradeable {
    using SafeMathUpgradeable for uint256;
    using StringsUpgradeable for uint256;

     enum StakingPlan {
        None, //  = 0
        Short, // = 1
        Medium, // = 2
        Long, // = 3
        Xl // = 4
    }

  
    struct Stake {
        uint256 timestamp;
        uint256 amount;
        address staker;
        StakingPlan plan;
        
    }

    mapping(address => mapping(StakingPlan => Stake)) public stakes;
    mapping(StakingPlan => StakeWallet) public wallets;
    IERC20Upgradeable public _saux;
    address private _feeCollector;
    

    function initialize(
       IERC20Upgradeable saux, 
       address payable feeCollector
     


    ) public initializer {
        __Ownable_init();
        __Pausable_init_unchained();
        _saux = saux;
        _feeCollector = feeCollector;
        wallets[StakingPlan.Short] = new StakeWallet(address(this));
        wallets[StakingPlan.Short].approve(address(saux),address(this), true);
        wallets[StakingPlan.Medium] = new StakeWallet(address(this));
        wallets[StakingPlan.Medium].approve(address(saux),address(this), true);
        wallets[StakingPlan.Long] = new StakeWallet(address(this));
        wallets[StakingPlan.Long].approve(address(saux),address(this), true);
        wallets[StakingPlan.Xl] = new StakeWallet(address(this));
        wallets[StakingPlan.Xl].approve(address(saux),address(this), true);
        
    }


    // Enter the bar. Pay some SUSHIs. Earn some shares.
    // Locks Sushi and mints xSushi

    event Staked(address indexed sender, StakingPlan plan, uint256 amount);
    event Left(address indexed sender, StakingPlan plan, uint256 amount);

    function enter(uint256 amount, StakingPlan plan) external {
        // Must specify valid plan
        require(plan != StakingPlan.None, "Please enter a valid plan");
        //require 100 tokens minimum
        require(amount >= 100 ether, "Minimum amount = 100 SAUX");
        // check that there is no plan assigned
        // Update balance if already enrolled
        if (stakes[msg.sender][plan].plan == StakingPlan.None) {
            // write the stake to storage on-chain
            stakes[msg.sender][plan] = Stake({
                staker: msg.sender,
                plan: plan,
                timestamp: block.timestamp,
                amount: amount
            });
        } else {
            Stake storage stake = stakes[msg.sender][plan];
            stake.amount += amount;
            stake.timestamp = block.timestamp;
        }

        // Gets the amount of xSushi in existence
        uint256 totalShares = totalSupply();

        if (stakes[msg.sender][plan].plan == StakingPlan.Short) {
            // Gets the amount of Sushi locked in the contract
            uint256 totalSaux = _saux.balanceOf(address(wallets[plan])).mul(5).div(100);
            // If no xSushi exists, mint it 1:1 to the amount put in
            if (totalShares == 0 || totalSaux == 0) {
                _mint(msg.sender, amount);
            }
            // Calculate and mint the amount of xSushi the Sushi is worth. The ratio will change overtime, as xSushi is burned/minted and Sushi deposited + gained from fees / withdrawn.
            else {
                uint256 price = amount.mul(totalShares).div(totalSaux);
                _mint(msg.sender, price);
            }
        } else if (stakes[msg.sender][plan].plan == StakingPlan.Medium) {
            // Gets the amount of Sushi locked in the contract
            uint256 totalSaux = _saux.balanceOf(address(wallets[plan])).mul(15).div(100);

            // If no xSushi exists, mint the gov multiplier to the amount put in
            if (totalShares == 0 || totalSaux == 0) {
                _mint(msg.sender, (amount * 5) / 4);
            }
            // Calculate and mint the amount of xSushi the Sushi is worth. The ratio will change overtime, as xSushi is burned/minted and Sushi deposited + gained from fees / withdrawn.
            else {
                uint256 price = amount.mul(totalShares).mul(4).div(5).div(
                    totalSaux
                );
                _mint(msg.sender, price);
            }
        } else if (stakes[msg.sender][plan].plan == StakingPlan.Long) {
            // Gets the amount of Sushi locked in the contract
            uint256 totalSaux = _saux.balanceOf(address(wallets[plan])).mul(30).div(100);
            // Gets the amount of xSushi in existence
            // If no xSushi exists, mint the gov multiplier to the amount put in
            if (totalShares == 0 || totalSaux == 0) {
                _mint(msg.sender, amount.mul(6).div(4));
            }
            // Calculate and mint the amount of xSushi the Sushi is worth. The ratio will change overtime, as xSushi is burned/minted and Sushi deposited + gained from fees / withdrawn.
            else {
                uint256 price = amount.mul(totalShares).mul(4).div(6).div(
                    totalSaux
                );
                _mint(msg.sender, price);
            }
        } else if (stakes[msg.sender][plan].plan == StakingPlan.Xl) {
            // Gets the amount of Sushi locked in the contract
            uint256 totalSaux = _saux.balanceOf(address(wallets[plan])).mul(50).div(100);
            // Gets the amount of xSushi in existence
            // If no xSushi exists, mint the gov multiplier to the amount put in
            if (totalShares == 0 || totalSaux == 0) {
                _mint(msg.sender, amount.mul(2));
            }
            // Calculate and mint the amount of xSushi the Sushi is worth. The ratio will change overtime, as xSushi is burned/minted and Sushi deposited + gained from fees / withdrawn.
            else {
                uint256 price = amount.mul(totalShares).div(2).div(totalSaux);
                _mint(msg.sender, price);
            }
        }

        emit Staked(msg.sender, plan, amount);
        // Lock the Sushi in the contract
        _saux.transferFrom(msg.sender, address(wallets[plan]), amount);
    }

    // Unlocks the staked + gained Sushi and burns xSushi
    function leave(StakingPlan plan) public {
        require(balanceOf(msg.sender) > 0, "need a balance of at least 1");
        //copy the stake to memory for usage
        Stake memory stake = stakes[msg.sender][plan];
        // require a stake plan
        require(stake.plan != StakingPlan.None, "not enrolled in any plan.");
        // delete the storage plan mapped to the wallet upon exit
        delete stakes[msg.sender][plan];

        // 4 plans if statment only adjusting totalSaux and priceofSaux

        uint256 totalShares = totalSupply();
        uint256 govmultiplier = 0;
    

        if (stake.plan == StakingPlan.Short) {
            govmultiplier = 0;

        } else if (stake.plan == StakingPlan.Medium) {
            govmultiplier = 80;
        
        } else if (stake.plan == StakingPlan.Long) {
            govmultiplier = 66;
          
        } else if (stake.plan == StakingPlan.Xl) {
            govmultiplier = 100;
        }

        // find the difference between Saux balance in contract when staked - when going to remove. Then apply prcntOfRewards
        
        uint256 totalSaux =  _saux.balanceOf(address(wallets[plan]));

        //total SAUX cannot = 0 . Think on it 

        uint256 priceOfSaux = ( stake.amount * totalShares * govmultiplier) /
         (100 * totalSaux);
          

        // Calculate the fees for early withdrawal
        uint256 taxes = fee(stake.amount, stake.timestamp, stake.plan);
        if (taxes > 0) {
            // Send off fee to the fee collector wallet
            _saux.transferFrom(address(wallets[plan]), _feeCollector, taxes);
            // Subtract the fees from the total owned shares
            priceOfSaux -= taxes;
        }


        // Send owed amount to staker
       _saux.transferFrom(address(wallets[plan]), msg.sender, priceOfSaux);
        // Burn the shares
        _burn(msg.sender, balanceOf(msg.sender));
    }

    function fee(
        uint256 shares,
        uint256 timestamp,
        StakingPlan plan
    ) private view returns (uint256) {
        uint256 feepct = 0;
        uint256 requiredDuration = 0;

        if (plan == StakingPlan.Short) {
            return 0;
        } else if (plan == StakingPlan.Medium) {
            feepct = 5;
            requiredDuration = 30 days;
        } else if (plan == StakingPlan.Long) {
            feepct = 10;
            requiredDuration = 90 days;
        } else if (plan == StakingPlan.Xl) {
            feepct = 20;
            requiredDuration = 180 days;
        }

        if (block.timestamp - timestamp >= requiredDuration) {
            return 0;
        }
        return (shares * feepct) / 100;
    }
}
