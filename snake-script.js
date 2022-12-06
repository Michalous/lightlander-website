document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('container')
    var currentScore = document.getElementById('score')
    for (var i = 0; i < 100; i++) {
        const newDiv = document.createElement('div')
        //newDiv.innerHTML = i
        newDiv.classList.add('square')
        newDiv.dataset.no = i
        container.appendChild(newDiv)
    }
    
    document.addEventListener('touchstart', handleTouchStart, false);        
    document.addEventListener('touchmove', handleTouchMove, false);

    var j = 54
    var x = 1
    var snakeArray = [54]
    var star = null
    var score = 0

    var myInterval = setInterval(function() {
        currentScore.innerHTML = score
        var availableSquares = []
        var square = document.querySelectorAll('.square')
        square.forEach(element => {
            element.classList.remove('active')
        })
        
        snakeArray.unshift(j)
        snakeArray.pop()

        for (var i = 0; i < 100; i++) {
            if (snakeArray.indexOf(i) == -1) {
                availableSquares.push(i)
            }
        }

        
        document.onkeydown = checkKey
        
        for (var i = 0; i < snakeArray.length; i++) {
        document.querySelector(`[data-no="${snakeArray[i]}"]`).classList.add('active')
        }

        checkStarEaten()
        boundary()
        pickStar(availableSquares)
        j += x
        gameOver()
        
        //if (j == 3) {
        //    clearInterval(myInterval)
        //}
    }, 250)
    function gameOver() {
        if (snakeArray.indexOf(j) != -1) {
            clearInterval(myInterval)
            document.getElementById('end_game').classList.add('show')
            document.getElementById('play_again').onclick = function() {
                location.reload()
            }
        }
    }
    

    

    function checkKey(e) {
        e = e || window.event;
        
        if (e.keyCode == '38') {
            // up arrow
            if (x != 10) {
                x = - 10
            }
        }
        else if (e.keyCode == '40') {
            // down arrow
            if (x != -10) {
                x = 10
            }
        }
        else if (e.keyCode == '37') {
           // left arrow
           if (x != 1) {
                x = -1
           }
        }
        else if (e.keyCode == '39') {
           // right arrow
           if (x != -1) {
                x = 1
           }
        }
    }

    function boundary() {
        if (x == 1 && (j - 9) % 10 == 0) {
            j -= 10
        }
        if (x == -1 && j % 10 == 0) {
            j += 10
        }
        if (x == -10 && j < 10) {
            j += 100
        }
        if (x == 10 && j > 89) {
            j -= 100
        }
    }

    function pickStar(availableSquares) {
        if (star == null) {
            star = availableSquares[Math.round(Math.random() * availableSquares.length)]
            document.querySelector(`[data-no="${star}"]`).classList.add('star')
        }
    }

    function checkStarEaten() {
        if (star == j) {
            document.querySelector(`[data-no="${star}"]`).classList.remove('star')
            snakeArray.unshift(star)
            star = null
            score++
        }
    }

    

    // Touch devices 
    var xDown = null;                                                        
    var yDown = null;                                                        

    function handleTouchStart(evt) {                                         
        xDown = evt.touches[0].clientX;                                      
        yDown = evt.touches[0].clientY;   
    };                                                

    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
           return;
        }

        var xUp = evt.touches[0].clientX;                                    
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                /* left swipe */ 
                //alert("left swipe");
                if (x != 1) {
                x = -1
                }
            } else {
                /* right swipe */
                //alert("right swipe");
                if (x != -1) {
                    x = 1
                }
            }                       
        } else {
            if ( yDiff > 0 ) {
                /* up swipe */
                //alert("up swipe")
                if (x != 10) {
                    x = -10
                } 
            } else { 
                /* down swipe */
                //alert("down swipe")
                if (x != -10) {
                    x = 10
                }
            }                                                                 
        }
        /* reset values */
        xDown = null;
        yDown = null;                                             
    };

})