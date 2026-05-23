function sendMessage() {
  let input = document.getElementById("userInput").value;
  let chatbox = document.getElementById("chatbox");

  chatbox.innerHTML += "<p><b>You:</b> " + input + "</p>";

  let reply = "I am a simple chatbot!";

  if(input.toLowerCase() === "hello") {
    reply = "Hi!";
  }

  if(input.toLowerCase() === "how are you") {
    reply = "I am fine!";
  }

  chatbox.innerHTML += "<p><b>Bot:</b> " + reply + "</p>";

  document.getElementById("userInput").value = "";
}