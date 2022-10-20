let btn = document.querySelector(".btn"); // selecting button
let body = document.body;  // selection body to change color

function generateGradient(){  // functioin to generate random gradient color 

    let collection = '0123456789ABCDEF';
    let color1 = "#";
    let color2 = "#";
    for(let i=0; i<8; i++){
        // generating random color and storing them into above variables
        color1 += collection[Math.floor(Math.random()*16)];
        color2 += collection[Math.floor(Math.random()*16)];
    }
    // setting body color as gradient 

    body.style.backgroundImage = `linear-gradient(to right , ${color1} , ${color2})`;

}
// adding event on button 
btn.addEventListener("click",generateGradient)