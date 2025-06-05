console.log('JS loaded!!');

// Remember to inspect in Chrome, and click onto console to see errors!
// Step 1: Declare two variables 'a' and 'b' and assign them numeric values.
// Example: let a; let b;
// Assign appropriate numeric values to these variables. For example 3 and 5
// I have used prompt here to allow you to enter numbers on page load!
// parseFloat() method is a JavaScript function used to convert strings into floating-point numbers
// :) Continue to Step 2
let a = parseFloat(prompt('Enter Number for a'));
let b = parseFloat(prompt('Enter Number for b'));


// Variable: isEqual store the result of a equal to b using ==.
let isEqual = (a == b);

// Variable: isStrictEqual stores the result of a strictly equal to b using ===.
let isStrictEqual = (a === b);

// Variable: isNotEqual store the result of a not equal to b using !=.
let isNotEqual = (a != b);

// Variable: isStrictNotEqual stoes the result of a strictly not equal to b using !==.
let isStrictNotEqual = (a !== b);

// Step 3: Perform basic mathematical operations.

// Variable: 'add' adds a and b.
let add = a + b;

// Variable: 'sub'subtracts b from a.
let sub = a - b;

// Variable: 'multiply' multiplies a and b.
let multiply = a * b;

// Variable: 'power' does a raised to the power of b.
let power = a ** b;

// Variable: 'division' divides a by b.
let division = a / b;

// Step 4: Use comparison operators to compare the variables.

// Variable: 'isGreaterThan' Checks if a is greater than b. 
let isGreaterThan = (a > b);

// Variable: 'isGreaterOrEqual' checks if a is greater than or equal to b.
let isGreaterOrEqual = (a >= b);

// Variable: 'isLessThan' checks if a is less than b.
let isLessThan = (a < b);

// Variable: 'isLessOrEqual' checks if a is less than or equal to b.
let isLessOrEqual = (a <= b);

// Step 5: Apply binary logic with short-circuit evaluation.

// Variable: 'andResult' it pperforms a logical AND operation on a > 5 and b > 5.
let andResult = (a > 5 && b > 5);

// Variable: 'orResult' performs a logical OR operation on a > 5 and b > 5.
let orResult = (a > 5 || b > 5);

// 
// Do not edit below this line doing so will break the project, this code will display the values on the page
//
function getBadge(value) {
    return value ? `<span class="badge bg-success">True</span>` : `<span class="badge bg-danger">False</span>`;
}

const resultsDiv = document.querySelector('#results');
resultsDiv.innerHTML = `
    <div class="container card mt-4">
        <div class="row m-2">
            <div class="col-md-3">
                <h2 class="card-title">Variables</h2>
                <p class="card-text">a: <strong>${a}</strong></p>
                <p class="card-text">b: <strong>${b}</strong></p>
            </div>
            <div class="col-md-3">
                <h2 class="card-title">Comparisons</h2>
                <p class="card-text">isEqual (a == b): <strong>${getBadge(isEqual)}</strong></p>
                <p class="card-text">isStrictEqual (a === b): <strong>${getBadge(isStrictEqual)}</strong></p>
                <p class="card-text">isNotEqual (a != b): <strong>${getBadge(isNotEqual)}</strong></p>
                <p class="card-text">isStrictNotEqual (a !== b): <strong>${getBadge(isStrictNotEqual)}</strong></p>
            </div>
            <div class="col-md-3">
                <h2 class="card-title">Mathematical</h2>
                <p class="card-text">Addition (a + b): <strong>${add}</strong></p>
                <p class="card-text">Subtraction (a - b): <strong>${sub}</strong></p>
                <p class="card-text">Multiply (a * b): <strong>${multiply}</strong></p>
                <p class="card-text">Power (a<sup>b</sup>): <strong>${power}</strong></p>
                <p class="card-text">Division (a / b): <strong>${division}</strong></p>
            </div>
            <div class="col-md-3">
                <h2 class="card-title">Logical</h2>
                <p class="card-text">isGreaterThan (a > b): <strong>${getBadge(isGreaterThan)}</strong></p>
                <p class="card-text">isGreaterOrEqual (a >= b): <strong>${getBadge(isGreaterOrEqual)}</strong></p>
                <p class="card-text">isLessThan (a < b): <strong>${getBadge(isLessThan)}</strong></p>
                <p class="card-text">isLessOrEqual (a <= b): <strong>${getBadge(isLessOrEqual)}</strong></p>
                <p class="card-text">andResult (a > 5 && b > 5): <strong>${getBadge(andResult)}</strong></p>
                <p class="card-text">orResult (a > 5 || b > 5): <strong>${getBadge(orResult)}</strong></p>
            </div>
        </div>
    </div>
`;
//2025 Build
