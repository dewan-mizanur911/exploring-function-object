// while loop
var i = 0;
while (i < 9){
    // console.log(i);
    if(i == 5){
        break;
    }
    i++;
}

// for loop using break
for (var i = 0; i < 20; i++){
    // console.log(i);
    if(i >= 12){
        break;
    }
}

// for loop using continue
var numbers = [23, 88, 90, 32, 43, 61, 52, 74, 86, 77, 99, 109];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 70){
        continue;
    }
    console.log(number);
}