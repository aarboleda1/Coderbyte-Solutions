// Challenge
// Using the JavaScript language, have the function StringScramble(str1,str2) take both parameters being 
//passed and return the string true if a portion of str1 characters can be rearranged to match str2, 
//otherwise return the string false. For example: if str1 is "rkqodlw" and str2 is "world" the output 
//should return true. Punctuation and symbols will not be entered with the parameters. 
// Sample Test Cases
// Input:"cdore" & str2= "coder"
// Output:"true"

// Input:"h3llko" & str2 = "hello"
// Output:"false"

function StringScramble(str1,str2) { 
  var objOne = {}; 

  for(var i = 0; i < str1.length; i++){
      objOne[str1[i]] = objOne[str1[i]] ? objOne[str1[i]] + 1 : 1;
  }
  //place in object with number of occurences 
   
  for(var j = 0; j < str2.length; j++){
    if(!objOne[str2[j]]){  
     //loop thru each letter of str2
     //if it doesn't exist, we know that 
     //the word cannot be created therefore return false

    	return false
    }
  }
   
  return true;

         
}
   
// // keep this function call here 
//  //StringScramble('anton','notan');
// // StringScramble('ba','ab')
// // StringScramble('cab','abc')
// // StringScramble('joshua', 'uhsaoj')
// StringScramble('anton','notba')
// StringScramble("coodrebtqqkye", "coderbyte")