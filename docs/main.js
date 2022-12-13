
function progressBar(){
var m1=document.getElementById("m1");
var m2=document.getElementById("m2");
var m3=document.getElementById("m3");
var m4=document.getElementById("m4");
var m5=document.getElementById("m5");
var number1= document.getElementById("number1");
var number2= document.getElementById("number2");
var number3= document.getElementById("number3");
var number4= document.getElementById("number4");
var number5= document.getElementById("number5");


number1.innerText=m1.value;
number2.innerText=m2.value;
number3.innerText=m3.value;
number4.innerText=m4.value;
number5.innerText=m5.value;


var c1=document.getElementById("circle1");
var c2=document.getElementById("circle2");
var c3=document.getElementById("circle3");
var c4=document.getElementById("circle4");
var c5=document.getElementById("circle5");

c1.style.strokeDashoffset = 430 - (430*(parseInt(number1.innerText)/100));
c2.style.strokeDashoffset = 430 - (430*(parseInt(number2.innerText)/100));
c3.style.strokeDashoffset = 430 - (430*(parseInt(number3.innerText)/100));
c4.style.strokeDashoffset = 430 - (430*(parseInt(number4.innerText)/100));
c5.style.strokeDashoffset = 430 - (430*(parseInt(number5.innerText)/100));
}