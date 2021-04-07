const buttonStart = document.querySelector('[data-action="start"]');
const buttonStop = document.querySelector('[data-action="stop"]');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const col = [
    '#FFF'
]
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let timer;
buttonStart.addEventListener('click', () => {
    timer = setInterval(() => {
         document.body.style.background = colors[randomIntegerFromInterval(0,colors.length)]
    }, 1000)
    
    buttonStart.setAttribute('disabled',true)
   buttonStop.removeAttribute('disabled')
    
})
buttonStop.addEventListener('click', () => {
    clearInterval(timer);
    document.body.style.background = col;
    buttonStart.removeAttribute('disabled')
    buttonStop.setAttribute('disabled', true)
   
})