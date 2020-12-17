/****************************************************
******************* Coding Challenge 5 **************
****************************************************/

var calcBill = {
                     bills : [124, 48 , 258 , 180 , 42],
            
                     
                calcTotal : function()
                    {
                        this.tip = [];
                        this.amount = [];
                        for (var i = 0 ; i < this.bills.length ; i++ ) // ( . ) this  dot operater is the access operator which operates from left to right which means access from left to right
                            {
                                var percentage;
                                var bill = this.bills[i];
                                if (bill < 50)
                                    {
                                        percentage = .2; 
                                    }
                                else if (bill >=50 && bill < 200)
                                    {
                                       percentage = .15;
                                    }
                                else if (bill >= 200)
                                    {
                                        percentage = .1;
                                    }
                                this.tip[i] = bill * percentage;
                                this.amount[i] = bill + (bill * percentage) ;
                             }
                       
                    }
};
calcBill.calcTotal();
console.log(calcBill['tip']);
console.log(calcBill['amount']);
