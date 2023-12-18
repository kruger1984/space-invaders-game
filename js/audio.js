let audioPlayer = document.querySelector('#audio');
audioPlayer.volume = 0.1;


function blasterSound() {
    let audio = new Audio('music/blaster.mp3');
    audio.volume = 0.1;
    audio.muted = muted;
    audio.play();
}

function blasterSound2() {
    let audio = new Audio('music/blaster2.mp3');
    audio.volume = 0.1;
    audio.muted = muted;
    audio.play();
}
function boomSound() {
    let audio = new Audio('music/boom.mp3');
    audio.muted = muted;
    audio.play();
}

let soundBtn = document.querySelector('.menu .sound');
let muted = false;


/**
 * =======================================================
 *      Функціонал кнопки включення та виключення звуку
 * =======================================================
 * 
 */
soundBtn.onclick = function(){
    let soundOffIcon = document.querySelector('.menu .sound .sound-off');
    let soundOnIcon = document.querySelector('.menu .sound .sound-on');

    if(!muted) {
        soundOnIcon.classList.add('hidden');
        soundOffIcon.classList.remove('hidden');
        muted = true;
    } else {
        soundOnIcon.classList.remove('hidden');
        soundOffIcon.classList.add('hidden');
        muted = false;
    }
    audioPlayer.muted = muted;
}

function heartSound() {
    let audio = new Audio('music/heart.mp3');
    audio.muted = muted;
    audio.play();
}