import "tsconfig-paths/register"
import { HardhatUserConfig } from "hardhat/config"
import "@typechain/hardhat"
import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-etherscan"
import "@nomiclabs/hardhat-waffle"
import '@openzeppelin/hardhat-upgrades'
import "hardhat-contract-sizer"
import "hardhat-gas-reporter"
import "solidity-coverage"
import "@nomiclabs/hardhat-solhint"

const config: HardhatUserConfig = {
  defaultNetwork:"hardhat",
  networks:{
    hardhat:{
     loggingEnabled: true,
     chainId: 31337,

    }
  },
  solidity: {
    version: "0.8.9",
    settings:{
      optimizer:{
        enabled:true, 
        runs:200
      }
    }
  },
  paths:{
    artifacts:'./build/artifacts',
    cache: './build/cache'
  }
}

export default config