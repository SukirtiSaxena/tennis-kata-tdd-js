const { tennis } = require('./game.js');
const each = require('jest-each').default;

describe("Tennis Kata Test Cases", () => {
    each([
        [[0, 0], 'love - All'],
        [[1, 0], '15 - love'],
        [[0, 1], 'love - 15'],
        [[2, 0], '30 - love'],
        [[1, 1], '15 - All'],
        [[2, 2], '30 - All'],
        [[3, 3], '40 - All'],
        [[1, 2], '15 - 30'],
        [[2, 1], '30 - 15'],
        [[2, 3], '30 - 40'],
        [[3, 2], '40 - 30'],
        [[4, 2], 'Player One is the Winner'],
        [[2, 4], 'Player Two is the Winner'],
        [[4, 6], 'Player Two is the Winner'],
        [[4, 4], 'Deuce'],
        [[5, 4], 'Player One is at Advantage'],
        [[5, 6], 'Player Two is at Advantage'],
        [[6, 4], 'Player One is the Winner'],
        [[6, 6], 'Deuce'],
        [[9, 11], 'Player Two is the Winner']
    ]).
        test("If [Player 1 Score, Player 2 Score] is %s, give message , '%s' ", (score, expected) => {
            expect(tennis(score)).toBe(expected);
        });

    each([
        [[-2, 3], 'Scores cannot be negative!!'],
        [[3, -5], 'Scores cannot be negative!!'],
        [[-3, -4], 'Scores cannot be negative!!']
    ]).
        test("If any score is in negative then give error message", (score, expected) => {
            expect(tennis(score)).toBe(expected);

        });

    each([
        [['abcd', 4], 'Not a number'],
        [[5, 'xyz'], 'Not a number'],
        [['abcd', 'xyz'], 'Not a number']
    ]).
        test("If input score %s is not a number then give error message!!", (score, expected) => {
            expect(tennis(score)).toBe(expected);
        });

    test("If input score is undefined then give error message!!", () => {
        expect(tennis([])).toBe('Number is required');
    });

    test("If input score is undefined then give error message!!", () => {
        expect(tennis([,])).toBe('Number is required');
    });

    test("If input score is undefined then give error message!!", () => {
        expect(tennis([2,])).toBe('Number is required');
    });

    test("If input score is undefined then give error message!!", () => {
        expect(tennis([, 5])).toBe('Number is required');
    });

});
