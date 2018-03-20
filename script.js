window.onload =function() {
    var game = document.querySelector('.game');
    var circle = document.getElementById('circle');
    var countPoint = document.getElementById('point');
    var second = document.getElementById('second');
    var levelShow = document.getElementById('levels');
    var start = document.querySelector('#start');
    var startGame = document.querySelector('.start-game');
    var goal = document.querySelector('#goal');
    var level = 0;
    var count = 0;
    var levels = [
        {
            point: 4,
            goal: 4,
            second: 10
        },
        {
            point: 8,
            goal: 8,
            second: 10
        },
        {
            point: 12,
            goal: 12,
            second: 9
        }
    ];

    //--timer --------------------------
  function startTimer() {
      second.innerHTML = 10;
      setTimeout(function timer() {
          second.innerHTML--;
          if (second.innerHTML < 10) {
              second.innerHTML = '0' + second.innerHTML;
          }
          if (second.innerHTML == 0) {
              setTimeout(function () {}, 1000);
              if(count<levels[level].point){
                  gameOver();}
          } else {setTimeout(timer, 1000);}
      }, 1000);
  }
  circle.addEventListener('mouseover', function () {
        var position = randomRun(140, 140, 140);
        this.style.left = position.x + 'px';
        this.style.top = position.y + 'px';
        this.style.background = 'rgb(' + randomColor(0, 256) + ',' + randomColor(0, 256) + ',' + randomColor(0, 256) + ')';
        game.style.background = 'rgb(' + randomColor(0, 256) + ',' + randomColor(0, 256) + ',' + randomColor(0, 256) + ')';
        game.style.transition="100ms ease all";
        count++;
        countPoint.innerHTML = count;

      levelUp();
  });
//
    goal.innerHTML = levels[0].goal;
    function winGame(){
        alert('You win!!');
        second.style.display="none";
        game.style.display="none";
        document.querySelector('.win-game').style.display="block";
    }
    function gameOver(){
        document.querySelector('div.game-over').style.display = "block";
        game.style.display="none";
    }
    function updateInfo(){
        level++;
        count = 0;
        countPoint.innerHTML = count;
        levelShow.innerHTML = level;
        goal.innerHTML = levels[level].goal;
        second.innerHTML = levels[level].second;
        alert('Nice!Go to next level: '+level+"!");
    }
    //level up -----------------------
    function levelUp() {
       if (count >= levels[level].point) {
           if(level == 2 ){winGame()}
              else {updateInfo()}
        }
    }
    //random run small circle in the big circle
    function randomRun(offcetX, offcetY, maxRadius) {
        var alfa = Math.PI * Math.random();
        return {
            x: Math.floor(Math.cos(alfa) * Math.random() * maxRadius) + offcetX,
            y: Math.floor(Math.sin(alfa) * Math.random() * maxRadius) + offcetY
        }
    }

    function randomColor(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var box = document.getElementsByClassName('box');
    var boxLenght = box.length;
    if(boxLenght) {
        for(var i=0; i<boxLenght;i++){
            box[i].addEventListener('mouseover', function () {
                this.style.background = 'rgb(' + randomColor(0, 256) + ',' + randomColor(0, 256) + ',' + randomColor(0, 256) + ')';
                this.style.transition ="600ms ease all";
                this.style.boxShadow = '1px 2px 30px 1px white'
            });
            box[i].addEventListener('mouseout', function () {
                this.style.boxShadow = 'none'
            });
        }
    }
    start.addEventListener('click',function(){
      startTimer();
        startGame.style.display = "none";
        game.style.display = "block";
        document.querySelector('div.goals').style.display ="block";
        document.querySelector('div.levels').style.display = "block";
        document.querySelector('div.clock').style.display = "block";
        document.querySelector('div.points').style.display = "block";
    });
};