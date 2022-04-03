let won = false;
let turn = "X";
const Turn = () => {
    return turn === "X" ? turn = "0" : turn = "X";
}

let box = document.getElementsByClassName("box");
for (let i = 0; i < box.length; i++) {
    let element = box[i];
    element.addEventListener("click", function () {
        if (element.innerText === "" && won === false) {
            element.innerText = turn;
            if (isWin()) {
                document.getElementById("stats").innerText = turn + " won";
            } else {
                Turn();
                document.getElementById("stats").innerText = "Turn for " + turn;
            }
        }
    });
}

let isWin = () => {
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    win.forEach(e => {
        if ((box[e[0]].innerText === box[e[1]].innerText && box[e[1]].innerText === box[e[2]].innerText) && (box[e[0]].innerText != "")) {
            won = true;
        }
    });
    return won;
}
