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


