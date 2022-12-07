
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

// Rules modal
var modal = document.getElementById('rulesModal');
var closeBtn = document.getElementsByClassName("js-close")[0];

closeBtn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
    localStorage.setItem('modalPravidla', true);
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        localStorage.setItem('modalPravidla', true);
    }
}


if(localStorage.getItem('modalPravidla')) {
   modal.classList.add('hide');
}
