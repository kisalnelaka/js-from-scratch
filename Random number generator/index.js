// const min = 50;
// const max = 100;


// let randomNumber = Math.floor(Math.random() * (max-min))+min;
// console.log(randomNumber);

const generate = document.getElementById('generate');
const lbl1 = document.getElementById('lbl1');
const lbl2 = document.getElementById('lbl2');
const lbl3 = document.getElementById('lbl3');
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

generate.onclick = function(){
    randomNum1 =Math.floor( Math.random() * max) + min;
    randomNum2 =Math.floor( Math.random() * max) + min;
    randomNum3 =Math.floor( Math.random() * max) + min;
    lbl1.textContent = randomNum1;
    lbl2.textContent = randomNum2;
    lbl3.textContent = randomNum3;
}