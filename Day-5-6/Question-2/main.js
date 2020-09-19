
window.onload = function () {
  let array = [];
  var flag=-1;

  if (localStorage.getItem("buses") == null) {
    localStorage.setItem("buses", JSON.stringify(array));
  }
};

function display(arraybus = undefined) {
  let tabledata = "";
  let buses;
  if (arraybus == undefined) {
    buses = JSON.parse(localStorage.getItem("buses"));
  } else {
    buses = arraybus;
  }

  buses.forEach(function (bus, index) {
    let currentrow = `<tr>
      <td>${bus.name}</td>
      <td>${bus.source}</td>
      <td>${bus.destination}</td>
      <td>${bus.number}</td>
      <td>${bus.capacity}</td>
      <td>
      <button onclick='deleteIndex(${index})'>delete</button>
      </td>
      </tr>`;
    tabledata += currentrow;
  });
  document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}

display();

function addBus(e) {
  e.preventDefault();
  let bus = {};
  let name = document.getElementById("name").value;
  let source = document.getElementById("source").value;
  let destination = document.getElementById("destination").value;
  let number = document.getElementById("number").value;
  let capacity = document.getElementById("capacity").value;

  bus.name = name;
  bus.source = source;
  bus.destination = destination;
  bus.number = number;
  bus.capacity = Number(capacity);

  //   buses.push(bus);

  let buses = JSON.parse(localStorage.getItem("buses"));
  buses.push(bus);
  localStorage.setItem("buses", JSON.stringify(buses));

  display();

  document.getElementById("name").value = "";
  document.getElementById("source").value = "";
  document.getElementById("destination").value = "";
  document.getElementById("number").value = "";
  document.getElementById("capacity").value = "";
}







function popupAddData(){
	var modal = document.getElementById("modal");

	modal.style.display = "block";
}
function closeModal(){
	var modal = document.getElementById("modal");
	modal.style.display = "none";
}
function validateForm() {
  if (document.forms["form"]["name"].value == "") {
    return false;
  }if (document.forms["form"]["source"].value == "") {
    return false;
  }if (document.forms["form"]["destination"].value == "") {
    return false;
  }if (document.forms["form"]["number"].value == "") {
    return false;
  }if (document.forms["form"]["capacity"].value == "") {
    return false;
  }
  return true;
}

function addBusData(e){
	if(validateForm()){
		addBus(e)
		var modal = document.getElementById("modal");
		modal.style.display = "none";
		alert("Added Successfully.");

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

function deleteIndex(index){
  let buses = JSON.parse(localStorage.getItem("buses"));
  buses.splice(index, 1);
  localStorage.setItem("buses", JSON.stringify(buses));
  display();
}


// function deleteAll(){
// 	let buses = JSON.parse(localStorage.getItem("buses"));
// 	buses.splice(0,buses.length)
// 	localStorage.setItem("buses", JSON.stringify(""));
// 	display();
// }

function refreshTable(table){
	display();
}
