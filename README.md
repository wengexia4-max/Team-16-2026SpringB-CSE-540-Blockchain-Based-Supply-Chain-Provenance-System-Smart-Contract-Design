# Team_16-CSE540-Supply_Chain_Provenance

A hybrid blockchain-based supply chain provenance system, combining on chain smart contracts, an off-chain event backend server to seed the index db, and a modern web frontend with react.js.

---

## Architecture Overview

This project implements a three-layer architecture:

## System Architecture Diagram

```mermaid
graph TD
    %% Styling
    classDef frontend fill:#e1f5fe,stroke:#03a9f4,stroke-width:2px;
    classDef backend fill:#fff3e0,stroke:#ff9800,stroke-width:2px;
    classDef offchain fill:#e8f5e9,stroke:#4caf50,stroke-width:2px;
    classDef onchain fill:#f3e5f5,stroke:#9c27b0,stroke-width:2px;

    %% 1. Presentation Layer
    subgraph Presentation Layer [1. Presentation Layer - User Interfaces]
        direction LR
        A[Producers]:::frontend
        B[Suppliers]:::frontend
        C[Retailers]:::frontend
        D[Consumers]:::frontend
    end

    %% 2. Application Layer
    subgraph Application Layer [2. Application Layer]
        E[Application Server / API Gateway]:::backend
    end

    %% 3. Off-Chain Layer
    subgraph Off-Chain Layer [3. Off-Chain Storage Layer]
        direction LR
        F[(Relational Database\nUser Profiles, Caching, Search)]:::offchain
        G[IPFS Network\nHeavy Files, Immutable Metadata]:::offchain
    end

    %% 4. On-Chain Layer
    subgraph Blockchain Layer [4. On-Chain Layer]
        H{Polygon Blockchain\nProvenance Smart Contracts}:::onchain
    end

    %% Relationships and Data Flow
    A -->|Registers Product & Uploads Docs| E
    B -->|Logs Transit & Custody Events| E
    C -->|Verifies Receipt & Authenticity| E
    D -->|Scans QR & Reads History| E

    E <-->|Queries & Caches UI Data| F
    E -->|Uploads Heavy Files| G
    G -->|Returns Cryptographic Hash CID| E

    E -->|Submits Tx: Product ID + Status + CID| H
    H -->|Emits State Changes & Verifies Ownership| E


1. **On-Chain Layer (`blockchain/`)**  
	- Solidity smart contracts for supply chain provenance  
	- Hardhat for development, testing, and deployment
    - Mocha for unit testing

2. **Off-Chain Backend (`backend/`)**  
	- Node.js service listens to blockchain events (e.g., `ProductRegistered`)  
	- Persists data to a database (Postgres)

3. **Presentation Layer (`frontend/`)**  
	- React-based UI for all roles (Admin, Producer, Distributor, Retailer, Consumer)  
	- Interacts with both the blockchain and the backend indexer

---

## Prerequisites

- **Node.js** (v24.14.10 is recommended)
- **npm** (comes with Node.js)
- **MetaMask** browser extension (for blockchain interaction)
- **Postgres** (for backend database, if running locally)


### How to install node v24.14.10 ?

1. Install NVM as mentioned: https://github.com/nvm-sh/nvm
2. Install node veresion 24
```
$ nvm install v24.14.10

$ nvm use 24
Now using node v24.14.10

$ node -v
v24.14.10

```

## Step-by-Step Run Instructions

### Block Chain Developement and Deployment
1. **Clone the repository**
	```sh
	git clone <repo-url>
	cd TeamName_CSE540_FinalProject
	```

2. **Change the diretory to blockchain**
    ```sh
    cd blockchain
    ```
3. **Install dependencies**
	```sh
	npm install
	```

4. **Start the local blockchain**
	```sh
	npx hardhat node
	```
5. **Run Tests**
    ```
    npm run test
    ```
6. **Deploy smart contract local** 
    ```
    npm run deploy-local
    ```


7. **Deploy smart contracts to Sepoli**

    ```sh
    # Create .env from the template


    cp .env.example .env


    # replace these placeholders with your credentials <YOUR_API_KEY> and <0xYOUR_WALLET_PRIVATE_KEY>
    # Never commit this file. This is already added to .gitignore

    npm run deploy

    ```


### Start the backend event listener ###

1. **Change the diretory to back-end**
    ```sh
    cd back-end
    ```
2. **Install dependencies**
	```sh
	npm install
	```
3. **Run the backend**
	```sh
	npm run dev
	```

### Start the Front ###

1. **Change the diretory to front-end**
    ```sh
    cd front-end #
    ```
2. **Install dependencies**
	```sh
	npm install
	```
3. **Run the backend**
	```sh
	npm run dev
	```


**Access the app**  
	Open your browser and go to [http://localhost:3000](http://localhost:3000)

---

## Notes

- Ensure MetaMask is connected to the local Hardhat network.
- Update `.env` files as needed for blockchain RPC URLs and database credentials.
- For production/testnet deployment, update network configs and use real endpoints.

---


