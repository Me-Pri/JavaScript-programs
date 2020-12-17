/**************************************
************** Functions **************
**************************************/

function calculateAge (birthYear) //function declaration
{
  return  2020 - birthYear;
}

var birth = calculateAge(2000); //function calling
console.log(birth);

//calling funtion within function
function yearsUntilRetirement (year,firstName)
{
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0)
        {
            console.log(firstName + ' has ' + retirement + ' years left until retirement');
        }
    else
        {
            console.log(firstName + ' has already retired.')
        }
}
yearsUntilRetirement(1990,'John');
yearsUntilRetirement(1965,'Mary');
yearsUntilRetirement(1940,'Michael');