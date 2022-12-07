console.log("okoli")

//Modaly apky

// HINT button 
var modalHintLoz = document.getElementById('okoli-hint-modal');

// Get the button that opens the modal
var btnHintLoz = document.getElementById("okoli-hint");

// Get the <span> element that closes the modal
var spanHintLoz = document.getElementsByClassName("okoli--hint")[0];

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







//Modaly okoli
// Hluk
var ebModal1 = document.getElementById('okoli--modal_hluk');
var ebBtn1 = document.getElementById("okoli--link_hluk");
var ebSpan1 = document.getElementsByClassName("okoli--modal_hluk")[0];

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

// Křeslo
var ebModal2 = document.getElementById('okoli--modal_kreslo');
var ebBtn2 = document.getElementById("okoli--link_kreslo");
var ebSpan2 = document.getElementsByClassName("okoli--modal_kreslo")[0];


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
var ebModal3 = document.getElementById('okoli--modal_odpad');
var ebBtn3 = document.getElementById("okoli--link_odpad");
var ebSpan3 = document.getElementsByClassName("okoli--modal_odpad")[0];


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


// Pumpa
var ebModal4 = document.getElementById('okoli--modal_pumpa');
var ebBtn4 = document.getElementById("okoli--link_pumpa");
var ebSpan4 = document.getElementsByClassName("okoli--modal_pumpa")[0];


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


// Pes
var ebModal5 = document.getElementById('okoli--modal_pes');
var ebBtn5 = document.getElementById("okoli--link_pes");
var ebSpan5 = document.getElementsByClassName("okoli--modal_pes")[0];


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





// Komin
var ebModal7 = document.getElementById('okoli--modal_komin');
var ebBtn7 = document.getElementById("okoli--link_komin");
var ebSpan7 = document.getElementsByClassName("okoli--modal_komin")[0];


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
   document.getElementById('okoli-hint').style.display = 'none';
   
   sessionStorage.setItem("okoli", "okoli");

} else {
document.getElementById('gohome').style.display = 'none';
}

}

document.querySelectorAll(`a`) // select all buttons
  .forEach( 
    el => el.addEventListener(`click`, clickME, {once: true})
  ) 
