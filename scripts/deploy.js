const hre = require("hardhat");

async function main() {
  const School = await hre.ethers.getContractFactory("School");
  const school = await School.deploy();

  await school.deployed( process.env.MY_ACC );

  console.log("School deployed to:", school.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
