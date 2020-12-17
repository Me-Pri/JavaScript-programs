/********************************************************
****************** Objects And Methods ******************
********************************************************/

//object methods

var John = {
                firstName : 'John',
                lastName : 'Smith',
                job : 'Teacher',
                calcAge : function (birthYear)
                            {
                                return 2020 - birthYear;
                            }
};

console.log(John.calcAge(1990));

// use of this keyword in the object method

var John = {
                firstName : 'John',
                lastName : 'Smith',
                birthYear : 1980,
                job : 'Teacher',
                calcAge : function () {
                    return 2020 - this.birthYear;
                }
    
};

console.log(John.calcAge());

//storing the value of object's function (method) in its own element

var John = {
                birthYear : 1995,
                calcAge : function ()
                        {
                            this.age = 2020 - this.birthYear;
                        }
};

John.calcAge();
console.log(John);
