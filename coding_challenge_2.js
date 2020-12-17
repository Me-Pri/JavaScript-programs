/*************************************************
*************** Coding Challenge 2 ***************
*************************************************/

var teamJohn , teamMike , teamMary;

teamJohn = (89 + 120 + 103) / 3;
teamMike = (116 + 94 + 123) / 3;
teamMary = (97 + 134 + 105) / 3;

if (teamJohn > teamMike && teamJohn > teamMary)
    {
        console.log('Team John is the winner with '+ teamJohn + ' points.');
    }
else if (teamMike > teamJohn && teamMike > teamMary)
    {
        console.log('Team Mike is the winner with '+ teamMike + ' points.');
    }
else 
    {
        console.log('Team Mary is the winner with '+ teamMary + ' points');
    }