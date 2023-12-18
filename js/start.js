

/**
 * *********************************
 *    Функціонал кнопки старту гри
 * *********************************
 * 
 */
let btnStartGame = document.getElementById('btnStartGame');
btnStartGame.onclick = function (){
    let skin = document.querySelector('.skins input[type=radio]:checked').value
    let startGameBlock = document.querySelector('.start-game');
    startGameBlock.style.display = 'none';
    scoreBlock.classList.remove('hidden');
    createPlayer(skin);
     setTimeout(createEnemy, 3000);
     setTimeout(createEnemy, 5000);
     setInterval(function () {createHeartBonus ();}, 20000);
     setInterval(function () {createAsteroid()}, 6000);
     setInterval(function () {createBombBonus ()}, 15000);
    audioPlayer.play();
    heartsIconPlayer(); //намалюєм життя
    createPlanet();
}


/**
 * ***************************************
 *       Функція закінчення гри
 * ***************************************
 */
function endGame(){
    let endGameBlock = document.querySelector('.end-game');
    endGameBlock.classList.remove('hidden');
    isGameOver = true;
   
    scoreBlock.classList.add('hidden');
    document.querySelector('.end-game h2 span').innerText = score.innerText;
    app.innerHTML = "";
    
}
/**
 * ********************************************
 * Функціонал натискання кнопки перезапуску гри
 * ********************************************
 */

let btnRestartGame = "";
btnRestartGame = document.getElementById('btnRestartGame');
btnRestartGame.onclick = function(){
    location.reload();
}