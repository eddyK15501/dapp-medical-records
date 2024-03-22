/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('MedicalRecord', () => {
  // Variables
  let contract, userOne, transactionResponse, transactionReceipt;

  beforeEach(async () => {
    // Get User
    const accounts = await ethers.getSigners();
    userOne = accounts[1];

    // Deploy MedicalRecord Contract
    const medicalRecordFactory = await ethers.getContractFactory(
      'MedicalRecord'
    );
    contract = await medicalRecordFactory.connect(userOne).deploy();
  });

  describe('Deployment', () => {
    it('Successfully deploys the contract', async () => {
      console.log('Deployed contract address: ', contract.address);
      expect(contract.address).to.not.equal(false);
    });
  });

  describe('Add record', () => {
    beforeEach(async () => {
      transactionResponse = await contract
        .connect(userOne)
        .addRecord(
          'Ricky Bobby',
          '40',
          'Male',
          'AB Positive',
          'Cat',
          'Dengue',
          'Acetaminophen'
        );

      transactionReceipt = await transactionResponse.wait();
    });
  });
});
