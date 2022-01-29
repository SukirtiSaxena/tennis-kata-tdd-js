const { tennis } = require('./game.js');

// input array of scores for player 1 and player 2 as [S1,S2]

describe("Tennis Kata Test Cases", () => {
    test("Winner is Player 1", () => {
        expect(tennis([6, 4])).toBe('Player One is the Winner');
    });
    test("Winner is Player 2", () => {
        expect(tennis([4, 6])).toBe('Player Two is the Winner');
    });
    test("Score is Deuce", () => {
        expect(tennis([4, 4])).toBe('Deuce');
    });  
    test("Player 1 is at Advantage", () => {
        expect(tennis([5, 4])).toBe('Player One is at Advantage');
    }); 
    test("Player 2 is at Advantage", () => {
        expect(tennis([5, 6])).toBe('Player Two is at Advantage');
    }); 
    test("Player 2 is at Advantage", () => {
        expect(tennis([1, 1])).toBe('15 - All');
    }); 
    test("Player 2 is at Advantage", () => {
        expect(tennis([2, 3])).toBe('30 - 40');
    }); 

});
