// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
// Note: You may assume the string contains only lowercase alphabets.

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  } else {
    let frequencyCounter = {};
    for (let i = 0; i < str1.length; i++) {
      let letter = str1[i];
      // if letter exists, increment, otherwise set to 1
      frequencyCounter[letter]
        ? (frequencyCounter[letter] += 1)
        : (frequencyCounter[letter] = 1);
    }

    for (let i = 0; i < str2.length; i++) {
      let letter = str2[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!frequencyCounter[letter]) {
        return false;
      } else {
        frequencyCounter[letter] -= 1;
      }
    }
  }

  return true;
}
console.log(validAnagram("anagram", "nagaram"));

function reverse(str) {
  //   let reverseString = "";
  for (let i = 0; i < str.length; i++) {
    let temp = str[i];

    for (let j = str.length - 1; j >= 0; j--) {
      str[i] = str[j];
      str[j] = temp;
    }
  }
  return str;
}

console.log(reverse("hello"));
