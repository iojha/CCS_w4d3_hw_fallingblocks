//var Person = Person || {};

// var Person = function (firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   console.log('Person instantiated ' + firstName + " " + lastName);

// };

// var person1 = new Person('Alice', 'Smith');
// var person2 = new Person('Bob', 'Smith');
// var person3 = new Person('Isha', 'Smith');


// var myApp = {}
 
// myApp.id = 0;

// myApp.next = function(){
// 	return this.id++;
// }
 
// myApp.reset = function() {
//     this.id = 0;    
// }
 
// console.log(myApp.next()); //0
// console.log(myApp.next()); //1



var rabbit = {};

rabbit.speak = function(line){
	console.log("The rabbit says '" + line + "'");
};

rabbit.shutup = function(line){
	console.log("The does not say'" + line + "'");
}

rabbit.speak("hi");
rabbit.shutup("shutup");

console.log(rabbit);


