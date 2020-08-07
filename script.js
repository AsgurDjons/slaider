'use strict';
window.addEventListener('DOMContentLoaded', () => {
    const slaiders = document.querySelectorAll('.slaider__iner'),
        items = document.querySelector('.slaider_items'),
        item = document.querySelectorAll('.slaider_item'),
        nav = document.querySelector('.slaider_nav');

    function slaiderShow(i = 0) {
        slaiders[i].classList.add('show');
        item[i].classList.add('open');
    }

    function hidenSlaider() {
        slaiders.forEach(item => {
            item.classList.remove('show');
        });
        item.forEach(item => {
            item.classList.remove('open');
        });
    }
    hidenSlaider();
    slaiderShow();
    items.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('slaider_item')) {
            item.forEach((item, i) => {
                if (item == target) {
                    hidenSlaider();
                    slaiderShow(i);
                }
            });
        }
    });
    
    let i = 0;
    nav.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('next')) {
            hidenSlaider();
            i--;
            if (i < 0) {
                i = 4;
            }
            slaiderShow(i);
        } else {
            if (target && target.classList.contains('prev')) {
                hidenSlaider();
                i++;
                if (i > 4) {
                    i = 0;
                }
                slaiderShow(i);
            }
        }
    });
});