//console check
console.log("hi");
console.log("it works");

// variabelen
let darkModeButton = document.querySelector('.pinkModeButton');
let kylieSound = document.querySelector('.soundButton');
let kingKy = document.querySelector('.kylieBackgroundButton');
let isKylieBackgroundActive = false;  //default 
let videoElements = document.querySelectorAll('video');
let hamburgerMenu = document.querySelector('.hamburger-menu');
let hiddenMenu = document.querySelector('.hidden-menu');
let closeMenu = document.querySelector('.close-menu'); 
let header = document.querySelector('header');
let buttons = document.querySelectorAll('button');

// Functies
// hamburger menu icon openen
hamburgerMenu.addEventListener("click", () => {
    hiddenMenu.classList.toggle("open");
});

// Sluiten kruisje hamburger
closeMenu.addEventListener("click", () => {
    hiddenMenu.classList.remove("open");
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


//functie roze kleur te veranderen (dark mode version pink)
darkModeButton.addEventListener('click', () => {
    // pink mode
    let isPinkMode = document.body.classList.toggle('pink-mode');
    
    // :root aanpasssen
    if (isPinkMode) {
        // variablen veranderen 
        document.documentElement.style.setProperty('--color-pink-100', '#FFC1E3');
        document.documentElement.style.setProperty('--color-pink-200', '#FF8CB6');
        document.documentElement.style.setProperty('--color-pink-300', '#FF70A6');
        document.documentElement.style.setProperty('--color-pink-500', '#FF007F');
    } else {
        // standaardkleuren
        document.documentElement.style.setProperty('--color-pink-100', '#f8f1f4');
        document.documentElement.style.setProperty('--color-pink-200', '#e7dae2');
        document.documentElement.style.setProperty('--color-pink-300', '#efd7e5');
        document.documentElement.style.setProperty('--color-pink-500', '#b3848f');
    }
});


 // kylie sound
kylieSound.addEventListener('click', ()=> {
    let audio = new Audio('audio/kylie_rise_and_shine.mp3');
    audio.play();
});

 // kylie logo buttons & background
kingKy.addEventListener('click', () => {
    if (isKylieBackgroundActive) {
        // Verwijder de achtergrondafbeelding van header & buttons
        header.style.backgroundImage = "";
        buttons.forEach(button => {
            button.style.backgroundImage = "";
            button.style.color = ""; // oude kleuren terug
        });
        isKylieBackgroundActive = false;

        
    } else {
        // kylie background toevoegen
        header.style.backgroundImage = "url('images/extra-features/new-kylie-old-logo-background.png')";
        header.style.backgroundSize = "cover";
        header.style.backgroundPosition = "center";

        buttons.forEach(button => {
            button.style.backgroundImage = "url('images/extra-features/new-kylie-old-logo-background.png')";
            button.style.backgroundSize = "cover";
            button.style.backgroundPosition = "center";
            button.style.color = "black";
        });
        isKylieBackgroundActive = true;
    }
});



function EmailSignup() {
    // variabelen
    let emailInput = document.querySelector('.emailInput');
    let submitButton = document.querySelector('.submitButton');
    let emailDialog = document.querySelector('.emailDialog');
    let dialogMessage = document.querySelector('.dialogMessage');
    let closeDialog = document.querySelector('.closeDialog');

    // button
    let handleSubmit = () => {
        let email = emailInput.value.trim();

        // Validating Email
        if (!email) {
            dialogMessage.textContent = 'Probeer opnieuw!';
        } else if (!emailInput.checkValidity()) {
            dialogMessage.textContent = 'Probeer opnieuw!';
        } else {
            dialogMessage.textContent = 'Thank you for signing up!';
            emailInput.value = ''; 
        }

        emailDialog.showModal(); // dialog
    };

    // button sluiten
    let handleClose = () => {
        emailDialog.close();
    };

    // Add Event Listeners
    submitButton.addEventListener('click', handleSubmit);
    closeDialog.addEventListener('click', handleClose);
}

// functie uitvoeren
EmailSignup();



