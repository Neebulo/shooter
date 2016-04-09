$(document).ready(function(){
  //movingShip refers to the one at the bottom.
	var movingShip = $('#shooting_ship');
  //dancingTacoArray refers to the targets.
	var dancingTacoArray = $('.dancingTacos');

  var counter = 0;
	var score = $('#score').html(counter);

  //Sound
	var crunchSound = new Audio("http://www.wavsource.com/snds_2016-03-13_7646817315637486/sfx/can_pop.wav");

}
