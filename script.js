const buttonElement = document.querySelector('.msger-send-btn') //Поменять цвет кнопки
buttonElement.style.background = "#579ffb";

const messageBot = document.querySelector('.msg-bubble') //Cделать  фоновый цвет сообщения бота зеленым, а текст белым
messageBot.style.background = "rgb(0, 180, 50)";
messageBot.style.color = "white";

const messageUser = document.querySelector('.right-msg .msg-bubble') //Сделать фон наших сообщений желтым, а цвет красным
messageUser.style.background = "yellow";
messageUser.style.color = "red";

const titleChat = document.querySelector('.msger-header-title') //Cделать заголовок чата жирным
titleChat.style.fontWeight = "bold";

const avatarUsers = document.querySelectorAll('.msg-img') //Cделать круглые кружочки аватарок в чате квадратными 
avatarUsers[0].style.borderRadius = "0%";
avatarUsers[1].style.borderRadius = "0%";

const timeElement = document.querySelectorAll('.msg-info-time'); //Cделать время курсивом
timeElement[0].style.fontStyle = "italic";
timeElement[1].style.fontStyle = "italic"; 

let nameUser = document.querySelectorAll('.msg-info-name') //Поменяла имя
nameUser[1].textContent = 'Diana';

