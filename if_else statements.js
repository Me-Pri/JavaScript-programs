/********************************************
************ If / else statements ***********
********************************************/

var firstName = 'John';
var civilStatus = 'married';

if  (civilStatus === 'married')
    {
            console.log(firstName + ' is married.');
    }
else
    {
        console.log(firstName + ' will hopefully get married soon.');
    }
// directly using boolean values

civilStatus = true;
if (civilStatus)
    {
            console.log(firstName + ' will hopefully get married soon.');
    }
else
    {
        console.log(firstName + ' is married');
    }