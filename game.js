var player = {
    number: 0,
    superNumber: 0,
    energy: 0,
    increment: 1,
    incrementMultiplier: 1,
    incrementExponent: 1,
    worker: 0,
    workerBought: 0,
    family: 0,
    familyBought: 0,
    house: 0,
    houseBought: 0,
    workerCost: 10,
    familyCost: 10000,
    houseCost: 10000000,
    energizer: 0,
    energizerBought: 0,
    energizerCost: 1,
    batteryLife: 0,
    maxLife: 10,
    incremented: false,
    WorkerAutomator: false,
    prestigeUnlocked: false,
    navUnlocked: false,
    upgradeUnlocked: false,
    prestiged: false,
    shop: {
        WorkerAutomatorBought: false,
        bought13: false,
        tier2Bought: false,
        bought22: false,
        bought23: false,
        bought31: false,
        bought32: false,
        bought33: false,
        bought41: false,
        bought43: false,
        bought111: false,
        bought112: false,
    }
}

//yes idk how to describe these
function incrementTotal() {
    return Math.pow((player.increment*player.incrementMultiplier),player.incrementExponent)
}
function superOnPrestige() {
    return Math.max(0, Math.floor(Decimal.logarithm((player.number/1e+20),1e+5)))
}
function producerMultiplier(producer){
    if (player.shop.bought111) {
        switch (producer) {
            case "w1":
                return Math.pow(1.01, player.workerBought)
            case "w2":
                return Math.pow(1.01, player.familyBought)
            case "w3":
                return Math.pow(1.01, player.houseBought)
        }
    } else { return 1 }
}
function energyMultiplier(){
    return (Math.pow(player.energy, 2)) + 1
}

//Extremely inefficient saving system, more so in saving.js holy fuck. Well anyways I have no idea how to make it better so it's gonna be that for a while.
function defaultData(){
    return{
        number: 0,
        superNumber: 0,
        energy: 0,
        increment: 1,
        incrementMultiplier: 1,
        incrementExponent: 1,
        worker: 0,
        workerBought: 0,
        family: 0,
        familyBought: 0,
        house: 0,
        houseBought: 0,
        workerCost: 10,
        familyCost: 10000,
        houseCost: 10000000,
        energizer: 0,
        energizerBought: 0,
        energizerCost: 1,
        batteryLife: 0,
        maxLife: 10,
        incremented: false,
        WorkerAutomator: false,
        prestigeUnlocked: false,
        navUnlocked: false,
        upgradeUnlocked: false,
        prestiged: false,
        shop: {
            WorkerAutomatorBought: false,
            bought13: false,
            tier2Bought: false,
            bought22: false,
            bought23: false,
            bought31: false,
            bought32: false,
            bought33: false,
            bought41: false,
            bought43: false,
            bought111: false,
            bought112: false,
        }
    }
}

//Happens when you click the button that says "Make the number go up." Fucker becomes useless like 10 seconds in the game so...
function goUp() {
    player.number += player.increment
    document.getElementById("number").innerHTML = "You have " + format(player.number, "scientific") + "."
    player.incremented = true
}

//tabs
function tab(tab){
    document.getElementById("increment").style.display = "none"
    document.getElementById("workers").style.display = "none"
    document.getElementById("options").style.display = "none"
    document.getElementById("upgrades").style.display = "none"
    document.getElementById(tab).style.display = "block"
    document.getElementById(tab).style.margin = "0 auto"
    document.getElementById(tab).style.textAlign = "center"
}
//the tabs in the upgrade tab
function upgradeTab(tab){
    document.getElementById("normalUpgrades").style.display = "none"
    document.getElementById("prestigeUpgrades").style.display = "none"
    document.getElementById(tab).style.display = "block"
    document.getElementById(tab).style.margin = "0 auto"
    document.getElementById(tab).style.textAlign = "center"
}

//buying producer shit idk
function buyWorker(){
    if(player.number >= player.workerCost) {
        player.number -= player.workerCost
        player.worker += 1
        player.workerCost *= 1.05
        player.workerBought += 1
        document.getElementById("workerCount").innerHTML = "No. of workers: " + format(player.worker, "scientific")
        document.getElementById("Workers1").innerHTML = "Cost: " + format(player.workerCost, "scientific")
    }
}

function buyFamily(){
    if(player.number >= player.familyCost) {
        player.number -= player.familyCost
        player.family += 1
        player.familyCost *= 10
        player.familyBought += 1
        document.getElementById("worker2Count").innerHTML = "No. of families: " + format(player.family, "scientific")
        document.getElementById("Workers2").innerHTML = "Cost: " + format(player.familyCost, "scientific")
    }
}

function buyHouse(){
    if(player.number >= player.houseCost) {
        player.number -= player.houseCost
        player.house += 1
        player.houseCost *= 100
        player.houseBought += 1
        document.getElementById("worker3Count").innerHTML = "No. of families: " + format(player.house, "scientific")
        document.getElementById("Workers3").innerHTML = "Cost: " + format(player.houseCost, "scientific")
    }
}

function buyEnergizer(){
    if(player.superNumber >= player.energizerCost) {
        player.superNumber -= player.energizerCost
        player.energizer += 1
        player.energizerCost *= 1.1
        player.energizerBought += 1
        document.getElementById("energizerCount").innerHTML = "No. of energizers: " + format(player.energizer, "scientific") + " Super"
        document.getElementById("energizers1").innerHTML = "Cost: " + format(player.energizerCost, "scientific")
    }
}

//Prestige thingy, probably extremely inefficient
function prestige(){
    if(player.number > 1e+25) {
        let keepOnPrestige = {
            superNumber: player.superNumber,
            WorkerAutomatorBought: player.shop.WorkerAutomatorBought,
            bought22: player.shop.bought22,
            bought32: player.shop.bought32,
            bought111: player.shop.bought111,
            bought112: player.shop.bought112,
        }
        player.superNumber = keepOnPrestige.superNumber
        player.superNumber += superOnPrestige()
        keepOnPrestige.superNumber = player.superNumber
        player = defaultData()
        player.superNumber = keepOnPrestige.superNumber
        player.shop.WorkerAutomatorBought = keepOnPrestige.WorkerAutomatorBought
        player.shop.bought22 = keepOnPrestige.bought22
        player.shop.bought32 = keepOnPrestige.bought32
        player.shop.bought111 = keepOnPrestige.bought111
        player.shop.bought112 = keepOnPrestige.bought112
        player.prestigeUnlocked = true
        player.navUnlocked = true
        player.upgradeUnlocked = true
        player.prestiged = true
        update()
    }
}

function rechargeBattery(){
    player.batteryLife = player.maxLife
}

//Number Formatting, stolen from Yhvr's guide kekw
function format(number, type) {
    let exponent = Math.floor(Math.log10(number))
    let mantissa = number / Math.pow(10, exponent)
    if (exponent < 3) return number.toFixed(2)
    if (type === "scientific") return mantissa.toFixed(2) + "e" + exponent
    if (type === "engineering") return (Math.pow(10, exponent % 3) * mantissa).toFixed(2) + "e" + (Math.floor(exponent / 3) * 3)
}

//Game Loop
var mainGameLoop = window.setInterval(function() {
    if(player.number >= 10 || player.navUnlocked){
        document.getElementById("nav").style.display = "block"
        player.navUnlocked = true
    }
    if(player.number >= 100 || player.upgradeUnlocked){
        document.getElementById("upgradeButton").style.display = "table-cell"
        player.upgradeUnlocked = true
    }
    if(player.number >= 1e+25 || player.prestigeUnlocked === true){
        player.prestigeUnlocked = true
        document.getElementById("prestigeBtn").style.display = "block"
    } else {
        document.getElementById("prestigeBtn").style.display = "none"
    }
    if(player.prestiged){
        document.getElementById("super").style.display = "block"
        document.getElementById("upNav").style.display = "table"
    }
    if(player.number >= player.workerCost){document.getElementById("Workers1").className = "tier1buttonafford"}
    else {document.getElementById("Workers1").className = "tier1button"}
    if(player.number >= player.familyCost){document.getElementById("Workers2").className = "tier1buttonafford"}
    else {document.getElementById("Workers2").className = "tier1button"}
    if(player.number >= player.houseCost){document.getElementById("Workers3").className = "tier1buttonafford"}
    else {document.getElementById("Workers3").className = "tier1button"}
    if(player.superNumber >= player.energizerCost){document.getElementById("energizers1").className = "tier2buttonafford"}
    else {document.getElementById("energizers1").className = "tier2button"}

    player.number = (Math.round((player.number + ((player.worker*incrementTotal()*producerMultiplier("w1")*energyMultiplier())/10))*10))/10
    player.worker = (Math.round((player.worker + ((player.family*incrementTotal()*producerMultiplier("w2")*energyMultiplier())/10))*10))/10
    player.family = (Math.round((player.family + ((player.house*incrementTotal()*producerMultiplier("w3")*energyMultiplier())/10))*10))/10
    if(player.shop.bought41){
        player.house = (Math.round((player.house + ((Decimal.logarithm(player.number, 1000)*incrementTotal()*producerMultiplier("w1")*energyMultiplier())/10))*10))/10
    }
    document.getElementById("workerCaption").innerHTML = "Your workers are increasing the number at a rate of " + format((incrementTotal()*player.worker*producerMultiplier("w1")*energyMultiplier()), "scientific") + "/s"
    document.getElementById("energyCaption").innerHTML = "You have " + format(player.energy, "scientific") + " energy, boosting production by " + format(energyMultiplier(),"scientific") + "x"
    document.getElementById("number").innerHTML = "You have " + format(player.number, "scientific") + "."
    document.getElementById("super").innerHTML = "You have <span style=\"color: rgb(0, 255, 0)\">" + format(player.superNumber, "scientific") + "</span> super."

    document.getElementById("prestigeBtn").innerHTML = "Reset for " + superOnPrestige() + " super."

    //workers
    document.getElementById("workerCount").innerHTML = "No. of workers: " + format(player.worker, "scientific")
    document.getElementById("worker2Count").innerHTML = "No. of families: " + format(player.family, "scientific")
    document.getElementById("worker3Count").innerHTML = "No. of houses: " + format(player.house, "scientific")
    document.getElementById("energizerCount").innerHTML = "No. of energizers: " + format(player.energizer, "scientific")

    player.batteryLife -= player.energizer/100
    if (player.batteryLife > 0){ player.energy += player.energizer/100 }
    document.getElementById("batteryLife").style.width = ((player.batteryLife/player.maxLife)*100) + "%"
}, 100)
