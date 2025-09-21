// === Theme Toggle ===
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

// === Elements ===
const commandInput = document.getElementById("command");
const output = document.getElementById("output");

// === Command Data (with syntax highlight spans) ===
const commands = {
  help: `<span class="keyword">const</span> commands = [<span class="string">"about"</span>, <span class="string">"education"</span>, <span class="string">"experience"</span>, <span class="string">"projects"</span>, <span class="string">"contact"</span>]`,
  about: `<span class="keyword">let</span> about = {<br>
&nbsp;&nbsp;name: <span class="string">"Syeda Ayesha Wasti"</span>,<br>
&nbsp;&nbsp;role: <span class="string">"A Level Student | Economics + Data Science Enthusiast"</span><br>
}`,
  education: `<span class="keyword">const</span> education = {<br>
&nbsp;&nbsp;school: <span class="string">"SICAS Lahore"</span>,<br>
&nbsp;&nbsp;subjects: [<span class="string">"Economics"</span>, <span class="string">"Sociology"</span>, <span class="string">"Law"</span>,<span class="string">"History"</span>, <span class="string">"Math"</span>]<br>
}`,
  experience: `<span class="keyword">const</span> experience = [<br>
&nbsp;&nbsp;<span class="string">"Deputy Head Girl @ SICAS"</span>,<br>
&nbsp;&nbsp;<span class="string">"Web Developer and Graphic Designer"</span>,<br>
&nbsp;&nbsp;<span class="string">"Model UN Delegate"</span><br>
]`,
  projects: `<span class="keyword">function</span> projects() {<br>
&nbsp;&nbsp;<span class="comment">// Notion templates, Ascendia, GitHub portfolio, Cambridge IGCSE/A Level notes</span><br>
}`,
  contact: `<span class="keyword">let</span> contact = {<br>
&nbsp;&nbsp;email: <span class="string">"ayeshandfatima12345@gmail.com"</span>,<br>}`,
};

// === Typing Effect ===
function typeEffect(element, text, delay = 25) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, delay);
    }
  }
  typing();
}

// === Handle Commands ===
function handleCommand(cmd) {
  const line = document.createElement("p");
  line.className = "line";

  if (commands[cmd]) {
    const span = document.createElement("span");
    line.appendChild(span);
    output.appendChild(line);
    typeEffect(span, commands[cmd], 12);
  } else {
    line.innerHTML = `<span class="error">ReferenceError:</span> ${cmd} is not defined. Try <span class="string">"help"</span>`;
    output.appendChild(line);
  }

  output.scrollTop = output.scrollHeight;
}

// === Listen for Enter Key ===
commandInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = commandInput.value.trim().toLowerCase();
    if (cmd) {
      handleCommand(cmd);
    }
    commandInput.value = "";
  }
});

// === Intro Lines ===
window.addEventListener("load", () => {
  const introLines = [
    `<span class="comment">// Welcome to Ayesha’s interactive resume</span>`,
    `<span class="keyword">console</span>.log(<span class="string">"Hello, World!"</span>)`,
    `<span class="comment">// Type "help" to explore my CV</span>`,
  ];

  let delay = 0;
  introLines.forEach((line) => {
    const p = document.createElement("p");
    p.className = "line";
    output.appendChild(p);
    setTimeout(() => {
      typeEffect(p, line, 18);
    }, delay);
    delay += line.length * 18 + 600;
  });
});
