document.addEventListener("DOMContentLoaded", function () {
    const container = document.createElement("div");
      container.className = "container text-center mt-5";
      document.body.appendChild(container);

    const h1 = document.createElement("h1");
      h1.textContent = "Tic-Tac-Toe";
      container.appendChild(h1);

    const row = document.createElement("div");
      row.className = "row justify-content-center mt-4";
      container.appendChild(row);

    for (let i = 0; i < 3; i++) {
      const col = document.createElement("div");
        col.className = "col-4";
        row.appendChild(col);

      const btnGroup = document.createElement("div");
        btnGroup.className = "btn-group-vertical";
        col.appendChild(btnGroup);

      for (let j = 0; j < 3; j++) {
        const button = document.createElement("button");
          button.className = "btn btn-light btn-lg";
          button.textContent = "-";
          button.onclick = () => makeMove(i * 3 + j);
          btnGroup.appendChild(button);
      }
    }

    const statusRow = document.createElement("div");
    statusRow.className = "row mt-4";
    container.appendChild(statusRow);

    const statusCol = document.createElement("div");
    statusCol.className = "col";
    statusRow.appendChild(statusCol);

    const status = document.createElement("p");
    status.className = "lead";
    status.textContent = "Player X's turn";
    status.id = "status";
    statusCol.appendChild(status);

    let currentPlayer = "X";
    const board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

    function makeMove(index) {
      if (board[index] === "-" && !isGameOver()) {
        board[index] = currentPlayer;
        const button = document.getElementsByClassName("btn")[index];
        button.textContent = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        updateStatus();
      }
    }

    function isGameOver() {
      const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] !== "-" && board[a] === board[b] && board[b] === board[c]) {
          document.getElementById("status").textContent = `Player ${board[a]} wins!`;
          return true;
        }
      }

      if (!board.includes("-")) {
        document.getElementById("status").textContent = "It's a draw!";
        return true;
      }

      return false;
    }

    function updateStatus() {
      document.getElementById("status").textContent = `Player ${currentPlayer}'s turn`;
    }
  });