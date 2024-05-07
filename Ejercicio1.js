function gestionarFicheroXML(xmlDoc){
    let libreria = xmlDoc.querySelectorAll("libreria");
    let capa = document.querySelector("#contenido");
    console.log(libreria.length);

    let cadena = "";

    console.log(`Longitud: ${capa}`);
    for(let lib of libreria){
        cadena += "<div class='nomlibreria'>" + lib.querySelector("nombre").textContent + "</div>";
        cadena += "<div class='colum title'>Titulo</div>"+"<div class='colum title'>Autor</div>"+"<div class='colum title'>Editorial</div>"+"<div class='colum title'>Precio</div>";
        
        let libr = xmlDoc.querySelectorAll("libro");
        for (let i of libr) {
            cadena += "<div class='colum'>" + i.querySelector("titulo").textContent + "</div>";
            cadena += "<div class='colum'>" + i.querySelector("autor").textContent + "</div>";
            cadena += "<div class='colum'>" + i.querySelector("editorial").textContent + "</div>";
            cadena += "<div id='precio' class='colum'>" + i.querySelector("precio").textContent + "</div>";
        }
        cadena += "<div class='separador'>&nbsp;</div>";
        // for (let i=0; in libr) {
        //     cadena += "<div class='colum'>" + libr[key].querySelector("titulo").textContent + "</div>";
        //     cadena += "<div class='colum'>" + libr[key].querySelector("autor").textContent + "</div>";
        //     cadena += "<div class='colum'>" + libr[key].querySelector("editorial").textContent + "</div>";
        //     cadena += "<div id='precio' class='colum'>" + c.querySelector("precio").textContent + "</div>";
        // }
        
    }
    capa.innerHTML = cadena;
    //capa.style.border="2px solid black";
    //let elemento = document.getElementById("#precio");
    //elemento.style.backgroundColor="red";
    //elementos.style.border-style="solid";
    //capa.style.background="blue";
    //capa.style.align="center";
}


function loadLDocXml(fichero)
{
    let http = new XMLHttpRequest();
    http.open("GET", fichero);
    http.send();
    http.addEventListener('load', () => { 
        if(http.status === 200) {
                console.log(http.responseXML);
                gestionarFicheroXML(http.responseXML);
		}})
}

loadLDocXml("libros.xml")