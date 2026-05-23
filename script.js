function sendMessage() {
  let input = document.getElementById("userInput");
  let text = input.value;
  if (text === "") return;

  let chatbox = document.getElementById("chatbox");

  // User message
  chatbox.innerHTML += `<div class="message user">${text}</div>`;

  // Simple AI logic
  let reply = getReply(text.toLowerCase());

  setTimeout(() => {
    chatbox.innerHTML += `<div class="message bot">${reply}</div>`;
    chatbox.scrollTop = chatbox.scrollHeight;
  }, 500);

  input.value = "";
}

function getReply(msg) {
  if (msg.includes("hello")) return "Hello! How can I help you?";
  if (msg.includes("how are you")) return "I'm just code, but I'm working perfectly 😊";
  if (msg.includes("your name")) return "I'm your AI Assistant 🤖";
  if (msg.includes("help")) return "Ask me anything and I'll try my best!";
  
  return "Interesting question! I'm still learning 🤖";
}
