const grid = document.createElement("div");
grid.style.border = "thick solid black";
document.body.appendChild(grid);

let box;

function createBox () {
    box = document.createElement("div");
    box.style.border = "thin dotted green";
    box.textContent = "i'm a box!";
};

function createRow () {
    const row = document.createElement("div");
    row.style.border = "thin solid red";
    row.textContent = "i'm a row!";
    grid.appendChild(row);
    for (let i = 1; i <= 16; i++) {
        createBox();
        row.appendChild(box);
    }
};

function createGrid () {
    for (let i = 1; i <= 16; i++) {
        createRow();
    }
}

createGrid();