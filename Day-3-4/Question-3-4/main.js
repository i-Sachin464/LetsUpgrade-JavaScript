let array = [{name:"Sachin", age: 24 , country: "India", hobbies: ["Coding","Mobile gaming", "Maditation"]},
				{name:"Pooja", age: 31 , country: "USA", hobbies: ["Watching TV","Painting"]},
				{name:"Rahul", age: 24 , country: "India", hobbies: ["Playing cricket","Gamble in IPL"]},
				{name:"Doctor", age: 35 , country: "India", hobbies: ["Treating patients","Listening music","Boxing"]}];

function displayInConsole(){
	console.log("Array objects are : \n");
	for( let i =0;i<array.length;i++){
		console.log(array[i]);
	}
}

function displayAgeWise(age){
	console.log("Objects having age > "+ age + " : \n");
	for(let i=0;i<array.length;i++){
		if(array[i].age > age){
			console.log(array[i]);
		}
	}
}

function displayCountryWise(country){
	console.log("Objects containing "+country+" : \n");
	for(let i=0;i<array.length;i++){
		if(array[i].country.search(country) == 0){
			console.log(array[i]);
		}
	}
}
