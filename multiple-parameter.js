function addTwoNumbers(number1, number2){
    var total = number1 + number2;
    return total;
}
function substractTwoNumbers(number1, number2){
    var total = number1 - number2;
    return total;
}
function multiplyTwoNumbers(number1, number2){
    var total = number1 * number2;
    return total;
}
function divideTwoNumbers(number1, number2){
    var total = number1 / number2;
    return total;
}

var firstNumber = 200;
var secondNumber = 10;
var addition = addTwoNumbers(firstNumber, secondNumber);
console.log(addition);
var substraction = substractTwoNumbers(firstNumber, secondNumber);
console.log(substraction);
var multiplication = multiplyTwoNumbers(firstNumber, secondNumber);
console.log(multiplication);
var division = divideTwoNumbers(firstNumber, secondNumber);
console.log(division);