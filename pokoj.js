console.log("pokoj")

//Modaly apky

// HINT button 
var modalHintLoz = document.getElementById('po-hint-modal');

// Get the button that opens the modal
var btnHintLoz = document.getElementById("po-hint");

// Get the <span> element that closes the modal
var spanHintLoz = document.getElementsByClassName("po--hint")[0];

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






//Modaly Kuchyně
// lampa
var ebModal1 = document.getElementById('po--modal_lampa');
var ebBtn1 = document.getElementById("po--link_lampa");
var ebSpan1 = document.getElementsByClassName("po--modal_lampa")[0];

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


// baterky
var ebModal2 = document.getElementById('po--modal_baterky');
var ebBtn2 = document.getElementById("po--link_baterky");
var ebSpan2 = document.getElementsByClassName("po--modal_baterky")[0];


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
var ebModal3 = document.getElementById('po--modal_pytlik');
var ebBtn3 = document.getElementById("po--link_pytlik");
var ebSpan3 = document.getElementsByClassName("po--modal_pytlik")[0];


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


// Plyšové hračky
var ebModal4 = document.getElementById('po--modal_plys');
var ebBtn4 = document.getElementById("po--link_plys");
var ebSpan4 = document.getElementsByClassName("po--modal_plys")[0];


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


// skrin
var ebModal5 = document.getElementById('po--modal_skrin');
var ebBtn5 = document.getElementById("po--link_skrin");
var ebSpan5 = document.getElementsByClassName("po--modal_skrin")[0];


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

// zásuvky
var ebModal7 = document.getElementById('po--modal_zasuvky');
var ebBtn7 = document.getElementById("po--link_zasuvky");
var ebSpan7 = document.getElementsByClassName("po--modal_zasuvky")[0];


ebBtn7.onclick = function() {
    ebModal7.style.display = "block";
}
ebSpan7.onclick = function() {
    ebModal7.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == ebModal5) {
        ebModal7.style.display = "none";
    }
}

/*počítání*/


var clicks = 0
function clickME(event) {
  clicks += 1

  document.getElementById("clicks").innerText = clicks // innerText is more suitable in this case

  console.log(clicks)

  if(clicks == 6) {
   document.getElementById('gohome').style.display = 'block'; 
   document.getElementById('zmiz').style.display = 'none';
   document.getElementById('po-hint').style.display = 'none';
   //
    sessionStorage.setItem("pokoj", "pokoj");

} else {
   document.getElementById('gohome').style.display = 'none';
}


}

document.querySelectorAll(`a`) // select all buttons
  .forEach( 
    el => el.addEventListener(`click`, clickME, {once: true})
  ) 
