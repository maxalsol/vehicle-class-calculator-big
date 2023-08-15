// setup variables for input and output & access
//let inputFields = document.getElementsByTagName("input");
let numGvm = document.getElementById("gvm");
let numTare = document.getElementById("tare");
let numSeats = document.getElementById("seats");
let submitBtn = document.getElementById("submit-btn");
let resetBtn = document.getElementById("reset-btn");
let output = document.getElementById("output");

// eventhandler
// click
submitBtn.addEventListener("click", calculate);
resetBtn.addEventListener("click", reset);

// touch
submitBtn.addEventListener("touchend", calculate);
resetBtn.addEventListener("touchend", reset);

// function with variables set
// calculate based on formula & output on screen
// handle empty inputs
function calculate(evt) {
    evt.preventDefault();

    // variables
    let vehicleType = document.getElementById("vehicle-type").value;
    let propultion = document.getElementById("propultion").value;
    let axles = document.getElementById("axles").value;
    let wheels = document.getElementById("wheels").value;
    let gvm = document.getElementById("gvm").value;
    let tare = document.getElementById("tare").value;
    let seats = document.getElementById("seats").value;

    // logic
    // vehicle type

    // is the vehicle propelled by human power?
    // yes -> is an auxiliary engine fitted?
    //     yes -> total output > 300 Watts?
    //         no -> Class 'AB'
    //     yes -> vehicle meets criteria for passenger vehicle NEXT
    //      no -> total output > 300 Watts?
    //          no -> Class 'AB'
    //          yes -> vehicle meets criteria for passenger vehicle NEXT
    // no -> Class 'AA'

    // differentiate between 2-wheeler and 3-8-wheeler

    // 2-wheeler
    // vehicle meets criteria for passnger vehicle?
    // yes ->

    // 3-x-wheeler
    // vehicle meets criteria for passnger vehicle?
}

// reset button
function reset() {
    output.textContent = "";
}
