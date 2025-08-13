let textarea = document.querySelector(".inputElement");
console.log(textarea);
textarea.addEventListener("input", () => {
    textarea.style.height ="auto";
    textarea.style.height = textarea.scrollHeight + "px";
});

function userSendMessage(){
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
    sendandre(text.value);

    text.value = '';
    textarea.style.height ="auto";
}

// Received and show message 

function getReceivedMessage(mess){
    let message = mess;
    return message;
}

function showMessage(mess){
    let container = document.querySelector('.chatBox');

    let containerRespondse = document.createElement("div");
    containerRespondse.classList.add("containerRespondse");
    containerRespondse.innerHTML = "<img src='./AI_pic.png'  class='AIPic'>";

    let newMessage = document.createElement("div");
    newMessage.innerText =  mess;
    newMessage.classList.add('messenge');
    newMessage.classList.add('AI-messenge');
    containerRespondse.appendChild(newMessage);
    container.appendChild(containerRespondse);
}

async function sendandre(userMess){
    try {
        const respondse = await fetch('http://localhost:3000/chat',{
            method:"POST",
            headers:{"Content-Type":"application/json",
                "Access-Control-Allow-Origin": "https://kred-e058.github.io/webchat/"
            },
            body:JSON.stringify({
                message: userMess
            })
        })

        const data = await respondse.json();
        console.log(data[0].message.content);
        await showMessage(data[0].message.content);

    } catch (error) {
        showMessage('Có lỗi xảy ra!!');
    }
}

// sendandre('hello i am phi');

