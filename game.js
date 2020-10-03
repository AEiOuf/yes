var player = {
    number: 0,
    increment: 1,
    firstCost: 10,
    worker: 0,
    workerCost: 100,
    incremented: false
}

function goUp() {
    player.number += player.increment
    document.getElementById("number").innerHTML = "You have " + format(player.number, "scientific") + "."
    player.incremented = true
}


function squarecrement(){
    if(player.number >= player.firstCost){
        player.number -= player.firstCost
        player.increment *= 2
        player.firstCost *= 3
        document.getElementById("squarecrementd").innerHTML = "Upgrade increment power <br> Cost: " + player.firstCost
        document.getElementById("lol12").innerHTML = "Your increment power is currently " + format(player.increment, "scientific") + "."
    }
}

function tab(tab){
    document.getElementById("increment").style.display = "none"
    document.getElementById("workers").style.display = "none"
    document.getElementById("options").style.display = "none"
    document.getElementById("upgrades").style.display = "none"
    document.getElementById(tab).style.display = "inline-block"
}

function buyWorker(){
    if(player.number >= player.workerCost) {
        player.number -= player.workerCost
        player.worker += 1
        player.workerCost = Math.floor(player.workerCost * 1.05)
        document.getElementById("workerCount").innerHTML = "No. of workers: " + player.worker
        document.getElementById("Workers1").innerHTML = "Cost: " + player.workerCost
    }
}

function defaultData(){
    return{
        number: 0,
        increment: 1,
        firstCost: 10,
        worker: 0,
        workerCost: 100,
        incremented: false
    }
}

function format(number, type) {
    let exponent = Math.floor(Math.log10(number))
    let mantissa = number / Math.pow(10, exponent)
    if (exponent < 3) return number.toFixed(1)
    if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent
    if (type == "engineering") return (Math.pow(10, exponent % 3) * mantissa).toFixed(2) + "e" + (Math.floor(exponent / 3) * 3)
}

var mainGameLoop = window.setInterval(function() {
    if(player.number >= 10){
        document.getElementById("squarecrementd").style.display = "inline-block"
    }
    if(player.number >= 100){
        document.getElementById("nav").style.display = "block"
    }
    if(player.number >= 1000){
        document.getElementById("upgradeButton").style.display = "inline-block"
    }
    if(player.number >= player.workerCost){
        document.getElementById("Workers1").style.backgroundColor = "gray"
    } else {
        document.getElementById("Workers1").style.backgroundColor = "black"
    }
    if (player.incremented){
        document.getElementById("lol12").style.display = "block"
    }
    player.number = (Math.round((player.number + ((player.worker*player.increment)/10))*10))/10
    document.getElementById("workerCaption").innerHTML = "Your workers are increasing the number at a rate of " + format((player.increment*player.worker), "scientific") + "/s"
    document.getElementById("number").innerHTML = "You have " + format(player.number, "scientific") + "."
    document.getElementById("lol12").innerHTML = "Your increment power is currently " + format(player.increment, "scientific") + "."
}, 100)
