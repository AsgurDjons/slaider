'use strict';
window.addEventListener('DOMContentLoaded', () => {
    const slaiders = document.querySelectorAll('.slaider__iner'),
        items = document.querySelector('.slaider_items'),
        item = document.querySelectorAll('.slaider_item'),
        nav = document.querySelector('.slaider_nav');
        let ind = 0;

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
                    ind = i;
                }
            });
        }
    });
    nav.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('next')) {
            hidenSlaider();
            ind--;
            if (ind < 0) {
                ind = 4;
            }
            slaiderShow(ind);
        } else {
            if (target && target.classList.contains('prev')) {
                hidenSlaider();
                ind++;
                if (ind > 4) {
                    ind = 0;
                }
                slaiderShow(ind);
            }
        }
    });
});