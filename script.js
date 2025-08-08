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


async function callAPI(){
    const respondse = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": "Bearer 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",
            "HTTP-Referer": "https://kred-e058.github.io/webchat/", // Optional. Site URL for rankings on openrouter.ai.
            "X-Title": "Document", // Optional. Site title for rankings on openrouter.ai.
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "model": "openai/gpt-oss-20b:free",
            "messages": [
            {
                "role": "user",
                "content": "What is the meaning of life?"
            }
            ]
        })
    });

    console.log(respondse);
}
callAPI();



