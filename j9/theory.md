1. Arrow Function syntax?
   One param. With simple expression return is not needed:
   Ex:
   param => expression

   Multiple params require parentheses. With simple expression return is not needed:
   Ex:
   (param1, paramN) => expression

   Multiline statements require body brackets and return:
   Ex:
   param => {
   let a = 1;
   return a + param;
   }

   Multiple params require parentheses. Multiline statements require body brackets and return:
   Ex:
   (param1, paramN) => {
   let a = 1;
   return a + param1 + paramN;
   }

2. True or false: arrow functions are anonymous?
   True. Arrow functions are anonymous and change the way "this" binds in functions.

3. 'this' in arrow function?
   While in ES5 ‘this’ referred to the parent of the function, in ES6, arrow functions use lexical scoping — ‘this’ refers to it’s current surrounding scope and no further. Thus the inner function knew to bind to the inner function only, and not to the object’s method or the object itself.

4. Compare let and var

   - Scoping rules:
     "Var" declarations are globally scoped or function scoped while "let" is block scoped.

   - Redeclaration
     "var" variables can be updated and re-declared within its scope; "let" variables can be updated but not re-declared;
     Example:
     var foo = "foo1";
     var foo = "foo2"; // No problem, 'foo' is replaced.

     let bar = "bar1";
     let bar = "bar2"; // SyntaxError: Identifier 'bar' has already been declared

   - Hoisting
     They are all hoisted to the top of their scope. But while "var" variables are initialized with undefined, "let" is not initialized.

5. Closures scope, how do let work in closures, give an example
   Whenever you create a function within another function, you have created a closure. The inner function is the closure. This closure is usually returned so you can use the outer function’s variables at a later time.

6. What is const, give an example

7. Default Values: how to define a function with default value in ES6 ? And in ES6 ?

8. What's a variadic arguments?

9. What is arguments in a JavaScript function?
