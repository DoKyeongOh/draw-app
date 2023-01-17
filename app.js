const canvas = document.querySelector("canvas");
canvas.width = 800;
canvas.height = 800;

const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width");

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
    isPainting
 = true;
}
function cancelPainting(event) {
    isPainting
 = false;
}

canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);

