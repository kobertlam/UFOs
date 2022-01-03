// Import data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data){
    // Clear the data in the table
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        // Each object, or UFO sighting, in the array will be wrapped in a <tr> tag
        let row = tbody.append("tr");

        // Loop throgh each field in the dataRow and add
        // each value as a table cell <td>
        Object.values(dataRow).forEach((val) => {
            // Append each value of the object to a table cell <td>
            let cell = row.append("td");

            // Append text of the 'val' object into a table cell <td>
            cell.text(val);
        });
    });
};

function handleClick(){
    // Grab the datetime value from the filter with HRML tag 'datetime'
    let date = d3.select("#datetime").property("value");
    // declare a dafault filter variable
    let filteredData = tableData;

    // Check if a date is entered and filter the data using that date
    if (date) {
        // Apply 'filter' to the table data to only keep the
        // rows where the 'datetime' value matched the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData
    buildTable(filteredData);
};

// Attach an event to listen for the form button with HTML tag id 'filter-btn'
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

