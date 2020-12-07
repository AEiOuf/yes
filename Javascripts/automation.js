function toggleWorkerAutomator(type){
    switch (type){
        case "w1":
            if (player.WorkerAutomator) {
                player.WorkerAutomator = false
                document.getElementById("workerAutomator").innerHTML = "Auto: Off"
                document.getElementById("workerAutomator").className = "automatorOff"
            } else {
                player.WorkerAutomator = true
                document.getElementById("workerAutomator").innerHTML = "Auto: On"
                document.getElementById("workerAutomator").className = "automatorOn"
            }
            break;
        case "w2":
            if (player.FamilyAutomator) {
                player.FamilyAutomator = false
                document.getElementById("worker2Automator").innerHTML = "Auto: Off"
                document.getElementById("worker2Automator").className = "automatorOff"
            } else {
                player.FamilyAutomator = true
                document.getElementById("worker2Automator").innerHTML = "Auto: On"
                document.getElementById("worker2Automator").className = "automatorOn"
            }
            break;
        case "w3":
            if (player.HouseAutomator) {
                player.HouseAutomator = false
                document.getElementById("worker3Automator").innerHTML = "Auto: Off"
                document.getElementById("worker3Automator").className = "automatorOff"
            } else {
                player.HouseAutomator = true
                document.getElementById("worker3Automator").innerHTML = "Auto: On"
                document.getElementById("worker3Automator").className = "automatorOn"
            }
    }
}



var automationLoop = window.setInterval(function () {
    if(player.shop.WorkerAutomatorBought){
        if(player.WorkerAutomator) { buyWorker() }
    }
    if (player.shop.bought22) {
        if (player.FamilyAutomator) { buyFamily() }
    }
    if (player.shop.bought32) {
        if (player.HouseAutomator) { buyHouse() }
    }
}, 50)