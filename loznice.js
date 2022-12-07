console.log("loznice")

//Modaly apky

// HINT button 
var modalHintLoz = document.getElementById('lo-hint-modal');

// Get the button that opens the modal
var btnHintLoz = document.getElementById("lo-hint");

// Get the <span> element that closes the modal
var spanHintLoz = document.getElementsByClassName("lo--hint")[0];

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
// Moly
var ebModal1 = document.getElementById('lo--modal_kytky');
var ebBtn1 = document.getElementById("lo--link_kytky");
var ebSpan1 = document.getElementsByClassName("lo--modal_kytky")[0];

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

// Roztoci
var ebModal2 = document.getElementById('lo--modal_roztoci');
var ebBtn2 = document.getElementById("lo--link_roztoci");
var ebSpan2 = document.getElementsByClassName("lo--modal_roztoci")[0];


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

// Štnice
var ebModal3 = document.getElementById('lo--modal_stenice');
var ebBtn3 = document.getElementById("lo--link_stenice");
var ebSpan3 = document.getElementsByClassName("lo--modal_stenice")[0];


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


//Člověk - sluchátka
var ebModal4 = document.getElementById('lo--modal_clovek');
var ebBtn4 = document.getElementById("lo--link_clovek");
var ebSpan4 = document.getElementsByClassName("lo--modal_clovek")[0];


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


// Pkočka
var ebModal5 = document.getElementById('lo--modal_kocka');
var ebBtn5 = document.getElementById("lo--link_kocka");
var ebSpan5 = document.getElementsByClassName("lo--modal_kocka")[0];


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

// Schody
var ebModal6 = document.getElementById('lo--modal_schody');
var ebBtn6 = document.getElementById("lo--link_schody");
var ebSpan6 = document.getElementsByClassName("lo--modal_schody")[0];


ebBtn6.onclick = function() {
    ebModal6.style.display = "block";
}
ebSpan6.onclick = function() {
    ebModal6.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == ebModal6) {
        ebModal6.style.display = "none";
    }
}

// PC
var ebModal7 = document.getElementById('lo--modal_pc');
var ebBtn7 = document.getElementById("lo--link_pc");
var ebSpan7 = document.getElementsByClassName("lo--modal_pc")[0];


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

  if(clicks == 7) {
   document.getElementById('gohome').style.display = 'block'; 
   document.getElementById('zmiz').style.display = 'none';
   document.getElementById('lo-hint').style.display = 'none';
 
   sessionStorage.setItem("loznice", "loznice");


} else {
   document.getElementById('gohome').style.display = 'none';
}


}

document.querySelectorAll(`a`) // select all buttons
  .forEach( 
    el => el.addEventListener(`click`, clickME, {once: true})
  ) 
