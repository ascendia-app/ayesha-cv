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

// === Command Data ===
const commands = {
  help: "Available commands: about, education, experience, projects, contact",
  about: "I’m Ayesha, a 17 y/o A Level student passionate about Economics, Data, and Leadership.",
  education: "📘 Education: AS/A2 Levels | SICAS Lahore | Economics, Sociology, History, Math",
  experience: "✨ Experience: Deputy Head Girl, Ascendia Founder, MUN Delegate, SAT Prep",
  projects: "💻 Projects: Notion templates, Ascendia site, GitHub portfolio, interactive resume",
  contact: "📬 Contact: email@email.com | LinkedIn: linkedin.com/in/ayesha",
};

// === Typing Effect Function ===
function typeEffect(element, text, delay = 30) {
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
    // Add typing effect for valid command
    const span = document.createElement("span");
    line.appendChild(span);
    output.appendChild(line);
    typeEffect(span, `> ${commands[cmd]}`, 20);
  } else {
    line.textContent = `> Unknown command: ${cmd} (type 'help')`;
    output.appendChild(line);
  }

  output.scrollTop = output.scrollHeight; // auto-scroll down
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

// === Intro Typing Animation ===
window.addEventListener("load", () => {
  const introLines = [
    "> hello, i’m ayesha",
    "> aspiring economist | data enthusiast | student leader",
    "> type help to explore my CV",
  ];

  let delay = 0;
  introLines.forEach((line, index) => {
    const p = document.createElement("p");
    p.className = "line";
    output.appendChild(p);
    setTimeout(() => {
      typeEffect(p, line, 40);
    }, delay);
    delay += line.length * 40 + 500; // staggered typing
  });
});
