const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const lineWidth = document.getElementById("line-width"); 
const color = document.getElementById("color");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const modeBtn = document.getElementById("mode-btn");

canvas.width = 800;
canvas.height = 800;

let isPainting = false;
function onMouseMove(event) {
let isFilling = false;
    if (!isPainting) {
        return;
    }
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}
function onMouseDown(event) {
    isPainting = true;
}
function cancelPainting(event) {
    isPainting = false;
    ctx.beginPath();
}
function onLineWidtChange(event) {
    ctx.lineWidth = event.target.value;
}
function onColorChange(event) {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
    color.value = event.target.value;
}
function onColorClick(event) {
    ctx.strokeStyle = event.target.dataset.color;
    ctx.fillStyle = event.target.dataset.color;
    color.value = event.target.dataset.color;
}
function onModeClick(event) {
    isFilling = !isFilling;
    modeBtn.innerHTML = "Draw";
    if (!isFilling) {
        modeBtn.innerHTML = "Fill";
    } 
}
function onCanvasClick() {
    if (isFilling) {
        ctx.fillRect(0, 0, 800, 800);
    }
}

canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);
lineWidth.addEventListener("change", onLineWidtChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach(color => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);
