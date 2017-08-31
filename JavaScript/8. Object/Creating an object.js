var grades = {
  'sangumee': 10,
  'gumgum': 6,
  'bobbob': 80
};

//sangumee is the key and 10 is value.

// Other ways to create Object

var grades = {};
grades['sangumee'] = 10;
grades['gumgum'] = 6;
grades['bobbob'] = 80;

var grades = new Object();
grades['sangumee'] = 10;
grades['gumgum'] = 6;
grades['bobbob'] = 80;

// Get value from Object

console.log(grades['sangumee']); //10

// Get value from Object 2

console.log(grades.sangumee); //10
