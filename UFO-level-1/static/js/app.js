// from data.js
var tableData = data;

console.log(tableData)

var tbody = d3.select("tbody");

//table data for entire set

tableData.forEach((ufoData) =>{
    console.log(ufoData);
    // append table row for each UFO data
    var row = tbody.append('tr');
    //console log each value 
    Object.entries(ufoData).forEach(([key,value]) => {
        console.log(key,value);
        //append value to each row
        var cell = row.append('td');
        cell.text(value);

    });
});
//create button
var button = d3.select("#filter-btn");

button.on("click", function(event){
    d3.event.preventDefault();
    tbody.html("");
//find input
var inputElement = d3.select("#datetime");
//value for input
var inputValue = inputElement.property("value");

//filter data with datetime === to inputValue
var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
filteredData.forEach(function(selected){
    var row=tbody.append("tr");
    Object.entries(selected).forEach(function([key,value]){
        var cell=tbody.append("td");
        cell.text(value);

    });
});
});