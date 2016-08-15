//  Using the JavaScript language, have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher works by shifting each letter in the string N places down in the alphabet (in this case N will be num). Punctuation, spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt". 
// Sample Test Cases
// Input:"Hello" & num = 4
// Output:"Lipps"

// Input:"abc" & num = 0
// Output:"abc"

var CaesarCipher = function(str,num){
  var newStr = '';
  var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
  var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]
  var indexInAlphabet;
  
  for(var i = 0; i < str.length; i++){
      
    if(upperCase.indexOf(str[i]) !== -1){
      indexInAlphabet = upperCase.indexOf(str[i]);
      newStr += upperCase[indexInAlphabet + num]
    } else if(lowerCase.indexOf(str[i]) !== -1){
      
      indexInAlphabet = lowerCase.indexOf(str[i]);
      newStr += lowerCase[indexInAlphabet + num]
                   
     } else{newStr += str[i]}
  
  }
  
  return newStr;
}
//console.log(CaesarCipher('aa',1))
//create a new alphabet
//
 
 //assert(CaesarCipher('aa',1) === 'bb', 'expected to see bb') 
 //assert(CaesarCipher('abc', 3) === 'def', 'expected to see def')//'bb' 
 assert(CaesarCipher("coderBYTE", 2) === "Ecguct, E%^$#krjgt", "expected to see 'Ecguct Ekrjgt'")
 //rather than loopoing thru

// loop thru string
// //if(upperCase.indexOf(str[i])){
//   var indexInAlphabet = lowerCase.indexOf(str[i])
//   newStr += lowerCase[indexInAlphabet + num]
// }
 
 