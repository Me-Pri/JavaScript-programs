/***************************************************************************
********************* Immediately Invoked Function Expression **************
**********/

(function()
 {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();
// console.log(score);  // IIFE is used for data priacy and it will show error 

(function (goodLuck)
{
    var win = Math.random() * 10;
    console.log(win >= 5 - goodLuck);
    
})(4);
