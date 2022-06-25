let op = window.prompt("Enter an Operator (+ - * /)");

var num1 = window.prompt("Enter a Number");
var num2 = window.prompt("Enter another Number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (op == "+") {
    document.write(num1 + num2);
} 

else 
if (op == "-"){ 
   document.write(num1 - num2) ;
}
else
if (op == "*") {
    document.write(num1*num2);
}
else
if (op == "/"){
    document.write(num1/num2);
}



