
/**
 * =========================================================================
 *              Функція створення бонуса - серця яке при збитті дадає життя
 * =========================================================================
 */
function createHeartBonus (){
    if (isGameOver) { // якщо гра закінчилась щоб не створювались бонуси
        return;}

    let left = random (150, document.querySelector('body').offsetWidth - 150);
        let bonusHeart = document.createElement ('div');
        bonusHeart.className = "lifesBonus";
        bonusHeart.style.left = left +"px";
        app.appendChild(bonusHeart);
       moveBonusHeart(bonusHeart);
    }

/**
 * =================================
*          Функція руху бонус-серця
* ==================================
 */
    function moveBonusHeart(bonusHeart){
        let timerId = setInterval (function(){
            bonusHeart.style.top = bonusHeart.offsetTop + 10 + "px";
            if(bonusHeart.offsetTop > document.querySelector('body').offsetHeight) {
                clearInterval(timerId);
                bonusHeart.remove();
                }
            }, 100);
        }


/**
 * ===============================================
 *  Функція створення бонусу - вбити всіх ворогів
 * ===============================================
 */
function createBombBonus (){
            if (isGameOver) { // якщо гра закінчилась щоб не створювались бонуси
                return;}
        
            let left = random (150, document.querySelector('body').offsetWidth - 150);
                let bonusBomb = document.createElement ('div');
                bonusBomb.className = "bonusBomb";
                bonusBomb.style.left = left +"px";
                app.appendChild(bonusBomb);
               moveBonusBomb(bonusBomb);
            }
 
/**
 * ==========================
 *  Функція руху бонус-бомби
 * ==========================
 */            

function moveBonusBomb(bonusBomb){
            let timerId = setInterval (function(){
            bonusBomb.style.top = bonusBomb.offsetTop + 10 + "px";
            if(bonusBomb.offsetTop > document.querySelector('body').offsetHeight) {
            clearInterval(timerId);
            bonusBomb.remove(); // при виходу за межі екрану видаляєм елемент
                    }
                }, 100);
            };
/**
 * ================================
 *      Функція руху бомби бонуса
 * ================================
 */
function removeBonusBomb(bonusBomb){
    setTimeout (function () {
        bonusBomb.remove (); //таймер щоб при видаленні встигала пройти анімація взриву бомби
        }, 800);      
    };

