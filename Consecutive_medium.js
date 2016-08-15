 var Consecutive = function(arr){
   var newArr = arr.sort(function(a,b){return a-b}) //sort the array
   var difference;  //difference between two numbers minus 1
   var count = 0 //count of numbers that we will be needing
   for(var i = arr.length -1; i>0; i--){
      difference = arr[i] - arr[i-1] -1 
      count += difference
      difference = 0; //return diff back to 0 so for next iteration in loop
   }
   return count;
   
 }
 
 //first assort the array
 //return a count
 //assert(Consecutive([4, 8, 6]) === 2, 'expected to see 2')
 //assert(Consecutive([-2,10,4]) === 10,'expected to see the right answer')
 //assert(Consecutive([5,10,15]) === 8, 'expected to see 8')
//if you have to add
 //count ++
 //[4,6,8]  
 //loop thru backwards and find the difference between a - 1
 //difference = arr[i] - arr[i-1] -1
 //count += difference
 ///[1,5,10]    10-5 -1 = 4, count + 4 count now equal to 4. 