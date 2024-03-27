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

  console.log(`Refetch MedicalRecord contract address: ${contract.address}`);

  // Add records
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
  console.log(`Record ID: ${await contract.getRecordId()} added.`);

  transaction = await contract
    .connect(signer[0])
    .addRecord(
      'Jane Smith',
      40,
      'Female',
      'A Negative',
      'Pollen',
      'Diabetes',
      'Insulin'
    );
  await transaction.wait();
  console.log(`Record ID: ${await contract.getRecordId()} added.`);

  transaction = await contract
    .connect(signer[0])
    .addRecord(
      'Michael Johnson',
      55,
      'Male',
      'B Positive',
      'Penicillin',
      'Arthritis',
      'Physical Therapy'
    );
  await transaction.wait();
  console.log(`Record ID: ${await contract.getRecordId()} added.`);

  transaction = await contract
    .connect(signer[0])
    .addRecord(
      'Emily Johnson',
      28,
      'Female',
      'AB Negative',
      'Nuts',
      'Migraine',
      'Painkillers'
    );
  await transaction.wait();
  console.log(`Record ID: ${await contract.getRecordId()} added.`);

  transaction = await contract
    .connect(signer[0])
    .addRecord(
      'David Williams',
      50,
      'Male',
      'O Negative',
      'Shellfish',
      'High Cholesterol',
      'Diet and Exercise'
    );
  await transaction.wait();
  console.log(`Record ID: ${await contract.getRecordId()} added.`);

  transaction = await contract
    .connect(signer[0])
    .addRecord(
      'Sarah Lee',
      35,
      'Female',
      'A Positive',
      'Dairy',
      'Asthma',
      'Inhaler'
    );
  await transaction.wait();
  console.log(`Record ID: ${await contract.getRecordId()} added.`);

  transaction = await contract
    .connect(signer[0])
    .addRecord(
      'Christopher Brown',
      45,
      'Male',
      'B Positive',
      'Eggs',
      'Depression',
      'Therapy'
    );
  await transaction.wait();
  console.log(`Record ID: ${await contract.getRecordId()} added.`);

  transaction = await contract
    .connect(signer[0])
    .addRecord(
      'Jessica Martinez',
      32,
      'Female',
      'O Negative',
      'Peanuts',
      'Anxiety',
      'Counseling'
    );
  await transaction.wait();
  console.log(`Record ID: ${await contract.getRecordId()} added.`);

  transaction = await contract
    .connect(signer[0])
    .addRecord(
      'Daniel Wilson',
      55,
      'Male',
      'A Negative',
      'Seafood',
      'Hypothyroidism',
      'Medication'
    );

  transaction = await contract
    .connect(signer[0])
    .addRecord(
      'Michelle Anderson',
      38,
      'Female',
      'AB Positive',
      'Gluten',
      'Fibromyalgia',
      'Physical Therapy'
    );
  await transaction.wait();
  console.log(`Record ID: ${await contract.getRecordId()} added.`);

  transaction = await contract
    .connect(signer[0])
    .addRecord(
      'Kevin Taylor',
      42,
      'Male',
      'O Positive',
      'None',
      'High Blood Pressure',
      'Medication'
    );

  transaction = await contract
    .connect(signer[0])
    .addRecord(
      'Linda Harris',
      60,
      'Female',
      'B Negative',
      'Shellfish',
      'Osteoporosis',
      'Calcium Supplements'
    );
  await transaction.wait();
  console.log(`Record ID: ${await contract.getRecordId()} added.`);

  transaction = await contract
    .connect(signer[0])
    .addRecord(
      'Jason Clark',
      28,
      'Male',
      'A Positive',
      'Pollen',
      'Seasonal Allergies',
      'Antihistamines'
    );
  await transaction.wait();
  console.log(`Record ID: ${await contract.getRecordId()} added.`);

  transaction = await contract
    .connect(signer[0])
    .addRecord(
      'Kimberly Ramirez',
      50,
      'Female',
      'O Negative',
      'Dairy',
      'Osteoarthritis',
      'Physical Therapy'
    );
  await transaction.wait();
  console.log(`Record ID: ${await contract.getRecordId()} added.`);

  transaction = await contract
    .connect(signer[0])
    .addRecord(
      'Ryan Cooper',
      35,
      'Male',
      'AB Positive',
      'None',
      'GERD',
      'Lifestyle Changes'
    );
  await transaction.wait();
  console.log(`Record ID: ${await contract.getRecordId()} added.`);

  transaction = await contract
    .connect(signer[0])
    .addRecord(
      'Erica Thompson',
      45,
      'Female',
      'A Positive',
      'None',
      'Type 2 Diabetes',
      'Insulin Therapy'
    );
  await transaction.wait();
  console.log(`Record ID: ${await contract.getRecordId()} added.`);

  transaction = await contract
    .connect(signer[0])
    .addRecord(
      'Matthew Hill',
      55,
      'Male',
      'B Positive',
      'Pollen',
      'COPD',
      'Bronchodilators'
    );
  await transaction.wait();
  console.log(`Record ID: ${await contract.getRecordId()} added.`);

  transaction = await contract
    .connect(signer[0])
    .addRecord(
      'Stephanie Barnes',
      30,
      'Female',
      'O Positive',
      'Peanuts',
      'Atrial Fibrillation',
      'Blood Thinners'
    );
  await transaction.wait();
  console.log(`Record ID: ${await contract.getRecordId()} added.`);

  transaction = await contract
    .connect(signer[0])
    .addRecord(
      'Mark Evans',
      48,
      'Male',
      'AB Negative',
      'Shellfish',
      "Crohn's Disease",
      'Immunosuppressants'
    );
  await transaction.wait();
  console.log(`Record ID: ${await contract.getRecordId()} added.`);

  transaction = await contract
    .connect(signer[0])
    .addRecord(
      'Emily White',
      33,
      'Female',
      'A Negative',
      'Shellfish',
      'Rheumatoid Arthritis',
      'Immunosuppressants'
    );
  await transaction.wait();
  console.log(`Record ID: ${await contract.getRecordId()} added.`);

  console.log('ALL RECORDS ADDED.');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
