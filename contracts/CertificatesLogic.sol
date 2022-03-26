//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./NFT.sol";

contract CertificatesLogic is Ownable {

    NFT nft;

    struct CertificateDescription {
        string beginningDate;
        string receivingDate;
        string score;
        string info;
    }

    mapping(address => mapping(string => CertificateDescription)) certificatesInfo;

    /// @notice Name of the educational organization
    string public name;

    /// @notice Abbreviation of the educational organization
    string public symbol;

    uint256 certificateIdCounter = 0;

    /// @notice Courses of the educational organization
    mapping(string => bool) public courses;
    string[] public coursesList;

    /// @notice Learners on the course
    mapping(address => mapping(string => bool)) public learners;
    mapping(string => address[]) public learnersList;

    /// @notice Leraner's on the course certificate token id
    mapping(address => mapping(string => uint256)) public certificatesId;


    constructor(string memory _name, string memory _symbol, address _nftAddr) {
        name = _name;
        symbol = _symbol;
        nft = NFT(_nftAddr);
        certificateIdCounter++;
    }

    function createCourse(string memory _courseName) external onlyOwner() {
        require(courses[_courseName] == false, "Course is created already");
        courses[_courseName] = true;
        coursesList.push(_courseName);
    }

    function addLearner(address _account, string memory _courseName) external onlyOwner() {
        require(learners[_account][_courseName] == false, "Learner has already been added on this course");
        learners[_account][_courseName] = true;
        learnersList[_courseName].push(_account);
    }

    function removeLearner(address _account, string memory _courseName) external onlyOwner() {
        require(learners[_account][_courseName] == true, "Learner hasn't been added on this course yet");
        learners[_account][_courseName] = false;
    }

    function createCertificate(address _account, string memory _courseName, string memory _tokenURI) external onlyOwner() {
        require(courses[_courseName] == true, "Course doesn't exist");
        require(learners[_account][_courseName] == true, "The learner doesn't exist on this course");
        require(certificatesId[_account][_courseName] == 0, "Certificate for this account has already been created");

        certificatesId[_account][_courseName] = certificateIdCounter;
        nft.mint(_account, certificateIdCounter);
        nft.setTokenURI(certificateIdCounter, _tokenURI);
        certificateIdCounter++;
    }

    function addDescription(address _account, 
                            string memory _courseName, 
                            string memory _beginningDate, 
                            string memory _receivingDate, 
                            string memory _score, 
                            string memory _info) external onlyOwner() {
        require(isOnCourse(_account, _courseName), "This account is not on this course");
        certificatesInfo[_account][_courseName].beginningDate = _beginningDate;
        certificatesInfo[_account][_courseName].receivingDate = _receivingDate;
        certificatesInfo[_account][_courseName].score = _score;
        certificatesInfo[_account][_courseName].info = _info;
    }

    function viewCourses() external view returns(string[] memory) {
        return coursesList;
    }

    function viewLearners(string memory _courseName) external view returns(address[] memory) {
        return learnersList[_courseName];
    }

    function isOnCourse(address _account, string memory _courseName) public view returns(bool) {
        return learners[_account][_courseName];
    }

    function viewCertificateId(address _account, string memory _courseName) public view returns(uint256) {
        require(certificatesId[_account][_courseName] != 0, "You don't have certificate on this course");
        return certificatesId[_account][_courseName];
    }

    function viewCertificateURI(address _account, string memory _courseName) external view returns(string memory) {
        uint256 certificateId = viewCertificateId(_account, _courseName);
        return nft.tokenURI(certificateId);
    }

    function getCertificateInfo(address _account, string memory _courseName) external view returns(CertificateDescription memory) {
        return certificatesInfo[_account][_courseName];
    }
}