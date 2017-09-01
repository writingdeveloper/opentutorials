function a() {}

/*

In the above example, the function a is the value contained in the variable a. Functions can also be included as object values. A function contained in an object's property value is called a method.

*/

a = {
  b: function() {

  }
};

/*

Because functions are values, they can be passed as arguments to other functions. Consider the example below.

*/

function cal(func, num) {
  return func(num);
}

function increase(num) {
  return num + 1;
}

function decrease(num) {
  return num - 1;
}

console.log(cal(increase, 1));
console.log(cal(decrease, 1));
