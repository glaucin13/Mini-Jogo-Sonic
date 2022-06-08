const sonic = document.querySelector('.sonic')
const pipe = document.querySelector('.pipe')

const jump = () => {
    sonic.classList.add('jump')

    setTimeout(() => {
        sonic.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && sonicPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        sonic.style.animation = 'none';
        sonic.style.bottom = `${sonicPosition}px`;

        sonic.src = './imagens/morresonic.png'
        sonic.style.width = '180px'

        clearInterval(loop)
    }
},10)


document.addEventListener('keydown', jump);
