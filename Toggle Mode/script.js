let isToggle = false;
let div = document.querySelector("#circle");
let heading = document.querySelector("h2");
div.addEventListener('click', ()=> {
    var element = document.body;
    element.classList.toggle("dark");
    if(!isToggle) {
        div.classList.add("dark-mode");
        isToggle = true;
        heading.innerText = "Dark Mode is On"
    }
    else {
        div.classList.remove("dark-mode");
        isToggle = false;
        heading.innerText = "Light Mode is On"
    }
 });