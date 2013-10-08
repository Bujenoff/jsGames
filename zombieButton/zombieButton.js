window.onload = function() {
    markup();

var bigFatButton = document.getElementById("bigFatButton");

            bigFatButton.onmouseover = function() {
                this.style.backgroundImage = "url('img/state2.png')";
                soundManager.load('scareSound');
                this.onmouseover = null;
                }

    var setClick = 0;
            bigFatButton.onclick = function() {
                if (setClick === 0) {
                this.style.backgroundImage = "url('img/state3.png')";
                setClick++;
                }
                else if (setClick === 1){
                this.style.backgroundImage = "url('img/state4.png')";
                setClick++;
                }
                else if (setClick === 2) {
                this.style.backgroundImage = "url('img/state5.png')";
                setClick++;
                }
                else if (setClick === 3){
                this.style.backgroundImage = "url('img/state6.png')";
                setClick++;
                }
                else if (setClick === 4){
                this.style.backgroundImage = "url('img/state7.png')";
                setClick++;
                }
                else if (setClick === 5){
                this.style.backgroundImage = "url('img/state8.png')";
                setClick++;
                }
                else if (setClick === 6){
                this.style.backgroundImage = "url('img/state9.png')";
                setClick++;
                }
                else if (setClick === 7){
                this.style.backgroundImage = "url('img/state10.png')";
                setClick++;
                }
                else if (setClick === 8){
                this.style.backgroundImage = "url('img/state11.png')";
                setClick++;
                }
                else if (setClick === 9){
                this.style.backgroundImage = "url('img/state12.png')";
                setClick++;
                }
                else if (setClick === 10){
                this.style.backgroundImage = "url('img/state13.png')";
                setClick++;
                }
                else if (setClick === 11){
                this.style.backgroundImage = "url('img/state14.png')";
                setClick++;
                }
                else if (setClick === 12){
                this.style.backgroundImage = "url('img/state16.png')";
                setClick = 0;
                scare();
                }
            }
}

function markup() {
    var widthOfWindow = Math.min(jQuery(window).width());
    var heightOfWindow = Math.min(jQuery(window).height());
    //==== HTML ====//
    jQuery('body').append(	"<div id='lightBoxScare' onclick='closeScare()'>" +
						"</div><div id='imageContainer'><img src='img/state15.png' /></div>");
    jQuery("body").append('<div id="bigFatButton"></div>');
    
    //==== CSS ====//
    jQuery('#lightBoxScare').css({
							"position" : "absolute",
							"background" : "#000",
							"width" : widthOfWindow + "px",
							"height" : heightOfWindow + "px",
							"top" : "0",
							"left" : "0",
							"opacity" : "0.7",
							"MozOpacity" : "0.50",
							"display" : "none",
							"zIndex" : "400",
							});
    jQuery('#imageContainer').css({
							"position" : "absolute",
							"top" : "80px",
							"left" : "50%",
							"margin" : "0 0 0 -512px", //Træk halvdelen af boksen fra
							"display" : "none",
							"zIndex" : "500",
							});
    jQuery('#bigFatButton').css({
                            "width" : "170",
							"height" : "170",
							"background-image" : "url(img/state1.png)",
                            });

    jQuery('#bigFatButton p').css({
                            "float" : "left",
							"margin-top" : "134px",
							"margin-left" : "80px",
                            });
}

soundManager.setup({
          url: '/jsGames/zombieButton/swf/',
          onready: function() {
            var mySound = soundManager.createSound({
              id: 'scareSound',
              url: '/jsGames/zombieButton/scream.mp3',
            });
          },
    defaultOptions: {
    // set global default volume for all sound objects
    volume: 100
  }

        });

function scare() {

soundManager.play('scareSound', {
    onplay: function(){
        jQuery('#lightBoxScare').css({
							"display" : "block",
							});
        jQuery('#imageContainer').css({
							"display" : "block",
							});
    }
});
}

function closeScare(){
	
	//==== CSS ====//
	jQuery('#lightBoxScare').css({
							"display" : "none",
							});
    jQuery('#imageContainer').css({
							"display" : "none",
							});
}