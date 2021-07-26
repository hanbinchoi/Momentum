const loginForm = document.querySelector("#login-form");

const loginInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); // 브라우저 기본동작 멈추기 -> 새로고침 막기
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText=`Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);   
}

const savedUsername=localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    // show greeting
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
    
}