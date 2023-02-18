'use strict';

const btnList = [...document.querySelectorAll('button')];
const mask = document.querySelector('.mask');
const modal = document.querySelector('.modal');

const h1 = document.querySelector('.modal h1');

const closeIt = function () {
  console.log('close');
  mask.classList.add('hidden');
  modal.classList.add('hidden');
};

btnList.forEach(item => {
  if (item.className.includes('show')) {
    item.onclick = function () {
      let text = item.innerHTML.slice(5);
      console.log(text);

      h1.innerHTML = `i am a ${text} window`;
      mask.classList.remove('hidden');
      modal.classList.remove('hidden');
    };
  } else item.onclick = closeIt;
});

mask.onclick = closeIt;
document.body.onkeydown = function (e) {
  if (e.key === 'Escape' && !mask.classList.contains('hidden')) {
    console.log(e.key);
    closeIt();
  }
};
