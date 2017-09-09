var funcThis = null;

function Func() {
  funcThis = this;
}

var o1 = Func();
if (funcThis === window) {
  console.log('window');
}

var o2 = new Func();
if (funcThis === o2) {
  console.log('o2');
}
