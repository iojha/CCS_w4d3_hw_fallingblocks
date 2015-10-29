Object.prototype.EchoFirstName = function(cb){
	var myObj = this;
	var fullname =  myObj.firstName + " " + myObj.lastName;
	cb(fullname);
};

var person = {};
person.firstName = "Dallas";
person.lastName = "Lones";

var person2 = {
	firstName: "Chase",
	lastName: "Lones"
};

person.EchoFirstName(function(newName){
	console.log(newName);
});

person2.EchoFirstName(function(newName){
	console.log(newName);
});
