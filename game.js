const player = {
    number: 0,
    increment: 1,
    firstCost: 10,
    worker: 0,
    workerCost: 100,
    incremented: false
}

function goUp() {
    player.number += player.increment
    document.getElementById("number").innerHTML = "You have " + player.number + "."
    player.incremented = true
    if (player.incremented){
        document.getElementById("lol12").style.display = "block"
    }
}


function squarecrement(){
    if(player.number >= player.firstCost){
        player.number -= player.firstCost
        player.increment *= 2
        player.firstCost *= 3
        document.getElementById("squarecrementd").innerHTML = "Upgrade increment power <br> Cost: " + player.firstCost
        document.getElementById("lol12").innerHTML = `Your increment power is currently ${player.increment}.`
    }
}

function tab(tab){
    document.getElementById("increment").style.display = "none"
    document.getElementById("workers").style.display = "none"
    document.getElementById(tab).style.display = "inline-block"
}

function buyWorker(){
    if(player.number >= player.workerCost) {
        player.number -= player.workerCost
        player.worker += 1
        player.workerCost = Math.floor(player.workerCost * 1.05)
        document.getElementById("workerCount").innerHTML = "No. of workers: " + player.worker
        document.getElementById("Workers1").innerHTML = "Buy a Worker <br> Cost: " + player.workerCost
    }
}

var mainGameLoop = window.setInterval(function() {
    if(player.number >= 10){
        document.getElementById("squarecrementd").style.display = "inline-block"
    }
    if(player.number >= 100){
        document.getElementById("nav").style.display = "block"
    }
    player.number = (Math.round((player.number + ((player.worker*player.increment)/10))*10))/10
    document.getElementById("number").innerHTML = "You have " + player.number + "."
}, 100)
