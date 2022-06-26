function isPalindrome(word) {
  // Write your algorithm here
  const re = /[\W_]/g;

  const lowWord = word.toLowerCase().replace(re, "");
  const reverseWord = lowWord.split("").reverse().join("");
  if ( reverseWord === lowWord ) {
    return true;
  } else {
    return false;
  }
}
