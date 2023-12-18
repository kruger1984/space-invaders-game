/*
===============================
  Функція створення ворогів
===============================
*/
function createEnemy (){
if (isGameOver) {
    return;
}

let left = random (150, document.querySelector('body').offsetWidth - 150);
let enemy = document.createElement ('div');
    enemy.className = "enemy skin" + random(1,3);
    enemy.style.left = left +"px";
    app.appendChild(enemy);
    moveEnemy(enemy);
}

/**
 * ===================================
 *    функція руху ворогів
 * ===================================
 */
function moveEnemy(enemy){
    let timerId = setInterval (function(){
        enemy.style.top = enemy.offsetTop + speedEnemy + "px";
        if(enemy.offsetTop > document.querySelector('body').offsetHeight) {
            removeEnemy (enemy);
            clearInterval(timerId);
            deathPlayer();
            }
        }, 100);
    }

/**
 * ===================================
 *    функція видалення ворогів
 * ===================================
 */

function removeEnemy (enemy) {
            setTimeout (function () {
                enemy.remove ();
            }, 800);      
        }

/**===================================================================
 *    функція створення випадкової кількості ворогів від min до мах
 * ===================================================================
 */
function randomEnemy() {
    const iterations = random(1,3); // Визначення випадкової кількості ітерацій циклу
    for (let i = 0; i < iterations; i++) {  // Цикл з поміткою для кожної ітерації
      setTimeout(() => { 
        createEnemy();
      }, i * 10000); // Інтервал таймера поступово збільшується на 5 секунд для кожної ітерації циклу
    }
  };


  /* =================================
  *    Функція видалення всіх ворогів
  * =================================
  */

 function removeAllEnemies() {
   let enemies = document.querySelectorAll('.enemy');
   let asteroids = document.querySelectorAll('.asteroid');
   
   for (let i = 0; i < enemies.length; i++) {
     let enemy = enemies[i];
       enemy.className = 'enemy boom';
       removeEnemy(enemy);
       score.innerText = Number(score.innerText) + 1;
       boomSound();
       
   }
   
   for (let i = 0; i < asteroids.length; i++) {
     let asteroid = asteroids[i];
       asteroid.className = 'asteroid boom';
       removeAsteroid(asteroid);
       score.innerText = Number(score.innerText) + 1;
       boomSound();
   }
 }