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

    async togglePlay(election) {
        await this.calculateRound().then(() => {

        });
        switch(State.currentPlayer) {
            case "player1": {
                State.currentPlayer = "player2";
                State.election1 = election
            } break;
            case "player2": {
                State.currentPlayer = "player1";
                State.election2 = election;
            }
        }
    },

    computerPlay() {
        let election = randomInt(1, 5);
        switch(election) {
            case 1: {
                this.togglePlay("rock");
            } break;
            case 2: {
                this.togglePlay("paper");
            } break;
            case 3: {   
                this.togglePlay("scissors");
            } break;
            case 4: {
                this.togglePlay("lizard");
            } break;
            case 5: {
                this.togglePlay("spock");
            }
        }
    },

    calculateRound() {
        let e1 = State.election1;
        let e2 = State.election2;

        switch(e1) {
            case "rock": {
                if((e2 == "scissors") || (e2 == "lizard")) {
                    State.score1++;
                } else {
                    State.score2++;
                }
            } break;
            case "paper": {
                if((e2 == "rock") || (e2 == "spock")) {
                    State.score1++;
                } else {
                    State.score2++;
                }
            } break;
            case "scissors": {
                if((e2 == "paper") || (e2 == "lizard")) {
                    State.score1++;
                } else {
                    State.score2++;
                }
            } break;
            case "lizard": {
                if((e2 == "paper") || (e2 == "spock")) {
                    State.score1++;
                } else {
                    State.score2++;
                }
            } break;
            case "spock": {
                if((e2 == "scissors") || (e2 == "rock")) {
                    State.score1++;
                } else {
                    State.score2++;
                }
            } break;
        }
    },

    configureMode(mode) {
        switch(mode) {
            case "player": {
                State.player2 = 'Jugador 2';
            } break;
            case "computer": {
                State.player2 = "Computador"
            }
        }
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

export default GameEngine;