// Function to Show Solution
function showSolution() {
    // Set Up Variable
    let txt = `Solution is ${pentagonNumbers()}. <br>`;
    // Display Solution in the Browser
    document.getElementById("solution").innerHTML = txt;
}

// Function to Check if number n is a pentagonal number
function isPentagonal(n) {
    let root = (1+24*n) ** 0.5;
    return ((1+root)/6) % 1 == 0;
}