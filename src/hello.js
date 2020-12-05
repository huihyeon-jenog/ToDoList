const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    hello = document.querySelector(".js-hello");

const USER_LS = "currentUser",
    SHOWING_CU = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintName(currentValue);
    saveName(currentValue);
}

function paintName(text){
    form.classList.remove(SHOWING_CU);
    hello.classList.add(SHOWING_CU);
    hello.innerText = `Hello ${text}`;
}

function askForName(){
    form.classList.add(SHOWING_CU);
    form.addEventListener("submit", handleSubmit);
    
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintName(currentUser);
    }
}

function init(){
    loadName();
}

init();