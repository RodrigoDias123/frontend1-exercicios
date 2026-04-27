const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Retângulo
ctx.fillStyle = 'steelblue';
ctx.fillRect(50, 50, 120, 80);

// Círculo
ctx.beginPath();
ctx.arc(300, 90, 50, 0, Math.PI * 2);
ctx.fillStyle = 'tomato';
ctx.fill();

// Linha
ctx.beginPath();
ctx.moveTo(420, 50);
ctx.lineTo(560, 150);
ctx.strokeStyle = 'green';
ctx.lineWidth = 3;
ctx.stroke();

// Quadrado animado
let x = 0;
const squareY = 200;
const squareSize = 50;

function animate() {
  ctx.clearRect(0, squareY - 5, canvas.width, squareSize + 10);

  ctx.fillStyle = 'gold';
  ctx.fillRect(x, squareY, squareSize, squareSize);

  x += 2;
  if (x > canvas.width) x = -squareSize;

  requestAnimationFrame(animate);
}

animate();
