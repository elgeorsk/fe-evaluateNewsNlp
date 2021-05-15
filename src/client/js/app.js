let infoSec = document.getElementsByClassName('info')[0];

// hide/show functionality
let counter = 0;
let hideBtn = document.getElementById('hide');

hideBtn.addEventListener('click', function(e) {
    counter++;
    if (counter === 1){
        hideInfoSec();
    } else {
        showInfoSec();
    }
});

// in mobile version hide info section
if (window.innerWidth <= 700 ) {
    hideInfoSec();
}

// functions
function hideInfoSec() {
    infoSec.style.display = 'none';
    hideBtn.classList.remove('fa-eye-slash');
    hideBtn.classList.add('fa-eye-slash');
    counter = 1;
}

function showInfoSec() {
    infoSec.style.display = 'block';
    hideBtn.classList.remove('fa-eye-slash');
    hideBtn.classList.add('fa-eye');
    counter = 0;
}

//Add Service Workers - https://developers.google.com/web/tools/workbox/guides/generate-service-worker/webpack
// Check that service workers are supported
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');
    });
}