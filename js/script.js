/*section for scripts*/
function activeElement(idAttivo){
    var sezioni = document.getElementsByClassName('section');
    const attiva = document.getElementById(idAttivo);
    for(var i = 0; i < sezioni.length; i++){
        sezioni.classList.remove("active");
    }
    attiva.classList.add("active");
}