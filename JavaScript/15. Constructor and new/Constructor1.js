function Person() {}
var p1 = new Person();
p1.name = 'sangumee';
p1.introduce = function() {
  return 'My name is ' + this.name;
}

console.log(p1.introduce());

var p2 = new Person();
p2.name = 'gumgum';
p2.introduce = function() {
  return 'My name is ' + this.name;
}

console.log(p2.introduce());

// There is nothing much improved.
