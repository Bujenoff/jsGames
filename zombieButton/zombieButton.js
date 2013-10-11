window.onload = function() {
    markup();
    preloader();

var bigFatButton = document.getElementById("bigFatButton");

            bigFatButton.onmouseover = function() {
                this.style.backgroundPosition = "-470px -120px";
                soundManager.load('scareSound');
                console.log(this);
                this.onmouseover = null;
                }

    var setClick = 0;
            bigFatButton.onclick = function() {
                if (setClick === 0) {
                this.style.backgroundPosition = "-470px -2px";
                setClick++;
                }
                else if (setClick === 1){
                this.style.backgroundPosition = "-314px -120px";
                setClick++;
                }
                else if (setClick === 2) {
                this.style.backgroundPosition = "-314px -2px";
                setClick++;
                }
                else if (setClick === 3){
                this.style.backgroundPosition = "-158px -120px";
                setClick++;
                }
                else if (setClick === 4){
                this.style.backgroundPosition = "-158px -2px";
                setClick++;
                }
                else if (setClick === 5){
                this.style.backgroundPosition = "-2px -120px";
                setClick++;
                }
                else if (setClick === 6){
                this.style.backgroundPosition = "-2px -2px";
                setClick++;
                }
                else if (setClick === 7){
                this.style.backgroundPosition = "-1094px -2px";
                setClick++;
                }
                else if (setClick === 8){
                this.style.backgroundPosition = "-938px -2px";
                setClick++;
                }
                else if (setClick === 9){
                this.style.backgroundPosition = "-782px -120px";
                setClick++;
                }
                else if (setClick === 10){
                this.style.backgroundPosition = "-782px -2px";
                setClick++;
                }
                else if (setClick === 11){
                this.style.backgroundPosition = "-626px -120px";
                setClick++;
                }
                else if (setClick === 12){
                this.style.backgroundPosition = "-626px -2px";
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
						"</div><div id='imageContainer'><img src='img/scare.png' /></div>");
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
                            "display" : "inline-block",
                            "overflow" : "hidden",
                            "background-repeat" : "no-repeat",
                            "background-image" : "url(img/tp-sprite.png)",
                            "background-position" : "-938px -120px",
                            "width" : "154px",
                            "height" : "116px"
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

function preloader() {
	if (document.images) {
		var img1 = new Image();

		img1.src = "img/tp-sprite.png";

	}
}

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