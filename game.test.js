const { tennis } = require('./game.js');
const each = require('jest-each').default;

describe("Tennis Kata Test Cases", () => {
    each([
        [[6, 4], 'Player One is the Winner'],
        [[4, 6], 'Player Two is the Winner'],
        [[4, 4], 'Deuce'],
        [[5, 4], 'Player One is at Advantage'],
        [[5, 6], 'Player Two is at Advantage'],
        [[1, 1], '15 - All'],
        [[2, 3], '30 - 40']
    ]).
        test("If [Player 1 Score, Player 2 Score] is %s, give message , '%s' ", (score, expected) => {
            expect(tennis(score)).toBe(expected);
        });

});
