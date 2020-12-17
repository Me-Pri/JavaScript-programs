/***************************************************
************** Primitives Vs Objects ***************
***************************************************/

// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//Objects

var obj1 = {
    name : 'John',
    age : 28
};

var obj2 = obj1;
obj1.age = 27;
console.log(obj1.age);
console.log(obj2.age);

//Functions (they are objects as well)
var age = 26;
var obj = {
    city : 'London',
    name : 'Mark'
}
function change (a,b)
{
    a = 30;
    b.city = 'Lisbon'
}
change(age, obj);
console.log(age);
console.log(obj.city);
