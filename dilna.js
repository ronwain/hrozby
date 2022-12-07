console.log("dilna")

//Modaly apky

// HINT button 
var modalHintLoz = document.getElementById('di-hint-modal');

// Get the button that opens the modal
var btnHintLoz = document.getElementById("di-hint");

// Get the <span> element that closes the modal
var spanHintLoz = document.getElementsByClassName("di--hint")[0];

// When the user clicks the button, open the modal 
btnHintLoz.onclick = function() {
  modalHintLoz.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanHintLoz.onclick = function() {
    modalHintLoz.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalHintLoz) {
      modalHintLoz.style.display = "none";
    }
}







//Modaly Dílna
// Roura
var ebModal1 = document.getElementById('di--modal_roura');
var ebBtn1 = document.getElementById("di--link_roura");
var ebSpan1 = document.getElementsByClassName("di--modal_roura")[0];

ebBtn1.onclick = function() {
    ebModal1.style.display = "block";
}
ebSpan1.onclick = function() {
    ebModal1.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == ebModal1) {
        ebModal1.style.display = "none";
    }
}


// Výpary
var ebModal2 = document.getElementById('di--modal_vypary');
var ebBtn2 = document.getElementById("di--link_vypary");
var ebSpan2 = document.getElementsByClassName("di--modal_vypary")[0];


ebBtn2.onclick = function() {
    ebModal2.style.display = "block";
}
ebSpan2.onclick = function() {
    ebModal2.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == ebModal2) {
        ebModal2.style.display = "none";
    }
}

// Spalování
var ebModal3 = document.getElementById('di--modal_pan');
var ebBtn3 = document.getElementById("di--link_pan");
var ebSpan3 = document.getElementsByClassName("di--modal_pan")[0];


ebBtn3.onclick = function() {
    ebModal3.style.display = "block";
}
ebSpan3.onclick = function() {
    ebModal3.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == ebModal3) {
        ebModal3.style.display = "none";
    }
}


// Bojler
var ebModal4 = document.getElementById('di--modal_bojler');
var ebBtn4 = document.getElementById("di--link_bojler");
var ebSpan4 = document.getElementsByClassName("di--modal_bojler")[0];


ebBtn4.onclick = function() {
    ebModal4.style.display = "block";
}
ebSpan4.onclick = function() {
    ebModal4.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == ebModal4) {
        ebModal4.style.display = "none";
    }
}


// Cigareta
var ebModal5 = document.getElementById('di--modal_cigareta');
var ebBtn5 = document.getElementById("di--link_cigareta");
var ebSpan5 = document.getElementsByClassName("di--modal_cigareta")[0];


ebBtn5.onclick = function() {
    ebModal5.style.display = "block";
}
ebSpan5.onclick = function() {
    ebModal5.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == ebModal5) {
        ebModal5.style.display = "none";
    }
}


/*počítání*/


var clicks = 0
function clickME(event) {
  clicks += 1

  document.getElementById("clicks").innerText = clicks // innerText is more suitable in this case

  console.log(clicks)

  if(clicks == 5) {
   document.getElementById('gohome').style.display = 'block'; 
   document.getElementById('zmiz').style.display = 'none';
   document.getElementById('di-hint').style.display = 'none';
 
    sessionStorage.setItem("dilna", "dilna");



} else {
   document.getElementById('gohome').style.display = 'none';
}


}

document.querySelectorAll(".btn") // select all buttons
  .forEach( 
    el => el.addEventListener(`click`, clickME, {once: true})
  ) 
