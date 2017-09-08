function Person() {}
var p = new Person();
p.name = 'sangumee';
p.introduce = function() {
  return 'My name is ' + this.name;
}

console.log(p.introduce());
