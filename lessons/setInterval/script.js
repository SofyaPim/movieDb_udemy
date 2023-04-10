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

btn.addEventListener('click', () => {
    timerId = setInterval( logger, 2000);
})

function logger() {
    if(i === 3){
      clearInterval(timerId);  
    }
     console.log('hi');
     i++;
}