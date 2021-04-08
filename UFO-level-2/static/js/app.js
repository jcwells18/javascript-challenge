// from data.js
var tableData = data;

console.log(tableData)

var tbody = d3.select("tbody");

//show entire dataset

tableData.forEach((ufoData) =>{
    console.log(ufoData);
    var row = tbody.append('tr');

    Object.entries(ufoData).forEach(([key,value]) => {
        console.log(key,value);
        var cell = row.append('td');
        cell.text(value);

    });
});

var button = d3.select("#filter-btn");

button.on("click", function(event){
    d3.event.preventDefault();
    tbody.html("");

var inputElement = d3.select("#datetime");

var inputValue = inputElement.property("value");

var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
filteredData.forEach(function(dataDate){
    var row=tbody.append("tr");
    Object.entries(dataDate).forEach(function([key,value]){
        var cell=tbody.append("td");
        cell.text(value);

    });
});
});