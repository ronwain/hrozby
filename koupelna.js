console.log("koupelna")

//Modaly apky

// HINT button 
var modalHintLoz = document.getElementById('koupelna-hint-modal');

// Get the button that opens the modal
var btnHintLoz = document.getElementById("koupelna-hint");

// Get the <span> element that closes the modal
var spanHintLoz = document.getElementsByClassName("koupelna--hint")[0];

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







//Modaly Koupelna
// Karma
var ebModal1 = document.getElementById('koupelna--modal_karma');
var ebBtn1 = document.getElementById("koupelna--link_karma");
var ebSpan1 = document.getElementsByClassName("koupelna--modal_karma")[0];

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

// Vana
var ebModal2 = document.getElementById('koupelna--modal_vana');
var ebBtn2 = document.getElementById("koupelna--link_vana");
var ebSpan2 = document.getElementsByClassName("koupelna--modal_vana")[0];


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

// Plisen
var ebModal3 = document.getElementById('koupelna--modal_plisen');
var ebBtn3 = document.getElementById("koupelna--link_plisen");
var ebSpan3 = document.getElementsByClassName("koupelna--modal_plisen")[0];


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


// Chemikalie
var ebModal4 = document.getElementById('koupelna--modal_chemikalie');
var ebBtn4 = document.getElementById("koupelna--link_chemikalie");
var ebSpan4 = document.getElementsByClassName("koupelna--modal_chemikalie")[0];


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


// Podlaha
var ebModal5 = document.getElementById('koupelna--modal_podlaha');
var ebBtn5 = document.getElementById("koupelna--link_podlaha");
var ebSpan5 = document.getElementsByClassName("koupelna--modal_podlaha")[0];


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


// Pradlo
var ebModal6 = document.getElementById('koupelna--modal_pradlo');
var ebBtn6 = document.getElementById("koupelna--link_pradlo");
var ebSpan6 = document.getElementsByClassName("koupelna--modal_pradlo")[0];


ebBtn6.onclick = function() {
    ebModal6.style.display = "block";
}
ebSpan6.onclick = function() {
    ebModal6.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == ebModal5) {
        ebModal6.style.display = "none";
    }
}

/*počítání*/


var clicks = 0
function clickME(event) {
  clicks += 1

  document.getElementById("clicks").innerText = clicks 

//hvězda
  if(clicks == 6) {
   document.getElementById('gohome').style.display = 'block'; 
   document.getElementById('zmiz').style.display = 'none';
   document.getElementById('koupelna-hint').style.display = 'none';
    
   sessionStorage.setItem("koupelna", "koupelna");

} else {
   document.getElementById('gohome').style.display = 'none';
}


}

document.querySelectorAll(".btn") // select all buttons
  .forEach( 
    el => el.addEventListener(`click`, clickME, {once: true})
  ) 
