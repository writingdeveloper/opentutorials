var grades = {
  'list': {
    'sangumee': 10,
    'gumgum': 6,
    'bobbob': 80
  },
  'show': function() {
    for (var name in this.list) {
      console.log(name + ' : ' + this.list[name]);
    }
  }
};

grades.show();

/*

sangumee : 10
gumgum : 6
bobbob : 80
[Finished in 0.197s]

*/
