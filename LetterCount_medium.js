// Challenge
// Using the JavaScript language, have the function LetterCount(str) take the str parameter 
//being passed and return the first word with the greatest number of repeated letters. For example:
 //"Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes 
 //before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be 
 //separated by spaces. 
// Sample Test Cases
// Input:"Hello apple pie"
// Output:Hello

// Input:"No words"
// Output:-1


function LetterCount(str){
	var array = str.split(' ');
    var numberOfRepeatedLetters = 0; //keep track of highest number of repeated letters
    var returnWord; 
    var table = {}; //table of object words. key will be word,value will be object with letters/num of occur 
     
    //use table do keep track of all words 
    //then for loop thru them later
    
    for(var i = 0; i < array.length; i++){
      var word = array[i]
      table[word] ={};
      //now have a table with {hello: {}, apple: {}, pie: {}}

      //
      for(var j = 0; j < word.length; j++){
        var char = word[j]
        table[word][char] = table[word][char] ? table[word][char] + 1 : 1; 
        //here loop thru each word. and place it in the object of for each word
        //if letter exists add one to it, if not assign it to a value of one
      }

    }

//table now created
  for(var wordObj in table){
    //console.log(table[wordObj])
    var newCount = 0;                //to keep track of number of repeated letters
    for(var letter in table[wordObj]){  //to check if we have run into a repeated letter
      
      if(table[wordObj][letter] > 1 ){
        newCount++
      } 
//console.log(newCount)
    }
    if(newCount > numberOfRepeatedLetters){
      numberOfRepeatedLetters = newCount
      returnWord = wordObj;
    }
  newCount = 0;      //newCount back to zero so we can use it to count in next object
  }
 if (returnWord === undefined){return -1} //if never gets assigned return -1
return returnWord;


}
   
LetterCount("anton") // anton
LetterCount("no words") // -1
LetterCount("hello apple") // apple //both have one repeated letter
LetterCount("yooo") //yooo
LetterCount("should return thisssworrrrdd") // thisssworrrrdd


//for each wrod need to find number of repeated letters
//split each word into an array
//['word', 'word'];
// for each word create count of repeating letters
// for each word create an object?
//count number of repeating letters
//have count for largest repeating word
//if larger replace that number
//else keep word
//loop thru each object and create a count of number of repeated letters
//if obj[key] > 1 count ++ once done. compare to current count