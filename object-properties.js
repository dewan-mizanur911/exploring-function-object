var computer = {
    price: 29000,
    storage: '145gb',
    color: 'black',
    processor: 'intel i5'
}

// different ways to set a value of an object property

computer.price = 22000;// way 1

computer['price'] = 23000;// way 2

var priceProperty = 'price'; // way 3
computer[priceProperty] = 24000; // way 3

console.log(computer);