// When user clicks on checkbox the window is changed from dark to light
let checkbox;
checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function () {
    'use strict';

    if (this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light');
    }
})
let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
};
// 

// When user clicks on the button, open the winsettings 
let modalCompanies;
modalCompanies = document.getElementById("settings-panel_trigger-BITTON");

modalCompanies.onclick = function (event) {

    if (event.target == modalCompanies) {

        document.getElementById("settings-panel").style.display = 'block';
        document.body.classList.add('open__');
    };
};
// 

// When user clicks on <closemodal> (x), close winsettings 
let close_modal;
close_modal = document.getElementById("close");

close_modal.onclick = function (event) {

    if (event.target == close_modal) {

        document.getElementById("settings-panel").style.display = 'none';
        document.body.classList.remove('open__');

    };
};
// 

// When user clicks anywhere outside of the winsettings, close it
let winsettings;
winsettings = document.getElementById("settings-panel");

window.addEventListener("click", function (event) {

    if (event.target == winsettings) {
        winsettings.style.display = "none";
    }
});

