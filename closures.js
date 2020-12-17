/***************************************************************************
************************ Closures ******************************************
****************/


function retirement (retireAge) // closure
{
    var a = ' years are left until retirement';
    return function (yearOfBirth)
    {
        var age = 2020 - yearOfBirth ;
        console.log((retireAge - age) + a);
    }
}
var retirementUS = retirement  (60);
retirementUS(1990);

// another way of calling a function and it's inner function 
retirement(60)(2000);

//lol good job !!!!!!!!!!!!!!!!!!!!!!!!!!!!
