window.onload = function(){
    let imagenes = document.querySelectorAll("img");
    

    imagenes.forEach(img =>{
        // Guardamos la ruta original en un atributo personalizado 
        img.dataset.original = img.src;
        img.addEventListener("mouseover",cambiarImagen) 
        img.addEventListener("mouseout", restaurarImagen);
    });
}

function cambiarImagen(evento){
    evento.target.src = "img/todos.jpg";
}

//RETO: Volver a la imagen original

function restaurarImagen(evento){ 
    evento.target.src = evento.target.dataset.original; 
}