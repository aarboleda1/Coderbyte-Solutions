// Challenge
// Using the JavaScript language, have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" should return true. 
// Sample Test Cases
// Input:"Noel - sees Leon"
// Output:"true"

// Input:"A war at Tarawa!"
// Output:"true"

function PalindromeTwo(str) { 

var cleanString = str.replace(/\W+/g, " ").split('').join('').trim().replace(/\s/g,'').toLowerCase()
//take all punctuations out


return cleanString === cleanString.split('').reverse().join('');
         
}
//need to turn the string into just letters
PalindromeTwo('Bob sees bob') //==>'bobseesbob'
PalindromeTwo("Noel - sees Leon")
PalindromeTwo('"A war at Tarawa!"')


function PalindromeTwo(str) { 
  var lets = str.match(/[a-z]/ig).join('').toLowerCase();
  function isPalin(string){
    if(string <= 1) return true;
    if(string[0] != string[string.length-1]) return false
    return isPalin(string.substr(1,string.length-2));
  }
  return isPalin(lets);
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PalindromeTwo(readline());




function PalindromeTwo(str){
	
	var array =  str.toLowerCase().match(/[a-zA-Z]/gi);
    //take all punctuation out and include letters only
	var firstLetter = array.shift();
	var lastLetter = array.pop();
	// assign the first and last letter of array
	 
	 if(firstLetter !== lastLetter){
	 	return false
	 } 
	 //if they are ever false, we know it is not a palindrome

     if(array.length === 0 || array.length ===1){
     	return true
     }//if it reaches all the way down to 1 or 0 we know that the letters
     //were all equal
	 return PalindromeTwo(array.join(''))
	 //recursively call PalindromeTwo until you reach one of the base cases
	 
 
}
