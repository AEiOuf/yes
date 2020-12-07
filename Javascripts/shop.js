const desc = {
    bought: {
        s11: "Unlock the Worker Autobuyer <br> Bought!",
        s13: "Double the production of everything <br> Bought!",
        s21: "Unlock production of families <br> Bought!",
        s22: "Unlock the family Autobuyer <br> Bought!",
        s23: "Triple your production <br> Bought!",
        s31: "Unlock production of houses <br> Bought!",
        s32: "Unlock the house Autobuyer <br> Bought!",
        s33: "Raise production to the power of 2 <br> Bought!",
        s41: "Allow workers to produce houses (circle of life) <br> Bought!",
        s43: "Add 9 to production base <br> Bought!",
        a111: "Each producer bought will add a 1% multiplier to that producer <br> Bought!",
        a112: "Unlock a new set of workers <br> Bought!",
    },
    unbought: {
        s11: "Unlock the Worker Autobuyer <br> Cost: 1000",
        s13: "Double the production of everything <br> Cost: 500",
        s21: "Unlock production of families <br> Cost: 1e4",
        s22: "Unlock the family Autobuyer <br> Cost: 1e5",
        s23: "Triple your production <br> Cost: 1e4",
        s31: "Unlock production of houses <br> Cost: 1e7",
        s32: "Unlock the house Autobuyer <br> Cost: 1e12",
        s33: "Raise production to the power of 2 <br> Cost: 1e5",
        s41: "Allow workers to produce houses (circle of life) <br> Cost: 1e16",
        s43: "Add 9 to production base <br> Cost: 1e10",
        a111: "Each producer bought will add a 1% multiplier to that producer <br> Cost: 1 Super",
        a112: "Unlock a new set of workers <br> Cost: 3 Super",
    }
}

function buy(id){
    switch (id) {
        case "11":
            if(document.getElementById("11").className === "unbought") {
                if (player.number >= 1000) {
                    player.number -= 1000
                    player.shop.WorkerAutomatorBought = true
                    document.getElementById("11").innerHTML = desc.bought.s11
                    document.getElementById("11").className = "bought"
                    document.getElementById("workerAutomator").style.display = "table-cell"
                }
            }
            break;
        case "13":
            if(document.getElementById("13").className === "unbought") {
                if (player.number >= 500) {
                    player.number -= 500
                    player.incrementMultiplier *= 2
                    player.shop.bought13 = true
                    document.getElementById("13").innerHTML = desc.bought.s13
                    document.getElementById("13").className = "bought"
                }
            }
            break;
        case "21":
            if(document.getElementById("21").className === "unbought") {
                if (player.number >= 10000) {
                    player.number -= 10000
                    player.shop.tier2Bought = true
                    document.getElementById("21").innerHTML = desc.bought.s21
                    document.getElementById("21").className = "bought"
                    document.getElementById("family").style.display = "table-row"
                }
            }
            break;
        case "22":
            if(document.getElementById("22").className === "unbought") {
                if (player.number >= 100000) {
                    player.number -= 100000
                    player.shop.bought22 = true
                    document.getElementById("22").innerHTML = desc.bought.s22
                    document.getElementById("22").className = "bought"
                    document.getElementById("worker2Automator").style.display = "table-cell"
                }
            }
            break;
        case "23":
            if(document.getElementById("23").className === "unbought") {
                if (player.number >= 10000) {
                    player.number -= 10000
                    player.incrementMultiplier *= 3
                    player.shop.bought23 = true
                    document.getElementById("23").innerHTML = desc.bought.s23
                    document.getElementById("23").className = "bought"
                }
            }
            break;
        case "31":
            if(document.getElementById("31").className === "unbought") {
                if (player.number >= 10000000) {
                    player.number -= 10000000
                    player.shop.bought31 = true
                    document.getElementById("31").innerHTML = desc.bought.s31
                    document.getElementById("31").className = "bought"
                    document.getElementById("house").style.display = "table-row"
                }
            }
            break;
        case "32":
            if(document.getElementById("32").className === "unbought") {
                if (player.number >= 1000000000000) {
                    player.number -= 1000000000000
                    player.shop.bought32 = true
                    document.getElementById("32").innerHTML = desc.bought.s32
                    document.getElementById("32").className = "bought"
                    document.getElementById("worker3Automator").style.display = "table-cell"
                }
            }
            break;
        case "33":
            if(document.getElementById("33").className === "unbought") {
                if (player.number >= 100000) {
                    player.number -= 100000
                    player.incrementExponent *= 2
                    player.shop.bought33 = true
                    document.getElementById("33").innerHTML = desc.bought.s33
                    document.getElementById("33").className = "bought"
                }
            }
            break;
        case "41":
            if(document.getElementById("41").className === "unbought") {
                if (player.number >= 1e+16) {
                    player.number -= 1e+16
                    player.shop.bought41 = true
                    document.getElementById("41").innerHTML = desc.bought.s41
                    document.getElementById("41").className = "bought"
                }
            }
            break;
        case "43":
            if(document.getElementById("43").className === "unbought") {
                if (player.number >= 10000000000) {
                    player.number -= 10000000000
                    player.increment += 9
                    player.shop.bought43 = true
                    document.getElementById("43").innerHTML = desc.bought.s43
                    document.getElementById("43").className = "bought"
                }
            }
            break;
        case "111":
            if(document.getElementById("111").className === "unbought2") {
                if (player.superNumber >= 1) {
                    player.superNumber -= 1
                    player.shop.bought111 = true
                    document.getElementById("111").innerHTML = desc.bought.a111
                    document.getElementById("111").className = "bought2"
                }
            }
            break;
        case "112":
            if(document.getElementById("112").className === "unbought2") {
                if (player.superNumber >= 3) {
                    player.superNumber -= 3
                    player.shop.bought112 = true
                    document.getElementById("112").innerHTML = desc.bought.a112
                    document.getElementById("112").className = "bought2"
                    document.getElementById("energizer").style.display = "table"
                }
            }
    }
}