/****************************************************************************
************** Ternary Operator And Switch Case Statements ******************
****************************************************************************/

//ternary operater

var firstName = 'john';
var age = 22;
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

//switch case statements
var job = 'cop';
switch (job)
    {
        case 'driver':
            console.log('Mark drives a cab ');
            break;
            
        case 'teacher':
        case 'instructor':
            console.log('Mark teaches in a class');
            break;
            
        case 'designer':
            console.log('Mark designs beautiful clothes');
            break;
        default:
            console.log('Mark does something else.');
            
    }
// switch case to check conditional statements

switch(true)
    {
        case age < 13 :
            console.log('Mark is a boy');
            break;
            
        case age >= 13 && age < 20 :
            console.log('Mark is a teenager.');
            break;
            
        case age>=20 && age<30 :
            console.log('Mark is a  young man.');
            break;
            
        case age <= 30 :
            console.log('Mark is a man.');
            break;
    }