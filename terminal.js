const input = document.getElementById("command-input");
const output = document.getElementById("output");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const line = input.value;

    const div = document.createElement("div");
    div.textContent = `user $ ${line}`;
    output.appendChild(div);

    input.value = "";
    window.scrollTo(0, document.body.scrollHeight);
  }
});
