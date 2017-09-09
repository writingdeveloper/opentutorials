var o = {}
var p = {}

function func() {
  switch (this) {
    case o:
      console.log('o');
      break;
    case p:
      console.log('p');
      break;
    case window:
      console.log('window');
      break;
  }
}

func();
func.apply(o);
func.apply(p);
