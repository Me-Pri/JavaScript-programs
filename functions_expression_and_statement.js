/*****************************************************************************
****************** Function Expression and Statements ************************
*****************************************************************************/

// function whatDoYouDo (firstName , job){} ----this is an example of function statement

//Now, The example of Function Expression is as follows:

var whatDoYouDo = function (firstName, job)
{
    switch (job)
        {
            case 'teacher':
                return firstName + ' teaches students how to code.';
            case 'designer':
                return firstName + ' designs beautiful websites.';
            case 'driver':
                return firstName + ' drives a cab.';
            default:
                return firstName + ' does something else.';
        }
}

console.log(whatDoYouDo('Mary','teacher'));
console.log(whatDoYouDo('John','driver'));
console.log(whatDoYouDo('Jane','cop'));
            