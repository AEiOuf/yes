var gameData = {
    number: 0,
    incrementPerClick: 1,
    incrementCost: 10
  }

function increment() {
    gameData.number += gameData.incrementPerClick
    document.getElementById("numberThing").innerHTML = gameData.number
}
function buyIncrementIncrementer(){
    if (gameData.number >= gameData.incrementCost){
        gameData.number -= gameData.incrementCost
        gameData.incrementCost *= 5
        gameData.incrementPerClick *= 3
        document.getElementById("numberThing").innerHTML = gameData.number
        document.getElementById("incrementIncrementerThing").innerHTML = "Make number go up even more | Cost: " + gameData.incrementCost
    }
}