'use strict';
const box = document.querySelector('.box'),
    btn = document.querySelector('button');
const width = box.clientWidth;
const height = box.clientHeight;
const Ofwidth = box.scrollWidth;
const Ofheight = box.scrollHeight;
console.log(width, height);
console.log(Ofwidth, Ofheight);
btn.addEventListener('click', () => {
   // box.style.height = box.scrollHeight + 'px';
   console.log(box.scrollTop);
})
console.log(box.getBoundingClientRect().top);