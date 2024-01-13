let divcontain = document.querySelector("#random-color-generator");
for(let i=0; i<30; i++) {
    let container = document.createElement("div");
    container.classList.add("colorGenerator");
    divcontain.appendChild(container);
}
let divs = document.querySelectorAll(".colorGenerator");
// console.log(divs);
divs.forEach((div) => {
    let newcolor = randomGenerator();
    div.style.backgroundColor = newcolor;
    div.innerText = newcolor;
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


// randomGenerator();