Object.prototype.contain = function(neddle) {
  for (var name in this) {
    if (this[name] === neddle) {
      return true;
    }
  }
  return false;
}

var o = {
  'name': 'sangumee',
  'city': 'Seoul'
}
console.log(o.contain('sangumee'));

var a = ['name', 'gumgum', 'Busan']
console.log(a.contain('gumgum'));
