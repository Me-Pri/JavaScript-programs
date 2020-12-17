/*****************************************************
****************** Function Constructor **************
*****************************************************/

var Person = function(name , dateOfBirth, job)  // creating a function constructor
{
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.job = job;
    this.calculateAge = function ()
    {
        console.log(2020 - dateOfBirth); 
    }
}

//create a john object

var john = new Person('John', 1990, 'designer');
john.calculateAge();

// using inheritance property using the prototype property of the constructor function
Person.prototype.profession = function()
{
    console.log(this.name + ' ' + this.job); 
}
var jane = new Person('Jane', 2000, 'student');

var mike = new Person('Mike', 1995, 'designer');

john.profession();
jane.profession();
mike.profession();

// using prototype property on the object's variable

Person.prototype.lastName = 'Smith';
console.log(john.lastName);
console.log(jane.lastName);
console.log(mike.lastName);