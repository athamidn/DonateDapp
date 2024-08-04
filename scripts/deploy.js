
const hre = require("hardhat");

async function main() {
    const Donate = await hre.ethers.getContractFactory("Donate");
    const donate = await Donate.deploy();

    await donate.waitForDeployment();

    console.log("Deployed contract address:",`${await donate.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
