const grid = document.createElement("div");
grid.classList.add("grid");
document.body.appendChild(grid);

function createBox () {
    box = document.createElement("div");
    box.classList.add("box");
    grid.appendChild(box);
};

function createGrid () {
    for (let i = 1; i <= 256; i++) {
        createBox();
    }
};

createGrid();

let allBoxes = document.querySelectorAll("div.box");
console.log(allBoxes);

for ( let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].addEventListener("mouseover", colorChange);
    function colorChange () {
        allBoxes[i].classList.add("color");
    };
};

function reset() {
    let x = prompt("How many squares would you like the new grid to have?");
    for ( let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].classList.remove("color");
    };
};