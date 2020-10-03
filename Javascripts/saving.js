function reset(){
    player = defaultData()
    localStorage.setItem("save", JSON.stringify(player));
}

function save(){
    localStorage.setItem("save", JSON.stringify(player));
}

var savegame = JSON.parse(localStorage.getItem("save"))

if (savegame !== null) {
    player = savegame
}