/************************************************************************************
****************** First Class Functions : Passing Functions as arguments ***********
****/

var ages = [1990, 1965 , 1937 , 2005 , 1998 ]
function arrayCalc(a,b)
{
    var arrayResult = [];
    for(var i = 0; i < a.length ; i++)
        {
            arrayResult[i] = b(a[i]);
        }
    return arrayResult;
}
function calcAge (el)
{
    return 2020 - el;
}
function fullAge (el)
{
    return (2020-el) >= 18;
}
var checkFullAges = arrayCalc(ages,fullAge);
var presentAges = arrayCalc(ages,calcAge);
console.log(presentAges);
console.log(checkFullAges);
