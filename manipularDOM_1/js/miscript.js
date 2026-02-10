window.onload=function(){
    //Declaro una variable que contenga el botoón
    let boton = document.getElementById("btnAgregar");
    let lista = document.getElementById("lista");
    
    //Abrimos la escucha para el evento click sobre el botón
    boton.addEventListener("click",agregarMensaje)
}

function agregarMensaje(){
        //Creamos un elemento de tipo li
        let li = document.createElement("li");
        
        //Añadimos contenido al li creado en el paso anterior
        li.textContent = "Nuevo mensaje añadido";

        //Insertamso el li en la lista
        lista.appendChild(li);

}