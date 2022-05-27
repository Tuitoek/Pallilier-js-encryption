const pqform = document.getElementById('pqinputs');
const p_input = document.getElementById('p_input');
const q_input = document.getElementById('q_input');

// Function to get the target value of  p input without function 
const p = p_input.addEventListener('click', function(e) {
    e.preventDefault();
    const p = e.target.value;
    console.log(p)
    return e.target.value
})


// Function to get the target value of  q input without function 
const q = q_input.addEventListener('click', function(e) {
    e.preventDefault();
    const q = e.target.value;
    console.log(q)
    return e.target.value
})

function getParameters() {
    const p = document.getElementById("p_input").value;
    const q = document.getElementById("q_input").value;

    // Calculations for n
    const n = calculateN(p, q);

    // Calculations for g
    const g = calculateG(n);

    // Calculating n2
    const n2 = nsquared(n);

    // Calculating pq
    const pq = calculatepq(p, q)

    // Calculating [(p-1)(q-1)]-1
    const pq_1 = pqReciprocal(p, q)

    // Calculating mod 
    const mod = n % g

    isHex(p, q)
    checkByteSize(p, q)
    getMod(n, g)
    modNsquared(n, g, n2)

    // Displaying the calculated values  on html
    document.getElementById("n").innerHTML = "N = " + n;
    document.getElementById('g').innerHTML = "G = " + g;
    document.getElementById('n2').innerHTML = "N2 =" + n2;
    document.getElementById('mult').innerHTML = "(p-1)(q-1) =" + pq;
    document.getElementById('pq-1').innerHTML = "[(p-1)(q-1)]-1 = " + pq_1;
}

// Function for calculating N
function calculateN(a, b) {
    return a * b
}

// Funtion for calculating g 
function calculateG(n) {
    return 1 + n
}

// function to calculate n squared 
function nsquared(n) {
    return Math.pow(n, 2)
}

// Function to calculate(p-1)(q-1)
function calculatepq(p, q) {
    return (p - 1) * (q - 1)
}

// Function to calculate pqreciprocal
function pqReciprocal(p, q) {
    return 1 / calculatepq(p, q)
}

// Check if input is a hexadecimal 
function isHex(h, t) {
    const re = /[0-9A-Fa-f]{6}/g;

    if (re.test(h) && re.test(t)) {
        alert('valid hexadecimal Input!Continue!');
    } else {
        alert('invalid Input!Please enter a hexadecimal');
    }

    re.lastIndex = 0;
}

// Function to get the byte size
function checkByteSize(p, q) {
    let p_size = new Blob([p]).size
    let q_size = new Blob([q]).size
    if (p_size < 128 && q_size) {
        alert("Input is valid")
        return "valid input "
    } else {
        alert("Invalid input!Please enter a valid input of small byte size")
        return "Invalid Input "
    }
}

//Function to check byte size of m1,m2 and m3
function checkByteSize(p) {
    let p_size = new Blob([p]).size
    if (p_size < 4) {
        alert("Input is valid")
        return "valid input "
    } else {
        alert("Invalid input!Please enter a valid input of small byte size")
        return "Invalid Input "
    }
}

//Function to encrypt first inputs
function encryptFirst() {
    const m1 = document.getElementById('m1').value;
    const r1 = document.getElementById('r1').value;




}

// Function to get mod
function getMod(n, g) {
    console.log(n % g)
    return n % g
}

//function mod * n squared
function modNsquared(n, g, n2) {
    const mod = n % g
    console.log(mod * n2)
    return mod * n2
}
//Function for g