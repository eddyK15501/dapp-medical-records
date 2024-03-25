/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('MedicalRecord', () => {
  // Variables
  let contract, userOne, transactionResponse, transactionReceipt, event;

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
      // Add a record
      transactionResponse = await contract
        .connect(userOne)
        .addRecord(
          'Ricky Bobby',
          40,
          'Male',
          'AB Positive',
          'Cat',
          'Dengue',
          'Acetaminophen'
        );
      transactionReceipt = await transactionResponse.wait();
    });

    describe('Add record event', () => {
      beforeEach(async () => {
        event = await transactionReceipt.events[0];
      });

      it('Emits an event after adding a record', async () => {
        expect(event.event).to.equal('AddRecordEvent');
      });

      it('Check arguments emitted from AddRecordEvent', async () => {
        const args = event.args;

        expect(args.timestamp).to.not.equal(0);
        expect(args.name).to.equal('Ricky Bobby');
        expect(args.age).to.equal(40);
        expect(args.bloodType).to.equal('AB Positive');
        expect(args.allergies).to.equal('Cat');
        expect(args.diagnosis).to.equal('Dengue');
        expect(args.treatment).to.equal('Acetaminophen');
      });

      it('Checks if getRecord() is working properly', async () => {
        const record = await contract.getRecord(1);

        expect(record.recordId).to.equal(1);
        expect(record.timestamp).to.not.equal(0);
        expect(record.name).to.equal('Ricky Bobby');
        expect(record.age).to.equal(40);
        expect(record.bloodType).to.equal('AB Positive');
        expect (record.allergies).to.equal('Cat');
        expect (record.diagnosis).to.equal('Dengue');
        expect (record.treatment).to.equal('Acetaminophen');
      });
    });
  });

  describe('Delete record', () => {
    beforeEach(async () => {
      // Add a record
      transactionResponse = await contract
        .connect(userOne)
        .addRecord(
          'Ricky Bobby',
          40,
          'Male',
          'AB Positive',
          'Cat',
          'Dengue',
          'Acetaminophen'
        );
      transactionReceipt = await transactionResponse.wait();
      
      // Delete the record
      transactionResponse = await contract.connect(userOne).deleteRecord(1);
      transactionReceipt = await transactionResponse.wait();

      event = await transactionReceipt.events[0];
    });

    it('isDeleted mapping is set to true', async () => {
      const isDeleted = await contract.getIsDeleted(1);
      expect(isDeleted).to.equal(true);
    });

    it('Emits an event after deleting record', async () => {
      expect(event.event).to.equal('DeleteRecordEvent');
    });

    it('Checks arguments emitted from DeleteRecordEvent', async () => {
      const args = event.args;
      
      expect(args.timestamp).to.not.equal(0);
      expect(args.name).to.equal('Ricky Bobby');
      expect(args.age).to.equal(40);
      expect(args.gender).to.equal('Male');
      expect(args.bloodType).to.equal('AB Positive');
      expect(args.allergies).to.equal('Cat');
      expect(args.diagnosis).to.equal('Dengue');
      expect(args.treatment).to.equal('Acetaminophen');
    });
  });
});
