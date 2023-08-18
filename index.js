// setup variables for input and output & access
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

    let result = "";

    console.log(vehicleType);
    console.log(propultion);
    console.log(axles);
    console.log(wheels);
    console.log(gvm);
    console.log(tare);
    console.log(seats);

    // no input handling
    if (vehicleType === "Select one") {
        result = "Please enter data.";
        output.textContent = result;
        output.style.color = "#c55155";
    } else if (propultion === "Select one") {
        result = "Please enter data.";
        output.textContent = result;
        output.style.color = "#c55155";
    } else if (axles === "Select one") {
        result = "Please enter data.";
        output.textContent = result;
        output.style.color = "#c55155";
    } else if (wheels === "Select one") {
        result = "Please enter data.";
        output.textContent = result;
        output.style.color = "#c55155";
    } else if (!gvm) {
        result = "Please enter data.";
        output.textContent = result;
        output.style.color = "#c55155";
    } else if (!tare) {
        result = "Please enter data.";
        output.textContent = result;
        output.style.color = "#c55155";
    } else if (!seats) {
        result = "Please enter data.";
        output.textContent = result;
        output.style.color = "#c55155";
    }

    //logic

    console.log(result);
}

// reset button
function reset() {
    output.textContent = "";
}
