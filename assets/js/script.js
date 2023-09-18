//COLLAPSE
let collapse_toggle = document.querySelector('.dropdown-toggle');
let collapse_body = document.querySelector('.dropdown-menu');
if (collapse_toggle) {
    collapse_toggle.addEventListener('click', function () {
        collapse_body.classList.toggle('d-block');
    });

    document.addEventListener('click', function (event) {
        if (!collapse_toggle.contains(event.target) && !collapse_body.contains(event.target)) {
            collapse_body.classList.remove('d-block');
        }
    });
};

//MENU
let menu_toggle = document.querySelector('.menu__toggle');
let menu = document.querySelector('.menu');
menu_toggle.addEventListener('click', function(){
    menu.classList.toggle('active');
    this.classList.toggle('active');
});
document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !menu_toggle.contains(e.target)) {
      menu.classList.remove("active");
      menu_toggle.classList.remove("active");
    }
});

//FANCYBOX
document.querySelectorAll(".trigger").forEach(i => i.addEventListener("click", () => {
    let video = i.dataset.video;
    Fancybox.show([
      {
        src: video,
        thumb: "",
        type: "video",
        ratio: 16 / 10,
      }
    ]);
}));  

//SWIPER
var splide = new Splide( '.splide', {
    direction: 'ttb',
    height: '650px',
    focus: 'center',
    wheel: true,
    arrows: false,
    padding: '1rem',
    breakpoints: {
		480: {
			autoHeight: true,
            padding: '1rem',
            height: '320px',
		},
    }
});
  
splide.mount();