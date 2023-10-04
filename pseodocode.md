turn = false
turn = !turn

turn

a marker

board with state

Array?
multi dimensional array?
[0,1,2,3,4,5,6,7,8]
["",]
[]

click handler

Win condition
some
every
fill
map
data-

every win condition

# html

    cont
        row
            col
                tile id="0"

# -------------------------

## Turns

    turn = false
    turn = !turn

## Tiles

    should only be clickable once
    if game is over tiles shouldn't be clickable

## Buttons

    startBtn
    resetBtn

## HTML

    container div
        row div
            numbered div thru 9 with col

## Design

    background image
    centered container
    no border on sides edges of div

# Tic Tac Toe Game Pseudocode

# Initialize game variables

playerX = "X"
playerO = "O"
currentPlayer = playerX
gameBoard = [[null, null, null], [null, null, null], [null, null, null]]
isGameOver = false

# Function to initialize the game

function initializeGame():
renderGameBoard()
displayPlayerTurn()
addClickListenersToTiles()
addRestartButtonListener()

# Function to render the game board

function renderGameBoard():
for each row in gameBoard:
for each cell in row:
create a div element with unique ID for each cell
append the div element to the #app container

# Function to display the current player's turn

function displayPlayerTurn():
display a message indicating the current player's turn

# Function to add click listeners to empty tiles

function addClickListenersToTiles():
for each cell in gameBoard:
if cell is empty:
add a click event listener to the cell that calls handleTileClick

# Function to handle tile click

function handleTileClick(row, col):
if game is not over and the clicked cell is empty:
update the cell with the current player's symbol
check for win or tie
switch to the next player's turn
update the display

# Function to check for a win

function checkForWin():
check rows, columns, and diagonals for three of the same symbol in a row
if a player has won:
display the winner
set isGameOver to true
disable click listeners on all cells

# Function to check for a tie

function checkForTie():
if there are no empty cells:
display a message indicating a tie
set isGameOver to true

# Function to switch to the next player's turn

function switchPlayer():
if currentPlayer is PLAYER_X:
currentPlayer = PLAYER_O
else:
currentPlayer = PLAYER_X

# Function to add a restart button listener

function addRestartButtonListener():
add a click event listener to the restart button that calls resetGame

# Function to reset the game

function resetGame():
clear the game board
reset game variables
enable click listeners on all cells
initializeGame()

# Main game loop

initializeGame()
