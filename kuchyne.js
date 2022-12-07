console.log("kuchyne")

//Modaly apky

// HINT button 
var modalHintLoz = document.getElementById('ku-hint-modal');

// Get the button that opens the modal
var btnHintLoz = document.getElementById("ku-hint");

// Get the <span> element that closes the modal
var spanHintLoz = document.getElementsByClassName("ku--hint")[0];

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
var ebModal1 = document.getElementById('ku--modal_moly');
var ebBtn1 = document.getElementById("ku--link_moly");
var ebSpan1 = document.getElementsByClassName("ku--modal_moly")[0];

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

// Kos
var ebModal2 = document.getElementById('ku--modal_kos');
var ebBtn2 = document.getElementById("ku--link_kos");
var ebSpan2 = document.getElementsByClassName("ku--modal_kos")[0];


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
var ebModal3 = document.getElementById('ku--modal_konvice');
var ebBtn3 = document.getElementById("ku--link_konvice");
var ebSpan3 = document.getElementsByClassName("ku--modal_konvice")[0];


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


// Pára bez digestoře
var ebModal4 = document.getElementById('ku--modal_para');
var ebBtn4 = document.getElementById("ku--link_para");
var ebSpan4 = document.getElementsByClassName("ku--modal_para")[0];


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


// Plynový sporák
var ebModal5 = document.getElementById('ku--modal_plyn');
var ebBtn5 = document.getElementById("ku--link_plyn");
var ebSpan5 = document.getElementsByClassName("ku--modal_plyn")[0];


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


// Máma
var ebModal7 = document.getElementById('ku--modal_mama');
var ebBtn7 = document.getElementById("ku--link_mama");
var ebSpan7 = document.getElementsByClassName("ku--modal_mama")[0];


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
   document.getElementById('ku-hint').style.display = 'none';
   sessionStorage.setItem("kuchyne", "kuchyne");
   
   /*
   // získání aktuálního stavu localStorage a nahrání nové místnosti
   
// Get the existing data
var existing = sessionStorage.getItem('mistnost');

    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    existing = existing ? existing.split(',') : [];
    
    // Add new data to localStorage Array
    existing.push('kuchyne');
    
    // Save back to localStorage
    sessionStorage.setItem('mistnost', existing.toString());

*/
} else {
   document.getElementById('gohome').style.display = 'none';
}


}

document.querySelectorAll(".btn") // select all buttons
  .forEach( 
    el => el.addEventListener(`click`, clickME, {once: true})
  ) 
