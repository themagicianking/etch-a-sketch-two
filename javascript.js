const grid = document.createElement("div");
//grid.style.border = "thick solid black";
grid.classList.add("grid");
document.body.appendChild(grid);

function createBox () {
    box = document.createElement("div");
    box.classList.add("box");
    //box.style.border = "thin dotted green";
    box.textContent = "i'm a box!";
    grid.appendChild(box);
};

function createGrid () {
    for (let i = 1; i <= 256; i++) {
        createBox();
    }
}

createGrid();