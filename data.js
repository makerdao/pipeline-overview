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
        name: "Vow Settler",
        DRI: "rain",
        description: "The Vow settler is the last major component of the Dai Credit System to be implemented. It is responsible for liquidating risky CDP's and sending their collateral to the token auction (i.e. flip auction), inflating MKR for the emergency debt auction (i.e. flop auction), and collecting stability fees for the Buy&Burn auction (i.e. flap auction).",
        stage: "Implementation"
      },
      {
        name: "Token Auctions",
        DRI: "rain",
        description: "The Continuous Splitting Token Auction is an innovative way of running each of the various Dai Credit System auctions continuously. Large bundles of tokens are always being added to the pool, and bidders can choose to isolate a smaller lot size by bidding and creating a new sub-auction. This creates many small auctions from one large lot, aiding price discovery and liquidity. This token auction will be used to auction off collateral tokens in the flip auction, MKR in the flop auction, and Dai in the flap auction.",
        stage: "Review"
      },
      {
        name: "Prism",
        DRI: "zandy",
        description: "This task will incorporate an initial MKR governance solution into the Dai Credit System. MKR holders will be able to vote for trusted sets of addresses, with the ability to change their vote and modify the list over time. These addresses will then make up the set of price feed providers and the developer admin multisig.",
        stage: "Concept"
      },
      {
        name: "Sai",
        DRI: "nikolai",
        description: "By far the most impactful work item on this list, Sai (Simple Dai) represents our first generation temporary stablecoin. The design mimics the mechanics of the actual Dai Credit System, which means we will be able to learn many lessons about the operation and implementation tradeoffs associated with an actual stablecoin in the wild. The main difference between Sai and the Dai Credit System is the fact that Sai completely trusts the authorized price feed provider (detailed in the Oracle MVP task), allowing for a much simpler design. We are going to start with a slow rollout, but we intend to open Sai up to the community and make it easy for anyone to benefit from its stability.",
        subtasks: ["Launch", "Feedback Cycle into Dai Credit System"],
        links: ["https://github.com/makerdao/sai", "https://github.com/makerdao/sai-explorer"],
        stage: "Implementation"
      }
    ]
  },
  {
    taskGroup: "Specification",
    colors: {
      main: "#9875c7",
      border: "#8d6db9",
      lightCell: "#f8f7fb",
      darkCell: "#f5f4f7"
    },
    tasks: [
      {
        name: "Purple Paper",
        DRI: "mbrock",
        description: "This is the official reference implementation of Maker. It is written in Haskell, and defines the data structures and state transition functions that make up the Dai Credit System.",
        subtasks: ["Specify the Vow Settler", "Purple Paper CLI", "Purple Paper Educational UI"],
        links: ["http://stablecoin.technology/purple.pdf"],
        stage: "Implementation"
      },
      {
        name: "Aquamarine Paper",
        DRI: "denis",
        description: "This is the translation of the reference implementation of the Dai Credit System as defined in the Purple Paper into a formal system called linear logic. This will allow us to begin formal verification of the Dai Credit System by creating linear logic proofs, detailed in the Proof Production Pipeline work item.",
        links: ["https://en.wikipedia.org/wiki/Linear_logic", "https://plato.stanford.edu/entries/logic-linear/", "https://dapphub.chat/channel/linear-logic-study-group"],
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
        DRI: null,
        description: "The Dai Credit System will have to be reviewed by multiple competent external auditors before launching.",
        subtasks: ["Discuss potential auditors", "Contract with auditors", "Review & Feedback cycle"],
        stage: "Concept"
      },
      {
        name: "Proof Production",
        fullname: "Proof Production Pipeline",
        DRI: null,
        description: "This task describes all the work necessary to create formal proofs about the Dai Credit System in linear logic. This will be the primary formal verification effort for the system, ensuring its safety by proving all of its invariants and guarantees. This work will build substantially on the groundwork laid by the Aquamarine paper.",
        subtasks: ["Understanding pirapira"],
        links: ["https://medium.com/@pirapira/ethereum-virtual-machine-for-coq-v0-0-2-d2568e068b18", "https://medium.com/@pirapira/hoare-logics-for-ethereum-virtual-machine-4f4fc799486"],
        stage: "Concept"
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
        name: "Oracle MVP",
        DRI: "james",
        description: "This is the minimum viable product for the Oracle ecosystem. At the start, the system will consist of three price feed providers reading from different Ethereum marketplaces and regularly posting the ETH/USD rate. Then these three prices will be aggregated into a wrapper contract that will provide the median price as the canonical price for Sai. Each of these price feed providers will be administered by James initially.",
        subtasks: ["DSCache Instances Running", "Medianizer Running"],
        links: ["https://github.com/makerdao/medianizer"],
        stage: "Review"
      },
      {
        name: "Keeper Software",
        DRI: "reverendus",
        description: "The Keeper framework will present a sensible means of running periodic tasks against the blockchain. This relates to Maker because we have many aspects of our system that expect profit-seeking robots to \"poke\" a contract and trigger a state change. We want to ensure that as many users as possible have access to these profit-making opportunities, to ensure the overall health of the system.",
        subtasks: ["Oracle price publishing task", "Token auction participation task", "Extract repeatable logic"],
        stage: "Concept"
      }
    ]
  },
  {
    taskGroup: "MKR Governance",
    colors: {
      main: "#6ec78a",
      border: "#68ba81",
      lightCell: "#f6fbf8",
      darkCell: "#f3f8f5"
    },
    tasks: [
      {
        name: "Dai Foundation",
        fullname: "Establishment of the Dai Foundation",
        DRI: "rune",
        description: "This encompasses all the work necessary to get the Maker development fund transferred to a legal entity called the Dai Foundation. The development fund is currently administered by a transition team appointed by Rune, the original creator of all MKR, while he works with MME Legal to get the Dai Foundation established as a Stiftung in Zug Switzerland.",
        links: ["https://blog.makerdao.com/2017/02/19/establishment-of-the-dai-foundation/", "http://www.mme.ch/"],
        stage: "Implementation"
      },
      {
        name: "Dashboard",
        fullname: "Dai Credit System Dashboard",
        DRI: "michael",
        description: "This will be a UI lens to view and interact with the Dai Credit System. It will allow for a bird's eye view of the system's open CDP set, oracle set, target price and rate. It will also allow a user to open a new CDP and manage any owned by their address. This explorer will be built on the DappHub application platform.",
        stage: "Concept"
      },
      {
        name: "Bulletin Board",
        fullname: "Proposal Bulletin Board with MKR Signaling",
        DRI: "zandy",
        description: "This task will begin to bootstrap the scientific community of MKR holders. Each CDP type will be posted publicly here for MKR holders to signal their approval or disapproval. Because we want to emphasize scientific consensus for MKR decisions, each proposal will have added Evidence and Interpretation sections to present the reasoning behind the proposal.",
        stage: "Concept"
      }
    ]
  }]
};
