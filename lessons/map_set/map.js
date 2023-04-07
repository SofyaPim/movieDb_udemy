'use strict';
const shops = [
    {rice:500},
    {oil:200},
    {bread:150}
];
const budget = [5000, 2500, 1500];
const map = new Map([
    [{papper:400}, 3400]
]);//массив с массивами)
// связать два массива
shops.forEach((shop,i) => {
    map.set(shop, budget[i]);
})
// добавить эл-ты
// map.set(shops[0],5000)
//    .set(shops[1],2500)
//    .set(shops[2],1500);
//console.log(map);
//-- res console ---
// Map(3) {
//     { rice: 500 } => 5000,
//     { oil: 200 } => 2500,
//     { bread: 150 } => 1500
//   }
//console.log(map.get(shops[0]));//5000
//console.log(map.has(shops[0]));//true
// map.delete(key);
// map.clear();
// map.size;

//----методы перебора Map
// 1) map.keys();//return iterable obj
//----получить ключи
// const goods = [];

// for (const shop of map.keys()) {
//     //console.log(shop);
//     goods.push(Object.keys(shop)[0])
// }
// console.log(goods);

// 2) ---получить значения
// for (const price of map.values()) {
//     console.log(price);
    
// }

// 3)----получаем массив с подмассивами
// for (const price of map.entries()) {
//     console.log(price);
    
// }
// деструктуризиреум 
// for (const [shop,price] of map.entries()) {
//     console.log(price, shop);//1500 {bread: 150}
    
// }
// 4) --- forEach
map.forEach((value, key, map) => {
    console.log(key,value);//{bread: 150} 1500
})

// преобразование структур
// 1 - карту из объекта
const user = {
    name: 'Alex',
    surname: 'Been',
    birthday:'24/05/1997',
    sayHi:function () {
        console.log(`${this.name} ${this.surname}`);
    }

}
const userMap = new Map(Object.entries(user));
console.log(userMap);//Map(4) {'name' => 'Alex', 'surname' => 'Been', 'birthday' => '24/05/1997', 'sayHi' => ƒ}

// 2 - из карты объект

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);//{name: 'Alex', surname: 'Been', birthday: '24/05/1997', sayHi: ƒ}