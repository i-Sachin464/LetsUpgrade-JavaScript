// Program to search for a element in a array of strings
let array = ["hello","world","javascript", "letsupgrade"];
var str = "javascript";
for (var i = array.length - 1; i >= 0; i--) {
	if(array[i]==str){
		console.log(str+" found at "+ (i+1));
	}else{
		console.log(str+" not found")
	}
}