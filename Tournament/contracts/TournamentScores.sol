// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TournamentScores {
    struct Score {
        uint tournamentId;
        uint winnerId;
        uint winnerIdScore;
        uint loserId;
        uint loserIdScore;
    }

    // Mapping from tournamentId to an array of scores
    mapping(uint => Score[]) public tournamentScores;

    // Function to store a score for a specific tournament
    function storeScore(
        uint _tournamentId, 
        uint _winnerId, 
        uint _winnerIdScore, 
        uint _loserId, 
        uint _loserIdScore
    ) public {
        tournamentScores[_tournamentId].push(Score(
            _tournamentId, 
            _winnerId, 
            _winnerIdScore, 
            _loserId, 
            _loserIdScore
        ));
    }

    // Function to get scores for a specific tournament
    function getScores(uint _tournamentId) public view returns (Score[] memory) {
        return tournamentScores[_tournamentId];
    }
}
