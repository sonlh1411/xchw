//Whenever you create a function within another function, you have created a closure.
//The inner function is the closure.
//This closure is usually returned so you can use the outer function’s variables at a later time.

var x = 2,
  fns = [];

(function () {
  var x = 5;
  for (let i = 0; i < x; i++) {
    fns[i] = () => i;
  }
})();

console.log(x * 2 === fns[x * 2]());
