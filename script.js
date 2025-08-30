// Get Elements By Id
let bag = document.getElementById("bagID1");
let cement = document.getElementById("cementType1");
let quantity = document.getElementById("quantity1");
// Here is the function which creats the table row
function addRow() {
  let id1 = bag.value;
  let ce2 = cement.value;
  let qe3 = quantity.value;
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  td1.innerHTML = id1;
  td2.innerHTML = ce2;
  td3.innerHTML = qe3;
  td4.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  document.getElementById("table2").getElementsByTagName("tbody")[0].appendChild(tr);
  bag.value = "";
  cement.value = "";
  quantity.value = "";
  td1.style.border = "1px solid black";
  td2.style.border = "1px solid black";
  td3.style.border = "1px solid black";
  td4.style.border = "1px solid black";

}
// Here is the function which deletes the table row

function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}


 