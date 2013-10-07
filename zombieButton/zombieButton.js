window.onload = function() {
    markup();

var bigFatButton = document.getElementById("bigFatButton");
// Første Event
    //IE fallback
       if (!bigFatButton.addEventListener) {
            bigFatButton.onmouseover = function() {
                alert("Nej! - Stop!");
                soundManager.load('scareSound');
                this.onmouseover = null;
                }
        } // Resten af browserne...
        else {                             
        bigFatButton.addEventListener('mouseover',function () {
	                    ///this will execute only once 
                          alert('Nej! - Stop!');
                          soundManager.load('scareSound');
                          this.removeEventListener('mouseover', arguments.callee);
                    },false);
       }
// Anden Event
        //IE fallback
    var setClick = false;
        if(!bigFatButton.addEventListener) {
            bigFatButton.onclick = function() {
                if (setClick === false) {
                alert("Sidste chance! - Du kommer til at fortryde det!");
                setClick = true;
                }
                else if (setClick === true){
                scare();
                this.onclick = null;
                }
            }
        } //Resten af browserne...
            bigFatButton.addEventListener('click',function () { 
                    ///this will execute only once
                      alert('Sidste chance! - Du kommer til at fortryde det!');
                      this.removeEventListener('click', arguments.callee);
                      
                // Tredje Event             
                bigFatButton.addEventListener('click',function () {
                        ///this will execute only once
                          scare();
                          this.removeEventListener('click', arguments.callee);
                          
                    },false);    
             
                },false); 
}

function markup() {
    var widthOfWindow = Math.min(jQuery(window).width());
    var heightOfWindow = Math.min(jQuery(window).height());
    //==== HTML ====//
    jQuery('body').append(	"<div id='lightBoxScare' onclick='closeScare()'>" +
						"</div><div id='imageContainer'><img src='http://placekitten.com/800/800' /></div>");
    jQuery("body").append('<div id="bigFatButton" style="width: 300px; height: 300px; border-radius: 150px; background-color:#5300ED;"><p>BIG FAT BUTTON</p></div>');
    
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
							"margin" : "0 0 0 -400px", //Træk halvdelen af boksen fra
							"display" : "none",
							"zIndex" : "500",
							});
    jQuery('#bigFatButton').css({
                            "width" : "300",
							"height" : "300",
							"border-radius" : "150px",
							"background-color" : "#5300ED",
                            });

    jQuery('#bigFatButton p').css({
                            "float" : "left",
							"margin-top" : "134px",
							"margin-left" : "80px",
                            });
}

soundManager.setup({
          url: '/small_games/swf/',
          onready: function() {
            var mySound = soundManager.createSound({
              id: 'scareSound',
              url: '/small_games/3733.mp3',
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