'use strict';
// 获取元素：按钮、色子、分数

// 数据：玩家号、色子、current分数、总分数

// 初始化

// 绑定事件：按钮事件、分数更新、新游戏

// 获取元素
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');

const dice = document.querySelector('.dice');

const btns = document.querySelectorAll('.btn');

const message = document.querySelector('.message');
console.log(message.children[0]);

score0.innerHTML = 0;
score1.innerHTML = 0;

// 按钮事件分配
const eventDis = e => {
  switch (e.target.classList[1]) {
    case 'btn--new':
      newEvent();
      break;
    case 'btn--roll':
      rollEvent();
      break;
    case 'btn--hold':
      holdEvent();
      break;
    default:
      break;
  }
};

// 绑定按钮事件
btns.forEach(item => {
  item.addEventListener('click', eventDis);
});

// 数据
let current = 0; //current score
let activePlayer = 0; //激活玩家
let score = [0, 0]; //玩家总分数

// 解绑事件函数
const eventLose = function () {
  btns.forEach(item => {
    if (item.classList.contains('btn--new')) return;
    item.removeEventListener('click', eventDis);
  });
};

// 切换玩家函数
const changePlayer = function () {
  // **更新总分数
  score[activePlayer] += current;
  (activePlayer ? score1 : score0).innerHTML = score[activePlayer];
  document.getElementById(`current--${activePlayer}`).innerHTML = 0;
  current = 0;

  //   判断是否胜利
  if (score[activePlayer] >= 100) {
    console.log(`player ${activePlayer + 1} win`);
    message.children[0].innerHTML = activePlayer + 1;
    message.classList.add('active');
    eventLose();
    return;
  }

  // 切换玩家
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');

  activePlayer = activePlayer === 0 ? 1 : 0;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
};

// roll 事件
const rollEvent = function () {
  console.log('roll');

  // 生成随机数 1-6
  const diceNum = Math.floor(Math.random() * 6) + 1;

  //   update dice DOM
  dice.classList.remove('hidden');
  dice.src = `dice-${diceNum}.png`;

  //   判断是否为1
  if (diceNum !== 1) {
    //   update score
    current += diceNum;
    document.getElementById(`current--${activePlayer}`).innerHTML = current;
  } else {
    // 不为1：切换玩家
    changePlayer();
  }
};

// hold 事件
const holdEvent = function () {
  console.log('hold');
  changePlayer();
  dice.classList.add('hidden');
};

const newEvent = function () {
  console.log('new');
  // 重置分数
  score0.innerHTML = 0;
  score1.innerHTML = 0;
  score = [0, 0];
  document.getElementById(`current--${activePlayer}`).innerHTML = 0;
  activePlayer = 0;
  current = 0;

  // 重置 DOM
  dice.classList.add('hidden');
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.querySelector(`.player--0`).classList.add('player--active');
  message.classList.remove('active');

  // 重置 事件绑定
  btns.forEach(item => {
    item.addEventListener('click', eventDis);
  });
};
