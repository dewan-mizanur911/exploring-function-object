// object with object properties

var mizan = {
    name: 'Mizan',
    birthYear: 1996,
    education: 'B.Sc in CSE',
    homeTown: 'Tangail',
    university: 'Daffodil International University'
}

mizan.homeTown = 'Mymensingh';  // Changing object property - way 1

mizan['homeTown'] = 'Ashulia'; // Changing object property - way 2

var newHome = 'homeTown';
mizan[newHome] = "Dhaka"; // Changing object property - way 3

// Function with multiple parameters
function joinConflict(soldiars, vehicles, aircrafts) {
    var vehicleCapacity = 12;
    var totalVehicleSoldiars = vehicles * vehicleCapacity;

    var singleAircraftCapacity = 8;
    var totalAircraftCapacity = singleAircraftCapacity * aircrafts;

    var totalCapacity = totalAircraftCapacity + totalVehicleSoldiars;
    if( totalCapacity >= soldiars){
        return 'is ready!';
    }
    else{
        return 'need more vehicles and aircrafts for war!';
    }
}

var americanArmyPersonnel = 1800;
var americanVehicles = 133;
var americanAircrafts = 55;
var isAmericaReady = joinConflict(americanArmyPersonnel, americanVehicles, americanAircrafts);
console.log('America', isAmericaReady);

var chineseArmy = 2000;
var chineseVehicles = 100;
var chineseAircrafts = 50;
var isChinaReady = joinConflict(chineseArmy, chineseVehicles, chineseAircrafts);
console.log('China', isChinaReady);

// Switch case 
var soldiars = 1600;
switch (soldiars) {
    case 1500:
        console.log("Can't fight a war");
        break;
    case 1200:
        console.log("Can't fight a war");
        break;
    case 1100:
        console.log("Can't fight a war");
        break;
    case 1600:
        console.log("Ready for a war");
        break;

    default:
        console.log("Can't fight a war");
        break;
}

// break, continue in a loop
var numbers = [12, 21, 33, 25, 42, 54, 35, 66, 79, 81, 50,92,101,88];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 80){
        continue;
    }
    console.log(number);
}