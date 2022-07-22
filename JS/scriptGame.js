//Function counter to the game

let count = 0;
const value = document.querySelector('#value');
const click = document.querySelector('#checkbox')

function plus() {
    count = count + 1;
    value.textContent = count;
}

//