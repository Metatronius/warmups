// Given a string, you have to return a string in which
// each character (case-sensitive) is repeated once.
// if anything but a string is passed to the function,
// return "Ruh roh! That isn't a string!"

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "
// Good Luck!

// DONE?? Do it with a RegEx! (a 2 line solution is possible)

function doubleChar(str) {
  var returnable = '';
  if (typeof str === 'string'){
    for (var i = 0; i < str.length; i++) {
      returnable += str.charAt(i);
      returnable += str.charAt(i);
    }
    return returnable;
  }
return "Ruh roh! That isn't a string!";
}

module.exports = {
  doubleChar:doubleChar,
  attendance:"wordy word here"
};
