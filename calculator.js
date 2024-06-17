// Initialize arrays to store valid results and their corresponding details
let results = [];
let calculations = [];

while (true) {
    let x = prompt("Enter the first number (x):");
    if (x === null) break; // Exit if the user clicks Cancel
    let y = prompt("Enter the second number (y):");
    if (y === null) break; // Exit if the user clicks Cancel
    let operator = prompt("Enter an arithmetic operator (+, -, *, /, %):");
    if (operator === null) break; // Exit if the user clicks Cancel

    // Convert x and y to numbers
    x = parseFloat(x);
    y = parseFloat(y);

    // Initialize result
    let result;
    let validOperation = true;

    // Check if x and y are numbers
    if (isNaN(x) || isNaN(y)) {
        result = "wrong input number";
        validOperation = false;
    } else {
        // Perform the appropriate calculation based on the operator
        switch (operator) {
            case '+':
                result = x + y;
                break;
            case '-':
                result = x - y;
                break;
            case '*':
                result = x * y;
                break;
            case '/':
                if (y !== 0) {
                    result = x / y;
                } else {
                    result = "computation error";
                    validOperation = false;
                }
                break;
            case '%':
                result = x % y;
                break;
            default:
                result = "computation error";
                validOperation = false;
        }
    }

    // Store the result in the calculations array
    calculations.push({ x, operator, y, result });

    // If the operation was valid, store the result in the results array
    if (validOperation) {
        results.push(result);
    }
}

// Function to calculate summary statistics
function calculateSummary(results) {
    let min = Math.min(...results);
    let max = Math.max(...results);
    let total = results.reduce((acc, curr) => acc + curr, 0);
    let avg = total / results.length;
    return { min, max, total, avg };
}

// Display the calculations in a table
document.write("<table>");
document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");
calculations.forEach(calc => {
    document.write(`<tr><td>${calc.x}</td><td>${calc.operator}</td><td>${calc.y}</td><td>${calc.result}</td></tr>`);
});
document.write("</table>");

// If there are valid results, display the summary statistics in a table
if (results.length > 0) {
    let { min, max, total, avg } = calculateSummary(results);
    document.write("<table>");
    document.write("<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>");
    document.write(`<tr><td>${min}</td><td>${max}</td><td>${avg}</td><td>${total}</td></tr>`);
    document.write("</table>");
}
