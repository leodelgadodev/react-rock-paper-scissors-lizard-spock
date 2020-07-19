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

    getCurrentPlayer() {
        return State.currentPlayer;
    },

    getPlayer(number) {
        let res;
        switch(number) {
            case 1: {
                res = State.player1;
            } break;
            case 2: {
                res = State.player2;
            }
        }
        return res;
    },

    // togglePlay(election) {
    //     console.log(election);
    //     let currentPlayer = State.currentPlayer;
    //     switch(currentPlayer) {
    //         case "Jugador 1" || "Jugador": {
    //             State.currentPlayer = State.player2;
    //             State.election1 = election;
    //             debugger; console.log(State.election1);
    //         } break;
    //         case "Jugador 2" || "Computador": {
    //             State.currentPlayer = State.player1;
    //             State.election2 = election;
    //             debugger; console.log(State.election2);
    //         }
    //     }
    //     currentPlayer = State.currentPlayer
    //     debugger; console.log('turno de ' + currentPlayer);
    //     this.calculateRound();
    // },

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

    resetElections() {
        State.election1 = "";
        State.election2 = "";
    },

    calculateRound() {
        let res;
        let e1 = State.election1;
        let e2 = State.election2;

        switch(e1) {
            case "rock": {
                if((e2 == "scissors") || (e2 == "lizard")) {
                    res = {winner: State.player1, choice: State.election1};
                } else {
                    res = {winner: State.player2, choice: State.election2};
                }
            } break;
            case "paper": {
                if((e2 == "rock") || (e2 == "spock")) {
                    res = {winner: State.player1, choice: State.election1};
                } else {
                    res = {winner: State.player2, choice: State.election2};
                }
            } break;
            case "scissors": {
                if((e2 == "paper") || (e2 == "lizard")) {
                    res = {winner: State.player1, choice: State.election1};
                } else {
                    res = {winner: State.player2, choice: State.election2};
                }
            } break;
            case "lizard": {
                if((e2 == "paper") || (e2 == "spock")) {
                    res = {winner: State.player1, choice: State.election1};
                } else {
                    res = {winner: State.player2, choice: State.election2};
                }
            } break;
            case "spock": {
                if((e2 == "scissors") || (e2 == "rock")) {
                    res = {winner: State.player1, choice: State.election1};
                } else {
                    res = {winner: State.player2, choice: State.election2};
                }
            } break;
            default: {
                res = {winner: false}
            }

            return res;
        }

        return res;
    },

    saveChoice(player, election) {
        switch(player) {
            case 1: State.election1 = election; break;
            case 2: State.election2 = election; break;
        }
    },

    configureMode(mode) {
        switch(mode) {
            case "player": {
                State.player1 = 'Jugador 1';
                State.player2 = 'Jugador 2';
            } break;
            case "computer": {
                State.player1 = 'Jugador';
                State.player2 = "Computador"
            }
        }
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default GameEngine;