window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
       // console.log('start');
       // console.log(e.touches);//TouchList {0: Touch, length: 1}
                               // 0:Touch {identifier: 0, target: div.box, screenX: 635.687744140625, screenY: 238.33445739746094, clientX: 115.687744140625, …}
                               //length : 1
                               //[[Prototype]] : TouchList
        console.log(e.targetTouches);
        
    });
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
       // console.log('move');
        
    });
    box.addEventListener('touchend', (e) => {
        e.preventDefault();
      //  console.log('end');
        
    });
})
//touches - кол-во пальцев
// targetTouches - кол-во пальцев взаимодейств с эл-том
// cangedTouches - кол-во пальцев, которые совершили действия
