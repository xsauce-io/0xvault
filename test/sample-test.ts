import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {ethers, upgrades} from "hardhat";
import {Saucer} from "../typechain-types"; 
import {expect} from "chai";
import { deployContract } from "ethereum-waffle";

describe("Saucer", () => {
  let saucer: Saucer
  beforeEach( async () => {
    const SaucerFactory = await ethers.getContractFactory("Saucer");
    saucer = await upgrades.deployProxy
  } )
  it()

})