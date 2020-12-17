/******************************************************
******************* Coding Challenge 4 ****************
******************************************************/

var Mark = {
                firstName : 'Mark',
                lastName : 'Smith',
                mass : 60,
                height : 1.5,
                calcBMI : function()
                {
                    this.BMI = this.mass / (this.height * this.height);
                }
};

Mark.calcBMI();
console.log(Mark['BMI']);

var John = {
                firstName : 'John',
                lastName : 'Jobs',
                mass : 90,
                height : 1.5,
                calcBMI : function()
                {
                    this.BMI = this.mass / (this.height * this.height);
                }
};

John.calcBMI();
console.log(John['BMI']);

if (John.BMI > Mark.BMI)
    {
        console.log('BMI of John is greater than Mark');
    }
else if (Mark.BMI > John.BMI)
    {
        console.log('BMI of Mark is greater than John');
    }
else{
    console.log('BMI of Mark and John is the same');
}