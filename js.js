let cacher = document.getElementById("cacher")
let double=document.querySelector(".double")
let forme=document.querySelector(".forme")
//let ferme=document.querySelector(".fas fa-times")
let menu=document.getElementById("menup")

double.addEventListener('mouseover',()=>{
        cacher.style.display="block"
})
double.addEventListener("mouseout",()=>{
    cacher.style.display="none"
})
//fonction du menu
function toggleMenu() {
    forme.classList.add('active')
    cacher.style.display="block"
    menu.style.display="none"
}

function fermer(){
    forme.classList.remove('active')
    cacher.style.display="none"
    menu.style.display="block"
}