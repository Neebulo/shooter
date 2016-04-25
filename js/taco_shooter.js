$(document).ready(function(){
  //movingShip refers to the one at the bottom.
	var movingShip = $('#shooting_ship');
  //dancingTacoArray refers to the targets.
	var dancingTacoArray = $('.dancingTacos');

  var counter = 0;
	var score = $('#score').html(counter);

  //Sound
	var crunchSound = new Audio("https://www.wavsource.com/snds_2016-03-13_7646817315637486/sfx/can_pop.wav");

// makeTacos function
  var makeTacos = function () {
		for(i = 0; i <= 7; i++){
			//Create a certain number of tacos
			var newTacos = document.createElement("img");
				newTacos.setAttribute("src", "https://media.giphy.com/media/PfWl3zeGVGJq0/giphy.gif");
				$(newTacos).addClass('dancingTacos');
				newTacos.id = ('newTaco' + i);
				document.getElementById("tacos").appendChild(newTacos);

				//Determines left coordinate of each taco.
				newTacos.style.left = (120 * (i+1)) + 'px';

				//Helps access each taco in the tacos div
				//Store an array of taco objects, where each has the taco image as a jquery object and a speed.
				var dancingTacoArray = $('.dancingTacos')
				var tacosArray = []
				tacosArray.push(newTacos)
		}
	};
	makeTacos();

//**** SHIP FUNCTIONS ****
  $(window).mousemove(function(){
  var e = window.event;
  var posX = (e.clientX) - 50;
  var posY = (e.clientY);

  //Make the ship move with the movement of the mouse
  $(movingShip).css({
    left: posX,
  });

  //Stops the shooting ship from going offscreen on left and right sides.
  if(parseInt(movingShip[0].style.left) < 0){
    $(movingShip).css({
      left: 0
    })
  } else if(parseInt(movingShip[0].style.left) >= (window.innerWidth - 100)){
    $(movingShip).css({
      left: (window.innerWidth - 100) + 'px'
    })
  }
});

//**** LASER FUNCTIONS ****

//Laser starts when the user clicks anywhere on the window.
	$(window).click(function(){
	 	var e = window.event;
	 	var newPosX = (e.clientX);
	 	var newPosY = e.clientY;

    //Create a new laser everytime the user clicks on ship.
	 	var newLaser = document.createElement('div')
	 	newLaser.id = "newLaser";
	 	$(newLaser).css('left', newPosX);
	 	$('#body').append(newLaser);

    });

// animateTacos function
  window.onload = function animateTacos(){
  		//Animates the tacos.
  		$('.dancingTacos').css('top', 0).addClass('animated');
  		$('.dancingTacos').each(function () {
  			// Save a random speed for each taco.
  			var speed = 50 + (Math.random() * 100);
  			$(this).data('speed', speed);
  		});

//fallingTacos function
  		var fallingTacos = function(){
  		//Makes all the tacos move down at the same time
  			var test = function(){
  				//Get the top coordinate of the tacos.
  				var movingDown = parseInt($('.dancingTacos').css('top'));
  				//Adds the speed.
  				$('.dancingTacos').each(function () {
  					$(this).css('top', '+=' + $(this).data('speed'));
  				});

  				//If all the tacos go off screen, make them restart at the top.
  				if(movingDown > (window.innerHeight * 1.5)){
  				   $('.dancingTacos').remove();
  					makeTacos();
  					animateTacos();
  			    }

  			}
  			var fallingTacosTimer = window.setInterval(test, 700)
  		}

  	return[fallingTacos()];

  	};



}) // End document ready
