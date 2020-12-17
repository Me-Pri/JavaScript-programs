/********************************************************
********** Variable Mutation And Type Coercion **********
********************************************************/

var firstName = 'John'; // type coercion of string with no
var age = 28;
console.log(firstName + ' ' + age);

var job = 'teacher'; // type coercion of string with boolean
var isMarried = false;
console.log(firstName + " is a " + job + ". Is he married ? " + isMarried);

age = 'twenty eight';// variable mutation
job = 'driver';
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married ? ' + isMarried);

var lastName = prompt ('What is his last name');
console.log('His full name is ' + firstName + ' ' + lastName + '.');

