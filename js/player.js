let player = null;
let lifesPlayer = 5; // кількість життів

/**
 *==========================
    Функція створення гравця
 * =========================
  */
function createPlayer (skin) {
        player = document.createElement ('div');
        player.className = skin;
        player.id = 'player';
        app.appendChild(player);
       
}


/**
 * 
 * ==========================================
 *              Функціонал натискань кнопок
 *              для зручності додав A та D
 * ==========================================
 */

document.onkeydown = function (event){
    switch(event.code){
    case "Space":
        shot();
        break;
    case "ArrowRight":
        moveRight();
        break;
    case "ArrowLeft":
        moveLeft();
        break;
        case "KeyD":
        moveRight();
        break;
    case "KeyA":
        moveLeft();
        break;
    }

}
   
    function moveLeft (){
        player.style.left = player.offsetLeft - 70 + 'px';
    }
    function moveRight (){
        player.style.left = player.offsetLeft + 70 + 'px';
    }

    /**==================
     * Функція пострілу
     * ==================
     */
    function shot(){
        let skin = player.className;
        console.dir(skin);
        let bullet = document.createElement('div');
        let soundFunction;
        let distance;
        let topDistance = 0;
        console.dir(skin);
        if (skin === "skin2"){   // якщо вибраний скін 2 міняємо стиль кулі та звук пострілу і трохи коректуємо положення кулі
            bullet.className = "bullet2";
            soundFunction = blasterSound2();
            console.dir(bullet);
            distance = 4;
        } else if (skin === "skin3"){ // при виборі скіна 3 створюємо кулю 2 та рухаємо/видаляємо її
            bullet.className = "bullet";
            let bullet2 = document.createElement('div');
            bullet2.className = "bullet";
            bullet2.style.top = player.offsetTop + 20 + 'px';
            bullet2.style.left = player.offsetLeft + player.offsetWidth - 24 + "px";
            app.appendChild(bullet2);
            distance = 62;
            topDistance = 20;
            soundFunction = blasterSound();
            let timerId2 = setInterval(function(){
                let hit = isHit(bullet2);
                let hit2 = isHit2(bullet2);
                let hit3 = isHit3(bullet2);
                if (hit || bullet2.offsetTop < 0 || hit2 || hit3){
                    bullet2.remove();
                    
                    clearInterval(timerId);
                }
                bullet2.style.top = bullet2.offsetTop - 10 + 'px';
            }, 100);
        } else {
            bullet.className = "bullet";
            distance = 0;
            soundFunction = blasterSound();
        }
        bullet.style.top = player.offsetTop + topDistance + 'px';
        bullet.style.left = player.offsetLeft + (player.offsetWidth / 2 - distance) + "px";
        app.appendChild(bullet);
        soundFunction;
        let timerId = setInterval(function(){
             let hit = isHit(bullet);
             let hit2 = isHit2(bullet);
             let hit3 = isHit3(bullet);
             if (hit || bullet.offsetTop < 0 || hit2 || hit3){
                 bullet.remove();
                 clearInterval(timerId);
             }
             bullet.style.top = bullet.offsetTop - 10 + 'px';
         }, 100);
    }

    /**
     * ==========================================================
     *          Функція влучання в ворога (перевірка влучання)
     * ==========================================================
     */
    function isHit (bullet){
        let enemies = document.querySelectorAll('.enemy');
        for (let i = 0; i < enemies.length; i++) {
            enemy = enemies[i];

        if (enemy != null && !enemy.classList.contains('boom')) {
        let top = bullet.offsetTop > enemy.offsetTop && bullet.offsetTop < enemy.offsetTop + enemy.offsetHeight;
        let left = bullet.offsetLeft > enemy.offsetLeft && bullet.offsetLeft < enemy.offsetLeft + enemy.offsetWidth;
        
        if (top && left) {
            let enemySkin = enemy.className;
      if (enemySkin == 'enemy skin1'){    //в залежності від скіна ворога змінюєм ефект вибуху
          enemy.className = 'enemy boom';
      }
      else if (enemySkin == 'enemy skin2'){
          enemy.className = 'enemy boom2';
      }
      else if (enemySkin == 'enemy skin3'){
          enemy.className = 'enemy boom3';
      }
          
            boomSound();
            score.innerText = Number(score.innerText) + 1;
            speedUp(); // збільшення швидкості руху після 10 вбитих ворогів;
            removeEnemy(enemy);
            randomEnemy();  // випадкова кількість ворогів після збиття;
            return true;
            }
          }
        }
            return false;
    }

    /**
     *  ========================================
        Функція перевірки влучання по астероіду
        ========================================
     */
    function isHit2 (bullet){
        let asteroids = document.querySelectorAll('.asteroid');
        for (let i = 0; i < asteroids.length; i++) {
            asteroid = asteroids[i];
        if (asteroid != null && !asteroid.classList.contains('boom')) {
        let top = bullet.offsetTop > asteroid.offsetTop && bullet.offsetTop < asteroid.offsetTop + asteroid.offsetHeight;
        let left = bullet.offsetLeft > asteroid.offsetLeft && bullet.offsetLeft < asteroid.offsetLeft + asteroid.offsetWidth;
        
        if (top && left) {
            //console.dir('hit');
            asteroid.className = 'asteroid boom';
            removeAsteroid(asteroid);
            score.innerText = Number(score.innerText) + 1;
            speedUp();
            boomSound();
            return true;
            }
          }
        }
            return false;
    }

    /**
     * =================================================
     *      Функція віднімання та відображення життів
     * =================================================
     */
    function deathPlayer(){
        lifesPlayer--;
            if (lifesPlayer <= 0){
            
                endGame();
            }
        heartsIconPlayer ();
    }

    function heartsIconPlayer(){
        let lifeBlock = document.querySelector('.menu .lifes');
            lifeBlock.innerHTML = "";
            for (let i = 0; i < lifesPlayer; i++){
                let span = document.createElement ('span');
                lifeBlock.appendChild(span);
            }
    }

    /**
     * =========================================================
     *          Функція влучання в бонусне життя та бонус-бомбу
     * =========================================================
     */
            function isHit3(bullet) {
            var bonusHeartPlayer = document.querySelector('.lifesBonus');
            var bonusBomb = document.querySelector('.bonusBomb');
            if (bonusHeartPlayer) {  //перевірка попадання в бонусне серце
              const hit = bullet.offsetTop < (bonusHeartPlayer.offsetTop + bonusHeartPlayer.offsetHeight) 
              && (bullet.offsetTop + bullet.offsetHeight) > bonusHeartPlayer.offsetTop 
              && bullet.offsetLeft < (bonusHeartPlayer.offsetLeft + bonusHeartPlayer.offsetWidth) 
              && (bullet.offsetLeft + bullet.offsetWidth) > bonusHeartPlayer.offsetLeft;
              if (hit) {
                lifesPlayer += 1;
                heartsIconPlayer();
                bonusHeartPlayer.remove();
                heartSound();
                return true;
              }
            }
            if (bonusBomb) { // перевірка попадання в бомбу
                const hit = bullet.offsetTop < (bonusBomb.offsetTop + bonusBomb.offsetHeight) 
                && (bullet.offsetTop + bullet.offsetHeight) > bonusBomb.offsetTop 
                && bullet.offsetLeft < (bonusBomb.offsetLeft + bonusBomb.offsetWidth) 
                && (bullet.offsetLeft + bullet.offsetWidth) > bonusBomb.offsetLeft;
                if (hit) {
                    bonusBomb.className = 'bonusBomb boom';
                    removeAllEnemies();
                    removeBonusBomb(bonusBomb);
                    boomSound();
                  return true;
                }
              }
          }

          