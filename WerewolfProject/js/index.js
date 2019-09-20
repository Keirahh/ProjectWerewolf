var $audioGriffe = new Audio('Audio/sound/sound/bruitage/Griffe.mp3');  //Créer l'objet audio
var audioAmbiance = new Audio('Audio/sound/sound/ambiance/Ambiance.mp3');  //Créer l'objet audio
$(document).ready(function () {
	$("#Griffe").height(30);
});

$(document).on('click','#EnterWolf',function(){
$('#EnterWolf').hide(1000);
$('#Griffe').height(300).show(500).stop().hide(1000);
$('h1').show(0);
$audioGriffe.play();
});

audioAmbiance.play();
audioAmbiance.addEventListener("ended", function(){
audioAmbiance.currentTime = 0;
audioAmbiance.play();
});







