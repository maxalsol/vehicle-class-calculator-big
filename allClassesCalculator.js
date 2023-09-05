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
        console.log("Step 1 - Klasse Cycle gewählt!");

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
        console.log("Step 1 - Klasse Passenger Vehicle gewählt!");

        // show p-v-options
        document
            .getElementById("passenger-vehicle-options")
            .classList.remove("hide");

        // show p-v-o-labels
        document
            .getElementById("passenger-vehicle-options-label")
            .classList.remove("hide");

        // // show options
        // document.getElementById("axles").classList.remove("hide");
        // document.getElementById("wheels").classList.remove("hide");
        // document.getElementById("gvm").classList.remove("hide");
        // document.getElementById("tare").classList.remove("hide");
        // document.getElementById("seats").classList.remove("hide");

        // // show labels
        // document.getElementById("axles-label").classList.remove("hide");
        // document.getElementById("wheels-label").classList.remove("hide");
        // document.getElementById("gvm-label").classList.remove("hide");
        // document.getElementById("tare-label").classList.remove("hide");
        // document.getElementById("seats-label").classList.remove("hide");
    }

    //! OMNIBUS START
    else if (vehicleType === "Omnibus") {
        console.log("Step 1 - Klasse Omnibus gewählt!");

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
        console.log("Step 1 - Klasse Goods Vehicle gewählt!");

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
        console.log("Step 1 - Klasse Trailer gewählt!");

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

// handling of inputs
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

    // let result = "";

    //logic
    //! CYCLE
    if (vehicleType === "Cycle") {
        console.log("Step 2 - Cycle");
        // aa
        if (propultion === "Human power only") {
            output.textContent = "AA - Pedal Cycle";
            output.style.color = "black";
        }
        // ab
        else if (propultion === "Support by auxiliary engine kl 300 Watts") {
            output.textContent = "AB - Power-assisted pedal cycle";
            output.style.color = "black";
        }
        // la
        else if (
            propultion === "Piston engine kl 50ccm & Vmax kl 50km/h" &&
            wheels === "1 front, 1 rear"
        ) {
            output.textContent = "LA - Moped with two wheels";
            output.style.color = "black";
        }
        // lb1
        else if (
            propultion === "Piston engine kl 50ccm & Vmax kl 50km/h" &&
            wheels === "1 front, 2 rear"
        ) {
            output.textContent = "LB1 - Moped with three wheels";
            output.style.color = "black";
        } else if (
            propultion === "Other engine kl 50ccm & Vmax kl 50km/h" &&
            wheels === "1 front, 2 rear"
        ) {
            output.textContent = "LB1 - Moped with three wheels";
            output.style.color = "black";
        }
        // lb2
        else if (
            propultion === "Piston engine kl 50ccm & Vmax kl 50km/h" &&
            wheels === "2 front, 1 rear"
        ) {
            output.textContent = "LB2 - Moped with three wheels";
            output.style.color = "black";
        } else if (
            propultion === "Other engine kl 50ccm & Vmax kl 50km/h" &&
            wheels === "2 front, 1 rear"
        ) {
            output.textContent = "LB2 - Moped with three wheels";
            output.style.color = "black";
        }
        // lc
        else if (
            propultion === "Piston engine gr 50ccm & Vmax gr 50km/h" &&
            wheels === "1 front, 1 rear"
        ) {
            output.textContent = "LC - Motorcycle";
            output.style.color = "black";
        }
        // ld
        else if (
            propultion === "Piston engine gr 50ccm & Vmax gr 50km/h" &&
            wheels === "Side-car"
        ) {
            output.textContent = "LD - Motorcycle and side-car";
            output.style.color = "black";
        }
        // le1
        else if (
            propultion === "Piston engine gr 50ccm & Vmax gr 50km/h" &&
            wheels === "1 front, 2 rear"
        ) {
            output.textContent = "LE1 - Motor tri-cycle";
            output.style.color = "black";
        }
        // le2
        else if (
            propultion === "Piston engine gr 50ccm & Vmax gr 50km/h" &&
            wheels === "2 front, 1 rear"
        ) {
            output.textContent = "LE2 - Motor tri-cycle";
            output.style.color = "black";
        }
    }

    //! PASSENGER VEHICLE
    else if (vehicleType === "Passenger Vehicle") {
        console.log("Step 2 - Passenger Vehicle");

        let ma = "MA - Passenger car";
        let mb = "MB - Forward control passenger vehicle";
        let mc = "MC - Off-road passenger vehicle";
        let forwardControled = true;

        if (
            (gvm > 1000 &&
                (wheels === "1 front, 2 rear" ||
                    wheels === "2 front, 1 rear")) ||
            wheels === "2 front, 2 rear" ||
            wheels === "2 front, 4 rear"
        ) {
            // ma
            if (seats <= 9 && !mb && !mc) {
                output.textContent = ma;
                output.style.color = "black";
            }
            // mb
            //? how forward control?
            //? checkbox for steering wheel in front quarter
            else if (seats <= 9 && !mc && forwardControled) {
                output.textContent = mb;
                output.style.color = "black";
            }
            // mc
            //? checkbox for 4WD then options
            else if (seats <= 9 && checkbox === "mc") {
                output.textContent = mc;
                output.style.color = "black";
            }
        }
    }

    //! OMNIBUS
    else if (vehicleType === "Omnibus") {
        console.log("Step 2 - Omnibus");
        // md1
        if (gvm <= 3500 && seats <= 12) {
            output.textContent = "MD1 - Light Omnibus";
            output.style.color = "black";
        }
        // md2
        else if (gvm <= 3500 && seats > 12) {
            output.textContent = "MD2 - Light Omnibus";
            output.style.color = "black";
        }
        // md3
        else if (gvm > 3500 && gvm <= 4500) {
            output.textContent = "MD3 - Light Omnibus";
            output.style.color = "black";
        }
        // md4
        else if (gvm > 4500 && gvm <= 5000) {
            output.textContent = "MD4 - Light Omnibus";
            output.style.color = "black";
        }
        // me
        else if (gvm > 5000) {
            output.textContent = "ME - Heavy Omnibus";
            output.style.color = "black";
        }
    }
    //! GOODS VEHICLE
    else if (vehicleType === "Goods Vehicle") {
        console.log("Step 2 - Goods Vehicle");
        if (
            (gvm > 1000 &&
                (wheels === "1 front, 2 rear" ||
                    wheels === "2 front, 1 rear")) ||
            wheels === "2 front, 2 rear" ||
            wheels === "2 front, 4 rear" ||
            wheels === "2 front, 8 rear"
        ) {
            // na
            if (gvm <= 3500) {
                output.textContent = "NA - Light Goods Vehicle";
                output.style.color = "black";
            }
            // nb
            else if (gvm > 3500 && gvm <= 12000) {
                output.textContent = "NB - Medium Goods Vehicle";
                output.style.color = "black";
            }
            // nc
            else if (gvm > 12000) {
                output.textContent = "NC - Heavy Goods Vehicle";
                output.style.color = "black";
            }
        }
    }

    //! TRAILER
    else if (vehicleType === "Trailer") {
        console.log("Step 2 - Trailer");
        // ta
        if (axles === 1 && gvm <= 750) {
            output.textContent = "TA - Very light trailer";
            output.style.color = "black";
        }
        // tb
        if (gvm <= 3500) {
            output.textContent = "TB - Light trailer";
            output.style.color = "black";
        }
        // tc
        if (gvm > 3500 && gvm <= 10000) {
            output.textContent = "TC - Medium trailer";
            output.style.color = "black";
        }
        // td
        if (gvm > 10000) {
            output.textContent = "TD - Heavy trailer";
            output.style.color = "black";
        }
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
