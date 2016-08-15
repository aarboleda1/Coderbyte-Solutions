
var SimpleMode = function(arr){
  var obj = {};
  var modeNumber = -1 //to be returned as -1 if no mode is found 
  var highestFrequency = 1;
  
    arr.forEach(function(num){
      obj[num] = obj[num] ? obj[num] + 1 : 1
      //poplulate object: key is number from array, value is number of occurences
    })
    
    for(var key in obj){
      if(obj[key] > highestFrequency){  //loop thru object and compare each key
        highestFrequency = obj[key];    //if 
        modeNumber = key;
      }   
    }
 
  return parseInt(modeNumber);
}


var assert = function(test, message){
  if(!test){
    console.log(message)
  }else{console.log('test passed')}

}

//assert(SimpleMode([1,2,3,3]) === 3, "expected result to be 3")
 //assert(SimpleMode([1,2,3]) === -1, "expected result to be -1")
 assert(SimpleMode([1,1,2,2,3]) === 1, "expected result to be -1")

//create an object
//count for each object
//key - number from array; value will be number of occurences
//loop thru object
//if currenct value in ojbect > highestFrequency 
//reassign highestFrequency
//also reassign modeNumber to the key;
