const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const { abi, evm } = require("../compile");
const HDWalletProvider = require("@truffle/hdwallet-provider");

// const web3 = new Web3(ganache.provider());

const phrase =
  "vessel female diet cycle memory trigger bike render stairs patient repeat vital";
const endpoint =
  "https://rinkeby.infura.io/v3/c95ed8d4ce414c50845b7ecc7dd4daa9";
provider = new HDWalletProvider(phrase, endpoint);

const web3 = new Web3(provider);

let accounts, lottery;

// beforeEach(async () => {
//   const accounts = await web3.eth.getAccounts();

//   console.log("Current account", accounts[0]);

//   const result = await new web3.eth.Contract(abi)
//     .deploy({ data: evm.bytecode.object })
//     .send({ gas: "10000000", from: accounts[0] });

// });

const beforeEachCustom = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Current account", accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object })
    .send({ gas: "10000000", from: accounts[0] });
};
describe("Lottery Contract", () => {
  it("deploys a contract", () => {
    beforeEachCustom();
    assert.ok(lottery.options.address);
  });
});
