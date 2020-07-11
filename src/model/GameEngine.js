import State from './GameState.json';

const GameEngine = {

    reset() {
        State.player1 = "";
        State.player2 = "";
        State.playerScore1 = "";
        State.playerScore2 = "";
    },

    setPlayers(play1, play2) {
        State.player1 = play1;
        State.player2 = play2;
    },

    getPlayer(number) {
        let res;
        switch(number) {
            case 1: res = State.player1; break;
            case 2: res = State.player2; break;
        }

        return res;
    },

    getPlayers() {
        let res = [];
        res.push(State.player1);
        res.push(State.player2);
        return res;
    },

    togglePlay() {
        console.log("Toggle Play", "TODO")
    }
}

export default GameEngine;