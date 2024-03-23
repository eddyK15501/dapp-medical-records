// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MedicalRecord {
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

    error Unauthorized();
    error InvalidRecord();

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

    address public owner;
    uint256 internal recordId;

    mapping(uint256 => Record) internal records;
    mapping(uint256 => bool) public isDeleted;

    modifier onlyOwner() {
        if (msg.sender != owner) revert Unauthorized();

        _;
    }

    constructor() {
        owner = msg.sender;
    }

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

    function deleteRecord(uint256 _recordId) public onlyOwner {
        if (!isDeleted[_recordId]) revert InvalidRecord();

        Record memory record = records[_recordId];
        isDeleted[_recordId] = true;

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

    function getRecord(uint256 _recordId) public view returns (Record memory) {
        Record memory record = records[_recordId];
        return record;
    }

    function getRecordId() public view returns (uint256) {
        return recordId;
    }

    function getTimestamp(uint256 _recordId) public view returns (uint256) {
        return records[_recordId].timestamp;
    }

    function getName(uint256 _recordId) public view returns (string memory) {
        return records[_recordId].name;
    }

    function getAge(uint256 _recordId) public view returns (uint8) {
        return records[_recordId].age;
    }

    function getGender(uint256 _recordId) public view returns (string memory) {
        return records[_recordId].gender;
    }

    function getBloodType(
        uint256 _recordId
    ) public view returns (string memory) {
        return records[_recordId].bloodType;
    }

    function getAllergies(
        uint256 _recordId
    ) public view returns (string memory) {
        return records[_recordId].allergies;
    }

    function getDiagnosis(
        uint256 _recordId
    ) public view returns (string memory) {
        return records[_recordId].diagnosis;
    }

    function getTreatment(
        uint256 _recordId
    ) public view returns (string memory) {
        return records[_recordId].treatment;
    }

    function getIsDeleted(uint256 _recordId) public view returns (bool) {
        return isDeleted[_recordId];
    }
}
