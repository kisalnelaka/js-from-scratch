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