function Person(name) {
  this.name = name;
  this.introduce = function() {
    return 'My name is ' + this.name;
  }
}

var p1 = new Person('sangumee');
console.log(p1.introduce());

var p2 = new Person('gumgum');
console.log(p2.introduce());
