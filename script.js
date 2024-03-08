document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.getElementById("gender").value;
    var foodElements = document.getElementsByName("food");
    var food = [];
    for (var i = 0; i < foodElements.length; i++) {
        if (foodElements[i].checked) {
            food.push(foodElements[i].value);
        }
    }
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    
    // Create new row in table
    var table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow();
    var cells = [
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell(),
        newRow.insertCell()
    ];
    cells[0].appendChild(document.createTextNode(firstName));
    cells[1].appendChild(document.createTextNode(lastName));
    cells[2].appendChild(document.createTextNode(address));
    cells[3].appendChild(document.createTextNode(pincode));
    cells[4].appendChild(document.createTextNode(gender));
    cells[5].appendChild(document.createTextNode(food.join(", ")));
    cells[6].appendChild(document.createTextNode(state));
    cells[7].appendChild(document.createTextNode(country));
    
    // Clear form fields
    document.getElementById("myForm").reset();
});
