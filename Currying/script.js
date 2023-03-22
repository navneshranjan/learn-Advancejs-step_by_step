// currying
//Q1-- addition(3)(4)(10)
function addition(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
// console.log(addition(3)(4)(10));

// Q2-- write a function
// evaluate("sum")(4)(2) =>6
// evaluate("multiply")(4)(2) =>6
// evaluate("divide")(4)(2) =>6
// evaluate("substract")(4)(2) =>6

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "substract") return a - b;
      else return;
      ("Invalid operation");
    };
  };
}
// console.log(evaluate("sum")(4)(9));
// console.log(evaluate("multiply")(4)(9));
// console.log(evaluate("divide")(4)(9));
// console.log(evaluate("substract")(4)(9));

// or we can do
const mult = evaluate("multiply");
// console.log(mult(2)(10));

// /////////Q-3///////Infinite currying
function sum(a) {
  return function (b) {
    if (b) return sum(a + b);
    return a;
  };
}
// console.log(sum(20)(3)());

//////////////////////////////////////////////////////////////////////
// //////////Write a functiopn which convert normal function f(a,b,c) to a currying function f(a)(b)(c)

function curry(func) {
  return function curriedFunction(...args) {
    // console.log(args.length, func.length);

    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunction(...arguments, ...next);
      };
    }
  };
}
const ss = (a, b, c, d, e) => a + b + c;
const totalSum = curry(ss);
// console.log(ss.length);
