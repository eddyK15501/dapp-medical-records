/* eslint-disable no-undef */
import { ethers } from 'hardhat';

async function main() {
  // Signers
  const signer = await ethers.getSigners();

  // Deploy Contract
  const contractFactory = await ethers.getContractFactory('MedicalRecord');
  const contract = await contractFactory.connect(signer[0]).deploy();
  await contract.deployed();
  console.log(`Deployed. MedicalRecord contract address: ${contract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
