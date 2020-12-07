function reset(){
    player = defaultData()
    localStorage.setItem("save", JSON.stringify(player));
    update()
    document.getElementById("nav").style.display = "none"
    document.getElementById("upgradeButton").style.display = "none"
    document.getElementById("workerAutomator").style.display = "none"
    document.getElementById("family").style.display = "none"
    document.getElementById("super").style.display = "none"
    document.getElementById("upNav").style.display = "none"
    upgradeTab("normalUpgrades")
    tab("increment")
}

function save(){
    localStorage.setItem("save", JSON.stringify(player));
}

function update(){
    //workers
    document.getElementById("workerCount").innerHTML = "No. of workers: " + format(player.worker, "scientific")
    document.getElementById("Workers1").innerHTML = "Cost: " + format(player.workerCost, "scientific")
    document.getElementById("worker2Count").innerHTML = "No. of families: " + format(player.family, "scientific")
    document.getElementById("Workers2").innerHTML = "Cost: " + format(player.familyCost, "scientific")
    document.getElementById("worker3Count").innerHTML = "No. of houses: " + format(player.house, "scientific")
    document.getElementById("Workers3").innerHTML = "Cost: " + format(player.houseCost, "scientific")
    //shop
    if(player.WorkerAutomator){
        document.getElementById("workerAutomator").innerHTML = "Auto: On"
        document.getElementById("workerAutomator").className = "automatorOn"
    } else{
        document.getElementById("workerAutomator").innerHTML = "Auto: Off"
        document.getElementById("workerAutomator").className = "automatorOff"
    }
    if(player.shop.tier2Bought){
        document.getElementById("21").innerHTML = desc.bought.s21
        document.getElementById("21").className = "bought"
        document.getElementById("family").style.display = "table-row"
    } else{
        document.getElementById("21").innerHTML = desc.unbought.s21
        document.getElementById("21").className = "unbought"
        document.getElementById("family").style.display = "none"
    }
    if(player.shop.WorkerAutomatorBought){
        document.getElementById("11").innerHTML = desc.bought.s11
        document.getElementById("11").className = "bought"
        document.getElementById("workerAutomator").style.display = "table-cell"
    } else{
        document.getElementById("11").innerHTML = desc.unbought.s11
        document.getElementById("11").className = "unbought"
    }
    if(player.shop.bought13){
        document.getElementById("13").innerHTML = desc.bought.s13
        document.getElementById("13").className = "bought"
    } else{
        document.getElementById("13").innerHTML = desc.unbought.s13
        document.getElementById("13").className = "unbought"
    }
    if(player.shop.bought22){
        document.getElementById("22").innerHTML = desc.bought.s22
        document.getElementById("22").className = "bought"
        document.getElementById("worker2Automator").style.display = "table-cell"
    } else{
        document.getElementById("22").innerHTML = desc.unbought.s22
        document.getElementById("22").className = "unbought"
        document.getElementById("worker2Automator").style.display = "none"
    }
    if(player.shop.bought23){
        document.getElementById("23").innerHTML = desc.bought.s23
        document.getElementById("23").className = "bought"
    } else{
        document.getElementById("23").innerHTML = desc.unbought.s23
        document.getElementById("23").className = "unbought"
    }
    if(player.shop.bought31){
        document.getElementById("31").innerHTML = desc.bought.s31
        document.getElementById("31").className = "bought"
        document.getElementById("house").style.display = "table-row"
    } else{
        document.getElementById("31").innerHTML = desc.unbought.s31
        document.getElementById("31").className = "unbought"
        document.getElementById("house").style.display = "none"
    }
    if(player.shop.bought32){
        document.getElementById("32").innerHTML = desc.bought.s32
        document.getElementById("32").className = "bought"
        document.getElementById("worker3Automator").style.display = "table-cell"
    } else{
        document.getElementById("32").innerHTML = desc.unbought.s32
        document.getElementById("32").className = "unbought"
        document.getElementById("worker3Automator").style.display = "none"
    }
    if(player.shop.bought33){
        document.getElementById("33").innerHTML = desc.bought.s33
        document.getElementById("33").className = "bought"
    } else{
        document.getElementById("33").innerHTML = desc.unbought.s33
        document.getElementById("33").className = "unbought"
    }
    if(player.shop.bought41){
        document.getElementById("41").innerHTML = desc.bought.s41
        document.getElementById("41").className = "bought"
    } else{
        document.getElementById("41").innerHTML = desc.unbought.s41
        document.getElementById("41").className = "unbought"
    }
    if(player.shop.bought43){
        document.getElementById("43").innerHTML = desc.bought.s43
        document.getElementById("43").className = "bought"
    } else{
        document.getElementById("43").innerHTML = desc.unbought.s43
        document.getElementById("43").className = "unbought"
    }
    if(player.shop.bought111){
        document.getElementById("111").innerHTML = desc.bought.a111
        document.getElementById("111").className = "bought2"
    } else{
        document.getElementById("111").innerHTML = desc.unbought.a111
        document.getElementById("111").className = "unbought2"
    }
    if(player.shop.bought112){
        document.getElementById("112").innerHTML = desc.bought.a112
        document.getElementById("112").className = "bought2"
        document.getElementById("energizer").style.display = "table"
    } else{
        document.getElementById("112").innerHTML = desc.unbought.a112
        document.getElementById("112").className = "unbought2"
    }
}
function check() {
    if (player.number === undefined) {
        player.number = 0
    }
    if (player.superNumber === undefined) {
        player.superNumber = 0
    }
    if (player.energy === undefined) {
        player.energy = 0
    }
    if (player.increment === undefined) {
        player.increment = 1
    }
    if (player.incrementMultiplier === undefined) {
        player.incrementMultiplier = 1
    }
    if (player.incrementExponent === undefined) {
        player.incrementExponent = 1
    }
    if (player.worker === undefined) {
        player.worker = 0
    }
    if (player.workerBought === undefined) {
        player.workerBought = 0
    }
    if (player.family === undefined) {
        player.family = 0
    }
    if (player.familyBought === undefined) {
        player.familyBought = 0
    }
    if (player.house === undefined) {
        player.house = 0
    }
    if (player.houseBought === undefined) {
        player.houseBought = 0
    }
    if (player.workerCost === undefined) {
        player.workerCost = 10
    }
    if (player.familyCost === undefined) {
        player.familyCost = 10000
    }
    if (player.houseCost === undefined) {
        player.houseCost = 10000000
    }
    if (player.energizer === undefined) {
        player.energizer = 0
    }
    if (player.energizerBought === undefined) {
        player.energizerBought = 0
    }
    if (player.energizerCost === undefined) {
        player.energizerCost = 1
    }
    if (player.batteryLife === undefined) {
        player.batteryLife = 0
    }
    if (player.maxLife === undefined) {
        player.maxLife = 10
    }
    if (player.incremented === undefined) {
        player.incremented = false
    }
    if (player.WorkerAutomator === undefined) {
        player.WorkerAutomator = false
    }
    if (player.prestigeUnlocked === undefined) {
        player.prestigeUnlocked = false
    }
    if (player.navUnlocked === undefined) {
        player.navUnlocked = false
    }
    if (player.upgradeUnlocked === undefined) {
        player.upgradeUnlocked = false
    }
    if (player.prestiged === undefined) {
        player.prestiged = false
    }
    if (player.shop.WorkerAutomatorBought === undefined) {
        player.shop.WorkerAutomatorBought = false
    }
    if (player.shop.bought13 === undefined) {
        player.shop.bought13 = false
    }
    if (player.shop.tier2Bought === undefined) {
        player.shop.tier2Bought = false
    }
    if (player.shop.bought22 === undefined) {
        player.shop.bought22 = false
    }
    if (player.shop.bought23 === undefined) {
        player.shop.bought23 = false
    }
    if (player.shop.bought31 === undefined) {
        player.shop.bought31 = false
    }
    if (player.shop.bought32 === undefined) {
        player.shop.bought32 = false
    }
    if (player.shop.bought33 === undefined) {
        player.shop.bought33 = false
    }
    if (player.shop.bought41 === undefined) {
        player.shop.bought41 = false
    }
    if (player.shop.bought43 === undefined) {
        player.shop.bought43 = false
    }
    if (player.shop.bought111 === undefined) {
        player.shop.bought111 = false
    }
    if (player.shop.bought112 === undefined) {
        player.shop.bought112 = false
    }
}
var savegame = JSON.parse(localStorage.getItem("save"))

if (savegame !== null) {
    player = savegame
    update()
    check()
}

var saveGameLoop = window.setInterval(function (){
    save()
}, 15000)