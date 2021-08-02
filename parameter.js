function bringSingara(taka){
    console.log(taka);
    var singaraPrice = 5;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}

var money = 230;
var singara = bringSingara(money);
console.log('Singara ashce ', singara, ' ta');