// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MedicalRecord {
    struct Record {
        uint256 recordId;
        uint256 timestamp;
        string name;
        uint8 age;
        string gender;
        string bloodType;
        string allergies;
        string diagnosis;
        string treatment;
    }

    uint256 public recordId;

    mapping(uint256 => Record) internal records;
    mapping(uint256 => bool) public isDeleted;

    event AddRecordEvent(
        uint256 recordId,
        uint256 timestamp,
        string name,
        uint8 age,
        string gender,
        string bloodType,
        string allergies,
        string diagnosis,
        string treatment
    );

    event DeleteRecordEvent(
        uint256 recordId,
        uint256 timestamp,
        string name,
        uint8 age,
        string gender,
        string bloodType,
        string allergies,
        string diagnosis,
        string treatment
    );

    function addRecord(
        string memory _name,
        uint8 _age,
        string memory _gender,
        string memory _bloodType,
        string memory _allergies,
        string memory _diagnosis,
        string memory _treatment
    ) public {
        recordId++;

        records[recordId] = Record(
            recordId,
            block.timestamp,
            _name,
            _age,
            _gender,
            _bloodType,
            _allergies,
            _diagnosis,
            _treatment
        );

        emit AddRecordEvent(
            recordId,
            block.timestamp,
            _name,
            _age,
            _gender,
            _bloodType,
            _allergies,
            _diagnosis,
            _treatment
        );
    }

    function deleteRecord(uint256 _recordId) public {
        require(!isDeleted[_recordId], "Patient record has already been deleted.");

        Record storage record = records[_recordId];
        
        emit DeleteRecordEvent(
            record.recordId,
            block.timestamp,
            record.name,
            record.age,
            record.gender,
            record.bloodType,
            record.allergies,
            record.diagnosis,
            record.treatment
        );
    }
}
