const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click', function() {
        close();
    })
})

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%';
}

// ====sticky navbar================//

window.addEventListener("scroll", function() {
    var header = document.querySelector("nav");
    header.classList.toggle("active", window.scrollY > 0);
});

// =============background===========slider//
var imgSlider = document.getElementById("imgSlider");

var images = new Array(
    "/images/header1.jpg",
    "/images/about-banner.jpg",
    "/images/tech.jpg",
    "/images/service-web.jpg"
);

var len = images.length;
var i = 0;

function slider() {
    if (i > len - 1) {
        i = 0;
    }
    imgSlider.src = images[i];
    i++;
    setTimeout('slider()', 3000);
}