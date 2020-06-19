const descripciones = document.getElementById('descripciones');
const cuadro1 = document.getElementById('training-description');
const cuadro2 = document.getElementById('desarrollo-description');
const cuadro3 = document.getElementById('contacto-description');

// ------------------------------------------------------------------------------->

window.onload = descripciones.style.display = "none";
window.onload = cuadro1.style.display = "none";
window.onload = cuadro2.style.display = "none";
window.onload = cuadro3.style.display = "none";

// ------------------------------------------------------------------------------->
// DIV's



document.getElementById('training').addEventListener("click", function () {

    descripciones.style.display = "block";
    cuadro2.style.display = "none";
    cuadro3.style.display = "none";

    if (cuadro1.style.display == "block"){
        return cuadro1.style.display = "none";
    } else {
        return cuadro1.style.display = "block";
    }
});


document.getElementById('training-ocultar').addEventListener ("click", function() {
    descripciones.style.display = "none";
    return cuadro1.style.display = "none";
});






document.getElementById('desarrollo').addEventListener("click", function () {

    descripciones.style.display = "block";
    cuadro1.style.display = "none";
    cuadro3.style.display = "none";

    if (cuadro2.style.display == "block"){
        return cuadro2.style.display = "none";
    } else {
        return cuadro2.style.display = "block";
    }
});


document.getElementById('desarrollo-ocultar').addEventListener ("click", function() {
    descripciones.style.display = "none";
    return cuadro2.style.display = "none";
});






document.getElementById('contacto').addEventListener("click", function () {
    
    descripciones.style.display = "block";
    cuadro1.style.display = "none";
    cuadro2.style.display = "none";

    if (cuadro3.style.display == "block"){
        return cuadro3.style.display = "none";
    } else {
        return cuadro3.style.display = "block";
    }
});


document.getElementById('contacto-ocultar').addEventListener ("click", function() {
    descripciones.style.display = "none";
    return cuadro3.style.display = "none";
});
