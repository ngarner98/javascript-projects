const whoWon = require('../RPS.js');

describe('whoWon', () => {
    test('both players tie', () =>{
        let output = whoWon('paper', 'paper');
        expect(output).toBe("TIE!");
    });
    test(`return 'Player 2 Wins' if p2 is paper`,() => {
        let output = whoWon('rock', 'paper');
        expect(output).toBe("Player 2 wins!");
    });
    test(`return 'Player 2 Wins' if p2 is scissors`,() => {
        let output = whoWon('paper', 'scissors');
        expect(output).toBe("Player 2 wins!");
    })
});
