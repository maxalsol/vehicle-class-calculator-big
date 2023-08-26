// variables
let vehicleType = document.getElementById("vehicle-type").value;
let propultion = document.getElementById("propultion").value;
let axles = document.getElementById("axles").value;
let wheels = document.getElementById("wheels").value;
let gvm = document.getElementById("gvm").value;
let tare = document.getElementById("tare").value;
let seats = document.getElementById("seats").value;

let wheelsLabel = document.getElementById("wheels-label");

//! TRAILER START
if (vehicleType === "Trailer") {
    console.log("Klasse Trailer gewählt!");

    // show options
    document.getElementById("axles").classList.remove("hide");
    document.getElementById("wheels").classList.remove("hide");
    document.getElementById("gvm").classList.remove("hide");

    // show labels
    // show lables
    document.getElementById("axles-label").classList.remove("hide");
    document.getElementById("wheels-label").classList.remove("hide");
    document.getElementById("gvm-label").classList.remove("hide");
}
