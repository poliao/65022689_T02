document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    var h1 = document.querySelector("h1");
    while (h1) {
    h1.parentNode.removeChild(h1);
    h1 = document.querySelector("h1");
    }
    
    
    var input1 = document.querySelector('#input1').value;
var input2 = document.querySelector('#input2').value;
var date = document.querySelector('#date').value;
var dob = document.querySelector('#dob').value;

if (input1 == "") {
    var h1 = document.createElement("h1");
    var text = document.createTextNode("Insert Name");
    h1.appendChild(text);
    h1.style.color = "red";
    document.body.appendChild(h1);
}
if (input2 == "") {
    var h1 = document.createElement("h1");
    var text = document.createTextNode("Insert Surname");
    h1.appendChild(text);
    h1.style.color = "red";
    document.body.appendChild(h1);
}
if (date == "") {
    var h1 = document.createElement("h1");
    var text = document.createTextNode("Insert Birth date");
    h1.appendChild(text);
    h1.style.color = "red";
    document.body.appendChild(h1);
}
if (dob == "") {
    var h1 = document.createElement("h1");
    var text = document.createTextNode("Select Language");
    h1.appendChild(text);  
    h1.style.color = "red";
    document.body.appendChild(h1);
}
if (input1 !== "" && input2 !== "" && date !== "" && dob !== "") {
    var h1 = document.createElement("h1");
    var text = document.createTextNode( input1 +","+input2 + ","+ date +","+dob);
    h1.appendChild(text);  
    h1.style.color = "green";
    document.body.appendChild(h1);
}

    });




    document.querySelector("#input1").addEventListener("mouseover", function(){
        this.style.backgroundColor = "yellow";
    });
    document.querySelector("#input1").addEventListener("mouseout", function(){
        this.style.backgroundColor = "white";
    });
    document.querySelector("#input2").addEventListener("mouseover", function(){
        this.style.backgroundColor = "yellow";
    });
    document.querySelector("#input2").addEventListener("mouseout", function(){
        this.style.backgroundColor = "white";
    });