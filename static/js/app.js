// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {
    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this);
    // 4b. Save the value that was changed as a variable.
    let elementValue = changedElement.property("value");
    console.log("elementValue: " + elementValue);
    // 4c. Save the id of the filter that was changed as a variable.
    let filterID = changedElement.attr("id");
    console.log("filterID: " + filterID);
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue) {
      filters[filterID] = elementValue;
    }
    else{
      delete filters[filterID];
    };
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values

    // Get the value for the datetime attribute
    let date = filters.datetime;
    console.log("inside filterTable (date): " + date);
    if (date) {
      // Apply 'filter' to the table data to only keep the
      // rows where the 'datetime' value matched the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
  
    // Get the value for the city attribute
    let city = filters.city;
    console.log("inside filterTable (city): " + city);
    if (city) {
      // Apply 'filter' to the table data to only keep the
      // rows where the 'city' value matched the filter value
      filteredData = filteredData.filter(row => row.city === city);
    };

    // Get the value for the state attribute
    let state = filters.state;
    console.log("inside filterTable (state): " + state);
    if (state) {
      // Apply 'filter' to the table data to only keep the
      // rows where the 'state' value matched the filter value
      filteredData = filteredData.filter(row => row.state === state);
    };

    // Get the value for the country attribute
    let country = filters.country;
    console.log("inside filterTable (country): " + country);
    if (country) {
      // Apply 'filter' to the table data to only keep the
      // rows where the 'country' value matched the filter value
      filteredData = filteredData.filter(row => row.country === country);
    };

    // Get the value for the shpae attribute
    let shape = filters.shape;
    console.log("inside filterTable (shape): " + shape);
    if (shape) {
      // Apply 'filter' to the table data to only keep the
      // rows where the 'shape' value matched the filter value
      filteredData = filteredData.filter(row => row.shape === shape);
    };

    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);  
  
  // Build the table when the page loads
  buildTable(tableData);
