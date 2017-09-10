function Person(name) {
  this.name = name;
}

Person.prototype.name = null;
Person.prototype.introduce = function() {
  return 'My name is ' + this.name;
}

var p1 = new Person('sangumee');
console.log(p1.introduce());
