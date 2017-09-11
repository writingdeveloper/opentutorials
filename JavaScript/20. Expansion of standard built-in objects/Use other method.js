Array.prototype.rand = function() {
  var index = Math.floor(this.length * Math.random());
  return this[index];
}

var arr = new Array('seoul', 'pusan', 'ladarkh', 'tsukuba');
console.log(arr.rand());
