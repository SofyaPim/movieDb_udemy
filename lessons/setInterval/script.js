// const timerId = setTimeout(function (text) {
//     console.log(text)
// }, 2000, 'hi');

// const timerId = setTimeout( logger, 2000);
// clearInterval(timerId);
// function logger() {
//      console.log('hi')
// }



const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function animateCube(){
    const elem = document.querySelector('.box');
    let pos = 0;
    const id = setInterval(frame, 10)
    function frame(){
        if(pos == 300){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";

        }

    }

}
btn.addEventListener('click', animateCube);
// btn.addEventListener('click', () => {
//     timerId = setInterval( logger, 2000);
// })

// function logger() {
//     if(i === 3){
//       clearInterval(timerId);  
//     }
//      console.log('hi');
//      i++;
// }
// recursion
// let id = setTimeout(function log(){
//     console.log('hello');
//     id = setTimeout(log, 500)

// }, 500)



// утучка памаяти на замыкании
function outer() {
    const potentiallyHugeArray = [];
    return function inner() {
        potentiallyHugeArray.push('Hello'); // функция inner замкнута на переменной potentiallyHugeArray 
        console.log('Hello');
    };
};
const sayHello = outer(); // содержит определение/вызов функции inner

function repeat(fn, num) {
    for (let i = 0; i < num; i++){
        fn();
    }
}
repeat(sayHello, 10); // каждый вызов sayHello помещает еще один элемент 'Hello' в массив potentiallyHugeArray 
 
// теперь представьте себе, что будет при вызове repeat(sayHello, 100000)
//В этом примере массив potentiallyHugeArray никогда не возвращается ни из одной из функций, поэтому и не может быть получен, тем не менее
// его размер может бесконечно увеличиваться в зависимости от того, сколько раз мы вызываем функцию inner(). Т.е. такое обращение с переменной 
//внутри многократно вызываемой функции не приводит к каким-либо результатам, зато сильно нагружает память.



//
// function listener() {
//     doSomething(hugeString);
// }
// document.addEventListener('keyup', listener); // используем ссылку на именованную функцию здесь...
// document.removeEventListener('keyup', listener); // ...и здесь
// //
// document.addEventListener('keyup', function listener() {
//     doSomething(hugeString);
// }, {once: true}); // слушатель события будет удален после первого использования


//weakMap

let user = {name: 'Lonny'};
let map = new WeakMap();
map.set(user,'student');
user = null;
console.log(user);
console.log(map.has(user));//false
console.log(map);//WeakMap { <items unknown> }


let cashe = new WeakMap();
function casheUser(){
    if(!cashe.has(user)){
        cashe.set(user, Date.now());

    }
    return cashe.get(user);
}
let one = {name:'Bill'};
let second = {name:'Ann'};
casheUser(one);
casheUser(second);
second = null;
console.log(one);
console.log(second);

//weakset 
let messages = [
    {text:'Hiya',from:'John'},
    {text:'Guys',from:'Tulip'},
    {text:'Bro',from:'Moun'},

]
let readMessages = new WeakSet();
readMessages.add(messages[0]).add(messages[1]);
console.log(readMessages.has(messages[0]));