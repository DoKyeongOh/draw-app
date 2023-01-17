const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width"); 
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
canvas.width = 800;
canvas.height = 800;

const colors = [
    "#8c7ae6",
    "#fbc531",
    "#e84118",
    "#192a56",
    "#2f3640",
    "#f5f6fa"
];

let isPainting = false;
function onMouseMove(event) {
    if (!isPainting
    ) {
        ctx.moveTo(event.offsetX, event.offsetY);
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
}

canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);

lineWidth.addEventListener("change", onLineWidtChange);
color.addEventListener("change", onColorChange);

