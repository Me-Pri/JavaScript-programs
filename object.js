/****************************************************
******************* Object **************************
****************************************************/
// object literal
var john ={
            firstName : 'John',
            lastName : 'Smith',
            birthYear : 1990,
            family : ['Jane', 'Emily', 'Mark', 'Bob'],
            job : 'Teacher',
            isMarried : true 
            
};

console.log(john);
console.log(john.firstName); //accessing an element of the object
console.log(john['lastName']); //another way of accessing element of the object

var x = 'birthYear'; //another way of accessing element of the object 
console.log(john[x]);

//mutating element of the object
john.job = 'Designer';
john['isMarried'] = false; //another way
console.log(john);

//another way of declaring an object by object syntax method
var Jane = new Object();
Jane.firstName = 'Jane';
Jane.lastName = 'Smith';
Jane['birthYear'] = 1920;
console.log(Jane);
