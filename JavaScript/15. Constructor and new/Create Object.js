var person = {}
person.name = 'sangumee';
person.introduce = function() {
  return 'My name is ' + this.name;
}
console.log(person.introduce());

var person = {}
person.name = 'gumgum';
person.introduce = function() {
  return 'My name is ' + this.name;
}
console.log(person.introduce());

/*

Duplicate Occurence so Use Constructor

*/
