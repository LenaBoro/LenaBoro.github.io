
var text = ['Hi! I develop web applications HTML, CSS, JAVASCRIPT, NODE JS.'];
var id = document.getElementById('about');
var speed = 80;
function writeTextByJS(id, text, speed){
	    var txt = text.join("").split("");
    	var interval = setInterval(function(){
    		if(!txt[0]){
    			return clearInterval(interval);
    		};
    		id.innerHTML += txt.shift();
    	}, speed != undefined ? speed : 100);

    	return false;
};
writeTextByJS(id,text,speed)

  var facebook = document.querySelector('.facebook');
  var github = document.querySelector('.github');
  var telegramm = document.querySelector('.telegram');
  var body = document.querySelector('body');

function face(){
  facebook.onmouseover = function(event){
    event.target.style.color = 'white';
    event.target.style.fontSize = '1.5em';
    body.style.boxShadow = '0 -344px 611px -182px #48c6ef inset'
    body.style.background ='#6f86d6'
  }
  facebook.onmouseout = function(event){
    event.target.style.fontSize = '';
    event.target.style.color = '';
    body.style.transition ='all 1s ease'
    body.style.background = '';
    body.style.boxShadow = 'none'

  }
}; face();
function git(){
  github.onmouseover = function(event){
    event.target.style.color = 'white';
    body.style.transition ='all 1s ease';
    event.target.style.fontSize = '1.5em';
    body.style.boxShadow = '0 -344px 611px -182px #5fb357 inset';
    body.style.background = '#FF0B05';
    
  }
  github.onmouseout = function(event){
    event.target.style.fontSize = '';
    event.target.style.color = '';
    body.style.transition ='all 1s ease';	  
    body.style.background = '';
    body.style.boxShadow = 'none';
  }
};git();
function teleg(){
  telegramm.onmouseover = function(event){
    event.target.style.color = 'white';
    event.target.style.fontSize = '1.5em';
    body.style.transition ='all 1s ease';	 
    body.style.boxShadow = '0 -344px 611px -182px #FFF605 inset';
    body.style.background = '#5F07A6';
   }
  telegramm.onmouseout = function(event){
    event.target.style.fontSize = '';
    event.target.style.color = '';
    body.style.transition ='all 1s ease';	  
    body.style.background = '';
    body.style.boxShadow = 'none';
   }
};teleg();
