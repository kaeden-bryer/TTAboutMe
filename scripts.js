const description = document.querySelector('#game-description');

// get all the squares from html
const square1 = document.querySelector('#square1');
const square2 = document.querySelector('#square2');
const square3 = document.querySelector('#square3');
const square4 = document.querySelector('#square4');
const square5 = document.querySelector('#square5');
const square6 = document.querySelector('#square6');
const square7 = document.querySelector('#square7');
const square8 = document.querySelector('#square8');
const square9 = document.querySelector('#square9');

// initialize count at 0
let count = 0;
let game = true;

const squares = [
    square1, square2, square3,
    square4, square5, square6,
    square7, square8, square9
];

const map = new Map();


for (let i = 0; i < 9; i++) {
    map.set(squares[i], false);
    squares[i].addEventListener('click', function() {
        console.log("clicked");
        if (map.get(squares[i]) == false && game == true){
            count++;
            map.set(squares[i], true);
            console.log(count)
            text = count % 2 == 0 ? "X" : "O";
            squares[i].innerText = text;
            let message = text == "X" ? "O's turn" : "X's turn";
            description.innerText = message;
            checkWin();
        }
        else if (game == false) {
            newGame();
        }
        
    })
}

function checkWin() {
    const winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7]
    ]

    for (combination of winningCombinations) {
        if (squares[combination[0] - 1].innerText == squares[combination[1] - 1].innerText 
            && squares[combination[0] - 1].innerText == squares[combination[2] - 1].innerText
            && squares[combination[0] - 1].innerText != "") {
            description.innerText = `${squares[combination[0] - 1].innerText} has won the game! Click to play again`
            squares[combination[0] - 1].style.backgroundColor = "limegreen";
            squares[combination[1] - 1].style.backgroundColor = "limegreen";
            squares[combination[2] - 1].style.backgroundColor = "limegreen";
            game = false;
            return true;
        }
    }

    if (count >= 9) {
        description.innerText = "It's a draw! Click to play again."
        for (let i = 0; i < 9; i++) {
            squares[i].style.backgroundColor = "red";
        }
        game = false;
        return true;
    }
}

function newGame(){
    count = 0;
    for (let i = 0; i < 9; i++){
        map.set(squares[i], false);
        squares[i].textContent = "";
        squares[i].style.backgroundColor = "whitesmoke";
        description.innerText = "New Game";
        game = true;
    }
}


// social security thing

function checkSS() {
    const socialSecurity = document.querySelector('#ss');

    console.log("checking ss");
    console.log(socialSecurity.value);
    const ss = socialSecurity.value;
    if (ss.length == 0) {
        alert("Plz fill out the form");
    }
    else if (ss.length != 9) {
        alert("Are you lying to me :(")
    }
    else {
        alert("Thank you for your social security number");
    }
    socialSecurity.value = "";
}