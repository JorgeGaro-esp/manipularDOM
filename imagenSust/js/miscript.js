let imagen
window.onload=function(){
    imagen=document.getElementById("imgsust");
    imagen.addEventListener("mouseover",ratonEntra);
    imagen.addEventListener("mouseout",ratonSale);

}

function ratonEntra(){
    imagen.src = "img/imagen2.png"
}

function ratonSale(){
    imagen.src = "img/imagen1.png"
}