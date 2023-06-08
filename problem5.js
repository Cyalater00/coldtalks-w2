// What is a async/await? Async/await is a way of writing asynchronous code in JavaScript that makes it easier to read and understand
//  Why is async/await useful?  Async/await is useful because it makes our code easier to read and follow. It helps us avoid nested callbacks and callback hell, which can be confusing.
// What are pro/cons to using async/await?  Pros:Readable, Simplcty, Error handling 
// cons: Requires modern javascript, requires promises.

// Please code some examples of async/await to show to the class. Make sure to go into detail as you explain your code to the class.

function delay(Sir) {
  return new Promise((resolve) => setTimeout(resolve, Sir));
}

async function greet() {
  console.log("Hello!");

  await delay(2000); // Wait for 2 seconds

  console.log("How are you?");
}

greet();
