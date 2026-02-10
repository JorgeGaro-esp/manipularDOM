window.onload=function(){
    //Declaro una variable que contenga el botoón
    let boton = document.getElementById("btnAgregar");
    let lista = document.getElementById("lista");
    
    
    //Abrimos la escucha para el evento click sobre el botón
    boton.addEventListener("click",agregarMensaje)
}

let contador = 1

function agregarMensaje(){

    
    //Creamos un elemento de tipo li
    let li = document.createElement("li");
        
    //Definimos el texto que va a contener el li creado
    li.textContent = "Mensaje número " + contador;

    let btnEliminar = document.createElement("button");
    btnEliminar.textContent="Eliminar"

    //Insertar boton dentro del li
    li.appendChild(btnEliminar);

    //Insertar li en la lista
    lista.appendChild(li);
    contador++

    //Funcin elminar
    btnEliminar.addEventListener("click",eliminarMensaje);
}

function eliminarMensaje(evento){
    //Boton pulsado
    let botonEliminar = evento.target;

    //Padre del boton
    let li = botonEliminar.parentElement;

    //Eliminar li
    li.remove();

}