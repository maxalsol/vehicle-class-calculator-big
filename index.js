// setup variables for input and output & access
let nextBtn = document.getElementById("next-btn");
let submitBtn = document.getElementById("submit-btn");
let resetBtn = document.getElementById("reset-btn");
let output = document.getElementById("output");

// eventhandler
// click
nextBtn.addEventListener("click", next);
submitBtn.addEventListener("click", calculate);
resetBtn.addEventListener("click", reset);

// touch
nextBtn.addEventListener("touchend", next);
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

    // no input handling
    // if (vehicleType === "Select one") {
    //     result = "Please enter data.";
    //     output.textContent = result;
    //     output.style.color = "#c55155";
    // } else if (propultion === "Select one") {
    //     result = "Please enter data.";
    //     output.textContent = result;
    //     output.style.color = "#c55155";
    // } else if (axles === "Select one") {
    //     result = "Please enter data.";
    //     output.textContent = result;
    //     output.style.color = "#c55155";
    // } else if (wheels === "Select one") {
    //     result = "Please enter data.";
    //     output.textContent = result;
    //     output.style.color = "#c55155";
    // } else if (!gvm) {
    //     result = "Please enter data.";
    //     output.textContent = result;
    //     output.style.color = "#c55155";
    // } else if (!tare) {
    //     result = "Please enter data.";
    //     output.textContent = result;
    //     output.style.color = "#c55155";
    // } else if (!seats) {
    //     result = "Please enter data.";
    //     output.textContent = result;
    //     output.style.color = "#c55155";
    // } else

    // if (result === "") {
    //     result = "Please enter correct data.";
    //     output.textContent = result;
    //     output.style.color = "#c55155";
    // } else if (result === "aa") {
    //     result = "Class AA";
    //     output.textContent = result;
    //     output.style.color = "black";
    // }

    // console.log(vehicleType);
    // console.log(propultion);
    // console.log(axles);
    // console.log(wheels);
    // console.log(gvm);
    // console.log(tare);
    // console.log(seats);

    //logic
}

// next button

function next() {
    // variables
    let vehicleType = document.getElementById("vehicle-type").value;
    let propultion = document.getElementById("propultion").value;
    let axles = document.getElementById("axles").value;
    let wheels = document.getElementById("wheels").value;
    let gvm = document.getElementById("gvm").value;
    let tare = document.getElementById("tare").value;
    let seats = document.getElementById("seats").value;

    let wheelsLabel = document.getElementById("wheels-label");

    //! CYCLES START
    if (vehicleType === "Cycle") {
        console.log("Klasse Cycle gewählt!");

        // show options
        document.getElementById("propultion").classList.remove("hide");
        document.getElementById("axles").classList.remove("hide");
        document.getElementById("wheels").classList.remove("hide");
        document.getElementById("gvm").classList.remove("hide");

        // show lables
        document.getElementById("propultion-label").classList.remove("hide");
        document.getElementById("axles-label").classList.remove("hide");
        document.getElementById("wheels-label").classList.remove("hide");
        document.getElementById("gvm-label").classList.remove("hide");
    }

    //! PASSENGER VEHICLE START
    else if (vehicleType === "Passenger Vehicle") {
        console.log("Klasse Passenger Vehicle gewählt!");

        // show options
        document.getElementById("axles").classList.remove("hide");
        document.getElementById("wheels").classList.remove("hide");
        document.getElementById("gvm").classList.remove("hide");
        document.getElementById("tare").classList.remove("hide");
        document.getElementById("seats").classList.remove("hide");

        // show labels
        document.getElementById("axles-label").classList.remove("hide");
        document.getElementById("wheels-label").classList.remove("hide");
        document.getElementById("gvm-label").classList.remove("hide");
        document.getElementById("tare-label").classList.remove("hide");
        document.getElementById("seats-label").classList.remove("hide");
    }

    //! OMNIBUS START
    else if (vehicleType === "Omnibus") {
        console.log("Klasse Omnibus gewählt!");

        // show options
        document.getElementById("axles").classList.remove("hide");
        document.getElementById("wheels").classList.remove("hide");
        document.getElementById("gvm").classList.remove("hide");
        document.getElementById("tare").classList.remove("hide");
        document.getElementById("seats").classList.remove("hide");

        // show labels
        document.getElementById("axles-label").classList.remove("hide");
        document.getElementById("wheels-label").classList.remove("hide");
        document.getElementById("gvm-label").classList.remove("hide");
        document.getElementById("tare-label").classList.remove("hide");
        document.getElementById("seats-label").classList.remove("hide");
    }

    //! GOODS VEHICLE START
    else if (vehicleType === "Goods Vehicle") {
        console.log("Klasse Goods Vehicle gewählt!");

        // show options
        document.getElementById("axles").classList.remove("hide");
        document.getElementById("wheels").classList.remove("hide");
        document.getElementById("gvm").classList.remove("hide");
        document.getElementById("tare").classList.remove("hide");
        document.getElementById("seats").classList.remove("hide");

        // show labels
        document.getElementById("axles-label").classList.remove("hide");
        document.getElementById("wheels-label").classList.remove("hide");
        document.getElementById("gvm-label").classList.remove("hide");
        document.getElementById("tare-label").classList.remove("hide");
        document.getElementById("seats-label").classList.remove("hide");
    }

    //! TRAILER START
    else if (vehicleType === "Trailer") {
        console.log("Klasse Trailer gewählt!");

        // show options
        document.getElementById("axles").classList.remove("hide");
        document.getElementById("wheels").classList.remove("hide");
        document.getElementById("gvm").classList.remove("hide");

        // show lables
        document.getElementById("axles-label").classList.remove("hide");
        document.getElementById("wheels-label").classList.remove("hide");
        document.getElementById("gvm-label").classList.remove("hide");
    }
}

// reset button
function reset() {
    output.textContent = "";

    document.getElementById("propultion").classList.add("hide");
    document.getElementById("axles").classList.add("hide");
    document.getElementById("wheels").classList.add("hide");
    document.getElementById("gvm").classList.add("hide");
    document.getElementById("tare").classList.add("hide");
    document.getElementById("seats").classList.add("hide");

    document.getElementById("propultion-label").classList.add("hide");
    document.getElementById("axles-label").classList.add("hide");
    document.getElementById("wheels-label").classList.add("hide");
    document.getElementById("gvm-label").classList.add("hide");
    document.getElementById("tare-label").classList.add("hide");
    document.getElementById("seats-label").classList.add("hide");
}
