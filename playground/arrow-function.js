/*
- implicit return without curly bracket
- no need for parentheses when only 1 var
- does not bind the keyword 'this'
*/
var square = x => x*x;
console.log(square(9));

var user = {
    name: 'IZZY',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHi(1,2,"args");