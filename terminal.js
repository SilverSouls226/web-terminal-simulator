const input = document.getElementById("command-input");
const output = document.getElementById("output");
const terminal = document.getElementById("terminal");
function handleCommand(commandLine) {
  const div = document.createElement("div");
  div.className = "command-echo";
  div.innerHTML = `<span class="prompt">user$</span> ${commandLine}`;
  output.appendChild(div);
  input.value = "";
  terminal.scrollTop = terminal.scrollHeight;
}
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    handleCommand(input.value);
  }
});
// Focus input on click anywhere in terminal
terminal.addEventListener("click", () => {
  input.focus();
});
// Matrix Rain
const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
const fontSizeMatrix = 16;
const columns = canvas.width / fontSizeMatrix;
const drops = [];
for (let x = 0; x < columns; x++) {
  drops[x] = 1;
}
function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00FF00";
  ctx.font = fontSizeMatrix + "px monospace";
  for (let i = 0; i < drops.length; i++) {
    const text = characters.charAt(Math.floor(Math.random() * characters.length));
    ctx.fillText(text, i * fontSizeMatrix, drops[i] * fontSizeMatrix);
    if (drops[i] * fontSizeMatrix > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(drawMatrix, 33);
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
