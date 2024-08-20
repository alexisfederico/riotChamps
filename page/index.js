import champPositionDAO from "../model/dao/champPosition.js"

window.onload= async ()=>{

    let champs = await new champPositionDAO().getAll();
    console.log(champs);
    agregarEventos();
   
}


function agregarEventos(){
    let mapaBot = document.querySelector("#mapaBot");
    mapaBot.onclick = ()=>{
        mostrarCarril("Bot")

    }
}


function mostrarCarril(carril){
    let mapaBot = document.querySelector(".mapaBot");
   
    switch(carril){
        case "Bot":
            mapaBot.classList.add("activado");
        break;
    }
}