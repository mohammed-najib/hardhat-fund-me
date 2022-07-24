const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)

    console.log("Withdrawing...")

    const transactionResonse = await fundMe.withdraw()

    await transactionResonse.wait(1)

    console.log("Finished withdrawing!")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
