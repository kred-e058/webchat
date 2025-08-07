let textarea = document.querySelector(".inputElement");
console.log(textarea);
textarea.addEventListener("input", () => {
    textarea.style.height ="auto";
    textarea.style.height = textarea.scrollHeight + "px";
});

function sendMessage(){
    let text = document.querySelector('.inputElement');
    text.value = text.value.trim();
    if (text.value === '') return;

    let container = document.querySelector('.chatBox');

    let containerRespondse = document.createElement("div");
    containerRespondse.classList.add("containerRespondse");
    containerRespondse.innerHTML = "<img src='./user_pic.png'  class='userPic'>";

    let newMessage = document.createElement("div");
    newMessage.innerText = text.value;
    newMessage.classList.add('messenge');
    newMessage.classList.add('human-messenge');
    containerRespondse.appendChild(newMessage);
    container.appendChild(containerRespondse);
    text.value = '';
    textarea.style.height ="auto";
}

// Received and show message 

function getReceivedMessage(){
    let message = "hello toi la AI";
    return message;
}

function showMessage(){
    let container = document.querySelector('.chatBox');

    let containerRespondse = document.createElement("div");
    containerRespondse.classList.add("containerRespondse");
    containerRespondse.innerHTML = "<img src='./AI_pic.png'  class='AIPic'>";

    let newMessage = document.createElement("div");
    newMessage.innerText =  getReceivedMessage();
    newMessage.classList.add('messenge');
    newMessage.classList.add('AI-messenge');
    containerRespondse.appendChild(newMessage);
    container.appendChild(containerRespondse);
}


import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCq7zMGmgl2M0Ueyon3zBCU1WwzxXYtKLg");

async function main() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent("Explain how AI works in a few words");
  const response = await result.response;
  console.log(response.text());
}

main();
