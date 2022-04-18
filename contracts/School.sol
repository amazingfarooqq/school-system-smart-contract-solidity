//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract School {

   address payable public owner; 

    constructor () {
        owner = payable(msg.sender);
    }
   
   struct student {
       uint rollNo;
       string name;
       string fathername;
       uint256 age;
       string course;
       string qualification;
   }

   mapping(uint256 => student) students;

   uint rollNo;

   function admitStudent(string memory _name,string memory _fathername,uint256 _age,string memory _course,string memory _qualification) public payable 
   {
       require(msg.value >= 0.1 ether , "You have to pay 0.1 ether");
       students[rollNo] = student(rollNo, _name, _fathername , _age , _course , _qualification);
       rollNo++;

       owner.transfer(msg.value);

       
   }

   function checkStudent(uint256 _rollNo) public view returns(uint256 , string memory, string memory, uint256, string memory, string memory){
       return (
        students[_rollNo].rollNo,
        students[_rollNo].name,
        students[_rollNo].fathername,
        students[_rollNo].age,
        students[_rollNo].course,
        students[_rollNo].qualification
       );
   }


}
