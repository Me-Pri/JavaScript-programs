/****************************************************
***************** Loops And Iteration ***************
****************************************************/

// for loop syntax
for(var i = 1 ; i < 6 ; i++)
    {
        console.log(i);
    }
 //in arrays use of for loop

var john = ['John' , 'Smith' , true , 1990 , 'Designer' , 'Blue']

for ( i = 0 ; i < john.length ; i++)
    {
        console.log(john[i]);
    }

// while loop syntax

i = 1;
while (i < 7)
    {
        console.log(i);
        i++;
    }

// in arrays use of while loop 

i=0;
while (i < john.length)
    {
        console.log(john[i]);
        i++;
    }
console.log(' ');

// continue statement use in for loop

for(i = 0 ; i < john.length ; i++ )
    {
        if (typeof john[i] !== 'string'){continue;}
        console.log(john[i]);
    }

// break statement  use in for loop

console.log(' ');
for (i = 0 ; i < john.length ; i++ )
    {
        if(typeof john[i] !== 'string') break;
        console.log(john[i]);
    }