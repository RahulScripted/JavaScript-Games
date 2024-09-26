const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#turn");
const reStartButton = document.querySelector("#resetBtn");

const options = ["","","","","","","","",""];
let currentPlayer = "X";
let running = false;

// Objects
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Function initialize game
initializeGame();
function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    reStartButton.addEventListener("click",restartGame);
    statusText.textContent = `${currentPlayer}'s Turn`;
    running = true;
}

// function cellClicked to check which cell is clicked
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
    if(options[cellIndex] != "" || !running) return;

    updateCell(this,cellIndex);
    checkWinner();
}

// Now update cell
function updateCell(cell,index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer; 
}

// Now change player
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s Turn`;
}

// Function to check winner
function checkWinner(){
    let roundWon = false;

    for(let i = 0;i < winningConditions.length;i++){
        const condition = winningConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];


        if(cellA == "" || cellB == "" || cellC == "") continue;
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }
    if(roundWon){
        statusText.textContent = `${currentPlayer}'s Wins!`;
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
    }
    else changePlayer();
}

// Restart Game
function restartGame(){
    currentPlayer = "X";
    options = ["","","","","","","","",""];
    statusText.textContent = `${currentPlayer}'s Turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}