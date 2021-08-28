$(document).ready(function(){
   //EVENTS IN JQUERY
   /*
   $('#btn1').click(function(){
	   alert('Button 1 clicked')
   });
    
   $("#btn2").on('click', function(){
	   
	   alert('Button 2 clicked')
   });
   */
   
   $('#btn1').on('click', function()  {
	  $('.para').innerText().css('color':'red');
   });
   
});