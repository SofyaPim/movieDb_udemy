const btns = document.querySelectorAll('button'),
        wrapper = document.querySelector('.btn-block');
// console.log(btns[0].classList.item(0));
//console.log(btns[0].classList.length);
//console.log(btns[1].classList.add('red'));
//console.log(btns[0].classList.remove('blue'));
//console.log(btns[0].classList.toggle('blue'));
// if(btns[1].classList.contains('red')){
//     console.log('red');
// }
btns[0].addEventListener('click', () => {
    if(!btns[1].classList.contains('red')){
        btns[1].classList.add('red');
    }else{
        btns[1].classList.remove('red');
    }
})
// делегирование событий c родителя на потомков- если эл-т подходит под условие, то на нём будет срабатываать та функция, кот написали
wrapper.addEventListener('click', (e) => {
    if(e.target && e.target.tagName == "BUTTON"){
        console.log('btn')

    }
    if(e.target && e.target.matches('button.red')){
        console.log('bred')

    }
})
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);