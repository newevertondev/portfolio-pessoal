"use strict";

/* ========================================
   01 - ELEMENTOS DE NAVEGAÇÃO
======================================== */
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

/* ========================================
   02 - MENU RESPONSIVO
======================================== */
if (menu && nav) {
    menu.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        menu.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            menu.setAttribute('aria-expanded', 'false');
        });
    });
}

/* ========================================
   03 - ANO AUTOMÁTICO NO RODAPÉ
======================================== */
const year = document.querySelector('#year');

if (year) {
    year.textContent = new Date().getFullYear();
}
