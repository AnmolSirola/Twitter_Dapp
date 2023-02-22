const hre = require("hardhat");

async function main(){
    const Twitter = await hre.ethers.getContractFactory("Twitter");
    const twitter = await Twitter.deploy();
    await twitter.deployed();

    console.log("Twitter contract deployed to :",twitter.address);

}


main().catch((error)=>{
    console.log(error);
    process.exitCode = 1;
});