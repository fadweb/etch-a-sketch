const container = document.querySelector(".container");

function generateGrid(num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.border = "solid black 1px";
            box.style.flex = `0 0 calc(100% / ${num})`;
            box.style.aspectRatio = "1 / 1";
            container.appendChild(box);
        }
    }
}

//changes box background color on hover
container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("box")) {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        e.target.style.backgroundColor = randomColor;
    }
});

generateGrid(16);

//re-generates grid with user input
//handles non numbers & anything outside of range
const gridBtn = document.querySelector("#gridBtn");
gridBtn.addEventListener("click", () => {
    const newGrid = parseInt(prompt("Enter a number between 2-100"));
    if (newGrid >= 2 && newGrid <= 100) {
        container.innerHTML = "";
        generateGrid(newGrid);
    } else {
        alert("Try Again");
    }
});

//clears any background colors on the canvas
const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.style.backgroundColor = "";
    })
})

