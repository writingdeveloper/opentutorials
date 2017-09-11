function Person(name) {
  this.name = name;
}

Person.prototype.name = null;
Person.prototype.introduce = function() {
  return 'My name is ' + this.name;
}

function Programmer(name) {
  this.name = name;
}

Programmer.prototype = new Person();
Programmer.prototype.coding = function() {
  return 'Hello World';
}

var p1 = new Programmer('sangumee');
console.log(p1.introduce());
console.log(p1.coding());
