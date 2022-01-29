
const tennis = scores => {
    const scoring = {
        0: 'love',
        1: '15',
        2: '30',
        3: '40'
    };

    let finalScore;
    
    (scores[0] > 3 || scores[1] > 3) ? 
       (scores[0] === scores[1] + 1) ? finalScore = 'Player One is at Advantage' :
            (scores[1] === scores[0] + 1) ? finalScore = 'Player Two is at Advantage' :
                (scores[0] >= scores[1] + 2) ? finalScore = 'Player One is the Winner' :
                    (scores[1] >= scores[0] + 2) ? finalScore = 'Player Two is the Winner' :
                        (scores[0] === scores[1]) ? finalScore = 'Deuce' : finalScore = ''
        :
        (scores[0] === scores[1]) ?
            finalScore = (scoring[scores[0]] + ' - All') :
            finalScore = (scoring[scores[0]] + ' - ' + scoring[scores[1]]);

            return finalScore;
};

module.exports = { tennis };
