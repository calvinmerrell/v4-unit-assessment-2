const formBtn = document.getElementById("close-form");
const form = document.getElementById("form");

if (formBtn.innerText === 'X') {
    formBtn.innerText = '+';
    clickedElement.innerText = "X";
} else {
    formBtn.innerText = 'X';
    clickedElement.innerText = "+";
}


    // if (playerSpan.innerText === 'X') {
    //     playerSpan.innerText = 'O';
       
    //     board[clickedId] = "X";
    // } else {
    //     playerSpan.innerText = 'X';
    //     clickedElement.innerText = "O";
    //     board[clickedId] = "O";
    // }