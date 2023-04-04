const grid = document.createElement("div");
grid.style.border = "thick solid black";
document.body.appendChild(grid);

function createBox () {
    const box = document.createElement("div");
    box.textContent = "i'm a box!"
    grid.appendChild(box);
};

function createRow () {
    for (let i = 1; i <= 16; i++) {
    createBox();
    }
};

function createGrid () {
    for (let i = 1; i <= 16; i++) {
        createRow();
    }
}

createGrid();