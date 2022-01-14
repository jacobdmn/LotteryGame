const assert = require("assert");
const ganache = require("ganache-cli");
const { abi, evm } = require("../compile");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());
const web4 = new Web3(ganache.provider());

let accounts, lottery;

beforeEach(async () => {
  accounts = web3.eth.getAccounts();

  lottery = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object })
    .send({ gas: "10000000", from: accounts[0] });
});

describe("Lottery Contract", () => {
  it("deploys a contract", () => {
    assert.ok(lottery.options.address);
  });
});
