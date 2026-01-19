const input = document.getElementById("command-input");
const output = document.getElementById("output");
const terminal = document.getElementById("terminal");

const COMMANDS = {
  help: () => {
    return `
      <dl>
        <dt><strong>help</strong></dt>
        <dd>Display this help menu</dd>
        <dt><strong>ls</strong></dt>
        <dd>List directory contents</dd>
        <dt><strong>clear</strong></dt>
        <dd>Clear the terminal screen</dd>
        <dt><strong>date</strong></dt>
        <dd>Display current system date and time</dd>
        <dt><strong>blog</strong></dt>
        <dd>Read the latest system blog post</dd>
        <dt><strong>echo [text]</strong></dt>
        <dd>Repeat the input text</dd>
      </dl>
    `;
  },
  ls: () => {
    return `
      <ul class="ls-list">
        <li><span class="icon">📁</span> documents/</li>
        <li><span class="icon">📁</span> images/</li>
        <li><span class="icon">📄</span> readme.txt</li>
        <li><span class="icon">📄</span> script.js</li>
        <li><span class="icon">📄</span> style.css</li>
      </ul>
    `;
  },
  clear: () => {
    output.innerHTML = "";
    return null;
  },
  date: () => {
    return new Date().toLocaleString();
  },
  echo: (args) => {
    return args.join(" ");
  },
  blog: () => {
    return `
      <article class="blog-post">
        <header>
            <h3>Kernel Update v1.0.2</h3>
            <small>Posted on January 19, 2026</small>
        </header>
        <section>
            <p>We have successfully implemented semantic HTML5 tags and a new command engine. The system is now more stable and accessible.</p>
            <ul>
                <li>Added &lt;main&gt; and &lt;aside&gt; support</li>
                <li>Fixed marquee flickering</li>
                <li>Improved command registry</li>
            </ul>
        </section>
      </article>
    `;
  }
};

function handleCommand(commandLine) {
  const [cmd, ...args] = commandLine.trim().split(/\s+/);
  
  const div = document.createElement("div");
  div.className = "command-echo";
  div.innerHTML = `<span class="prompt">user $</span> ${commandLine}`;
  output.appendChild(div);

  if (cmd === "") return;

  const responseDiv = document.createElement("div");
  responseDiv.className = "command-response";

  if (COMMANDS[cmd]) {
    const result = COMMANDS[cmd](args);
    if (result !== null) {
      responseDiv.innerHTML = result;
      output.appendChild(responseDiv);
    }
  } else {
    responseDiv.innerHTML = `<span class="error">Command not found: ${cmd}. Type "help" for a list of commands.</span>`;
    output.appendChild(responseDiv);
  }

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

  ctx.fillStyle = document.body.classList.contains("amber-theme") ? "#ffb000" : "#00ff88";
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




