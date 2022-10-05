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

/*
    Function to Return the minimum difference of two pentagonal
    numbers Pi and Pj such that Pi + Pj is pentagonal and
    |Pj - Pi| is pentagonal.
    pentagonNumbers() returns 5482660.

*/
function pentagonNumbers() {
    const PENTAGONALS = Array(10000).fill(0);
    for (let i=1;i<10000;i++) {
        const pI = PENTAGONALS[i] = i * (3*i-1)/2;
        for (let j=i-1;j>0;j--) {
            const pJ = PENTAGONALS[j];
            if (isPentagonal(pI - pJ) && isPentagonal(pI + pJ)) return pI - pJ;
        }
    }
}

// Function to Hide Solution
function hideSolution() {
    let txt = "";
    document.getElementById("solution").innerHTML = txt;
}