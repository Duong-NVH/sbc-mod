/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.11",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },

  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      gas: 120000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
      timeout: 1800000,
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/8918959b567c47418752523f7b91a9cc",
      accounts: [
        "a6bd9fa520a4bc25f40baac061f038188db7b1f16703493f5dd5453bfb399dff",
      ],
      gas: 12000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
      timeout: 1800000,
    },
    ethMainnet: {
      url: "",
      accounts: [],
      gas: 12000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
      timeout: 1800000,
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      gas: 120000000,
      // gasPrice: 225000000000,
      chainId: 43113,
      accounts: [
        "a6bd9fa520a4bc25f40baac061f038188db7b1f16703493f5dd5453bfb399dff",
      ],
    },
    avalanche: {
      url: "https://api.avax.network/ext/bc/C/rpc",

      chainId: 43114,
      accounts: [],
    },

    fantomOpera: {
      url: "https://rpc.ftm.tools",
      chainId: 250,
      accounts: [],
    },

    fantomTest: {
      url: "https://rpc.testnet.fantom.network",
      chainId: 4002,
      accounts: [
        "a6bd9fa520a4bc25f40baac061f038188db7b1f16703493f5dd5453bfb399dff",
      ],
      blockGasLimit: 10000000000,
      // gas: 2100000,
      // gasPrice: 8000000000,
    },
  },

  mocha: {
    timeout: 1800000,
  },
};
