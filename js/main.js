// Define gameBoard as a global variable
let gameBoard;

// function to generate my empty game board
function loadBoard() {
  let h1 = document.createElement("h1");
  h1.innerHTML = "Tic-Tac-Toe";
  h1.classList = "d-flex justify-content-center";
  document.body.appendChild(h1);

  gameBoard = document.createElement('div'); // Assign to the global variable
  gameBoard.id = "gameBoard";
  gameBoard.classList = "container row d-flex justify-content-center align-items-center";
  document.body.appendChild(gameBoard);

  
}

// function to create 9 buttons in my game board
function makeTiles() {
  for (let i = 0; i < 9; i++) {
    let tile = document.createElement("div");
    tile.classList = "col-4 text-center border";

    let btn = document.createElement("button");
    btn.id = i
    btn.classList = "btn btn-light btn-lg";
    btn.textContent = ".";
    tile.appendChild(btn);

    btn.addEventListener("click", placeCharacter);

    gameBoard.appendChild(tile);
  }
}
loadBoard();
makeTiles();

let resetDiv = document.createElement("div");
  resetDiv.classList = "d-flex justify-content-center align-items-center"
  gameBoard.appendChild(resetDiv)

  let resetBtn = document.createElement("button");
  resetBtn.classList = "btn btn-primary mt-5";
  resetBtn.innerHTML = "RESET"
  resetDiv.appendChild(resetBtn);

// Call the functions

let currentPlayerDisplay = document.createElement("div");
currentPlayerDisplay.id = "currentPlayerDisplay";
gameBoard.appendChild(currentPlayerDisplay);

function displayCurrentPlayer() { // adds current players turn to the screen using string literal
  currentPlayerDisplay.textContent = `Current Player: ${currentPlayer}`;
}


<<<<<<< HEAD
let playerX = []
let playerO = []

winConditionArr =  [
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [6,4,2],
];

    function winCondition(){
        let player1 = false;
        let player2 = false;
        for (let i = 0; i < 8; i++) {
            let winCombo = winConditionArr[i];
            
            for (let j = 0; j < winCombo.length; j++) {
                if (playerX.includes(winCombo[j])) {
                    player1 = true;
                    break;
                }
                if (playerO.includes(winCombo[j])) {
                    player2 = true;
                    break;
                }
            }
            
            
        }
        if (player1) {
            console.log("Player X WON");
        } else if (player2){
            console.log("Player O WON");
        }

    console.log("this is being called");
=======
function placeCharacter(e) {
  // Get the button that was clicked
  let btn = e.target;
  
  // checks for x and o in button
  if (btn.textContent !== "X" && btn.textContent !== "O") {
    btn.textContent = currentPlayer; // fills with x if button is empty
    
    currentPlayer = currentPlayer === "X" ? "O" : "X"
  }displayCurrentPlayer()
>>>>>>> 8377e69e6c05e4dd7e22b7d1d7a3ffd4041e82f5
}

let currentPlayer = "X"

<<<<<<< HEAD

function placeCharacter(e) {
    let btn = e.target;
    
    if (btn.textContent !== "X" && btn.textContent !== "O") {
        btn.textContent = currentPlayer; 
        
        let tileIndex = parseInt(btn.id);
        boardState[tileIndex] = currentPlayer;

        if (currentPlayer === "X") {
            playerX.push(tileIndex);
        } else {
            playerO.push(tileIndex);
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }console.log(playerX, playerO)
    winCondition()
}



let boardState = ["", "", "", "", "", "", "", "", ""];

resetBtn.addEventListener("click", resetBoard);

function resetBoard(){
    window.location.reload()
}
=======
winConditionArr =  [
    [0,3,6]
    [1,4,7]
    [2,5,8]
    [0,1,2]
    [3,4,5]
    [6,7,8]
    [0,4,8]
    [6,4,2]
]


>>>>>>> 8377e69e6c05e4dd7e22b7d1d7a3ffd4041e82f5
