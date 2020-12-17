var personProto = {
    calculateAge : function(){
        console.log(2020 - this.yearOfBirth);
    }
    
};
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';


//another way of filling data in object.create method 
 var jane = Object.create(personProto,{
     name : { value : 'Jane'},
     yearOfBirth : { value : 2000},
     job : { value : 'teacher' }
 });