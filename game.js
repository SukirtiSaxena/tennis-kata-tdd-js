
const tennis = scores => {
    if (scores[0] === undefined || scores[1] === undefined) return "Number is required";
    if (!Number.isInteger(scores[0]) || !Number.isInteger(scores[1])) return 'Not a number';
    if (scores[0] < 0 || scores[1] < 0) return 'Scores cannot be negative!!';

    const scoring = {
        0: 'love',
        1: '15',
        2: '30',
        3: '40'
    };

    let finalScore;

    if (scores[0] > 3 || scores[1] > 3) {
        if (scores[0] === scores[1] + 1)
            finalScore = 'Player One is at Advantage';
        if (scores[1] === scores[0] + 1)
            finalScore = 'Player Two is at Advantage';
        if (scores[0] >= scores[1] + 2)
            finalScore = 'Player One is the Winner';
        if (scores[1] >= scores[0] + 2)
            finalScore = 'Player Two is the Winner';
        if (scores[0] === scores[1])
            finalScore = 'Deuce';
    }
    else if (scores[0] === scores[1]) {
        finalScore = (scoring[scores[0]] + ' - All');
    }
    else
        finalScore = (scoring[scores[0]] + ' - ' + scoring[scores[1]]);

    return finalScore;
};

module.exports = { tennis };
