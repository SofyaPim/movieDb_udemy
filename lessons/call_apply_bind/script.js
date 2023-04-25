//при непрямом вызове this — значение, передаваемое .call() или .apply() в качестве первого аргумента. 
var rabbit = { name: 'White Rabbit' };
function concatName(string) {
  console.log(this === rabbit); // => true
  return string + this.name;
}
// Indirect invocations
console.log(concatName.call(rabbit, 'Hello '));  // => 'Hello White Rabbit'
console.log(concatName.apply(rabbit, ['Bye '])); // => 'Bye White Rabbit'


//Связанная функция — это функция, связанная с объектом. Обычно она создаётся из обычной функции при помощи метода .bind(). У двух функций совпадают тела и области видимости, но различаются контексты.

function multiply(number) {
    'use strict';
    return this * number;
  }
  // create a bound function with context
  var double = multiply.bind(2);
  // invoke the bound function
  console.log(double(3));  // => 6
  console.log(double(10)); // => 20

  
const btn = document.querySelector('button');
// контекст вызова есть
btn.addEventListener('click', function () {
    console.log(this);//<button></button>
    
})
// контекст вызова теряется
btn.addEventListener('click', () => {
    console.log(this);//window
    
})

const obj = {
    num: 5,
    sayNumber:function () {
        const say = () => {
            console.log(this);
        };
        say(); 
    }
}
obj.sayNumber();//{num: 5, sayNumber: ƒ}

// const double = (a) => {
//     return a*2;
// };
const double = a => a*2;
console.log(double(8));//16