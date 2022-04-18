const { expect } = require("chai");
const { parseEther } = require("ethers/lib/utils");
const { ethers } = require("hardhat");

function toWei(n) {
  return parseEther(n)
}

describe("School:", function () {
  let school , a1;
  it("Deploy School: ", async function () {
    [a1] = await ethers.getSigners()
    const School = await ethers.getContractFactory("School");
    school = await School.deploy();
    await school.deployed();
  });

  it('Check Student:', async () => {
    const value = await school.checkStudent(0);
    console.log(value)
  })

  it('Admit Student:', async () => {
    await school.connect(a1).admitStudent('farooqdad','fazaldad', 21 , 'abc course' , 'matric',{ value: toWei('0.1')})
  })

  it('Check Student 0' , async () => {
    const student0 = await school.checkStudent(0)
    console.log(student0)
  })

});
