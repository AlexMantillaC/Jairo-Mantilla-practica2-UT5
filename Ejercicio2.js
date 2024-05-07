'use strict';
let contenedor = document.getElementById("container");
let parrafo
function Imprimir(l,i){
    parrafo = document.createElement("div");
    parrafo.textContent=l;
    if (i % 2 == 0) {
        parrafo.style.color='red';
    }
    contenedor.appendChild(parrafo)
}
function LeerMensajes(docXml){
    let lineas = docXml.split("\n");
    console.log(Array.isArray(lineas));
    
    for (let i = 0; i < lineas.length; i++) {
        setInterval(Imprimir,5000*i,lineas[i],i)
    }
    // for (let i of lineas) {
    //     setInterval(Imprimir,5000,i)
    // }
}

function loadLDocXml(fichero){
    console.log("Cargando desde la funcion");
    let http = new XMLHttpRequest();
    http.open('GET',fichero);
    http.send();
    http.addEventListener('load',()=>{
        if (http.status === 200) {
            console.log("Archivo Capturado satisfactoriamente.");
            LeerMensajes(http.responseText);
            //setInterval(LeerMensajes,5000,http.responseText);
        }
    })
}
loadLDocXml("mensajes.txt");


