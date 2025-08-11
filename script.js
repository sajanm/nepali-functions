// const NepaliFunctions = require("./sajan.nepaliFunctions");

function getMethods(obj) {
    var result = [];
    for (var id in obj) {
        try {
            if (typeof obj[id] == "function") {
                result.push(id);
            }
        } catch (err) {
            result.push(id + ": inaccessible");
        }
    }
    return result;
}

function buildLi(arr, type) {
    var liArray = arr.map(function (item) {
        return `<li>${type ? type + "." + item : item}</li>`;
    });

    return liArray.join("");
}

// Set Available Functions
var availableFunctionsUl = document.getElementById("available-functions");

var availableFunctions = getMethods(NepaliFunctions);
var availableFunctionsLis = buildLi(availableFunctions);

var adFunctions = getMethods(NepaliFunctions.AD);
var adFunctionsLisLis = buildLi(adFunctions, "AD");

var bsFunctions = getMethods(NepaliFunctions.BS);
var bsFunctionsLisLis = buildLi(bsFunctions, "BS");

availableFunctionsUl.innerHTML =
    availableFunctionsLis + adFunctionsLisLis + bsFunctionsLisLis;

// Set Available Date Formats
var availableDateFormats = NepaliFunctions.AvailableFormats;
var availableDateFormatsUl = document.getElementById("available-date-formats");
var availableDateFormatsLis = buildLi(availableDateFormats);
availableDateFormatsUl.innerHTML = availableDateFormatsLis;
