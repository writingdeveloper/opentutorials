function sum(arg1, arg2) {
  return arg1 + arg2;
}

console.log(sum.apply(null, [1, 2]));
