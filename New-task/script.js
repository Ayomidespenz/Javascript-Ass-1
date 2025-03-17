let text ="Hello, World!"
console.log(typeof text)
let figure = 10;
console.log( typeof figure)
let calc = true;
console.log(typeof calc)
const person ={
    firstName :"Alice" , age: "25" }
console.log(typeof person)

let number = [ "1", "2" ,"3" , "4", "5"];
console.log(typeof number)
let car;
console.log(typeof car)

//Arithmetic operations

function add(a, b) {
    return a+b;
}

const sumTwoNumbers = add(20, 30) //sum of two numbers

console.log( "Sum of " + 20 + " and " + 30 + " is "  + sumTwoNumbers)
document.getElementById("Add").innerHTML =sumTwoNumbers;

const productTwoNumbers = product(50, 30) //product of two numbers

function product (a, b){
    return a*b;
}
console.log("product of " + 50 + " and " + 30 + " is " + productTwoNumbers)
document.getElementById("multiply").innerHTML =productTwoNumbers;

let subtractTwoNumbers = subtract(80, 20) //subtraction of two numbers

    function subtract(a, b){
        return a-b;
    }
console.log("Subtraction of " +  80  + " and " + 20 + " is " + subtractTwoNumbers)
document.getElementById("subtraction").innerHTML =subtractTwoNumbers;

let Name = greet("Hello");

function greet(message) {
    return ( message +  ' Quadri ' + "! Welcome to JavaScript programming!")
}
console.log(Name);
document.getElementById("greet").innerHTML =Name;

const  dataType= type(figure);

function type(Yusuff){
return typeof (Yusuff)
}
console.log(dataType);
document.getElementById("Type").innerHTML = dataType;

  function  squareNumber(num) {
    return num**2
}
console.log(squareNumber(15))

  function calculateArea (len, brt) {
    const area = len * brt
    return area
}

console.log(calculateArea(4,5))
// 
function minutesToSeconds(minute){
    const min = minute * 60
    return min
}


document.getElementById('minute').innerHTML = minutesToSeconds(5);
console.log(minutesToSeconds(5))


 function greetUS(name) {
    return "hello" + (name) + "welcome"
}


console.log(greetUS("seyi"))