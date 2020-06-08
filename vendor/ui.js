ScrollOut({
    targets: '.square-top, .square-bottom, h1, p, .button, #scene'
})

let toggleButton = document.querySelector('.fba');
let mobileMenu = document.querySelector('.menu');
let medsos = document.querySelector('.medsos');
toggleButton.addEventListener('click', function(e){
    mobileMenu.classList.toggle('show');
    medsos.classList.toggle('show');
    toggleButton.classList.toggle('clicked');
})