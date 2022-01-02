// Import data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data){
    // Clear the data in the table
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.foreach((dataRow) => {
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
}
