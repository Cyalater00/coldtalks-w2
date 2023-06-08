// The “this” keyword works differently in arrow functions vs regularly declared functions.  Explain how the “this” keyword works differently in arrow functions vs normal functions.  

// In arrow functions, the "this" keyword behaves differently compared to normal functions. When we use "this" inside an arrow function, it doesn't create its own "this" value.


// Write some code that shows that you understand the difference between how the “this” keyword is used.  Make sure to go into detail as you explain your code to the class.

const player = {
  name: "Alice",
  sayHello: function() {
    console.log("Hello, I'm " + this.name);
  },
  sayHelloArrow: () => {
    console.log("Hello, I'm " + this.name);
  }
};

player.sayHello();         // Output: Hello, I'm Alice

// When we call player.sayHello(), the "this" keyword inside the "sayHello" function refers to the "player" object. So, it can access the "name" property and print "Hello, I'm Alice" to the console.

player.sayHelloArrow();    // Output: Hello, I'm undefined

// when we call player.sayHelloArrow(), the "this" keyword inside the arrow function does not create its own "this" value.