/* MENU */

const burgerMenu = document.querySelector('.burger-menu');
const headerMenu = document.querySelector('.header-nav-bar');

burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    headerMenu.classList.toggle('active');
});

headerMenu.querySelectorAll('a').forEach((item)=>{
    item.addEventListener('click', ()=>{
        headerMenu.classList.remove('active');
        burgerMenu.classList.remove('active');
    })
});

/* TEAM SECTION, SLICK SLIDER */

$('.team-slider').slick({
    autoplay: true,
    speed: 2000,
    responsive: [
        {
            breakpoint: 1240,
            settings: {
                arrows: false,
            }
        },
    ]
});
