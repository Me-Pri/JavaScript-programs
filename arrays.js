/*********************************************
***************** Arrays *********************
*********************************************/

var names = ['John', 'Jane', 'Mark']; //easiest way of declaring an array
console.log(names);
var years = new Array(1990,1989,1979); //another way of declaring an array
console.log(years);

console.log(names[0]); //accessing an element
console.log(names.length);

names[1] = 'Ben'; //mutating an array
console.log(names);
/*names[6] = 'Mary';
console.log(names);*/

names[names.length]='Mary';
console.log(names);

//Different data types array
var John = ['John','Smith',1990,'teacher',false];
John.push('blue'); //inserts element at the end of the array
console.log(John);

John.unshift('Mr.');
console.log(John);

John.pop();
console.log(John);

John.shift();
console.log(John);

console.log(John.indexOf(1990));
console.log(John.indexOf(23)); //because it is not present in the array hence -1

var isTeacher = John.indexOf('teacher') === -1 ? 'John is Not a teacher' : 'John is a teacher';
console.log(isTeacher);