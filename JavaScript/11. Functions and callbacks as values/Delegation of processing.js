function sortNumber(a, b) {
  // If you change the order of a and b compared to the above example, the sort order is reversed.
  return b - a;
}

var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(numbers.sort(sortNumber)); //Array, [20,10,9,8,7,6,5,4,3,2,1,]

/*

[ 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
[Finished in 0.191s]

/*
