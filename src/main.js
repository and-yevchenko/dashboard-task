'use strict'

const body = document.body;
const menuBtn = body.querySelector('.menu-btn');
const menuBtnIcon = body.querySelector('.menu-btn__icon');
const menuBtnBackgr = body.querySelector('.menu-btn__backgr');

if (menuBtn && menuBtnIcon) {
    menuBtnIcon.addEventListener('click', () => {
        menuBtn.classList.toggle('--active');
        menuBtnIcon.classList.toggle('--active');
        body.classList.toggle('--lock');
        menuBtnBackgr.classList.toggle('--active');
    });
    menuBtnBackgr.addEventListener('click', e => {
        if (e.target.classList.contains('menu-btn__backgr')) {
            menuBtn.classList.remove('--active');
            menuBtnIcon.classList.remove('--active');
            body.classList.remove('--lock');
            menuBtnBackgr.classList.remove('--active');
        }
    })
    menuBtn.querySelectorAll('.menu-btn__link').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('--active');
            menuBtnIcon.classList.remove('--active');
            body.classList.remove('--lock');
            menuBtnBackgr.classList.remove('--active');
        });
    })
}

