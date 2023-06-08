// What is a promise? What are promises used for?  What are pro/cons to using a promise?  Please code some examples of promises to show to the class. Make sure to go into detail as you explain your code to the class.


const fs = require("fs"); //we creat a fs module that will provide functions for working file system.

function readFile(filePath) { // define 'readFile' that takes 'filePath' 
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (error, data) => {
      //callback function has two parameters: error and data
      if (error) { // if an erro occurs during the file reading process, we reject the promise by calling 'reject(error)'
        reject(error);
        return;
      }

      resolve(data);//if the file reading is successful and no error occurs, we resloved the promise by calling 'resolve(data)'
    });
  });
}

// Usage:
readFile("example.txt")
  .then((data) => {//if the promise is resolved the '.then()' callback function is executed, receiving the 'data'.
    console.log("File contents:", data);
  })
  .catch((error) => { //if the promise is rejected the '.catch()' callback funtion is executed, receving the 'error'
    console.log("Error reading file:", error);
  });
