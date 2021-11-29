const loginInput = document.querySelector(".login-form input");
const loginForm = document.querySelector(".login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";



function loginsubmit(event) {
   event.preventDefault();
   const username= loginInput.value;
   loginForm.classList.add(HIDDEN_CLASSNAME);
   localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(USERNAME_KEY);
}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername ===null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginsubmit);
} else{
    paintGreetings(savedUsername);
}