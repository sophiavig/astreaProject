/*section for scripts*/
function activeElement(idAttivo){
    var sezioni = document.getElementsByClassName('section');
    const attiva = document.getElementById(idAttivo);
    for(var i = 0; i < sezioni.length; i++){
        sezioni.classList.remove("active");
    }
    attiva.classList.add("active");
}
function runOnScroll() {
    let head = document.getElementsByTagName("header")[0];   
    if (window.scrollY >= 100) {
        head.style.backgroundColor = "#0E0C1C";        
    } else {
        head.style.backgroundColor = "transparent";
    }    
};
window.addEventListener("scroll", runOnScroll);

function closeMenu() {
    let menuEl = document.getElementsByClassName("show")[0];
    menuEl.classList.remove("show");
}