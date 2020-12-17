/*****************************************************************************
**************** Truthy And Falsy Values And Equality Operaters **************
*****************************************************************************/

//truthy values and falsy values
var height;
if (height)
    {
        console.log('Variable is defined');
    }
else
    {
        console.log('Variable has not been defined');
    }
height = 23;// truthy values
if (height)
    {
        console.log('Variable is defined');
    }
else
    {
        console.log('Variable has not been defined');
    }

height = 0; //falsy values

if (height)
    {
        console.log('Variable is defined');
    }
else
    {
        console.log('Variable has not been defined');
    }
// two different equality operater == and ===

height = '23';
if (height == 23)
    {
        console.log('The == operater does type coercion');
    }
else
    {
        console.log('The == operater does not do type coercion ');
    }

if(height === 23)
    {
        console.log('The === does type coercion.')
    }
else
    {
        console.log('The === does not do type coercion.')
    }
