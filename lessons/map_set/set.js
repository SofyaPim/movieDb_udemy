'use strict';

const arr = ['Chanelle','Godfrey','Tony','Kodey','Godfrey','Tony'];
//const set = new Set(arr);

// методы добавить можно только уникальные значения
// set.add('Bob');
// set.add('Ada');
// console.log(set);
// set.delete(value);
// set.has(value);
// set.clear();
// set.size;


// for (const value of set) {
//     console.log(value);
// }
// set.forEach((value,valueAgain,set) => { //для совместимости в аргументах 2 раза пишем значения
//     console.log(value, valueAgain);//Chanelle Chanelle
// })

// console.log(set.values());
// set.keys();//метод сущ-ет для обратной совместимоти с Map, возвращает то же что и values

function uniq(arr) {
    return Array.from(new Set(arr));
    
}
console.log(uniq(arr));