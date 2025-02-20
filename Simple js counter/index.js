const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLbl = document.getElementById("countLbl");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLbl.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLbl.textContent = count;
}

resetBtn.onclick = function(){
    count=0;
    countLbl.textContent = count;
}