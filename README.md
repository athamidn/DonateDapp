# Donate DApp

## Introduction

This project is a decentralized application (DApp) for donations. Users can specify their name and message and make a donation of a specified amount. The list of donations is displayed for everyone to see.

## Features

- Ability to make donations with a name and message
- Display the list of donations with details
- Use MetaMask for blockchain interaction

## Technologies Used

- **React**: A library for building user interfaces
- **Vite**: A fast development build tool for web projects
- **Ethers.js**: A library for interacting with the Ethereum blockchain
- **Hardhat**: A development, testing, and deployment environment for Ethereum smart contracts
- **React Toastify**: A library for displaying notifications

## Prerequisites

- Node.js
- MetaMask (as a browser extension)

## Installation and Setup

### 1. Clone the repository

First, clone the project repository:
```bash
git clone https://github.com/yourusername/donate-dapp.git
cd donate-dapp
```
### 2. Install dependencies
```bash
npm install
```
###  3. Smart Contract Setup
First, you need to compile and deploy the smart contract using Hardhat. To do this:

Configure the hardhat.config.js file
```bash
module.exports = {
    solidity: "0.8.24",
    networks: {
        sepolia: {
            url: `https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID`,
            accounts: [`0x${YOUR_PRIVATE_KEY}`]
                  }
        }
};
```

Compile and deploy the smart contract:
```bash
npx hardhat compile
npx hardhat run scripts/deploy.js --network goerli
```
Note down the contract address and replace it in the App.js file.

### 4. Run the Application
Start the application:
```bash
npm run dev
```

The application will be accessible in your browser at http://localhost:3000.

### Contributing
Contributions are always welcome! Please open an issue first to discuss what you would like to change

### License
This project is licensed under the MIT License. See the LICENSE file for more details.

