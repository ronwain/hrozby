console.log("puda")

//Modaly apky

// HINT button 
var modalHintLoz = document.getElementById('pu-hint-modal');

// Get the button that opens the modal
var btnHintLoz = document.getElementById("pu-hint");

// Get the <span> element that closes the modal
var spanHintLoz = document.getElementsByClassName("pu--hint")[0];

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







//Modaly půda
// Mys
var ebModal1 = document.getElementById('pu--modal_mys');
var ebBtn1 = document.getElementById("pu--link_mys");
var ebSpan1 = document.getElementsByClassName("pu--modal_mys")[0];

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

// holub
var ebModal2 = document.getElementById('pu--modal_holub');
var ebBtn2 = document.getElementById("pu--link_holub");
var ebSpan2 = document.getElementsByClassName("pu--modal_holub")[0];


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

// Odpad
var ebModal3 = document.getElementById('pu--modal_bordel');
var ebBtn3 = document.getElementById("pu--link_bordel");
var ebSpan3 = document.getElementsByClassName("pu--modal_bordel")[0];


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


// díra
var ebModal4 = document.getElementById('pu--modal_dira');
var ebBtn4 = document.getElementById("pu--link_dira");
var ebSpan4 = document.getElementsByClassName("pu--modal_dira")[0];


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


/*počítání*/


var clicks = 0
function clickME(event) {
  clicks += 1

  document.getElementById("clicks").innerText = clicks // innerText is more suitable in this case

  console.log(clicks)

  if(clicks == 4) {
   document.getElementById('gohome').style.display = 'block'; 
   document.getElementById('zmiz').style.display = 'none';
   document.getElementById('pu-hint').style.display = 'none';

   sessionStorage.setItem("puda", "puda");

} else {
   document.getElementById('gohome').style.display = 'none';
}


}

document.querySelectorAll(`a`) // select all buttons
  .forEach( 
    el => el.addEventListener(`click`, clickME, {once: true})
  ) 
