//Variables to store n and g
// ns stands for N
// gs stands for G
var ns = [];
var gs = [];
var number2 = [];
var mods = [];
var nsquared = [];
// Login encapsulated in a function
// to get parameters and calculate n and g

function getParameters() {
    var p = document.getElementById("p_input").value;
    var q = document.getElementById("q_input").value;

    // Calculations for n
    var n = p * q;

    // Calculations for g
    var g = 1 + n;
    // Appending n and g to lists
    ns += n
    gs += g
    console.log(ns)
    console.log(gs)

    // Calculating n2
    var n2 = Math.pow(n, 2);
    nsquared += n2

    console.log(n2)

    // Calculating pq
    var pq = (p - 1) * (q - 1)

    // Calculating [(p-1)(q-1)]-1
    var pq_1 = 1 / pq

    // Calculating mod 
    var mod = n % g
    mods += mod


    // Displaying the calculated values  on html
    document.getElementById("n").innerHTML = "N = " + n;
    document.getElementById('g').innerHTML = "G = " + g;
    document.getElementById('n2').innerHTML = "N2 =" + n2;
    document.getElementById('mult').innerHTML = "(p-1)(q-1) =" + pq;
    document.getElementById('pq-1').innerHTML = "[(p-1)(q-1)]-1 = " + pq_1;

    encryptFirst()



}

// Function for getting the inputs of  m and r
function encryptFirst() {
    getParameters()
        // get the m1,m2,m3 random inputs value
    var m1 = document.getElementById("m1").value;
    var r1 = document.getElementById("r1").value;
    console.log(m1);

    // Calculating cipher text for encryption
    var gm = Math.pow(g, m1)
    console.log(gm)
    var cipherFirst = ((gm * mod) * r1 * (mod * nsu)) * (mod * n2)
    console.log(cipherFirst)







}