/* eslint-disable no-undef */
const { ethers } = require('hardhat');
const config = require('../src/config/config.json');

async function main() {
  let transaction;

  // Signers
  const signer = await ethers.getSigners();

  // Get chainId from config.json
  const { chainId } = await ethers.provider.getNetwork();
  console.log(`chainId: ${chainId}`);

  // Fetch deployed contract
  const contract = await ethers.getContractAt(
    'MedicalRecord',
    config[chainId].MedicalRecord.address
  );

  console.log(
    `Refetch MedicalRecord contract address: ${contract.address}`
  );

  // Add record
  transaction = await contract
    .connect(signer[0])
    .addRecord(
      'Anita Bath',
      30,
      'Female',
      'A Positive',
      'Peanut',
      'Hypertension',
      'Medications'
    );

    await transaction.wait();
    console.log(`Record ID: ${await contract.getRecordId()} added.`)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
