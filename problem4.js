// Using only the filter method on the numbers array, create a function that returns a new array that only contains the numbers divisible by both 3 and 6 but NOT 9. 

// const numbers = [48, 20, 18, 7, 12, 9, 8,10,12, 96, 3, 36, 51];


const numbers = [48, 20, 18, 7, 12, 9, 8, 10, 12, 96, 3, 36, 51];

function divNum() {
  const divisibleNumbers = []; //creat a new array that will store the numbers that are divisble by 3 and 6.

  for (let i = 0; i < numbers.length; i++) { //create a loop to find those array that are divisible by 3 and 6.
    const number = numbers[i];

    if (number % 3 === 0 && number % 6 === 0 && number % 9 !== 0) { //this line is saying any number that is divisible by 3 and 6 print it out, is not divisible by 9.
      divisibleNumbers.push(number); //this line will push the numbers that are divisible by 3 and 6 to the new array we created above.
    }
  }

  return divisibleNumbers;
}

console.log(divNum());
