
let storage = ["koupelna", "kuchyne", "obyvak"];

storage.map((item) => {
  console.log(item);
});


if(sessionStorage.getItem("obyvak") === null){   
}else{
   var ukaz = document.getElementById("star_obyvak");
   ukaz.classList.add("svit");
   ukaz.classList.remove("nesvit")
}

if(sessionStorage.getItem("kuchyne") === null){
}else{
   var ukaz = document.getElementById("star_kuchyne");
   ukaz.classList.add("svit");
   ukaz.classList.remove("nesvit")
}

if(sessionStorage.getItem("dilna") === null){
}else{
   var ukaz = document.getElementById("star_dilna");
   ukaz.classList.add("svit");
   ukaz.classList.remove("nesvit")
}

if(sessionStorage.getItem("loznice") === null){
}else{
   var ukaz = document.getElementById("star_loznice");
   ukaz.classList.add("svit");
   ukaz.classList.remove("nesvit")
}

if(sessionStorage.getItem("okoli") === null){
}else{
   var ukaz = document.getElementById("star_okoli");
   ukaz.classList.add("svit");
   ukaz.classList.remove("nesvit")
}

if(sessionStorage.getItem("pokoj") === null){
}else{
   var ukaz = document.getElementById("star_pokoj");
   ukaz.classList.add("svit");
   ukaz.classList.remove("nesvit")
}

if(sessionStorage.getItem("puda") === null){
}else{
   var ukaz = document.getElementById("star_puda");
   ukaz.classList.add("svit");
   ukaz.classList.remove("nesvit")
}

if(sessionStorage.getItem("koupelna") === null){
}else{
   var ukaz = document.getElementById("star_koupelna");
   ukaz.classList.add("svit");
   ukaz.classList.remove("nesvit")
}



if (sessionStorage.getItem("dilna") && sessionStorage.getItem("puda") && sessionStorage.getItem("loznice") && sessionStorage.getItem("obyvak") && sessionStorage.getItem("okoli") && sessionStorage.getItem("pokoj") && sessionStorage.getItem("kuchyne")  && sessionStorage.getItem("koupelna")) {
    console.log("prasarna");
    var modalHintLoz = document.getElementById('obyvak-hint-modal');
    var firework = document.getElementById('fire');
    modalHintLoz.style.display = "block";
    firework.style.display = "block";


} else {
    console.log("nope")
}

// Kontrola localStorage -> projetí všech místností podle toho přirazení class
// pole: https://codepen.io/Matty06/pen/bGKxNqX?editors=1111 s tím dál pracovat pomocí metod .map .forEach a podle toho přiřazovat classy 

  
   


/*


   const open_btn = document.querySelector('.open-btn')
   const close_btn = document.querySelector('.close-btn')
   const nav = document.querySelectorAll('.nav')
   
   open_btn.addEventListener('click', () => {
       nav.forEach(nav_el => nav_el.classList.add('visible'))
   })
   
   close_btn.addEventListener('click', () => {
       nav.forEach(nav_el => nav_el.classList.remove('visible'))
   })

   */

