// Program to display only elements containing 'a' in them from a array
let array = ['hello', 'javascript', 'letsupgrade'];
let resArray = [];
for (var i = array.length - 1; i >= 0; i--) {
	var str = array[i];
	if(str.indexOf("a")>0){
		resArray.unshift(str);
	}
} 
console.log(resArray);