---
layout: post
title: "Chain of Events"
description: "Chain of Events allows organizers to bring their events onchain making them transparent and safer to use. It also allows participants to buy tickets or other event items in form of NFTs."
date: 2024-06-10
---

<p style="text-align: center; font-weight: bold; font-size: 18px; color: #297bff; margin-bottom: 4px"><a href="https://chain-of-events.vercel.app/"><u>TRY IT LIVE HERE</u></a></p>

<p style="text-align: center; margin-bottom: 16px; font-weight: bold; font-size: 18px;">Submitted for the Chainlink BlockMagic Hackathon 2024</p>

<p>Developed as a solo project, Chain of Events addresses critical issues in the event industry such as ticket fraud, lack of price transparency, and complicated event management processes. The platform leverages blockchain technology to enhance security, transparency, and user engagement through a user-friendly interface.</p>

<br>

**Technologies used:**

<br>

- <u>Web3:</u> Solidity, Hardhat, ethers.js, wagmi, Chainlink, Openzeppelin, The Graph, Remix
- <u>Frontend:</u> Next.js, React, Typescript, Tailwind, yarn

<br>

**Technical Architecture:**

<br>

**Smart Contract Integration**: Built with Solidity, the platform features several smart contracts including EventCreation and ExtraNft, which handle event registration, ticket sales, and NFT management. The use of ERC721 standards ensures that each ticket and consumable is a unique, secure digital asset.<br>

**Chainlink Utilization**: Integrates Chainlink Price Feeds for stable pricing in USD and Chainlink Automations for scheduling updates to ticket sales conditions, such as pricing and availability. Chainlink VRF is used in the ExtraLottery contract to ensure fair and transparent random selection of winners.<br>

**Frontend Development**: Implemented using React and Next.js, the frontend interacts seamlessly with blockchain functions via ethers.js and wagmi hooks. Features like real-time event updates and NFT management are enhanced by The Graph indexing services.<br>

<br>

**Development Journey:**

<br>

**Challenges and Adaptations**: The project evolved through various phases of implementation, starting with broad concepts and refining them into specific features. Key challenges included adapting ERC standards from ERC1155 to ERC721 for better token uniqueness and simplicity, and integrating efficient NFT verification mechanisms at event venues.<br>
**Community and Tools**: Scaffold-eth provided a foundational toolkit, facilitating rapid development and deployment on the Avalanche Fuji testnet. The support from the web3 community was instrumental in overcoming technical hurdles.<br>

<br>

**Operational Features:**

<br>

**Secure Ticket Sales and Redemption**: Organizers can manage ticket types and sales conditions on-chain, while authorized personnel use QR scanners to verify and redeem NFTs at events, ensuring a fraud-proof process.<br>
**Dynamic Event Customization**: Organizers can attach Chainlink-driven templates to events, allowing for real-time adjustments and interactive features like lotteries and artist interactions.<br>

<br>

Chain of Events not only showcases advanced blockchain application but also reflects a comprehensive understanding of both backend solidity and frontend reactive frameworks, embodying a full-stack development approach. This project is a testament to innovative engineering and practical blockchain utilization in solving real-world issues.
