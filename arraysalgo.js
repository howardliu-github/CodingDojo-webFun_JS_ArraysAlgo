
// Using the given array:
// var testArr = [6, 3, 5, 1, 2, 4]

// 1. Print Values and Sum
// a. Print each array value and the sum so far
// b. The expected output will be: 

// Num 6, Sum 6
// Num 3, Sum 9
// Num 5, Sum 14
// Num 1, Sum 15
// Num 2, Sum 17
// Num 4, Sum 21

var testArr = [6, 3, 5, 1, 2, 4];
var sum = 0;

for (var i = 0; i < testArr.length; i++){
    sum = sum + testArr[i];
    console.log('Num', testArr[i]+',','Sum', sum);
}

// 2. Value * Position
// a. Multiply each value in the array by its array position
// b. The expected output will be:

// [0,3,10,3,8,20]

var testArr = [6, 3, 5, 1, 2, 4];

for (var i = 0; i < testArr.length; i++){
    testArr[i] = testArr[i] * i;
}
console.log(testArr);