// What is a callback? 
// A callback is like a special instruction that we give to a function. We can tell the function to do something specific after it finishes its main job.

// What is callback hell? 
// Callback hell is when you have so many tasks that depend on each other, and you end up with lots of nested callbacks. It's like a big maze of callbacks, and it becomes hard to follow and understand the code.

// Why does callback hell occur and why should we avoid callback hell?  
// Callback hell occurs when we have complicated situations where one task relies on the result of another task.

// Please code an example of callback hell to show to the class. Make sure to go into detail as you explain your code to the class.

getDressed(() => {
  makeBreakfast(() => {
    goToSchool(() => {
      console.log("Finished going to school!");
    });
  });
});

