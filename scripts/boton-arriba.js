function irArriba(pxPantalla){
    window.addEventListener('scroll', () =>{
        var scroll = document.documentElement.scrollTop;
        var botonArriba = document.getElementById("boton-irArriba");
        if(scroll>pxPantalla){
            botonArriba.style.opacity=1;
        }
        else{
            botonArriba.style.opacity=0;
        }
    })
}

irArriba(250);