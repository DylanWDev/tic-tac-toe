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



function placeCharacter(e) {
  // Get the button that was clicked
  let btn = e.target;

  // Check if the button already contains "X" or "O"
  if (btn.textContent !== "X" && btn.textContent !== "O") {
    btn.textContent = "X"; // Fill with "X" if empty
  }
  if (btn.textContent == "X" && btn.textContent == "O") {
    btn.textContent = "O"; // Fill with "X" if empty
  }
}
