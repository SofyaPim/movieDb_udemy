'use strict';
//const now = new Date(0);//1970-01-01T00:00:00.000Z
//const now = new Date(-999999);//1969-12-31T23:43:20.001Z
const now = new Date('2020-01-12');
//methods getters
//console.log(now.getFullYear());
//console.log(now.getMonth());//may - 4
//console.log(now.getDate());//11
//console.log(now.getDay());// вторник - 2
//console.log(now.getHours());//16
//console.log(now.getUTCHours());//13

//methods setters
console.log(now.setHours(18));// в терминале будет в формате utc 2023-04-11T15:13:51.166Z , а в  браузере Tue Apr 11 2023 18:14:48 GMT+0300 (Москва, стандартное время)

console.log(now);
//parse
//new Date.parse('2020-01-12');

let start = new Date();
for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
    
}
let end = new Date();
alert(`Цикл завершён через ${end - start} миллисекунд`)
