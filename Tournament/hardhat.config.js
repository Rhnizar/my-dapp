/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers"); // Add this line to require the Ethers plugin
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      chainId: 1337, // Optional: Specify chain ID if needed
    }
  }
};
