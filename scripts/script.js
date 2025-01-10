// JavaScript Document
console.log("hi");
console.log("it works");

// variabelen
let darkModeButton = document.querySelector('.pinkModeButton');
let kylieSound = document.querySelector('.soundButton');
let kingKy = document.querySelector('.kylieBackgroundButton');
let isKylieBackgroundActive = false;  //default 


// Functies
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
    // Selecteer de header
    let header = document.querySelector('header');
    
    if (isKylieBackgroundActive) {
        // Verwijder de achtergrondafbeelding
        header.style.backgroundImage = "";
        isKylieBackgroundActive = false;
    } else {
        // Voeg de achtergrondafbeelding toe
        header.style.backgroundImage = "url('images/extra-features/new-kylie-old-logo-background.png')";
        header.style.backgroundSize = "cover";
        header.style.backgroundPosition = "center";
        isKylieBackgroundActive = true;
    }
});



