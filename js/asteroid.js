//console.dir("test");
/***
 * 1. Зробити рух астероїда - готово
 * 2. зробити збиття астероїду - готово
 *  - додати ефект вибуху - готово
 * 3. Зробити поворот астероїда - готово
 * 
 */

function createAsteroid(){
    if (isGameOver) {
        return;
    };
    let left = random (150, document.querySelector('body').offsetWidth - 150);
    let asteroid = document.createElement ('div');
        asteroid.className = "asteroid";
        asteroid.style.left = left +"px";

    
    app.appendChild(asteroid);
    moveAsteroid(asteroid); 
}
setTimeout
function moveAsteroid(asteroid){
    let rotate = 45;
    let timerId = setInterval (function(){
        asteroidSpeed = speedEnemy - 5;
        asteroid.style.top = asteroid.offsetTop + asteroidSpeed + "px";
        asteroid.style.transform = "rotate("+ rotate + "deg)";
        if (asteroid.className != "asteroid boom"){
        rotate = rotate + 5;}
        if(asteroid.offsetTop > document.querySelector('body').offsetHeight) {
            removeAsteroid (asteroid);
            clearInterval(timerId);
            deathPlayer();
        }
    }, 100);
}

function removeAsteroid (asteroid) {
            setTimeout (function () {
                asteroid.remove ();
            }, 800);
            setTimeout(createAsteroid, 2000);
}

/**
 * ===========================
 *  Створення планет
 * ===========================
 * 
 */
function createPlanet (){
    let skin = 'skin-' + random(1,4);
    let planet = document.createElement('div');
    planet.className = 'planet ' + skin;
    planet.style.left = random(100, document.querySelector('body').offsetWidth) + "px";
    app.appendChild(planet);

    let timerId = setInterval(function(){
        
        planet.style.top = planet.offsetTop + 10 + "px";
        if (planet.offsetTop > document.querySelector('body').offsetHeight) {
            planet.remove();
            clearInterval(timerId);
            setTimeout(function(){
            createPlanet();
            }, random(100, 1000))
        }

    }, 10)
}
//setTimeout(function(){
//    createPlanet();
//}, 0);

