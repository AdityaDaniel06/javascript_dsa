// function that accepts two arrays and returns true if every value in arr1 has it's
// corresponding value squared in the second array
// [1 , 2, 3, 2] [9, 1 , 4 ,4]

// Solution 1 ---> O(n^2)
// Step 1: create a fn that accepts two array and returns true
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      let correctIndex = arr2.indexOf(arr1[i] ** 2); 
      if (correctIndex === -1) {
        return false;
      }
      console.log(arr2);
      arr2.splice(correctIndex, 1); // removes the element fron the arr2
    }
    return true;
  }
}
const ans = same([1, 2, 3, 2], [9, 4, 4, 1]);
console.log(ans);

// Solution 2: Two loops is better than two nested loops ---> o(n)
// frequency Counter
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    let frequencyCounter1 = {}; // to collect values and it's frequency
    let frequencyCounter2 = {};
    for (let val of arr1) {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for (let key in frequencyCounter1) {
      if (!(key ** 2 in frequencyCounter2)) {
        // does square exists in obj 2
        return false;
      }
      if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
        // chwcks if there are two 4
        return false;
      }
    }
    return true;
  }
}

const ans2 = same2([1, 3, 3, 2], [9, 4, 9, 1]);

function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();

  // good luck. Add any arguments you deem necessary.
  if (strNum1.length !== strNum2.toString().length) {
    return false;
  } else {
    let freqCounter1 = {};
    let freqCounter2 = {};
    for (let i = 0; i < strNum1.length; i++) {
      freqCounter1[i] = (freqCounter1[i] || 0) + 1;
    }
    for (let i = 0; i < strNum2.length; i++) {
      freqCounter2[i] = (freqCounter2[i] || 0) + 1;
    }
    for (let key in freqCounter1) {
      if (freqCounter1[key] !== freqCounter2[key]) return false;
    }
  }
  return true;
}
