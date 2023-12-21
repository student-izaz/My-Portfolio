let menu = document.querySelector('.links');
let menuIcon = document.querySelector('.menu-icon');
let cancelIcon = document.querySelector('.cancel-icon');

menuIcon.onclick = () => {
    menu.classList.add('open')
};

cancelIcon.onclick = () => {
    menu.classList.remove('open')
};

