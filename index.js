const text = "My Name is Jay Shankarpure.\n16 Year old Developer & Investor.\nBuilding Useful Products on World Wide Web.";
let index = 0;

function type() {
  const typingText = document.getElementById("typing-text");
  typingText.innerHTML += text[index];
  index++;

  if (index >= text.length) {
    clearInterval(typingInterval);
  }
}

const typingInterval = setInterval(type, 100);
