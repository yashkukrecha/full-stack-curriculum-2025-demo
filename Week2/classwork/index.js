// 1. Write a JavaScript program to find the longest string in a given array
function findLongestString(arr) {
  // Your code here
  // let result = '';
  // for (let str of arr) {
  //   if (str.length > result.length) {
  //     result = str;
  //   }
  // }
  // return result;

  let result = '';
  arr.forEach(str => {
    if (str.length > result.length) {
      result = str;
    }
  });
  return result;

  // let result = "";
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i].length > result.length) {
  //     result = arr[i];
  //   }
  // }
  // return result;
}

// Test for findLongestString
const testArr1 = ["apple", "banana", "cherry", "date"];
console.log("Expected: banana, Output:", findLongestString(testArr1));

// 2. Write an arrow function that calculates the area of a rectangle
const calculateArea = (w, h) => {
  return w * h;
};

// Test for calculateArea
console.log("Expected: 20, Output:", calculateArea(4, 5));

// 3. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books:
const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    readingStatus: true,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    readingStatus: false,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    readingStatus: false,
  },
];

function displayReadingStatus() {
  // Your code here
  library.forEach((book) => {
    const { title, author, readingStatus } = book;
    const message = `${title} by ${author}. ${
      readingStatus ? "Already read the book" : "Still need to read the book"
    }`;
    console.log(message);
  });
}

// Test for displayReadingStatus
displayReadingStatus();

// 4. Square the value of every element in an array, then print the result
function squareAndPrint(arr) {
  // Your code here
  arr.forEach((num) => {
    console.log(num ** 2);
  });
}

// Test for squareAndPrint
const testArr2 = [1, 2, 3, 4, 5];
squareAndPrint(testArr2);

// 5. Filter array to numbers greater than 5
function filterGreaterThanFive(arr) {
  // Your code here
  return arr.filter((num) => num > 5);
}

// Test for filterGreaterThanFive
const testArr3 = [3, 8, 1, 5, 9];
console.log("Expected: [8, 9], Output:", filterGreaterThanFive(testArr3));
