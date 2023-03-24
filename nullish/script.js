'use strict';

// const box = document.querySelector('.box');
// const block = document.querySelector('.block');

// const newHeight = 0;
// const newWidth = 400;

// function changeParams(elem, h, w) {
//     elem.style.height = `${h ?? 200}px`;
//     elem.style.width = `${w ?? 200}px`;
// }

// changeParams(box, newHeight, newWidth);
// //changeParams(box);
// let userName;
// console.log(block?.textContent);
// console.log(userName ?? 'User');

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box'); 

boxesQuery.forEach(box => {
    if (box.matches('.this')) {
        box.style.backgroundColor = '#1c1c1c';
        box.textContent = 'hey there';
        
    }
})


// console.log(Array.from(boxesGet));
// boxesQuery[0].remove();
// boxesGet[0].remove();

// for (let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box');
//     document.body.append(div);
    
// }

// console.log(boxesQuery); // вернет три элемента
// console.log(boxesGet);// ослеживает изменения в ДОМ и вернет текущи рез 1 эл-т

// console.log(Array.from(boxesGet));