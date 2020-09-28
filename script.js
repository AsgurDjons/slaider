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
                ind = slaiders.length -1;
            }
            slaiderShow(ind);
        } else {
            if (target && target.classList.contains('prev')) {
                hidenSlaider();
                ind++;
                if (ind >= slaiders.length) {
                    ind = 0;
                }
                slaiderShow(ind);
            }
        }
    });

    let p = [...document.querySelectorAll('.slaider_item')];
    console.log(p);
});

// const num = [231,3242342,-666, 3425234534, 234,1,2,[423423423423,[42342342342342342]]];

// console.log(Math.max(...num.flat(Infinity)));

// const arr = [-50,12,10,-2,-1,-8, 10,2,3, -10];
// let s =0;
// function sum (arr) {
//     // let int =0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             s += arr[i];
//             // s = int;
//         }
//     }
//     return s ;
// }
// sum(arr);
// console.log(s);
// console.log(sum(arr));





