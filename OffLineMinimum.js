 // OfflineUsing the JavaScript language, 
 // have the function OffLineMinimum(strArr) take the 
 // strArr parameter being passed which will be an array of 
 // integers ranging from 1...n and the letter "E" and return the 
 // correct subset based on the following rules. The input will be in 
 // the following format: ["I","I","E","I",...,"E",...,"I"] where the I's 
 // stand for integers and the E means take out the smallest integer currently 
 // in the whole set. When finished, your program should return that new set with 
 // integers separated by commas. For example: if strArr is 
 // ["5","4","6","E","1","7","E","E","3","2"] then your program should return 
 // 4,1,5. 


var OffLineMinimum = function(strArr){
	var numArray= [];
	
	var returnArray = [];

	var minNumber;

	for(var i = 0; i < strArr.length; i++){

		if(strArr[i] !== "E"){
			numArray.push(parseInt(strArr[i]))
		}//if a number put it into numArray

		else{
			minNumber = Math.min.apply(Math,numArray);
			numArray.splice(numArray.indexOf(minNumber), 1);
			returnArray.push(minNumber)

		}

	}

	return returnArray.join(',')

}


//loop thru strArr
//slice from 0 until you see an E
//use Math.min.apply(Math,a)
//push that value to the new array
//splice out E strArr.splice(i, 1)
///then work with subarray
//that will be you're new M




//loop thur going for


//console.log(OffLineMinimum(["5","4","6","E","1","7","E","E","3","2"])) //[4,1,5]
console.log(OffLineMinimum(["1","2","E","E","3"]))//[1,2]
//console.log(OffLineMinimum(["4","E","1","E","2","E","3","E"]))//[4,1,2,3]


//for this solution I got very confused on the splicing. //i realized that the best solution was 
//create another set of data (an array). the trick is to loop thru the strArr. and place 
//each number into the array. If you do run into an "E" then you would find the minimum number
// in the subset and push that to the return array. then splice that number so you 
//wouldn't run intot he small number again 






