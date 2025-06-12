const faqAnswers = {
  "how to send photo on whatsapp": 
    "1. Open WhatsApp.\n2. Tap the 📎 icon.\n3. Select 'Gallery'.\n4. Choose your photo.\n5. Tap the send button.",
    
  "how to pay using paytm": 
    "1. Open Paytm app.\n2. Tap 'Scan & Pay'.\n3. Scan the QR code.\n4. Enter amount and tap 'Pay'.",
    
  "how to use google maps": 
    "1. Open Google Maps.\n2. Search for your destination.\n3. Tap 'Directions'.\n4. Choose transport mode and follow the route.",
    
  "what is google pay":
    "Google Pay is a digital wallet platform by Google to make online or in-store payments securely using your phone.",
    
  "how to recharge mobile using paytm":
    "1. Open Paytm.\n2. Tap on 'Recharge & Pay Bills'.\n3. Select 'Mobile Recharge'.\n4. Enter number & amount.\n5. Tap 'Proceed to Pay'."
};

function handleUserInput() {
  const inputBox = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userText = inputBox.value.trim();

  if (userText === "") return;
  addMessage(userText, "user-msg");
  
  const response = getBotReply(userText.toLowerCase());
  setTimeout(() => {
    addMessage(response, "bot-msg");
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);
  
  inputBox.value = "";
}

function getBotReply(input) {
  for (let key in faqAnswers) {
    if (input.includes(key)) {
      return faqAnswers[key];
    }
  }
  return "Sorry, I didn’t understand that. Try asking something like 'How to send photo on WhatsApp?' 😊";
}

function addMessage(text, className) {
  const chatBox = document.getElementById("chat-box");
  const messageDiv = document.createElement("div");
  messageDiv.className = className;
  messageDiv.innerText = text;
  chatBox.appendChild(messageDiv);
}

function clearChat() {
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML = '';
  const welcome = document.createElement("div");
  welcome.className = "bot-msg";
  welcome.innerText = "Hi! I'm here to help you use apps like WhatsApp, Paytm & Google Maps. Ask me anything!";
  chatBox.appendChild(welcome);
}