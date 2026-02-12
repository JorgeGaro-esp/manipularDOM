window.onload = function(){
    let boton = document.getElementById("btnColor");
    let texto = document.getElementById("texto");
    
    boton.addEventListener("click" ,function(){
        texto.classList.add("destacado")
    });
}