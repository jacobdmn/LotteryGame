// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Lottery {
    address private manager;
    address[] players;
    address public winner;

    constructor() {
        manager = msg.sender;
    }

    function getPlayers() public view returns(address[] memory) {
        return players;
    }
    function enter() public payable {
        require(msg.value > 100 wei);
        players.push(msg.sender);
    }

    function randoom() private view restricted returns(uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, players)));
    }

    function pickWinner() restricted public {
        uint index = randoom() % players.length;
        winner = players[index];
        payable(winner).transfer(address(this).balance);
        players = new address[](0);
    }

    modifier restricted(){
        require(manager == msg.sender);
        _;
    }
}

