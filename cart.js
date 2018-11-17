var table = document.createElement('table');
var p = document.getElementById('cartp');
var b = sessionStorage.getItem("No_of_pizzas");
table.style.width = "40%";
table.style.padding = "100px";
table.style.border = "10px solid black";
// table.align = "center";
table.style.margin = "0px auto";
table.style.marginTop = "15%";
table.style.textAlign = "center";
var total = 0;
function price(i) {
    // alert(sessionStorage.getItem(i));
    switch(sessionStorage.getItem(i))
    {
        case "Cheese" : return "12";
        case "Garlic Tomato" : return "15";
        case "Pepperoni" : return "17";
        case "BBQ Chicken" : return "20";
        case "Mt. Olympus" : return "20";
        case "Mt. Nebo" : return "20";
        case "Mt. Everest" : return "22";
        case "Mt. Fuji" : return "25";
    }
}
var trhead = document.createElement('tr');   

var tda = document.createElement('td');
var tdb = document.createElement('td');
tda.style.border = "1px solid black";
tdb.style.border = "1px solid black";
tda.style.fontSize = "70px";
tdb.style.fontSize = "70px";
var texta = document.createTextNode("Item");
var textb = document.createTextNode("Price");
tda.appendChild(texta);
    tdb.appendChild(textb);
    trhead.appendChild(tda);
    trhead.appendChild(tdb);

    table.appendChild(trhead);

for (var i = 1; i <= b; i++){
    var tr = document.createElement('tr');   

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    td1.style.fontSize = "50px";
    td2.style.fontSize = "50px";
    td1.style.border = "2px solid black";
    td2.style.border = "2px solid black";
    var text1 = document.createTextNode(sessionStorage.getItem(i));
    var text2 = document.createTextNode("$"+price(i));
    total+= parseFloat(price(i));
    td1.appendChild(text1);
    td2.appendChild(text2);
    tr.appendChild(td1);
    tr.appendChild(td2);

    table.appendChild(tr);
}
document.body.appendChild(table);
var tot = document.createElement('p');
tot.style.fontSize = "50px";
tot.style.marginLeft = "75%";
tot.style.marginTop = "-20%";
tot.textContent = "Total: $"+total.toFixed(2);
document.body.appendChild(tot);