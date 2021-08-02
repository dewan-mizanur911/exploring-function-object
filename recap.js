var favouriteBook = '4 hour work with';

var bookList = ['positioning', 'hooked', 'start with why', 'shoe dog'];
var shoeDogIndex = bookList.indexOf('shoe dog');

bookList[1] = 'story brand';

bookList.push('small giants');
bookList.pop();

// conditionals
if(bookList[1] == 'hooked'){
    console.log('I am hooked');
}
else{
    console.log('I am not hooked');
}

// while loop
var i = 0;
while(i<9){
    console.log(i);
    console.log('looping');
    i++;
}

// for loop
for(var i = 0; i < bookList.length; i++){
    console.log(i);
    var book = bookList[i];
    console.log(book);
}