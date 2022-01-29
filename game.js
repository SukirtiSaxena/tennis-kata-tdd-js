
const tennis = scores => {

    if (scores[0] > 3 || scores[1] > 3) {
        if (scores[0] === scores[1] + 1)
            return 'Player One is at Advantage';
        if (scores[1] === scores[0] + 1)
            return 'Player Two is at Advantage';
        if (scores[0] >= scores[1] + 2) {
            return 'Player One is the Winner';
        }
        if (scores[1] >= scores[0] + 2) {
            return 'Player Two is the Winner';
        }
    }
    if (scores[0] > 3 && scores[0] === scores[1])
        return 'Deuce';
};

module.exports = { tennis };