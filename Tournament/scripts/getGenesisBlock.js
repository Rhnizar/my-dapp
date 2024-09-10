const { ethers } = require("hardhat");

async function main() {
  // Get the genesis block (block number 0)
  const genesisBlock = await ethers.provider.getBlock(2);
  console.log("Genesis Block:", genesisBlock);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});


// const { ethers } = require("hardhat");

// async function main() {
//     // Get the latest block number
//     const latestBlockNumber = await ethers.provider.getBlockNumber();
//     console.log("Latest Block Number:", latestBlockNumber);
// }

// main().catch((error) => {
//     console.error(error);
//     process.exit(1);
// });

