let array = [{"name":"Sachin", "age": 24 , "city": "India", "salary": 10000},
				{"name":"Pooja", "age": 31 , "city": "USA", "salary": 1500},
				{"name":"Rahul", "age": 24 , "city": "India", "salary": 5000},
				{"name":"Doctor", "age": 35 , "city": "India", "salary": 22000}];

var flag=-1;
function addRow(tableID) {
	var table = document.getElementById(tableID);
	if(flag>-1)
				deleteAll();
	if(flag==-1){
		for (var i = 0; i < array.length; i++) {
			let row = table.insertRow(i+1);
			var arrRow = array[i];
			var name = row.insertCell(0);
			var age = row.insertCell(1);
			var city = row.insertCell(2);
			var salary = row.insertCell(3);
			
			name.innerHTML = arrRow["name"];
			age.innerHTML = arrRow["age"];
			city.innerHTML = arrRow["city"];
			salary.innerHTML = arrRow["salary"];
			++flag;
		}
	}
}

function searchName() {
  	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("search_nm");
	filter = input.value.toUpperCase();
	table = document.getElementById("table");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
    	td = tr[i].getElementsByTagName("td")[1];
    	if (td) {
    		txtValue = td.textContent || td.innerText;
    		if (txtValue.toUpperCase().indexOf(filter) > -1) {
        		tr[i].style.display = "";
    		} else {
        		tr[i].style.display = "none";
    		}
    	}   
	}
}

function searchCity() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("search_city");
	filter = input.value.toUpperCase();
	table = document.getElementById("table");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
    	td = tr[i].getElementsByTagName("td")[1];
    	if (td) {
    		txtValue = td.textContent || td.innerText;
    		if (txtValue.toUpperCase().indexOf(filter) > -1) {
        		tr[i].style.display = "";
    		} else {
        		tr[i].style.display = "none";
    		}
    	}       
	}
}

function deleteAll(){
	try{
		var table = document.getElementById("table");
		var rowCount = table.rows.length;
		for (var i = rowCount-1; i > 0 ; i--) {
			table.deleteRow(i);
			--flag;
		}
	} catch(e){

	}
}
function deleteAllByButton(tableID){
	try{
		var table = document.getElementById(tableID);
		var rowCount = table.rows.length;
		for (var i = rowCount-1; i > 0 ; i--) {
			table.deleteRow(i);
			--flag;
		}
	} catch(e){

	}
}
function deleteRow(tableID) {
	try {
		var table = document.getElementById(tableID);
		table.deleteRow(1);
		--flag;
	}catch(e) {
		alert(e);
	}
}