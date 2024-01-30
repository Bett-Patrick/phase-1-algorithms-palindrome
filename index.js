function isPalindrome(word) {
  // Write your algorithm here
  let correctWord = word.toLowerCase()
  let reversedWord = word.toLowerCase().split('').reverse().join('')
  if (correctWord === reversedWord) {
    return true
  }else{
    return false
  }
}

/* 
  Add your pseudocode here:

1. write a function that receives a word,
2. change the word received to lowercase and give it a variable,
3. Reverse the word and give it a variable,
4. compare the two variables if their values are the same,
5. If their values are the same, return true else return false.
  
*/

/*
  Add written explanation of your solution here:

This solution includes a function(isPalindrome()) that receives a random word 
as an argument. The function then checks if the word is a palindrome.
If it is a palindrome, it returns true, but if not,
it returns false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
