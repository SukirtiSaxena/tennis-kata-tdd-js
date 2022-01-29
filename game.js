
const tennis = scores => {
    const scoring = {
        0: 'love',
        1: '15',
        2: '30',
        3: '40'
    };

    if (scores[0] > 3 || scores[1] > 3) {
        if (scores[0] === scores[1] + 1)
            return 'Player One is at Advantage';
        if (scores[1] === scores[0] + 1)
            return 'Player Two is at Advantage';
        if (scores[0] >= scores[1] + 2)
            return 'Player One is the Winner';
        if (scores[1] >= scores[0] + 2)
            return 'Player Two is the Winner';
        if (scores[0] === scores[1])
            return 'Deuce';
    }
    else {
        if (scores[0] === scores[1])
            return (scoring[scores[0]] + ' - All');
        return (scoring[scores[0]] + ' - ' + scoring[scores[1]]);
    }
};

module.exports = { tennis };
