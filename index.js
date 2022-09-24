/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const lengthRes1 = document.getElementById("res1")
const lengthRes2 = document.getElementById("res2")
const lengthRes3 = document.getElementById("res3")
const inputBtn = document.getElementById("input-btn")
const convertBtn = document.getElementById("convert-btn")
//variables used in calculations
const feet = 3.281
const liter = 0.264
const kilogram = 2.204

let valueEntered = 0

convertBtn.addEventListener("click", function () {
    valueEntered = inputBtn.value
    displayLength()
    displayVolume()
    displayMass()
})

function displayLength() {
    lengthRes1.textContent = ""
    let mToF = valueEntered * feet
    let fToM = valueEntered / feet
    lengthRes1.textContent += `
    ${valueEntered} meters = ${mToF.toFixed(3)} feet | 
    ${valueEntered} feet = ${fToM.toFixed(3)} meters
    `
}

function displayVolume() {
    lengthRes2.textContent = ""
    let lToG = valueEntered * liter
    let gToL = valueEntered / liter
    lengthRes2.textContent += `
    ${valueEntered} Liters = ${lToG.toFixed(3)} gallons | 
    ${valueEntered} gallon = ${gToL.toFixed(3)} liters
    `
}

function displayMass() {
    lengthRes3.textContent = ""
    let lToG = valueEntered * kilogram
    let gToL = valueEntered / kilogram
    lengthRes3.textContent += `
    ${valueEntered} kilos = ${lToG.toFixed(3)} pounds | 
    ${valueEntered} pounds = ${gToL.toFixed(3)} kilos
    `
}

