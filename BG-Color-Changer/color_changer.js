//   project   //

const button = document.querySelector("button");
console.log(button);
const body = document.body;
console.log(body);
const currentcolor = document.querySelector(".current-color")
console.log(currentcolor);
function generate_random_number(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`
    return randomColor;
}

button.addEventListener("click",()=>{
    const randomColor = generate_random_number();
    console.log(randomColor);
    body.style.backgroundColor = randomColor;
    currentcolor.textContent = randomColor;
})



// setInterval(() => {
//     let a = new Date();
//     let h = a.getHours();                            <= clock--
//     let m = a.getMinutes();
//     let s = a.getSeconds();
//     console.log`${h}:${m}:${s}`;
// }, 1000);