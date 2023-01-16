const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(230, 200, 10, 100);
ctx.fillRect(320, 200, 10, 100);
ctx.fillRect(255, 200, 50, 150);
ctx.arc(280, 165, 30, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(268, 160, 5, Math.PI, Math.PI * 2);
ctx.arc(292, 160, 5, Math.PI, Math.PI * 2);
ctx.fill();

