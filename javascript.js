const grid = document.createElement("div");
grid.classList.add("grid");
document.body.appendChild(grid);

let x = 16;

function createBox () {
    box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${500/x}px`;
    box.style.height = `${500/x}px`;
    grid.appendChild(box);
};

function createGrid () {
    for (let i = 1; i <= (x * x); i++) {
        createBox();
    }
};

createGrid();

let allBoxes = document.querySelectorAll("div.box");

function etch () {
    for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].addEventListener("mouseover", colorChange);
        function colorChange () {
            allBoxes[i].classList.add("color");
        };
    };
};

etch();

function reset() {
    for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].remove();
    };
    x = prompt("How many squares would you like the new grid to have per row?");
    if (x > 100) {
        x = 100;
    };
    createGrid();
    allBoxes = document.querySelectorAll("div.box");
    etch();
};