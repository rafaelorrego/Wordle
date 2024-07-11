document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const input = document.getElementById('input');
    const submitButton = document.getElementById('submit');
    const secretWord = 'POLLO'; //palabra secreta 

    let attempts = 0;
    //creo el tablero de juego
    function createBoard() {
        for (let i = 0; i < 30; i++) { 
            const cell = document.createElement('div');
            cell.classList.add('cell');
            board.appendChild(cell);
        }
    }
    //Verificamos palabras en posiciones si es correcta o no 
    function updateBoard(guess) {
        const cells = board.querySelectorAll('.cell');
        for (let i = 0; i < guess.length; i++) {
            const cell = cells[attempts * 5 + i];
            cell.textContent = guess[i];
            if (guess[i] === secretWord[i]) {
                cell.classList.add('correct');
            } else if (secretWord.includes(guess[i])) {
                cell.classList.add('present');
            } else {
                cell.classList.add('absent');
            }
        }
        attempts++;
    }

    submitButton.addEventListener('click', () => {
        //para pasar mayuscula 
        const guess = input.value.toUpperCase();
        if (guess.length !== 5) {
            //validamos que solo se ingresen 5 letras 
            alert('porfavor ingrese una palabra de 5 letras.');
            return;
        }
        updateBoard(guess);
        input.value = '';
        //si acerto la palabra
        if (guess === secretWord) {
            alert('Felicidades! has acertado la palabra !');
            submitButton.disabled = true;
            input.disabled = true;
        } else if (attempts === 6) {
            //si no acergo la palabra 
            alert('has perdido! la palabra secreta es ' + secretWord);
            submitButton.disabled = true;
            input.disabled = true;
        }
    });

    createBoard();
});
