var $audioJour = new Audio('../Audio/sound/sound/ambiance/jour.mp3');  //Créer l'objet audio
var $audioNuit = new Audio('../Audio/sound/sound/ambiance/nuit.mp3');  //Créer l'objet audio



			//son play and pause...
			var pauseJour = true;
			var pauseNuit = true;


			$('#imageJour').click(function(){
				
				if(pauseJour){
					$audioJour.play();
					pauseJour = false;
				}
				else{
					$audioJour.pause();
					pauseJour= true;
				}

			});

			$('#imageNuit').click(function(){
				
				if(pauseNuit){
					$audioNuit.play();
					pauseNuit = false;
				}
				else{
					$audioNuit.pause();
					pauseNuit = true;
				}

			});