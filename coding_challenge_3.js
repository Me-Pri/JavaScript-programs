/****************************************************
****************** Coding Challenge 3 ***************
****************************************************/

var bill = [124,48,268];
var amount = [];
var tip = [];
var i = 0;

for(i=0;i<3;i++)
{  
    if(bill[i] < 50)
    {
        tip[i] = 0.2 * bill[i];
        
    }
    else if(bill[i] >= 50 && bill[i] <200)
    {
        tip[i] = 0.15 * bill[i];
    
    }
    else if(bill[i] >=200)
    {
        tip[i] = 0.1 * bill[i];

    }
}
for(i=0;i<3;i++)
    {
        amount[i] = bill[i] + tip[i];
    }
console.log(amount);
console.log(tip);


