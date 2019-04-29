var width = 3;

const cell = document.querySelectorAll('cell');
const row = document.querySelectorAll('row');
const submit = document.getElementById('submit');
const container = document.getElementById ('container');

submit.addEventListener("click", function () {
    container.innerHTML = "";
    width = document.getElementById("changeSize").value;
    createGrid (width)
    hover ()
});

function createGrid (width) {
    if (width > 0 && width < 76) {
        height = width;
        for (count = 0; count < height; count ++) {
        var row = document.createElement ('div');
        row.classList.add ('row');
        for (countR = 0;  countR < width; countR++) {
            var cell = document.createElement ('div');
            cell.classList.add ("cell");
            row.appendChild (cell);
            };
        container.appendChild (row);
        };
    }
    else {
        alert("Please insert a value between 1-75");
    }    
};
createGrid (width)

function hover () {
    var cells = document.querySelectorAll ('.cell');
    cells = Array.from(cells);
    cells.forEach ((cells) => {
        cells.addEventListener("mouseover", function () {
            cells.setAttribute ("style", "background: #5f6060;")
        });
    });
};
hover ()

function reset () {
    var resetButton = document.getElementById ("reset");
    resetButton.addEventListener ("click", function (){
        var cells = document.querySelectorAll ('.cell');
        cells = Array.from(cells);
        cells.forEach ((cells) => {
            cells.setAttribute ("style", "background: white;")
        });
    });
};
reset ()

