function loadBoard(){
    let h1 = document.createElement("h1");
        h1.innerHTML = "Tic-Tac-Toe";
        h1.classList = "d-flex justify-content-center";
        document.body.appendChild(h1);

    let gameBoard = document.createElement('div');
        gameBoard.id = "gameBoard";
        gameBoard.classList = "container row d-flex justify-content-center align-items-center";
        document.body.appendChild(gameBoard);

        
    }
    loadBoard()
    
    
    
    function makeTiles(){
        for (let i = 0; i <= 8; i++) {
                let tiles = document.createElement("div")
                tiles.id = "tiles"
                tiles.classList = "col-4 text-center"
                tiles.innerHTML = "mommy"
                gameBoard.appendChild(tiles)
                    }
    }
    makeTiles()