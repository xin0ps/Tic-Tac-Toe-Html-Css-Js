const player1 = "X";
const player2 = "O";
let boards = Array.from(document.querySelectorAll('.board'));

let currentPlayer = player2;

boards.forEach(board => {
    board.addEventListener('click', ()=>{

        if (board.innerText === '') {
            board.innerText = currentPlayer;
            
            if (checkWin()) {
                alert(`${currentPlayer} win!`);
            } 
            else if (isDraw()) {
                    alert('draw!');
                    boards.forEach(board => {
                        board.innerText="";
                        });
                }
                
                
         currentPlayer =currentPlayer=== player1 ? player2 : player1;
        }
    }); 
});



function checkWin() {
    const win = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let positions of win) {
        const [a, b, c] = positions;
        if (boards[a].textContent !== '' &&
            boards[a].textContent === boards[b].textContent &&
            boards[a].textContent === boards[c].textContent) {


                boards.forEach(board => {
                board.innerText="";
                });
            return true;
        }
    }
}
  

function isDraw() {
   
    return [...boards].every(board => board.innerText !== '');
}
