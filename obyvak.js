console.log("obyvak")



// HINT button 
var modalHintOb = document.getElementById('obyvak-hint-modal');

// Get the button that opens the modal
var btnHintOb = document.getElementById("obyvak-hint");

// Get the <span> element that closes the modal
var spanHintOb = document.getElementsByClassName("obyvak--hint")[0];

// When the user clicks the button, open the modal 
btnHintOb.onclick = function() {
  modalHintOb.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanHintOb.onclick = function() {
    modalHintOb.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalHintOb) {
      modalHintOb.style.display = "none";
    }
}







//Modaly obyvak

//Okno
var ebModal1 = document.getElementById('obyvak--modal_okno');
var ebBtn1 = document.getElementById("obyvak--link_okno");
var ebSpan1 = document.getElementsByClassName("obyvak--modal_okno")[0];

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





// Svíčky
var ebModal4 = document.getElementById('obyvak--modal_svicky');
var ebBtn4 = document.getElementById("obyvak--link_svicky");
var ebSpan4 = document.getElementsByClassName("obyvak--modal_svicky")[0];

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


// Cigarety
var ebModal3 = document.getElementById('obyvak--modal_cigarety');
var ebBtn3 = document.getElementById("obyvak--link_cigarety");
var ebSpan3 = document.getElementsByClassName("obyvak--modal_cigarety")[0];


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


// Prasky
var ebModal5 = document.getElementById('obyvak--modal_prasky');
var ebBtn5 = document.getElementById("obyvak--link_prasky");
var ebSpan5 = document.getElementsByClassName("obyvak--modal_prasky")[0];


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




// Teplota
var ebModal6 = document.getElementById('obyvak--modal_teplota');
var ebBtn6 = document.getElementById("obyvak--link_teplota");
var ebSpan6 = document.getElementsByClassName("obyvak--modal_teplota")[0];


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

  document.getElementById("clicks").innerText = clicks // innerText is more suitable in this case

  console.log(clicks)

  if(clicks == 5) {
   document.getElementById('gohome').style.display = 'block'; 
   document.getElementById('zmiz').style.display = 'none';
   document.getElementById('obyvak-hint').style.display = 'none';

   sessionStorage.setItem("obyvak", "obyvak");

} else {
   document.getElementById('gohome').style.display = 'none';
}


}

document.querySelectorAll(".btn") // select all buttons
  .forEach( 
    el => el.addEventListener(`click`, clickME, {once: true})
  ) 

  
  