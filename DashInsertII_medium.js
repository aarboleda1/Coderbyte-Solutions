// Challenge
// Using the JavaScript language, have the function 
//DashInsertII(str) insert dashes ('-') between each two odd 
//numbers and insert asterisks ('*') between each two even numbers in str. 
//For example: if str is 4546793 the output should be 454*67-9-3. Don't count 
//zero as an odd or even number. 
// Sample Test Cases
// Input:99946
// Output:9-9-94*6

// Input:56647304
// Output:56*6*47-304


var DashInsertII = function(str){
  var arr = str.split('');
  for(var i = 0; i < arr.length; i++){
     if(arr[i] == 0 || arr[i + 1] == 0){
       //use == instead of === to allow for type coersion
       arr[i] = arr[i]
     }else if(arr[i] % 2 === 0 && arr[i + 1] % 2 === 0  ){
      arr[i] = arr[i] + '*';
     } else if(arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 ){
       arr[i] = arr[i] + '-';
     }
  }  
  return arr.join('');

}

 //console.log(DashInsertII('99'));
 //console.log(DashInsertII('88'));
 //console.log(DashInsertII('123'));
 //console.log(DashInsertII('900'));


//turn into array
//using splice. check if arr[i] and arr[i + 1] are even or odd
//then arr.splice(i,0,'*')
//if odd use arr.splice(i,0,'-')
