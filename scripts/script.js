// JavaScript Document
console.log("hi");
console.log("it works");

// variabelen
let darkModeButton = document.querySelector('.pinkModeButton');
let kylieSound = document.querySelector('.soundButton');
let kingKy = document.querySelector('.kylieBackgroundButton');
let isKylieBackgroundActive = false;  //default 
let hamburgerMenu = document.querySelector(".hamburger-menu");
let hiddenMenu = document.querySelector(".hidden-menu");
let videoElements = document.querySelectorAll('video');


// Functies
// functie om hamburger menu werkende te maken
hamburgerMenu.addEventListener("click", () => {
    hiddenMenu.classList.toggle("open");
});


//video advent calendar

videoElements.forEach(function(videoElement) {
  videoElement.addEventListener('click', function() {

    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause(); 
    }
  });
});




//functie roze kleur te veranderen
darkModeButton.addEventListener('click', () => {
    // Controleer of de dark mode al is geactiveerd
    let isPinkMode = document.body.classList.toggle('pink-mode');
    
    // :root aanpasssen
    if (isPinkMode) {
        // Verander de variabelen naar pink-mode
        document.documentElement.style.setProperty('--color-pink-100', '#FFC1E3');
        document.documentElement.style.setProperty('--color-pink-200', '#FF8CB6');
        document.documentElement.style.setProperty('--color-pink-300', '#FF70A6');
        document.documentElement.style.setProperty('--color-pink-500', '#FF007F');
    } else {
        // Zet de standaardkleuren terug
        document.documentElement.style.setProperty('--color-pink-100', '#f8f1f4');
        document.documentElement.style.setProperty('--color-pink-200', '#e7dae2');
        document.documentElement.style.setProperty('--color-pink-300', '#efd7e5');
        document.documentElement.style.setProperty('--color-pink-500', '#b3848f');
    }
});

kylieSound.addEventListener('click', ()=> {
    let audio = new Audio('audio/kylie_rise_and_shine.mp3');
    audio.play();
});


kingKy.addEventListener('click', () => {
    //variabelen
    let header = document.querySelector('header');
    let buttons = document.querySelectorAll('button');

    if (isKylieBackgroundActive) {
        // Verwijder de achtergrondafbeelding van de header en buttons
        header.style.backgroundImage = "";
        buttons.forEach(button => {
            button.style.backgroundImage = "";
            button.style.color = ""; // Reset tekstkleur naar standaard
        });
        isKylieBackgroundActive = false;

        
    } else {
        // Voeg de achtergrondafbeelding toe aan de header en buttons
        header.style.backgroundImage = "url('images/extra-features/new-kylie-old-logo-background.png')";
        header.style.backgroundSize = "cover";
        header.style.backgroundPosition = "center";

        buttons.forEach(button => {
            button.style.backgroundImage = "url('images/extra-features/new-kylie-old-logo-background.png')";
            button.style.backgroundSize = "cover";
            button.style.backgroundPosition = "center";
            button.style.color = "black"; // Zet de tekstkleur van de knop op zwart
        });
        isKylieBackgroundActive = true;
    }
});


//dialog button
function handleSubmit() {
    // Gebruik querySelector om te selecteren op basis van de class
    let emailInput = document.querySelector('.emailInput');
    let emailDialog = document.getElementById('emailDialog');
    let dialogMessage = document.querySelector('.dialogMessage');
    let email = emailInput.value.trim();

    // Controleer of het emailadres geldig is volgens de HTML5-validatie
    if (!emailInput.checkValidity()) {
        dialogMessage.textContent = 'Please enter a valid email address';
    } else {
        dialogMessage.textContent = `Thank you for signing up!`;

        // Maak het invoerveld leeg nadat het e-mailadres is goedgekeurd
        emailInput.value = ''; // Reset het invoerveld
    }


    emailDialog.showModal();
}



