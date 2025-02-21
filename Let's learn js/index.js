// console.log('Hello, World!');
// console.log(`another console log`);
// // alert('Hello, World!');
// //alert(`Hello, World! 2`);
// //window.alert('Hello, World!');
// document.getElementById("h1id").textContent = 'Hello, World!';
// document.getElementById("pid").textContent = 'lorem ipsum';

// --------------------------------------------------

// let x;
// x=10;
// console.log(x);
// //window.alert(x);
// let y=20;
// console.log(`y is ${y}`); //only backticks work it seems
// console.log("y is " + y); //this works with double quotes
// console.log('y is ' + y); //this works with single quotes too

// let age=29;
// let price=19.99;
// let name="kisal";
// let isOnline=true;
// let isOffline=false;

// console.log(typeof age);
// console.log(typeof name);
// console.log(`my name is ${name} and I am ${age} years old`);
// console.log(typeof isOnline);

// let fullName = "Kisal Nelaka";
// let age = 29;
// let isStudent = false;

// document.getElementById("p1").textContent = `your name is ${fullName}`;
// document.getElementById("p2").textContent = `your age is ${age}`;
// document.getElementById("p3").textContent = "Enrolled:"+isStudent;
// -----------------------------------------------------------------------

// let noOfStudents = 20;

// noOfStudents = noOfStudents + 1;
// noOfStudents += 1;
// noOfStudents++;

// noOfStudents = noOfStudents - 1;
// noOfStudents -= 1;
// noOfStudents--;

// noOfStudents = noOfStudents * 2;
// noOfStudents *= 2;

// noOfStudents = noOfStudents / 2;
// noOfStudents /= 2;

// noOfStudents = noOfStudents ** 2;
// noOfStudents **= 2;

// noOfStudents = noOfStudents % 3;
// noOfStudents %= 2;

// console.log(noOfStudents);

//js uses bodmas

// ------------------------------------------------------------------

// let userName ;
// // userName = window.prompt("Enter your name");
// // console.log(userName);

// document.getElementById("mySubmit").onclick = function(){
//     userName = document.getElementById("userName").value;
//     console.log(userName);
//     document.getElementById("greeting").textContent ="hello " + userName;
// }

//---------------------------------------------------------------

// let age = window.prompt("Enter your age");
// age = Number(age);
// age+=1;
// console.log(age, typeof age);
// let x = "";
// let y = "";
// let z = "";	

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);
//---------------------------------------------------------------



//let pi=3.1415910;  this can be changed by anyone

// const PI=3.1415910; //this cannot be changed by anyone. capitalization is only for primitive data types
// let radius;
// let circumference;

// //PI = 13.14; //this will give an error

// //radius = window.prompt("Enter the radius of the circle");
// radius = Number(radius);
// circumference = 2 * PI * radius;

// //console.log(`The circumference of the circle is ${circumference}`);

// document.getElementById("mySubmit").onclick = function(){
//     radius = document.getElementById("radius").value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     document.getElementById("result").textContent = "Circumference is: "+circumference;

// };

//-------------------------------------------------------------------

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLbl = document.getElementById("countLbl");

// let count = 0;

// increaseBtn.onclick = function(){
//     count++;
//     countLbl.textContent = count;
// }

// decreaseBtn.onclick = function(){
//     count--;
//     countLbl.textContent = count;
// }

// resetBtn.onclick = function(){
//     count=0;
//     countLbl.textContent = count;
// }

//-----------------------------------------------------

// //Math.PI;
// console.log(Math.PI);

// //Msth.E
// console.log(Math.E);

// let x = 10.2;
// let y =2;
// let z;

// console.log(Math.round(x)); //it will round to the nearest integer
// console.log(Math.ceil(x)); //it will always round up
// console.log(Math.floor(x)); //it will always round down
// console.log(Math.trunc(x)); //it will remove the decimal part
// console.log(Math.pow(x,y)); //it will give x to the power of y
// console.log(Math.sqrt(x)); //it will give the square root of x
// console.log(Math.abs(-x)); //it will give the absolute value of x
// console.log(Math.log(x)); //it will give the natural logarithm of x
// console.log(Math.log10(x)); //it will give the base 10 logarithm of x
// console.log(Math.min(x,y)); //it will give the minimum value
// console.log(Math.max(x,y)); //it will give the maximum value
// console.log(Math.random()); //it will give a random number between 0 and 1
// console.log(Math.random()*10); //it will give a random number between 0 and 10
// console.log(Math.floor(Math.random()*10)); //it will give a random integer between 0 and 10

//-------------------------------------------------------------

// let age = 12 ;

// if(age>=18){
//     console.log("You are an adult");
// }else{
//     console.log("You are a child");
// }

// const age = document.getElementById("age");
// const mySubmit = document.getElementById("mySubmit");
// const result = document.getElementById("result");
// let stuAge = 0;
// mySubmit.onclick = function(){
//     stuAge = Number(age.value);
//     if(stuAge>=18){
//         result.textContent = "You are an adult";
//     }else{
//         result.textContent = "You are a child";
//     }
//     if(stuAge>=18 && stuAge<60){
//         result.textContent = "You are an adult";
//     }else if(stuAge>=60){
//         result.textContent = "You are a senior citizen";
//     }else{
//         result.textContent = "You are a child";
//     }
// }

//------------------------------------------------------------


// const myCheck = document.getElementById("myCheck");
// const visa = document.getElementById("visa");
// const mastercard = document.getElementById("mastercard");
// const paypal = document.getElementById("paypal");
// const mySubmit = document.getElementById("mySubmit");
// const checkresult = document.getElementById("checkresult");
// const payment = document.getElementById("payment");

// mySubmit.onclick = function(){

//     if(myCheck.checked){
//         checkresult.textContent = "You have checked the checkbox";
//     }else{
//         checkresult.textContent = "You have not checked the checkbox";
//     }

//     if(visa.checked){
//         payment.textContent = "You have selected Visa";
//     }else if(mastercard.checked){
//         payment.textContent = "You have selected Mastercard";
//     }else if(paypal.checked){
//         payment.textContent = "You have selected Paypal";
//     }else{
//         payment.textContent = "You have not selected any payment method";
//     }

// }

// ---------------------------------------------------------------------------
