require("dotenv").config()
require("@nomicfoundation/hardhat-toolbox")
require("hardhat-gas-reporter")
require("hardhat-deploy")

const Rinkeby_RPC_URL = process.env.Rinkeby_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

module.exports = {
    // solidity: "0.8.9",
    solidity: {
        compilers: [{ version: "0.8.9" }, { version: "0.6.6" }],
    },
    defaultNetwork: "hardhat",
    networks: {
        rinkeby: {
            url: Rinkeby_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 4,
            blockConfirmations: 6,
        },
        // ropsten: {
        //     url: process.env.ROPSTEN_URL || "",
        //     accounts: [],
        //     // accounts: [privateKey0, privateKey1, privateKey2],
        // },
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKETCAP_API_KEY,
        // token: "MATIC",
        token: "ETH",
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        user: {
            default: 1,
        },
    },
}
