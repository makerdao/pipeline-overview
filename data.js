pipelineData = {
  stages: ["Concept", "Implementation", "Review", "Done"],
  groups: [{
    taskGroup: "Core Technology",
    colors: {
      main: "#00d1df",
      border: "#00c4d1",
      lightCell: "#f3fbfc",
      darkCell: "#f0f8f9"
    },
    tasks: [
      {
        name: "Dai 1.0",
        DRI: "rain",
        description: "Dai 1.0 is the first version of our CDP engine. It is made with Solidity and only supports one collateral type: ETH via PETH. The purpose of this deployment is to see how a real version of Dai behaves in the wild and begin a feedback cycle for our next version. In addition, a live deployment presents an opportunity for third parties to begin to integrate with our system, which is something we are pursuing energetically. This iteration of Dai is governed directly by the MKR holders, but it lacks the ability to inflate MKR during a black swan event. Because of its single-collateral nature, the debt ceiling is constrained for the safety of Dai holders.",
        stage: "Done"
      },
      {
        name: "Token Auctions",
        DRI: "rain",
        description: "This is a standalone utlity that can conduct generic token-to-token auctions. It is meant to be used during the CDP liquidation process and during the Buy&Burn stability fee process. Because its functionality exists independent of the Dai Stablecoin System, we will likely release it earlier than Dai for the purposes of testing and integration. Like Dai 2.0, this token auction is optimized for simplicity and gas efficiency.",
        stage: "Implementation"
      },
      {
        name: "Dai 2.0",
        DRI: "rain",
        description: "Dai 2.0 is the next version of our CDP engine, which will support any arbitrary token as collateral. It represents a significant refinement of the system, which is a result of feedback and lessons learned from the Dai 1.0 deployment. Most of the effort has been spent making it as a simple and gas efficient as possible. This version of Dai will be implemented in a custom programming language that we've developed with these two ideals in mind.",
        stage: "Implementation"
      },
      {
        name: "Root Authority",
        DRI: "nikolai",
        description: "The Root Authority of the Dai Stablecoin System will be the MKR-driven \"constitution\" that selects what form of governance the system will actually use. MKR holders will be able to select a governance method at this level and give it authority to change parameters in the system. They will then contribute to active consensus-finding via the functionality of their chosen method. The work to specify and implement this governance method is covered in the \"Layer 2 Governance\" work item.",
        stage: "Done"
      },
      {
        name: "Layer 2 Governance",
        DRI: null,
        description: "This work item covers the first governance process to be elected by the MKR holders via the Root Authority. It will exist somewhere along the tradeoff spectrum between flexibility and resilience, with the expectation that it will be used to take a more active role in the day-to-day configuration of the system's risk parameters than could be achieved with the Root Authority. This work item will leave the conceptual stage as we encounter a need for it, as the system can be efficiently coordinated with one-off proposals run through the Root Authority when the MKR community is still small.",
        stage: "Concept"
      }
    ]
  },
  {
    taskGroup: "Verification",
    colors: {
      main: "#ffb25e",
      border: "#fdaa59",
      lightCell: "#fffaf5",
      darkCell: "#fcf7f2"
    },
    tasks: [
      {
        name: "Code Review",
        fullname: "External Code Review",
        DRI: "zandy",
        description: "The Dai 2.0 critical path and secondary systems will have to be reviewed by multiple competent external auditors before launching.",
        subtasks: ["Discuss potential auditors", "Contract with auditors", "Review & Feedback cycle"],
        stage: "Implementation"
      },
      {
        name: "KEVM Proofs",
        fullname: "KEVM Formal Verification",
        DRI: "kjekac",
        description: "K is an executable semantic framework that is used for formal analysis of programming languages. It was recently used by a team of talented academics from the University of Illinois to define a formal semantics of the Ethereum Virtual Machine, known as KEVM. We are following this research closely and are using  the KEVM formal semantics to create proofs of Maker's correctness. We intend to launch Dai 2.0 with its key properties formally verified.",
        links: ["http://www.kframework.org","https://www.ideals.illinois.edu/handle/2142/97207","https://github.com/kframework/evm-semantics"],
        stage: "Implementation"
      }
    ]
  },
  {
    taskGroup: "DevOps",
    colors: {
      main: "#a4867f",
      border: "#977c75",
      lightCell: "#f9f8f7",
      darkCell: "#f6f5f4"
    },
    tasks: [
      {
        name: "Price Feeds 1.0",
        DRI: "mariano.conti",
        description: "This is the minimum viable product for the price oracle ecosystem. At the start, the system will consist of three price feed providers reading from different Ethereum marketplaces and regularly posting the ETH/USD rate. Then these three prices will be aggregated into a wrapper contract that will provide the median price as the canonical price for Dai. Each of these price feed providers will be administered by Mariano initially and later we will add other community members' price feeds for redundancy.",
        subtasks: ["DSCache Instances Running", "Medianizer Running"],
        links: ["https://github.com/makerdao/medianizer"],
        stage: "Done"
      },
      {
        name: "Price Feeds 2.0",
        DRI: "mariano.conti",
        description: "The next iteration of our price feed ecosystem technology will focus on gas efficiency and safety. Rather than each feed provider posting updates directly to the blockchain, they will first coordinate off-chain by swapping prices that have been signed with their Ethereum keys. Then they will batch these signed messages into one transaction that will be broadcast once per hour, reducing the number of blockchain transactions that need to be made down to one for the entire group. Additionally, this new price information will be publicly staged for one hour before going live inside the Dai system. This is to prevent an attack by the oracles, as the MKR holders will have an hour to globally settle Dai if malicious price information is ever submitted.",
        stage: "Implementation"
      },
      {
        name: "Keeper Software",
        DRI: "reverendus",
        description: "The Keeper framework will present a sensible means of running periodic tasks against the blockchain. This relates to Maker because we have many aspects of our system that expect profit-seeking robots to \"poke\" a contract and trigger a state change. We want to ensure that as many users as possible have access to these profit-making opportunities, to ensure the overall health of the system.",
        subtasks: ["CDP Liquidation task", "CDP Maintenance task", "Basic DAI arbitrage task"],
        stage: "Done"
      },
      {
        name: "Python API",
        DRI: "reverendus",
        description: "This is the Python library for integration with the Dai smart contracts.",
        links: ["https://github.com/makerdao/pymaker"],
        stage: "Done"
      },
      {
        name: "Javascript API",
        DRI: "wkampmann",
        description: "This is the Javascript library for integration with the Dai smart contracts.",
        stage: "Implementation"
      },
      {
        name: "REST API",
        DRI: "dc",
        description: "REST API DESCRIPTION",
        stage: "Implementation"
      }
    ]
  },
  {
    taskGroup: "UX & Product",
    colors: {
      main: "#6ec78a",
      border: "#68ba81",
      lightCell: "#f6fbf8",
      darkCell: "#f3f8f5"
    },
    tasks: [
      {
        name: "MKR Dashboard",
        DRI: "nikolai",
        description: "MKR DASHBOARD DESCRIPTION",
        stage: "Concept"
      },
      {
        name: "Dai Dashboard",
        fullname: "Dai Stablecoin System Dashboard",
        DRI: "gbalabasquer",
        description: "This is a UI lens to view and interact with the Dai Stablecoin System. It will allow for a bird's eye view of the system's open CDP set, oracle set, target price and rate. It will also allow a user to open a new CDP and manage any owned by their address.",
        stage: "Implementation"
      },
      {
        name: "Auctions Dashboard",
        DRI: "zandy",
        description: "AUCTIONS DASHBOARD DESCRIPTION",
        stage: "Concept"
      }
    ]
  }]
};
