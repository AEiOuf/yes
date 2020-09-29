var player = {
    number: 0,
    increment: 1,
    firstCost: 10,
    incremented: false
}

function goUp() {
    player.number += player.increment
    document.getElementById("number").innerHTML = "You have " + player.number + "."
    player.incremented = true
    if (player.incremented){
        document.getElementById("lol").style.display = "block"
    }
}


function squarecrement(){
    if(player.number >= player.firstCost){
        player.number -= player.firstCost
        player.increment *= 2
        player.firstCost *= 3
        document.getElementById("squarecrementd").innerHTML = "Upgrade increment power | Cost: " + player.firstCost
        document.getElementById("lol12").innerHTML = `Your increment power is currently ${player.increment}.`
    }
}

var mainGameLoop = window.setInterval(function() {
    if(player.number >= 10){
        document.getElementById("lol2").style.display = "block"
    }
    document.getElementById("number").innerHTML = "You have " + player.number + "."
}, 100)
