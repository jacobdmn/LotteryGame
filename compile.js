const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Lottery.sol");
const source = fs.readFileSync(inboxPath, "utf8");

const input = {
  language: "Solidity",
  sources: {
    "Lottery.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  "Lottery.sol"
].Lottery;

// const path = require("path"); //for crossplatform
// const fs = require("fs"); //file system
// const solc = require("solc");

// const lotteryPath = path.resolve(__dirname, "contracts", "Lottery.sol");
// const source = fs.readFileSync(lotteryPath, "utf8"); //change to utf8 to UTF-8

// module.exports = solc.compile(source, 1).contracts[":Lottery"];
