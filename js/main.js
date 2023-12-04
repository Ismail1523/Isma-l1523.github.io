/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

/*----- app's state (variables) -----*/

let board;
let turn = 'X';
let win;
let parties;
//sauvgarder les parties gagnés par X



/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);


/*----- functions -----*/
/**
 * 
 * @returns 
 */
function getWinner() {
    let winner = null;
    
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
        });
        return winner ? winner : board.includes('') ? null : 'T';
};

function handleTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    
    win = getWinner();
    render();
    // Envoyer la valeur de win ( X ou O)
    leGagnant(win);
};

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
};
/**
 * x
 */
function render() {
    board.forEach(function(mark, index) {
    //this moves the value of the board item into the squares[idx]
    squares[index].textContent = mark;
    });
    messages.textContent = win === 'T' ? `C'est une égalité, reine !` : win ? `${win} gagner le jeu!` : `C'est le tour de ${turn} !`;
    };

init();
//créer des variables 
let gagnéX = document.getElementById('X');
let gagnéO = document.getElementById('O');
let nombreX = 0;
let nombreO = 0;
/**  function pour idetnfier le nombre de foix gagné pour x ou o
 * @param {char} win la lettre qui a gagné
 * si X est gagné:- nombre de foix gagnés +1
 * - changer le texte dans le html avec le nombre de foix gagné
 * si O est gagné:- nombre de foix gagné +1
 * - changer le texte dans le html avec le nombre de foix gagné
 * 
 **/
function leGagnant(win){
    if(win == 'X'){
        nombreX++;
        gagnéX.innerHTML = "gagné par X :" + nombreX ;
    }
    else if(win == 'O'){
        nombreO++;
        gagnéO.innerHTML = "gagné par O :" + nombreO ;
    }
}
