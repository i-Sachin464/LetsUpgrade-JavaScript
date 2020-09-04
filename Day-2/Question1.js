// Program to search for a particular character in a string
var str = "Hello world";
var string = "o";
var n = str.indexOf(string);
if(n<0){
  console.log("not found");
} else
  console.log('" '+string +' " Found : '+n);
