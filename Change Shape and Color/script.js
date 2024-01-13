let btn1 = document.getElementById("btn1");
btn1.addEventListener('click', () => {
    let circle = document.getElementById("circle");
    circle.style.backgroundColor = randomGenerator();
});

let arr = ['square', 'triangle', 'rectangle', 'diamond', 'star'];
let btn2 = document.getElementById("btn2");
let i = document.querySelector(".square");
btn2.addEventListener('click', ()=> {
    let j = Math.floor(Math.random()*arr.length);
    i.className = arr[j];
    i.classList.add("sh");
})

function randomGenerator(){
    const str = "0123456789abcdef";
    let colors = "#";
    
    for(let i=0; i<6; i++) {
        let j = Math.floor(Math.random()*16);
        colors += str[j];
    }

    return colors;
}